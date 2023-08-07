from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    #path('Empresa/<int:pk>', views.index, name='index'),
]