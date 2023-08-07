from rest_framework import generics
import json
from .models import *
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest


from .models import Denuncia

# Create your views here.
class ListaEmpresa(generics.ListCreateAPIView):
    listaEmp = Empresa.objects.all()
    serializer_class = EmpresaSerializer

    def get_object(self):
        return self.listaEmp.get(pk=id)
    
    def get_categoria(self):
        return self.listaEmp.filter(Empresa.categoria)


def index(request):
    return HttpResponse("Hello, world. You're at the index.")

def rec_report(request):
    if request.method == 'POST':
        report_data = json.loads(request.body)

        denuncia = Denuncia.objects.create(title = report_data['title'],
                                            name_company = report_data['name_company'],
                                            text = report_data['text'])
        
        denuncia.save()
        return HttpResponse(status=201)
    
    return HttpResponseBadRequest()