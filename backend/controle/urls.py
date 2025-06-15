from django.urls import path
from . import views

urlpatterns = [
    path('rele/ligar/', views.ligar_rele),
    path('rele/desligar/', views.desligar_rele),
]
