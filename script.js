const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";



function validarTexto(){
    let textoEscrito = document.querySelector(".text_area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btcEncriptar(){
    const textoEncriptado = encriptar(text_area.value)
    mensaje.value = textoEncriptado
    textArea.value =  "";
    mensaje.style.backgroundImage = "none"
}
function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
}
//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`



function encriptar(cadenaencriptada){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
   
    cadenaencriptada = cadenaencriptada.toLowerCase()

    for(let i = 0; i < matriz.length; i++ )
        if(cadenaencriptada.includes(matriz[i][0])){
            cadenaencriptada = cadenaencriptada.replaceAll(matriz[i][0],matriz[i][1])
        }
return cadenaencriptada
}



function desencriptar(cadenaDesencriptada){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    cadenaDesencriptada = cadenaDesencriptada.toLowerCase()

    for(let i = 0; i < matriz.length; i++ )
        if(cadenaencriptada.includes(matriz[i][0])){
            cadenaDesencriptada = cadenaDesencriptada.replaceAll(matriz[i][0],matriz[i][1])
        }
return cadenaencriptada
}



function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}

