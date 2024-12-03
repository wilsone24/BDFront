document.addEventListener("DOMContentLoaded", () => {
  // Carga los datos del usuario en el formulario
  const Name = localStorage.getItem("Name") || "Sin Nombre";
  const Mail = localStorage.getItem("Mail") || "Sin Correo";
  const Organization = localStorage.getItem("Organization") || "Sin Organización";

  document.getElementById("name").value = Name;
  document.getElementById("email").value = Mail;
  document.getElementById("organization").value = Organization;

  // Maneja la funcionalidad de "Cerrar sesión"
  const logoutButton = document.getElementById("logout-btn");
  logoutButton.addEventListener("click", () => {
    // Limpia los datos del usuario en localStorage
    localStorage.removeItem("Name");
    localStorage.removeItem("Mail");
    localStorage.removeItem("Organization");

    // Redirige a la página de inicio de sesión
    window.location.href = "login.html";
  });
});

// Maneja el evento de guardar cambios
document.getElementById("update-profile").addEventListener("submit", (event) => {
  event.preventDefault();

  const updatedName = document.getElementById("name").value;
  const updatedEmail = document.getElementById("email").value;

  localStorage.setItem("userName", updatedName);
  localStorage.setItem("userEmail", updatedEmail);

  alert("¡Perfil actualizado con éxito!");
});
