from .serializer import *
from .models import *
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response

# @renderer_classes((TemplateHTMLRenderer, JSONRenderer))
@api_view(['GET'])
def getroutes(request):

    route=[
        {
            'Endpoint' : '/notes/',
            'method' : 'GET',
            'body' : None,
            'description' : 'return an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'return a single notes'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body':""},
            'description': 'create an new note'
        },
        {
            'Endpoint' : '/notes/id/update/',
            'method' : 'PUT',
            'body' : {'body':""},
            'description' : 'create an existing note'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'delete an existing note'
        }
    ]

    return Response(route)

@api_view(['GET'])
def getNotes(request):
    notes = Notes.objects.all().order_by('-updated_on')
    serializer_class = notesSerializer(notes,many=True)
    return Response(serializer_class.data)

@api_view(['GET'])
def getNote(request,pk):
    notes = Notes.objects.get(id = pk)
    serializer_class = notesSerializer(notes,many=False)
    return Response(serializer_class.data)

@api_view(['PUT'])
def updateNote(request,pk):
    data = request.data
    notes = Notes.objects.get(id = pk)
    serializer_class = notesSerializer(instance=notes,data=data)

    if serializer_class.is_valid():
        serializer_class.save()
    return Response(serializer_class.data)


@api_view(['DELETE'])
def deleteNote(request,pk):
    notes = Notes.objects.get(id = pk)
    notes.delete()
    return Response('note deleted successfully')

@api_view(['POST'])
def createNote(request):
    data =request.data
    note = Notes.objects.create(
        body = data['body']
    )
    serializer = notesSerializer(note,many=False)
    return Response(serializer.data)