// swiper-config.js

document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Verifica que Swiper esté inicializado correctamente
  console.log(swiper);

  // Código para cerrar el menú al hacer clic fuera de él
  document.addEventListener("click", function (event) {
    var clickover = event.target;
    var _opened = document
      .querySelector(".navbar-collapse")
      .classList.contains("show");
    if (_opened && !clickover.closest(".navbar")) {
      document.querySelector(".navbar-toggler").click();
    }
  });

  document
    .querySelectorAll(".navbar-nav .nav-link")
    .forEach(function (navLink) {
      navLink.addEventListener("click", function () {
        var _opened = document
          .querySelector(".navbar-collapse")
          .classList.contains("show");
        if (_opened) {
          document.querySelector(".navbar-toggler").click();
        }
      });
    });
});
