from django.contrib import admin
from unfold.admin import ModelAdmin

from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models import Family, Note, Tag, UserProfile


admin.site.unregister(User)

@admin.register(User)
class UserAdmin(BaseUserAdmin, ModelAdmin):
    pass


@admin.register(Note)
class NoteAdmin(ModelAdmin):
    pass

@admin.register(Family)
class NoteAdmin(ModelAdmin):
    pass

@admin.register(Tag)
class NoteAdmin(ModelAdmin):
    pass

@admin.register(UserProfile)
class NoteAdmin(ModelAdmin):
    pass
