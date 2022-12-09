from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),

    # Artist
    path('artist/', views.getArtists, name="Artists"),
    path('artist/<str:pk>/', views.getArtist, name="Artist"),

]
