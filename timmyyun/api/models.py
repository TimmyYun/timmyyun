from django.db import models

# Create your models here.


class Queries(models.Model):
    ''


class Artist(models.Model):
    name = models.CharField(max_length=30, unique=True)
    listeners = models.BigIntegerField(blank=True)
    mbid = models.CharField(max_length=36, blank=True)
    url = models.CharField(max_length=50, blank=True)
    streamable = models.CharField(max_length=25, blank=True)
    image_url = models.CharField(max_length=100, blank=True)

    class Meta:
        db_table = 'artist'
