"""
Serializers define the API representation.
"""
from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('id', 'title', 'body', 'tags',)
        read_only_fields = ('author', 'created_at', 'updated_at', 'family')
        depth = 1
