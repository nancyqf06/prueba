

//activa la funcion al cargar la pagina web
window.onload = function() {
    //funcion que permite elegir la foto
         document.getElementById('foto').onchange = function(e) {
            //guarda el destino o valor de la foto en una variable, puedo escoger cualquier letra
            n = e.target.value;
            //img luego de imagenes son los nombres que le voy a poner a cada foto o si no no sirve como img1, img2, img3 etc
            var archivo = "url('imagenes/img" + n + ".jpg')"; //esta es otra manera de buscar las fotos dentro de la carpeta creando la variable archivo
            //envia la foto al lugar respectivo (id llamado resultado)
            //la variable archivo almaceno la imagen elegida por el usuario
            document.getElementById("resultado").style.backgroundImage = archivo;
        }
}
    
    //querySelector permite elegir el selector llamado select del form
let seleccionar = document.querySelector('select');
//addEventListener es un listado de eventos (biblioteca) que lista al evento CHANGE y carga la funcion llamada elegir
seleccionar.addEventListener('change', elegir);

function elegir(){
    /*variable que lleva el valor seleccionado por el usuario*/
    let eleccion = seleccionar.value;
    /*condicoonales*/
    if(eleccion == 0){
        descripcion.innerHTML = 'resultado';

    }   
    
}