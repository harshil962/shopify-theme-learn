document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".product-swiper").forEach(function (slider) {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,

      navigation: {
        nextEl: slider.querySelector(".swiper-button-next"),
        prevEl: slider.querySelector(".swiper-button-prev"),
      },

      pagination: {
        el: slider.querySelector(".swiper-pagination"),
        clickable: true,
      },

      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  });
});
