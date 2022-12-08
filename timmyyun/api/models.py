from django.db import models

# Create your models here.


class Queries(models.Model):
    ''


class Artist(models.Model):
    name = models.CharField(max_length=30)
    listeners = models.BigIntegerField()
    mbid = models.CharField(max_length=36)
    url = models.CharField(max_length=50)
    streamable = models.CharField(max_length=25)
    image_url = models.CharField(max_length=100)

    class Meta:
        db_table = 'artist'
