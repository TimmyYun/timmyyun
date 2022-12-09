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
            "diseasetype/",
            "country/",
            "disease/",
            "discover/",
            "user/",
            "publicservant/",
            "doctor/",
            "specialize/",
            "record/"
        }
    ]
    return Response(routes)

# Artist


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
def getArtist(request, pk):
    """
    Retrieve, update or delete an artist.
    """
    try:
        artist = Artist.objects.get(name=pk)
    except Artist.DoesNotExist:
        artist_search_url = "http://ws.audioscrobbler.com/2.0/?method=artist.search"
        PARAM = {"api_key": API_KEY,
                 "format": "json",
                 "limit": "5",
                 "artist": pk}
        data = requests.get(url=artist_search_url, params=PARAM).json()
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
        try:
            artists = Artist.objects.filter(name__icontains=pk)
            serializer = ArtistSerializer(artists, many=True)
            return Response(serializer.data)
        except Artist.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = ArtistSerializer(artist, many=False)
        return Response(serializer.data)

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
