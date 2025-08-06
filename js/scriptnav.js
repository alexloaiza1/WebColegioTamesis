const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

// Manejar apertura y cierre del menú
toggleBtn.onclick = () => {
  const isOpen = dropDownMenu.classList.toggle("open");
  toggleBtnIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// Delegar el clic en el menú desplegable
dropDownMenu.onclick = (event) => {
  const target = event.target;
  
  // Cerrar el menú solo si se hace clic en un elemento `li` dentro del menú
  if (target.tagName === "LI" && !target.classList.contains("nav-item")) {
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.className = "fa-solid fa-bars";
  }
};

