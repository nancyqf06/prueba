

document.getElementById('container-opt').addEventListener('change', galeria);

/*funcionalidad de la galeria evento onchange*/

function galeria() {
    var opciones = document.getElementById('container-opt').value;
    switch (opciones) {
        case "live":
            document.querySelector('.live-galeria').style.display = "block"
            document.querySelector('.work-galeria').style.display = "none"
            document.querySelector('.relax-galeria').style.display = "none"
            break;
        case "work":
            document.querySelector('.live-galeria').style.display = "none"
            document.querySelector('.work-galeria').style.display = "block"
            document.querySelector('.relax-galeria').style.display = "none"
            break;
        case "chill":
            document.querySelector('.live-galeria').style.display = "none"
            document.querySelector('.work-galeria').style.display = "none"
            document.querySelector('.relax-galeria').style.display = "block"
            break;
        default:
            document.querySelector('.live-galeria').style.display = "none"
            document.querySelector('.work-galeria').style.display = "none"
            document.querySelector('.relax-galeria').style.display = "none"    
    } 
} 

let buttonAboutUs = document.getElementById("about-us-readmore");
let aboutUsContainer = document.getElementById("about-us-container");
let buttonAboutUsVolver = document.getElementById("about-us-volver");
let aboutUsVideo = document.getElementById("about-us-video");

buttonAboutUs.onclick = function() {
    aboutUsContainer.style.display = "block";
    aboutUsVideo.style.display = "block";
}

buttonAboutUsVolver.onclick = function() {
    aboutUsContainer.style.display = "none";
    aboutUsVideo.style.display = "none";
}

baguetteBox.run('.tz-gallery');


function opciones(evt, info) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
  }


  $('.owl-carousel').owlCarousel({

    //ciclo 
    loop: true,

    //margen entre las fotos de personas
    margin: 12,

    //navegacion con flechas con valor true
    nav: true,

    //agrega radios de navegacion con valor true
    dots: false,

    //se autoejecuta al iniciar con valor true
    autoplay: true,

    //parte responsive de los dispositivos
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})






