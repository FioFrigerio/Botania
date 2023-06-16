 var nombre = document.getElementById('nombre');
 var apellido = document.getElementById('Apellido');
 var Telefono = document.getElementById('fono');
 var email = document.getElementById('email');
 var password = document.getElementById('password');
 var error = document.getElementById('error')
error.style.color = 'red';
function enviarFormulario()
    console.log('guardado correctamente');

    var mensajesError = [];

    if(nombre.value === null || nombre.value ===''){
        mensajesError.push('ingresa tu nombre');
    }

    if(apellido.value === null || apellido.value ===''){
        mensajesError.push('ingresa tu apellido');
    }


    if(password.value === null || password.value ==='' || password.value.length < 6 ){
        mensajesError.push('ingresa tu contraseña');
    }


    if(email.value === null || email.value === ''){
        mensajesError.push('ingresa tu correo electronico');
    }else{
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email.value)){
            mensajesError.push('Ingresa un correo electrónico válido');
        }

    }


    if(Telefono.value === null || Telefono.value ===''){
        mensajesError.push('ingresa tu numero de telefono');
    }else{
        var telefonoRegex = /^[9]{1}[0-9]{8}$/;
        if(!telefonoRegex.test(Telefono.value)){
            mensajesError.push('ingresa un numero de telefono valido (Ejemplo: 912345678)');
        }
    }

       error.innerHTML = mensajesError.join(', ');

    return false;

