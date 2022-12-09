# Generated by Django 4.1.4 on 2022-12-09 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Genres',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, unique=True)),
                ('url', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'genres',
            },
        ),
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, unique=True)),
                ('listeners', models.BigIntegerField(blank=True)),
                ('playcount', models.BigIntegerField(blank=True)),
                ('mbid', models.CharField(blank=True, max_length=36)),
                ('url', models.CharField(blank=True, max_length=50)),
                ('streamable', models.CharField(blank=True, max_length=25)),
                ('image_url', models.CharField(blank=True, max_length=100)),
                ('description', models.CharField(blank=True, max_length=5000)),
                ('genres', models.ManyToManyField(to='api.genres')),
            ],
            options={
                'db_table': 'artist',
            },
        ),
    ]
