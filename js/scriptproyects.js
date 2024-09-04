// Escuchar el evento click del botón
document.getElementById("btn-ir").addEventListener("click", function () {
  // Obtener el valor seleccionado del desplegable
  const selectedValue = document.getElementById("project-select").value;

  // Verificar si hay un valor seleccionado y desplazar a la sección correspondiente
  if (selectedValue) {
    const section = document.getElementById(selectedValue);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("La sección seleccionada no se encuentra.");
    }
  } else {
    alert("Por favor, seleccione un proyecto antes de continuar.");
  }
});
