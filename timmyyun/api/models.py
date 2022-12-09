from django.db import models

# Create your models here.


class Genres(models.Model):
    name = models.CharField(max_length=30, unique=True)
    url = models.CharField(max_length=50)
    class Meta:
        db_table = 'genres'


class Artist(models.Model):
    name = models.CharField(max_length=30, unique=True)
    listeners = models.BigIntegerField(blank=True)
    playcount = models.BigIntegerField(blank=True)
    mbid = models.CharField(max_length=36, blank=True)
    url = models.CharField(max_length=50, blank=True)
    streamable = models.CharField(max_length=25, blank=True)
    image_url = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=5000, blank=True)
    genres = models.ManyToManyField(Genres)

    class Meta:
        db_table = 'artist'
