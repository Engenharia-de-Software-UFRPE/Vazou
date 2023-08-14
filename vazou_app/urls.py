from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('empresas/', views.ListaEmpresa.as_view(), name='ListaEmpresa'),
    path('noticias/', views.ListaNoticias.as_view(), name='ListaNoticias'),
    #path('Empresa/<int:pk>', views.index, name='index'),
    #path('api-auth/', include('rest_framework.urls')),
    #path('noticia/', views.rec_noticia, name='rec_noticia')
    #path('denuncia/', views.re, name='rec_request')
]