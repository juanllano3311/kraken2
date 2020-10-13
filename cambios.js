let nombrecompleto = document.getElementById("nombrecomple");
let numedocu = document.getElementById("numdocumento");
let usuario = document.getElementById("usu");
let contraseña = document.getElementById("contra");
let correo = document.getElementById("correoele");
let numcontacto = document.getElementById("numcontac");
let direccion = document.getElementById("dire");
let ciudad = document.getElementById("ciu");    
let botonregsitro = document.getElementById("registro");


botonregsitro.addEventListener("click", ValidarFormulario);

function ValidarFormulario(evento) {
    evento.preventDefault();
    if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
   
    else if(nombrecompleto.value!="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value!="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value!="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value!=""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");a
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value!="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value!="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value!="" && contraseña.value!="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value!="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value!="" && direccion.value!=""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value!="" && usuario.value!="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value!="" && contraseña.value!="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value!="" && contraseña.value!="" && correo.value!="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value!="" && numcontacto.value!="" && direccion.value!=""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value!="" && usuario.value!="" && contraseña.value!="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value!="" && contraseña.value!="" && correo.value!="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value!="" && contraseña.value!="" && correo.value!="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value!="" && correo.value!="" && numcontacto.value!="" && direccion.value!=""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value!="" && usuario.value!="" && contraseña.value!="" && correo.value!="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value!="" && contraseña.value!="" && correo.value!="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value!="" && contraseña.value!="" && correo.value!="" && numcontacto.value!="" && direccion.value!=""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value!="" && usuario.value!="" && contraseña.value!="" && correo.value!="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value!="" && contraseña.value!="" && correo.value!="" && numcontacto.value!="" && direccion.value!=""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value!="" && usuario.value!="" && contraseña.value!="" && correo.value!="" && numcontacto.value!="" && direccion.value!=""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value=="" && usuario.value!="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value=="" && usuario.value=="" && contraseña.value!="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value!="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value!=""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value!="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value=="" && contraseña.value!="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value=="" && contraseña.value=="" && correo.value!="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value!=""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value=="" && usuario.value!="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value!="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value!="" && contraseña.value=="" && correo.value!="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value!="" && contraseña.value=="" && correo.value=="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value!="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value!=""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value=="" && usuario.value=="" && contraseña.value!="" && correo.value=="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value!="" && correo.value!="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value!="" && correo.value=="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value!="" && correo.value=="" && numcontacto.value=="" && direccion.value!=""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value!="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value=="" && contraseña.value=="" && correo.value!="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value!="" && contraseña.value=="" && correo.value!="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value!="" && correo.value!="" && numcontacto.value=="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value!="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value!="" && numcontacto.value=="" && direccion.value!=""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value!="" && contraseña.value=="" && correo.value=="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value!="" && correo.value=="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value!="" && numcontacto.value!="" && direccion.value==""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.remove("is-invalid");
        direccion.classList.add("is-invalid");
    }
    else if(nombrecompleto.value!="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value!=""){
        nombrecompleto.classList.remove("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value!="" && usuario.value=="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value!=""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.remove("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value!="" && contraseña.value=="" && correo.value=="" && numcontacto.value=="" && direccion.value!=""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.remove("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value!="" && correo.value=="" && numcontacto.value=="" && direccion.value!=""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.remove("is-invalid");
        correo.classList.add("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.remove("is-invalid");
    }
    else if(nombrecompleto.value=="" && numedocu.value=="" && usuario.value=="" && contraseña.value=="" && correo.value!="" && numcontacto.value=="" && direccion.value!=""){
        nombrecompleto.classList.add("is-invalid");
        numedocu.classList.add("is-invalid");
        usuario.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        numcontacto.classList.add("is-invalid");
        direccion.classList.remove("is-invalid");
    }
}