var input=document.getElementsByClassName('formulario_input');
for(var i=0;i<input.length;i++) {
    input[i].addEventListener('keyup',function ()   {
        if(this.value.length >1)    {
            next.elementSibling.classList.add('fijar')
        }else{
            next.elementSibling.classList.remove('fijar')
        }
    })
}