//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

const pattern = new RegExp('^[a-zñ! ]+$');


function encriptar()
{
    //optiene el texto a procesar
    let setencia= document.getElementById("texto").value;
    
    if (setencia=="") {
        alert("No se ha ingresado algún texto");
        reiniciarConfiguracion();
        
    } else {
        if(!pattern.test(setencia))
        {
            alert("Texto Invalido, este programa solo acepta letras minúsculas y sin acentos");
            reiniciarConfiguracion();
        }else
        {
            //encripta en orden
            setencia=setencia.replaceAll("e","enter");
            setencia=setencia.replaceAll("i","imes");
            setencia=setencia.replaceAll("a","ai");
            setencia=setencia.replaceAll("o","ober");
            setencia=setencia.replaceAll("u","ufat");
    
            //manda el texto encriptado a mostrar
            mostrarMensaje(setencia)
        }
    }
    
}



function desencriptar()
{
    //optiene el texto a procesar
    let setencia= document.getElementById("texto").value;
    if (setencia=="") {
        alert("No se ha ingresado algún texto");
        reiniciarConfiguracion();
        
    } else {
        if(!pattern.test(setencia))
        {
            alert("Texto Invalido, este programa solo acepta letras minúsculas y sin acentos");
            reiniciarConfiguracion();
        }else
        {
           //desencripta en orden
            setencia=setencia.replaceAll("enter","e");
            setencia=setencia.replaceAll("imes","i");
            setencia=setencia.replaceAll("ai","a");
            setencia=setencia.replaceAll("ober","o");
            setencia=setencia.replaceAll("ufat","u");

            //manda el texto desencriptado a mostrar
            mostrarMensaje(setencia)
        }
    }  
}


function mostrarMensaje(setencia){ 
   document.getElementById("imagenJoven").style.display="none";
   document.getElementById("imagenTexto").style.display="none";
   let oracion= document.getElementById('oracionProcesada');
   oracion.innerText=setencia;
   document.getElementById("botonCopiar").removeAttribute('disabled');
} 


function reiniciarConfiguracion()
{
    document.getElementById("imagenJoven").style.display="block";
    document.getElementById("imagenTexto").style.display="block";
    let oracion= document.getElementById('oracionProcesada');
    oracion.innerText="";
    document.getElementById("botonCopiar").setAttribute('disabled',true);

}

function copiar()
{
    let oracion= document.getElementById('oracionProcesada').textContent;
    document.getElementById('texto').value=oracion;
    reiniciarConfiguracion()
}