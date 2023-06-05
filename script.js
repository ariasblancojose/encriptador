var  textArea = document.querySelector(".text_area").value;
var mensaje = document.querySelector(".mensaje");
var copia = document.querySelector(".copiar");
copia.addEventListener("click", copiar);



function validarTexto(){
    /*capturamos el textarea, accedemos al valor y validamos*/
let textoEscrito = document.querySelector(".text_area").value;
let validador = textoEscrito.match(/^[a-z]*$/);
if (!validador || validador === 0 ||textoEscrito.length === 0) {
    if (textoEscrito.length === 0){
        alert("Debe ingresar algun dato")
        location.reload();
         return true;
    }
    else
    alert("Solo son permitidas letras minusculas y sin acentos");
    location.reload();
    return true;
    }
    

}

function btn_Encriptador(){

    if (!validarTexto()){
            mensaje.style.backgroundImage = "none";

            document.getElementById("titulo_solucion").style.visibility = 'hidden';
            document.getElementById("parrafo-solucion").style.visibility = 'hidden';
            var salida = document.getElementById("textoE");
            salida.style.display = "block";
            
            let textoOriginal = document.querySelector(".text_area").value;
            let textoEncriptado = encriptar(textoOriginal);

            salida.value = textoEncriptado;
 
    }
}

function btn_Desencriptar(){

    if (!validarTexto()){
            mensaje.style.backgroundImage = "none";

            document.getElementById("titulo_solucion").style.visibility = 'hidden';
            document.getElementById("parrafo-solucion").style.visibility = 'hidden';
            var salida = document.getElementById("textoE");
            salida.style.display = "block";
            
            let textoDes = document.querySelector(".text_area").value;
            let textoDesencriptado = desencriptar(textoDes);

            salida.value = textoDesencriptado;
 
    }
}






//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar(cadenaencriptada){
    const matriz = [
        ["a", "enter"],
        ["e", "imes"],
        ["i", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    let resultado = "";
        for (let i = 0; i < cadenaencriptada.length; i++) {
            let caracter = cadenaencriptada[i];
            let encriptado = false;

            for (let j = 0; j < matriz.length; j++) {
                if (matriz[j][0] === caracter) {
                    resultado += matriz[j][1];
                    encriptado = true;
                    break;
                }
            }

            if (!encriptado) {
                resultado += caracter;
            }
        }

        return resultado;
}

function desencriptar(cadenadesencriptada) {
    const matriz = [
        ["a", "enter"],
        ["e", "imes"],
        ["i", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    let resultado = "";
    let i = 0;
    while (i < cadenadesencriptada.length) {
        let encontrado = false;

        for (let j = 0; j < matriz.length; j++) {
            let sustitucion = matriz[j][1];
            if (cadenadesencriptada.startsWith(sustitucion, i)) {
                resultado += matriz[j][0];
                i += sustitucion.length;
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            resultado += cadenadesencriptada[i];
            i++;
        }
    }

    return resultado;
}
function copiar() {
    var salida = document.getElementById("textoE");
    salida.select();
    document.execCommand("copy");
    alert("El texto ha sido copiado al portapapeles.");
}
