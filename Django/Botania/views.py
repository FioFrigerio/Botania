from django.shortcuts import render
from .models import Usuario

# Create your views here.

def index (request):
    usuario = Usuario.objects.all()
    context = {
        'usuario':usuario
    }

    return render (request,'pages/index.html', context)