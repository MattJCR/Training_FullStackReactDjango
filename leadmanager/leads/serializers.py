# Documentacion del serializer: https://www.django-rest-framework.org/api-guide/serializers/
from rest_framework import serializers
from leads.models import Lead

class LeadSerializer(serializers.ModelSerializer):
    #Dentro de meta añadir...
    class Meta:
        #Modelo a serializar
        model = Lead
        #Campos que se vana  serializar del modelo
        fields = '__all__'
