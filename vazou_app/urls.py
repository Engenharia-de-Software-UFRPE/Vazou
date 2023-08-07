from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api-auth/', include('rest_framework.urls')),
    #path('noticia/', views.rec_noticia, name='rec_noticia')
    #path('denuncia/', views.re, name='rec_request')
]