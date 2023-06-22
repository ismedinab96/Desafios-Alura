
let mensaje = document.getElementById("place_encript")
let codificado = document.getElementById("place_desencript")
let btn1 = document.getElementsByClassName("button1")
let btn2 = document.getElementsByClassName("button2")

btn1.addEventListener('click',vacio(),true)


function vacio(){
    swal('Opps','Parece que no has ingresado ningun mensaje para encriptar','error');
}

function encript(mensajeencript) {
    let matrizcomp = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    mensaje = mensaje.ToLowerCase()

    for (let i = 0; i <= matrizcomp.length; i++) {
        if (textoencriptado.includes(matrizcomp[i][0])) {
            textoencriptado = textoencriptado.replaceAll(matrizcomp[i][0],matrizcomp[i]{0});
        }
    return textoencriptado;
    }

function mensaje() {
        alert('hOLA MAIGOS')
    }


}

    function btnencriptar() {
        const textoencript = encript(encriptar.value)
        desencriptar.value = textoencript
        desencriptar.value=""
        
        
    }



    
