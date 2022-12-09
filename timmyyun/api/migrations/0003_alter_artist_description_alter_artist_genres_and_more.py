# Generated by Django 4.1.4 on 2022-12-09 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_artist_genres'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artist',
            name='description',
            field=models.CharField(blank=True, max_length=5000, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='genres',
            field=models.ManyToManyField(blank=True, null=True, to='api.genres'),
        ),
        migrations.AlterField(
            model_name='artist',
            name='playcount',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]