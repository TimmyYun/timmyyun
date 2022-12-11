from django.db import models

# Create your models here.


class Genres(models.Model):
    name = models.CharField(max_length=30, unique=True)
    url = models.CharField(max_length=50)

    class Meta:
        db_table = "genres"


class Artist(models.Model):
    name = models.CharField(max_length=30, unique=True)
    listeners = models.BigIntegerField(blank=True)
    mbid = models.CharField(max_length=36, blank=True)
    url = models.CharField(max_length=50, blank=True, unique=True)
    streamable = models.CharField(max_length=25, blank=True)
    image_url = models.CharField(max_length=100, blank=True)

    description = models.CharField(max_length=5000, blank=True, null=True)
    playcount = models.BigIntegerField(blank=True, null=True)
    genres = models.ManyToManyField(Genres, blank=True)

    myplaycount = models.BigIntegerField(blank=True, null=True)

    class Meta:
        db_table = "artist"


class Education(models.Model):
    name = models.CharField(max_length=100, blank=True)
    degree = models.CharField(max_length=100, blank=True)
    fieldOfStudy = models.CharField(max_length=100, blank=True)
    startDate = models.DateField(blank=True)
    endDate = models.DateField(blank=True, null=True)
    description = models.CharField(max_length=1000, blank=True)
    current = models.BooleanField(blank=True, default=False)
    location = models.CharField(max_length=50, blank=True)

    class Meta:
        db_table = "education"


class Skills(models.Model):
    name = models.CharField(max_length=20, primary_key=True)

    class Meta:
        db_table = "skills"


class Experience(models.Model):
    companyName = models.CharField(max_length=50, blank=True)
    website = models.CharField(max_length=50, blank=True)
    title = models.CharField(max_length=50, blank=True)
    employmentType = models.CharField(max_length=50, blank=True)
    location = models.CharField(max_length=50, blank=True)
    startDate = models.DateField(blank=True)
    endDate = models.DateField(blank=True, null=True)
    current = models.BooleanField(blank=True, default=False)
    industry = models.CharField(max_length=50, blank=True)
    skills = models.CharField(max_length=100, blank=True, null=True)
    description = models.CharField(max_length=1000, blank=True)

    class Meta:
        db_table = "experience"


class Profile(models.Model):
    name = models.CharField(max_length=100, blank=True)
    surname = models.CharField(max_length=100, blank=True)
    title = models.CharField(max_length=100, blank=True)
    currentJob = models.ForeignKey(
        Experience, blank=True, null=True, on_delete=models.CASCADE)
    currentEducation = models.ForeignKey(
        Education, blank=True, null=True, on_delete=models.CASCADE)
    description = models.CharField(max_length=1000, blank=True)
    location = models.CharField(max_length=50, blank=True)
    socialmedia = models.CharField(max_length=150, blank=True)
    email = models.CharField(max_length=30, blank=True)
    proneNumber = models.CharField(max_length=30, blank=True)

    class Meta:
        db_table = "profile"


class Projects(models.Model):
    name = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=1000, blank=True)
    skills = models.ManyToManyField(Skills, blank=True)

    class Meta:
        db_table = "projects"


class Certifications(models.Model):
    name = models.CharField(max_length=100, blank=True)
    organization = models.CharField(max_length=100, blank=True)
    issueDate = models.DateField(blank=True)
    credentialID = models.CharField(max_length=100, blank=True, null=True)
    credentialURL = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        db_table = "certifications"


class Honors(models.Model):
    name = models.CharField(max_length=100, blank=True)
    date = models.DateField()

    class Meta:
        db_table = "honors"


class Languages(models.Model):
    name = models.CharField(max_length=25, blank=True, primary_key=True)
    status = models.CharField(max_length=25, blank=True)

    class Meta:
        db_table = "languages"
