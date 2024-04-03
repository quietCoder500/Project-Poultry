from django.utils import timezone
from django.contrib.auth.models import Group, User
from .models import Note
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.utils.text import slugify
from .serializer import NoteSerializer

class NoteListApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs) -> Response:
        """
        List all the Note items for given requested user
        """
        Notes = Note.objects.filter(author=request.user.id)
        serializer = NoteSerializer(Notes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs) -> Response:
        """
        Create the Note with given Note data
        """
        data = {
            "title": request.data.get("title"),
            "slug": slugify(request.data.get("title")),
            "body": request.data.get("body"),
            "created_at": timezone.now(),
            "updated_at": timezone.now(),
            "author": request.user.id
        }
        serializer = NoteSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class NoteDetailApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, Note_id, user_id) -> Note | None:
        """
        Helper method to get the object with given Note_id, and user_id
        """
        try:
            return Note.objects.get(id=Note_id, author=user_id)
        except Note.DoesNotExist:
            return None

    # 3. Retrieve
    def get(self, request, pk, *args, **kwargs) -> Response:
        """
        Retrieves the Note with given Note_id
        """
        Note_instance = self.get_object(pk, request.user.id)
        if not Note_instance:
            return Response(
                {"res": "Object with Note id does not exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = NoteSerializer(Note_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 4. Update
    def put(self, request, pk, *args, **kwargs) -> Response:
        """
        Updates the Note item with given Note_id if exists
        """
        Note_instance = self.get_object(pk, request.user.id)
        if not Note_instance:
            return Response(
                {"res": "Object with Note id does not exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        serializer = NoteSerializer(
            instance=Note_instance, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # 5. Delete
    def delete(self, request, pk, *args, **kwargs) -> Response:
        """
        Deletes the Note item with given Note_id if exists
        """
        Note_instance = self.get_object(pk, request.user.id)
        if not Note_instance:
            return Response(
                {"res": "Object with Note id does not exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        Note_instance.delete()
        return Response({"res": "Object deleted!"}, status=status.HTTP_200_OK)