from rest_framework import status
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, throttle_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny

from django.contrib.contenttypes.models import ContentType
from django.contrib.auth.decorators import login_required, permission_required

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User, Group, Permission
from api.models import *
from api.serializers import *
from api.logging import *
import requests
import json
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle
from rest_framework.views import APIView

# Routes

API_KEY = "b763bfe1e59fe50ddb8c76103b96437a"

@api_view(["GET"])
def getRoutes(request):
    routes = [
        {
            "artist/",
        }
    ]
    return Response(routes)

# Description


def addDescription(name):
    artist = Artist.objects.filter(name__iexact=name)[0]
    artist_details_url = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo"

    PARAM = {"artist": name,
             "api_key": API_KEY,
             "format": "json"
             }

    r = requests.get(url=artist_details_url, params=PARAM)
    log("artist.getinfo", f"{name} {str(r)}")
    data = r.json()

    information = {"name": name,
                   "playcount": data["artist"]["stats"]["playcount"],
                   "description": data["artist"]["bio"]["content"]
                   }

    serializer = ArtistSerializer(
        instance=artist, data=information)

    if serializer.is_valid():
        serializer.save()

    return serializer

# Artist


def addArtist(name):
    artist_search_url = "http://ws.audioscrobbler.com/2.0/?method=artist.search"
    PARAM = {"api_key": API_KEY,
             "format": "json",
             "limit": "5",
             "artist": name}
    r = requests.get(url=artist_search_url, params=PARAM)
    log("artist.search", f"{name} {str(r)}")
    data = r.json()
    id = []
    for subject in data["results"]["artistmatches"]["artist"]:
        information = {"name": subject["name"],
                       "listeners": subject["listeners"],
                       "mbid": subject["mbid"],
                       "url": subject["url"],
                       "streamable": subject["streamable"],
                       "image_url": subject["image"][1]["#text"]}
        serializer = ArtistSerializer(data=information)
        if serializer.is_valid():
            serializer.save()
            id.append(serializer.data["id"])
    return id


@api_view(["GET", "POST"])
@throttle_classes([UserRateThrottle])
def getArtists(request):
    """
    List all artists, or create a new artist.
    """
    if request.method == "GET":
        artist = Artist.objects.all()
        serializer = ArtistSerializer(artist, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        serializer = ArtistSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
@throttle_classes([UserRateThrottle])
def getArtist(request, pk):
    """
    Retrieve, update or delete an artist.
    """
    pk = pk.replace("-", " ")

    log("getArtist", f"{request.method} {pk}")

    artist = Artist.objects.filter(name__iexact=pk)

    if request.method == "GET":
        """
        Artist does not exist
        """
        if len(artist) == 0:
            ids = addArtist(pk)

            artist = Artist.objects.filter(name__iexact=pk)

            if len(artist) == 0:
                artists = Artist.objects.filter(id__in=ids)
                artists_serializer = ArtistSerializer(artists, many=True)
                return Response({"Similar": artists_serializer.data})

            artist_serializer = ArtistSerializer(artist[0], many=False)
            ids.remove(artist_serializer.data["id"])
            artists = Artist.objects.filter(id__in=ids)
            if len(ids) == 0:
                return Response({"Artist": artist_serializer.data})

        else:
            artist_serializer = ArtistSerializer(artist[0], many=False)
            artist_id = artist_serializer.data["id"]
            artists = Artist.objects.filter(
                name__icontains=pk).exclude(id=artist_id)

        artists_serializer = ArtistSerializer(artists, many=True)

        if artist_serializer.data["description"] is None:
            artist_serializer = addDescription(pk)
            return Response({
                "Artist": artist_serializer.data,
                "Similar": artists_serializer.data
            })
        return Response({
            "Artist": artist_serializer.data,
            "Similar": artists_serializer.data
        })

    if request.method == "PUT":
        serializer = ArtistSerializer(
            instance=artist, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "DELETE":
        artist.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Profile


@api_view(["GET", "POST"])
def getProfile(request):
    if request.method == "GET":
        profile = Profile.objects.all()
        serializer = ProfileSerializer(profile, many=True)
        return Response(serializer.data)

# Education


@api_view(["GET", "POST"])
def getEducation(request):
    if request.method == "GET":
        education = Education.objects.all()
        serializer = EducationSerializer(education, many=True)
        return Response(serializer.data)

# Experience


@api_view(["GET", "POST"])
def getExperience(request):
    if request.method == "GET":
        experience = Experience.objects.all()
        serializer = ExperienceSerializer(experience, many=True)
        return Response(serializer.data)

# Project


@api_view(["GET", "POST"])
def getProjects(request):
    if request.method == "GET":
        project = Project.objects.all()
        serializer = ProjectSerializer(project, many=True)
        return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
def getProject(request, pk):
    """
    Retrieve, update or delete a project.
    """
    try:
        project = Project.objects.get(id=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProjectSerializer(project, many=False)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = ProjectSerializer(
            instance=project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)










# Skill


@api_view(["GET", "POST"])
def getSkill(request):
    if request.method == "GET":
        skill = Skill.objects.all()
        serializer = SkillSerializer(skill, many=True)
        return Response(serializer.data)

# Certifications


@api_view(["GET", "POST"])
def getCertifications(request):
    if request.method == "GET":
        certifications = Certifications.objects.all()
        serializer = CertificationsSerializer(certifications, many=True)
        return Response(serializer.data)

# Honors


@api_view(["GET", "POST"])
def getHonors(request):
    if request.method == "GET":
        honors = Honors.objects.all()
        serializer = HonorsSerializer(honors, many=True)
        return Response(serializer.data)

# Languages


@api_view(["GET", "POST"])
def getLanguages(request):
    if request.method == "GET":
        languages = Languages.objects.all()
        serializer = LanguagesSerializer(languages, many=True)
        return Response(serializer.data)
