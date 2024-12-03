document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores de los campos
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      // Hacer la solicitud a la API
      const response = await fetch(
        "https://api-generator.retool.com/Ivm42D/data"
      );

      const data = await response.json();
      console.log(data);

      // Verificar si el correo y la contraseña están en el JSON
      const user = data.find(
        (user) => user.Mail === email && user.Password === password
      );

      console.log(user);

      if (user) {
        // Redirigir al dashboard si la verificación es exitosa
        localStorage.setItem("Name", user.Name);
        localStorage.setItem("Organization", user.Organization);
        localStorage.setItem("Mail", user.Mail);
        localStorage.setItem("Password", user.Password);
        window.location.href = "dashboard.html";
      } else {
        // Mostrar un mensaje de error si las credenciales no son válidas
        alert(
          "Correo o contraseña incorrectos. Por favor, inténtalo de nuevo."
        );
        console.log(email, password);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      alert(
        "Hubo un problema al iniciar sesión. Por favor, inténtalo más tarde."
      );
    }
  });
});
