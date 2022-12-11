from django.contrib import admin

# Register your models here.

from .models import *
admin.site.register(Artist)
admin.site.register(Genres)
admin.site.register(Education)
admin.site.register(Skill)
admin.site.register(Experience)
admin.site.register(Profile)
admin.site.register(Project)
admin.site.register(Certifications)
admin.site.register(Honors)
admin.site.register(Languages)

