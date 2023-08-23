from django.test import TestCase
from rest_framework.test import APIClient, APIRequestFactory
from django.contrib.auth.models import User
from rest_framework import status
from django.urls import reverse
import json
from .models import Empresa
from .views import *

class EmpresaAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_lista_empresa(self):
        response = self.client.get(reverse('ListaEmpresa'))
        self.assertEqual(response.status_code, 200)

    def test_criar_empresa(self):
        data = {
            "tradeName": "Empresa de Teste",
            "corporateName:": "Tech",
            "abstract": "Teste",
            "categoria": "Tecnologia",
            "score": 1            
        }
        response = self.client.post(reverse('CreateEmpresa'), data, format='json')
        self.assertEqual(response.status_code, 403)  # Ou outro código dependendo da configuração de permissões

class NoticiaAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_lista_noticia(self):
        response = self.client.get(reverse('ListaNoticia'))
        self.assertEqual(response.status_code, 200)

    def test_criar_noticia(self):
        data = {
            "title": "Título da Notícia",
            "subtitle": "Subtítulo da Notícia",
            "text": "Texto da notícia"            
        }
        response = self.client.post(reverse('CreateNoticia'), data, format='json')
        self.assertEqual(response.status_code, 403)

class DenunciaAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_rec_report(self):
        data = {
            "title": "Título da Denúncia",
            "name_company": "Empresa de Teste",
            "text": "Texto da denúncia"
            # Adicione outros campos conforme necessário
        }
        response = self.client.post(reverse('rec_report'), json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 201)

class AcaoAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_lista_acoes(self):
        response = self.client.get(reverse('ListaAcoes'))
        self.assertEqual(response.status_code, 200)

    def test_criar_acao(self):
        data = {
            "title": "Título da Ação",
            "text": "Texto da ação"            
        }
        response = self.client.post(reverse('CreateAcao'), data, format='json')
        self.assertEqual(response.status_code, 403)

class TestEmpresaDetail(TestCase):
    def setUp(self):
        #self.factory = APIRequestFactory()
        self.client = APIClient()
        # Crie uma instância de Empresa para usar nos testes
        self.empresa = Empresa.objects.create(tradeName='Empresa de Teste', categoria='Tecnologia')

    def test_empresa_detail(self):
        #request = self.factory.get(f'/empresa/{self.empresa.pk}')
        #response = empresaDetail(request, pk=self.empresa.pk)
        response = self.client.get(f'/empresa/{self.empresa.pk}')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['tradeName'], 'Empresa de Teste')
        self.assertEqual(response.data['categoria'], 'Tecnologia')

class TestDeleteUpdateAcao(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.acao = Acao.objects.create(title='Ação de Teste', text='Descrição da ação')
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.client.login(username='testuser', password='testpass')  # Autentica o usuário

    def test_atualizar_acao(self):
        data = {'title': 'Novo Titulo', 'text': 'Nova Descrição'}
        response = self.client.put(reverse('DeleteUpdateAcao', kwargs={'pk': self.acao.pk}), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.acao.refresh_from_db()
        self.assertEqual(self.acao.title, 'Novo Titulo')
        self.assertEqual(self.acao.text, 'Nova Descrição')

    def test_deletar_acao(self):
        response = self.client.delete(reverse('DeleteUpdateAcao', kwargs={'pk': self.acao.pk}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Acao.objects.filter(pk=self.acao.pk).exists())