const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("gmail");
const mensaje = document.getElementById("mensaje");
const error = document.getElementById("error");
const envio = document.getElementById("envio");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const regEx = {
    nombre: /^[a-zA-Z\s-]{2,}$/,
    correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mensaje: /^.{1,}$/,
  };

  if (!regEx.nombre.test(nombre.value.trim())) {
    nombre.classList.add("input-error");
    error.innerHTML =
      "El nombre debe tener al menos 2 caracteres y solo puede contener letras, espacios y guiones.";
    error.style.display = "block";
    return;
  } else if (!regEx.correo.test(correo.value.trim())) {
    correo.classList.add("input-error");
    error.innerHTML = "Por favor, introduce un correo electrónico válido.";
    error.style.display = "block";
    return;
  }else if (!regEx.mensaje.test(mensaje.value.trim())) {
    mensaje.classList.add("input-error");
    error.innerHTML = "El mensaje no puede estar vacío.";
    error.style.display = "block";
    return;
  }

  error.style.display = "none";
  
  formulario.submit();
});
