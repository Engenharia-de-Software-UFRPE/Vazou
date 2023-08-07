from datetime import datetime
from django.db import models
from django.utils import timezone
from rest_framework import serializers

# Create your models here.
class Empresa(models.Model):
    C1 = 'Moda'
    C2 = 'Alimentos'
    C3 = 'Rede Social'
    C4 = 'Educação'
    C5 = 'Saúde'
    C6 = 'Financeiro'
    C7 = 'Entretenimento'


    CATEGORY = [
       (C1, 'Moda'),
       (C2, 'Alimentos'),
       (C3, 'Rede Social'),
       (C4, 'Educação'),
       (C5, 'Saúde'),
       (C6, 'Financeiro'),
       (C7, 'Entretenimento')
    ]

    #ID
    #foto
    tradeName = models.CharField('Nome Fantasia', max_length=100)
    corporateName = models.CharField('Razão Social', max_length=100)
    abstract = models.TextField('Resumo', max_length=300)
    categoria = models.CharField(choices=CATEGORY, max_length=100)
    score = models.DecimalField('Score',max_digits = 4, decimal_places = 2 , default=0)    

    class Meta:
      db_table = 'empresa'

class Noticia(models.Model):
    
    title = models.TextField('Título', max_length=120, unique=True)
    subtitle = models.TextField('Subtítulo', max_length=200, unique=True)
    text = models.TextField('Texto', max_length=3000)
    creation_date = models.DateTimeField('Data de criação', default=timezone.now)
    edit_date = models.DateTimeField('Última edição', default=timezone.now)
    company = models.ForeignKey(Empresa, on_delete=models.CASCADE, related_name='noticias_empresa')
    # ImagemTopo
    # ImagemTexto

    class Meta:
      db_table = 'noticia'

class Denuncia(models.Model):
   
   title = models.CharField('Título da denúncia', max_length=200, unique=True)
   name_company = models.CharField('Nome da empresa', max_length=50)
   text = models.TextField('Texto', max_length=3000)
   dateTime = models.DateTimeField('Data e hora', default=datetime.now, blank=True)
   company = models.ForeignKey(Empresa, on_delete=models.CASCADE, related_name='acoes_empresa')

   class Meta:
      db_table = 'denuncia'

class Acao(models.Model):
   
   title = models.CharField('Título da ação', max_length=200, unique=True)
   text = models.TextField('Texto', max_length=3000)
   dateTime = models.DateTimeField('Data e hora', default=datetime.now, blank=True)

   class Meta:
      db_table = 'acao'

class EmpresaSerializer(serializers.ModelSerializer):
   class Meta:
      model = Empresa
      fields = '__all__'

class NoticiaSerializer(serializers.ModelSerializer):
   class Meta:
      model = Noticia
      fields = '__all__'
      related_company = "empresa"

