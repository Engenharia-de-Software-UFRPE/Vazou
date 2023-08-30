from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    
    #URL Index
    path('', views.index, name='index'),

    #URLs de Empresa
    path('empresas/', views.ListaEmpresa.as_view(), name='ListaEmpresa'),
    path('empresas/criar', views.CreateEmpresa.as_view(), name='CreateEmpresa'),
    path('empresas/<int:pk>', views.DeleteUpdateEmpresa.as_view(), name='DeleteUpdateEmpresa'),

    #URLs de Ações
    path('acoes/', views.ListaAcoes.as_view(), name='ListaAcoes'),
    path('acoes/criar', views.CreateAcao.as_view(), name='CreateAcao'),
    path('acoes/<int:pk>', views.DeleteUpdateAcao.as_view(), name="DeleteUpdateAcao"),

    #URLs de Notícias
    path('noticias/', views.ListaNoticia.as_view(), name='ListaNoticia'),
    path('noticias/criar', views.CreateNoticia.as_view(), name='CreateNoticia'),
    path('noticias/<int:pk>', views.DeleteUpdateNoticia.as_view(), name='UpdateNoticia'),
    path('noticias/recentes', views.ListaNoticia.as_view(), name='listar_noticias_recentes'),

    
    path('api-auth/', include('rest_framework.urls')),
    path('denuncia', views.rec_report, name='rec_report'),
    path('send_email', views.send_email, name='send_email'),
    
    #URLs de Senha
    path('reset_password/', auth_views.PasswordResetView.as_view(), name="reset_password"),
    path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(), name="password_reset_done"),
    path('reset/<uidb64>/<token>', auth_views.PasswordResetConfirmView.as_view(), name="password_reset_confirm"),
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(), name="password_reset_complete"),

    #URLs de Analista
    path('analistas/', views.AnalistaList.as_view(), name='analista-list'),
    path('analistas/criar', views.CreateAnalista.as_view(), name='analista-create'),
    path('analistas/<int:pk>', views.DeleteUpdateAnalista.as_view(), name="DeleteUpdateAnalista"),
]