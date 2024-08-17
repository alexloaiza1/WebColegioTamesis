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

  // Cierra el menú cuando se hace clic fuera de él
  document.addEventListener("click", function (event) {
    var clickover = event.target;
    var navbarCollapse = document.querySelector(".navbar-collapse");
    var _opened = navbarCollapse.classList.contains("show");

    // Cierra el menú si el clic no fue en el menú principal o en un submenú
    if (_opened && !clickover.closest(".navbar")) {
      document.querySelector(".navbar-toggler").click();
    }
  });

  // Cierra el menú cuando se hace clic en un enlace del menú principal o del submenú,
  // pero no cierra el menú cuando se hace clic en un enlace de tipo dropdown-toggle
  document
    .querySelectorAll(".navbar-nav .nav-link")
    .forEach(function (navLink) {
      navLink.addEventListener("click", function (event) {
        var _opened = document
          .querySelector(".navbar-collapse")
          .classList.contains("show");
        var isDropdownToggle = this.classList.contains("dropdown-toggle");

        // Si el menú está abierto y se hace clic en un enlace que NO es para desplegar un submenú,
        // entonces cierra el menú. Esto incluye enlaces dentro del submenú.
        if (_opened && !isDropdownToggle) {
          document.querySelector(".navbar-toggler").click();
        }
      });
    });
});
