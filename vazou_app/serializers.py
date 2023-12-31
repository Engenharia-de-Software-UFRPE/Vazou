from rest_framework import serializers
from vazou_app.models import *

class EmpresaSerializer(serializers.ModelSerializer):
   class Meta:
      model = Empresa
      fields = '__all__'

class NoticiaSerializer(serializers.ModelSerializer):

   class Meta:
      model = Noticia
      fields = '__all__'
      related_object = "noticias_empresa"

class DenunciaSerializer(serializers.ModelSerializer):
   class Meta:
      model = Denuncia
      fields = '__all__'

class AcaoSerializer(serializers.ModelSerializer):
    
    class Meta:
      model = Acao
      fields = '__all__'
      related_object = "acoes_empresa"

class AnalistaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analista
        fields = '__all__'