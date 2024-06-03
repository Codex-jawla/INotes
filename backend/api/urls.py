from rest_framework import routers
from django.urls import path,include
from . import views

# from api.views import registerViewSet

urlpatterns = [
   path('',views.getroutes,name='getroutes'),
   path('notes',views.getNotes,name='getnotes'),
   path('notes/<str:pk>/',views.getNote,name='getnote'),
   path('notes/<str:pk>/update',views.updateNote,name='update'),
   path('notes/<str:pk>/delete',views.deleteNote,name='delete'),
   path('notes/create',views.createNote,name='create'),

]