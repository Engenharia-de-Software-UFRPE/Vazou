from rest_framework import generics
import json
from .models import *
from .serializers import *
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
class ListaEmpresa(generics.ListAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer

    def list(self, request):
        req = self.request
        categ = req.query_params.get('categoria', None)
        queryset = Empresa.objects.all()

        if categ:
            queryset = Empresa.objects.filter(categoria = categ)
        serializer = EmpresaSerializer(queryset, many = True)
        return Response(serializer.data)

#View de cada empresa por id
@api_view(['GET'])    
def empresaDetail(request, pk):
        empresa = Empresa.objects.get(id=pk)
        serializer = EmpresaSerializer(empresa, many=False)
        return Response(serializer.data)


class CreateEmpresa(generics.CreateAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer
    permission_classes = [IsAdminUser] 

# class UpdateEmpresa(generics.UpdateAPIView):
#     queryset = Empresa.objects.all()
#     serializer_class = EmpresaSerializer
#     #permission_classes = [IsAdminUser] 

#     lookup_field = 'pk'
#     def perform_update(self, serializer):
#         instance = serializer.save()

class ListaNoticia(generics.ListAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer

class CreateNoticia(generics.CreateAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer
    permission_classes = [IsAuthenticated]

def index(request):
    return HttpResponse("Hello, world. You're at the index.")

class ListaDenuncia(generics.ListCreateAPIView):
    queryset = Denuncia.objects.all()
    serializer_class = DenunciaSerializer

    def get_object(self):
        return self.listaNot.get(pk=id)

class ListaAcoes(generics.ListAPIView):
    queryset = Acao.objects.all()
    serializer_class = AcaoSerializer


class CreateAcao(generics.CreateAPIView):
    querystet = Acao.objects.all()
    serializer_class = AcaoSerializer
    permission_classes = [IsAuthenticated]

    def list(self, request):
        req = self.request
        comp = req.query_params.get('company', None)
        queryset = Acao.objects.all()

        if comp:
            queryset = Acao.objects.filter(company = comp)
        serializer = AcaoSerializer(queryset, many = True)
        return Response(serializer.data)

@api_view(['GET'])
def AcoesEmpresa(request, company):
    acoes = Acao.objects.filter(company=company)
    serializer = AcaoSerializer(acoes, many=True)
    return Response(serializer.data)

@csrf_exempt
def rec_report(request):
    if request.method == 'POST':
        report_data = json.loads(request.body)

        denuncia = Denuncia.objects.create(title = report_data['title'],
                                            name_company = report_data['name_company'],
                                            text = report_data['text'])
        
        denuncia.save()
        return HttpResponse("Denuncia criada com sucesso",status=201)
    
    return HttpResponseBadRequest()

@csrf_exempt
def send_email(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        receiver = data.get('receiver', [])

        if name and subject and message and email and receiver:
            send_mail(subject, f"Nome: {name}\nEmail: {email}\n\n{message}", email, receiver)
            return JsonResponse({'status': 'Email enviado com sucesso.'})
        else:
            return JsonResponse({'error': 'Dados incompletos ou inválidos.'}, status=400)

    return JsonResponse({'error': 'Método não permitido.'}, status=405)