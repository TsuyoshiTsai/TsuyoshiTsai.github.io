$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 400,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: true,
    navText: [
        "<span class='slider__navicon slider__navicon--prev'></span>",
        "<span class='slider__navicon slider__navicon--next'></span>"
    ],
    responsive: {
        0: {
            items: 1
        }
    }
})