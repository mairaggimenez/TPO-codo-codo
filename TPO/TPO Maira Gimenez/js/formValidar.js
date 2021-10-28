var nombre=document.getElementById(nombre);
var email=document.getElementById(email);
var asunto=document.getElementById(asunto);
var erro=document.getElementById(erro);
error.style.color='red';

function enviarFormulario ()    {
    console.log ('Enviando formulario...');
    enviarFormulario();
   
    var mensajesError=[];
    
    if(nombre.value==null || nombre.value=='')    {
        mensajesError.push('Ingrese el nombre');
    }

    if(email.value==null || email.value=='')    {
        mensajesError.push('Ingrese el email');
    }

    if(asunto.value===null || asunto.value==='')    {
        mensajesError.push('Ingrese el asunto');
    }

    error.innerHTML=mensajesError.join(' , ');

}

