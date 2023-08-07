import json
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest

from .models import *

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the index.")

def rec_report(request):
    if request.method == 'POST':
        report = json.loads(request.body)

        denuncia = Denuncia.objects.create(title = report['title'],
                                            name_company = report['name_company'],
                                            text = report['text'])
        
        denuncia.save()
        return HttpResponse(status=201)
    
    return HttpResponseBadRequest()

# Necessário configuração de login (validação)
def rec_noticia(request):
    if request.method == 'POST':
        report = json.loads(request.body)

        noticia = Noticia.objects.create(title = report['title'],
                                            subtitle = report['subtitle'],
                                            text = report['text'])
        
        noticia.save()
        return HttpResponse(status=201)
    
    return HttpResponseBadRequest()