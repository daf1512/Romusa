$(document).ready(function(){

    //Hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        navText: ['PREV','NEXT'],
        responsive:{
            0:{
               nav: false,
            },
            700:{
                nav: true,
            }
        }
    })

     //project slider
     $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        smartSpeed: 1000,
        margin: 24,
        navText: ['PREV','NEXT'],
        responsive:{
            0:{

            },
            700:{

            },
            1140:{
                items: 2,
                center: true,
            }
        }
    })
});