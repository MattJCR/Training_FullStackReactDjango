#Documentacion de viewset: https://www.django-rest-framework.org/api-guide/viewsets/
from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

#Definiciones de las funcionalidades de la api Get y POST
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer
