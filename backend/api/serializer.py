from rest_framework import serializers
from .models import Notes

class notesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = '__all__'
