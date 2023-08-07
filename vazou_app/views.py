import json
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest

from .models import Denuncia

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