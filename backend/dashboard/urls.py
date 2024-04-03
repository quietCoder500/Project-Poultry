from django.urls import include, path
from dashboard import views

urlpatterns = [
    path('notes/', views.NoteListApiView.as_view()),
    path('notes/<int:pk>/', views.NoteDetailApiView.as_view()),
]