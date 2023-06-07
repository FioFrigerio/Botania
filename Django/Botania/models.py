from django.db import models

# Create your models here.

class Usuario(models.Model):
    # rut - Nombre - AppPaterno - appMaterno - fecha Nacimiento
    # correo - telefono - direccion
    rut = models.CharField(max_length=10, primary_key=True)
    nombre = models.CharField(max_length=50, blank=False, null=False)
    appPaterno = models.CharField(max_length=30, blank=False, null=False)
    appMaterno = models.CharField(max_length=30, blank=False, null=False)
    fechaNacimiento = models.DateField(blank=False, null=False)
    telefono = models.CharField(max_length=10, blank=False, null=False)
    direccion = models.CharField(max_length=50, blank=False, null=False)

    def __str__(self):
        return str(self.nombre)+" "+str(self.appPaterno)+" "+str(self.appMaterno)