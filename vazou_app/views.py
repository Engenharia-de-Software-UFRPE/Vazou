from rest_framework import generics
import json
from .models import *
from .serializers import *
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from rest_framework.permissions import IsAuthenticated, IsAdminUser, DjangoModelPermissions
from rest_framework.response import Response
from rest_framework.decorators import api_view

#Views de Empresa
class ListaEmpresa(generics.ListAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer

    def list(self, request):
        req = self.request
        categ = req.query_params.get('categoria', None)
        ident = req.query_params.get('id', None)
        queryset = Empresa.objects.all()

        if categ:
            queryset = Empresa.objects.filter(categoria = categ)
        if ident:
            queryset = Empresa.objects.filter(id = ident)
        serializer = EmpresaSerializer(queryset, many = True)
        return Response(serializer.data)

class CreateEmpresa(generics.CreateAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer
    #permission_classes = [DjangoModelPermissions] 

class DeleteUpdateEmpresa(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EmpresaSerializer
    queryset = Empresa.objects.all()
    #permission_classes = [IsAuthenticated]

#Views de Notícia
class ListaNoticia(generics.ListAPIView):
    serializer_class = NoticiaSerializer

    def list(self, request):
        req = self.request
        comp = req.query_params.get('company', None)
        ident = req.query_params.get('id', None)
        queryset = Noticia.objects.all()

        if comp:
            queryset = Noticia.objects.filter(company = comp)
        if ident:
            queryset = Noticia.objects.filter(id = ident)
        serializer = NoticiaSerializer(queryset, many = True)
        return Response(serializer.data)
    
    def get_queryset(self):
        queryset = Noticia.objects.all()
        empresa_id = self.kwargs.get('empresa_id')
        if empresa_id:
            queryset = queryset.filter(company_id=empresa_id)
        return queryset.order_by('-creation_date')[:5]

class CreateNoticia(generics.CreateAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer
    #permission_classes = [IsAuthenticated]

class DeleteUpdateNoticia(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NoticiaSerializer
    queryset = Noticia.objects.all()
    #permission_classes = [IsAuthenticated]


#Index
def index(request):
    return HttpResponse("Hello, world. You're at the index.")


#Views de Denuncia
class ListaDenuncia(generics.ListAPIView):
    queryset = Denuncia.objects.all()
    serializer_class = DenunciaSerializer

    def list(self, request):
        req = self.request
        comp = req.query_params.get('company', None)
        ident = req.query_params.get('id', None)
        queryset = Denuncia.objects.all()

        if comp:
            queryset = Denuncia.objects.filter(company = comp)
        if ident:
            queryset = Denuncia.objects.filter(id = ident)
        serializer = DenunciaSerializer(queryset, many = True)
        return Response(serializer.data)

class CreateDenuncia(generics.CreateAPIView):
    queryset = Denuncia.objects.all()
    serializer_class = DenunciaSerializer
    #permission_classes = [IsAuthenticated]

class DeleteUpdateDenuncia(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = DenunciaSerializer
    queryset = Denuncia.objects.all()
    #permission_classes = [IsAuthenticated]




#Views de Ação
class ListaAcoes(generics.ListAPIView):
    queryset = Acao.objects.all()
    serializer_class = AcaoSerializer

    def list(self, request):
        req = self.request
        comp = req.query_params.get('company', None)
        ident = req.query_params.get('id', None)
        queryset = Acao.objects.all()

        if comp:
            queryset = Acao.objects.filter(company = comp)
        if ident:
            queryset = Acao.objects.filter(id = ident)
        serializer = AcaoSerializer(queryset, many = True)
        return Response(serializer.data)

class CreateAcao(generics.CreateAPIView):
    queryset = Acao.objects.all()
    serializer_class = AcaoSerializer
    permission_classes = [IsAuthenticated]
   
class DeleteUpdateAcao(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AcaoSerializer
    queryset = Acao.objects.all()
    permission_classes = [IsAuthenticated]



    
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



#Views de Analista
class AnalistaList(generics.ListAPIView):
    queryset = Analista.objects.all()
    serializer_class = AnalistaSerializer
    permission_classes = [IsAuthenticated]

class CreateAnalista(generics.CreateAPIView):
    queryset = Analista.objects.all()
    serializer_class = AnalistaSerializer
    permission_classes = [DjangoModelPermissions]

class DeleteUpdateAnalista(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AnalistaSerializer
    queryset = Analista.objects.all()
    permission_classes = [DjangoModelPermissions]

class AnalistaDetail(generics.RetrieveAPIView):
    queryset = Analista.objects.all()
    serializer_class = AnalistaSerializer