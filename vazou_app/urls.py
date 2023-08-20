from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('accounts/login/', admin.site.urls),
    path('', views.index, name='index'),

    path('empresas/', views.ListaEmpresa.as_view(), name='ListaEmpresa'),
    path('empresa/criar', views.CreateEmpresa.as_view(), name='CreateEmpresa'),
    path('empresa/<str:pk>', views.empresaDetail, name='Empresa'),
    #path('empresa/update/<str:pk>', views.UpdateEmpresa.as_view(), name='UpdateEmpresa'),

    path('acoes/', views.ListaAcoes.as_view(), name='ListaAcoes'),
    path('create/acoes', views.CreateAcao.as_view(), name='CreateAcao'),
    path('acoes/<str:company>', views.AcoesEmpresa, name='AcoesEmpresa'),


    path('noticias/', views.ListaNoticia.as_view(), name='ListaNoticia'),
    path('noticia/criar', views.CreateNoticia.as_view(), name='CreateNoticia'),

    #path('Empresa/<int:pk>', views.index, name='index'),
    path('api-auth/', include('rest_framework.urls')),
    path('denuncia', views.rec_report, name='rec_report'),
    path('send_email', views.send_email, name='send_email'),
    
    path('reset_password/', auth_views.PasswordResetView.as_view(), name="reset_password"),
    path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(), name="password_reset_done"),
    path('reset/<uidb64>/<token>', auth_views.PasswordResetConfirmView.as_view(), name="password_reset_confirm"),
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(), name="password_reset_complete")
]