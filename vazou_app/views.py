from rest_framework import generics
import json
from .models import *
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest
from .models import *

# Create your views here.
class ListaEmpresa(generics.ListCreateAPIView):
    listaEmp = Empresa.objects.all()
    serializer_class = EmpresaSerializer

    def get_object(self):
        return self.listaEmp.get(pk=id)
    
    def get_categoria(self):
        return self.listaEmp.filter(Empresa.categoria)
        
    def get_selo(self):
        return self.listaEmp.filter(Empresa.score)
    
    def get_more_score_emp(self):
        queryset = self.listaEmp.order_by('-score')
        serializer = self.serializer_class(queryset, many=True)
        return serializer.data

class ListaNoticias(generics.ListCreateAPIView):
    listaNot = Noticia.objects.all()
    serializer_class = NoticiaSerializer

    def get_object(self):
        return self.listaNot.get(pk=id)
    
    def get_one_recent_not(self):
        queryset = self.listaNot.order_by('-creation_date').first()
        serializer = self.serializer_class(queryset, many=True)
        return serializer.data
    
    def get_recents_not(self):
        queryset = self.listaNot.order_by('-creation_date')
        serializer = self.serializer_class(queryset, many=True)
        return serializer.data
    
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

# Necessário configuração de login (validação)
def rec_noticia(request):
    if request.method == 'POST':
        news_data = json.loads(request.body)

        noticia = Noticia.objects.create(title = news_data['title'],
                                            name_company = news_data['name_company'],
                                            text = news_data['text'])
        
        noticia.save()
        return HttpResponse(status=201)
    
    return HttpResponseBadRequest()