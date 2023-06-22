function encriptar(){

    let texto = document.getElementById("place_encript").value;
    let tituloMensaje = document.getElementById("tituloPag");
    let parrafo = document.getElementById("pieDepag");
    let munheco = document.getElementById("image404");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")
    
    if (texto.length != 0){
        document.getElementById("place_encript").value = textoCifrado;
        tituloMensaje.textContent = "El texto se ha encriptado correctamente!";
        parrafo.textContent = "";
        munheco.src="./satis.png";
       } else{
        munheco.src="./image404.png";
        tituloMensaje.textContent ="No se ha encontrado ningun texto.";
        parrafo.textContent="Ingresá un texto para poder cifrarlo o descrifrarlo.";
        swal("Ooops!", "Debes ingresar un texto", "warning");
       }   
 
}
function desencriptar(){
    let texto = document.getElementById("place_encript").value;
    let tituloMensaje = document.getElementById("tituloPag");
    let parrafo = document.getElementById("pieDepag");
    let munheco = document.getElementById("image404");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")

    if (texto.length != 0){
        document.getElementById("place_encript").value = textoCifrado;
        tituloMensaje.textContent = "El texto se ha desencriptado con éxito";
        parrafo.textContent ="";
        munheco.src = "./satis.png";

    } else{
        munheco.src = "./image404.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent="Por favor ingrese un texto para que puedas encriptar o desencriptar";
        swal("Oooops!", "Debes ingresar un texto","warning");
    }

}

