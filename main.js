import swal from 'sweetalert'


let btn1 = document.getElementsByClassName('button1'),
    btn2 = document.getElementsByClassName('button2')

btn1.addEventListener('click',mensajevacio(),true)

function mensajevacio(){
    swal('Oopss','Parece que no ingresaste ningun mensaje para decodificar','error');
    }

