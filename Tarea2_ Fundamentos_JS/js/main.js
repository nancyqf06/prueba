

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

//flechas galeria filtro
baguetteBox.run('.tz-gallery');




//contador estadistico
var counter = function() {

    $('#section-counter').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.number').each(function() {
                var $this = $(this),
                    num = $this.data('number');
                console.log(num);
                $this.animateNumber({
                    number: num,
                    numberStep: comma_separator_number_step
                        //velocidad de los testimoniales
                }, 7000);
            });

        }

    }, { offset: '95%' });

}
counter();

var contentWayPoint = function() {
    var i = 0;
    $('.ftco-animate').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function() {

                $('body .ftco-animate.item-animate').each(function(k) {
                    var el = $(this);
                    setTimeout(function() {
                        var effect = el.data('animate-effect');
                        if (effect === 'fadeIn') {
                            el.addClass('fadeIn ftco-animated');
                        } else if (effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft ftco-animated');
                        } else if (effect === 'fadeInRight') {
                            el.addClass('fadeInRight ftco-animated');
                        } else {
                            el.addClass('fadeInUp ftco-animated');
                        }
                        el.removeClass('item-animate');
                    }, k * 50, 'easeInOutExpo');
                });

            }, 100);

        }

    }, { offset: '95%' });
};
contentWayPoint();


$('.appointment_date').datepicker({
    'format': 'm/d/yyyy',
    'autoclose': true
});

$('.appointment_time').timepicker();







