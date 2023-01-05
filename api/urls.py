from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),

    # Artist
    path('artist/', views.getArtists, name="Artists"),
    path('artist/<str:pk>/', views.getArtist, name="Artist"),

    # Profile
    path('profile/', views.getProfile, name="Profile"),

    # Education
    path('education/', views.getEducation, name="Education"),

    # Experience
    path('experience/', views.getExperience, name="Experience"),

    # Project
    path('project/', views.getProjects, name="Projects"),
    path('project/<str:pk>/', views.getProject, name="Project"),
    # Skill
    path('skill/', views.getSkill, name="Skill"),

    # Certifications
    path('certifications/', views.getCertifications, name="Certifications"),

    # Honors
    path('honors/', views.getHonors, name="Honors"),

    # Languages
    path('languages/', views.getLanguages, name="Languages"),


]
