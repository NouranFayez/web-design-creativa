$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        // items: 2,
        nav: true,
        margin : 30,
        navText: ['<i class="fa-solid fa-arrow-left-long bg-primary text-white me-2 rounded-pill px-3"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
               items:1
    },

            // breakpoint from 768 up
            768: {
                items:2
    }
        }
    });
});