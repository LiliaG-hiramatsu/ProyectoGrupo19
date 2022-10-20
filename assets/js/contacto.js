//Validacion de un formulario completo
//Funcion general para validar que los datos esten completos
function validarFormulario(){
    if (validarNombre() && validarCorreo() && validarTelefono() && validarTextArea()){
        return true;
    }else{
        if (validarNombre()){
            document.getElementById("mensaje_nombre").innerHTML = "";
        }
        if (validarCorreo()){
            document.getElementById("mensaje_correo").innerHTML = "";
        }
        if (validarTelefono()){
            document.getElementById('mensaje_telefono').innerHTML = "";
        }
        if (validarTextArea()){
            document.getElementById('mensaje_text_area').innerHTML = "";
        }
    }
    return false;
}

//Funciones auxiliares
function validarNombre(){
    let cadena = document.getElementById("nombre").value;
    if (cadena == null || cadena.length == 0 || !isNaN(cadena)){
        limpiar("nombre");
        document.getElementById("mensaje_nombre").innerHTML = "Tenes que ingresar tu nombre y/o apellido"
        return false;
    }
    return true;
}

function validarCorreo(){
    let cadena = document.getElementById("correo").value;
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)\.(?:|com|ar|br|cl|uy)+$/.test(cadena))){
        limpiar("correo");
        document.getElementById("mensaje_correo").innerHTML = "Ingrese una direccion de correo valida";
        return false;
    }
    return true;
}

function validarTelefono(){
    let caracteresValidos = "0123456789-() ";
    let bandera = false;
    let cadena = document.getElementById("telefono").value;
    if (cadena != null && cadena.length != 0){
        for (caracter in cadena){
            if (caracteresValidos.indexOf(cadena[caracter])==-1){
                bandera = true;
                break;
            }
        }
    }
    if(!bandera && cadena.length != 0){
        return true;
    }else{
        limpiar("telefono");
        document.getElementById('mensaje_telefono').innerHTML = "Ingrese un numero de telefono valido";
        return false;
    }
}

function validarTextArea(){
    let valor = document.getElementById("text_area").value;
    if (valor == null || valor.length == 0){
        limpiar("text_area");
        document.getElementById('mensaje_text_area').innerHTML = "Ingrese un texto";
        return false;
    }
    if (valor.length > 100){
        document.getElementById('mensaje_text_area').innerHTML = "Texto demasiado largo";
        return false;
    }
    return true;
}

function limpiar(id){
    let elemento = document.getElementById(id);
    elemento.value = "";
    elemento.focus();
}

function contadorLetras(obj){
    let cantMaxLetras = 500;
    let cantLetras = obj.value.length;
    let letrasRestantes = (cantMaxLetras - cantLetras);

    if (letrasRestantes < 0){
        document.getElementById("cant_caracteres").innerHTML = "El mensaje excede el limite de " +cantMaxLetras+ "caracteres!";
    }else{
        document.getElementById("cant_caracteres").innerHTML = letrasRestantes+ " caracteres";
    }
}


//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------