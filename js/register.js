document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Evitar recargar la página
  
      // Obtener los valores del formulario
      const fullname = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const organization = document.getElementById('organization').value;
      const password = document.getElementById('password').value;
      const repeatPassword = document.getElementById('repeat-password').value;
  
      // Validar que las contraseñas coincidan
      if (password !== repeatPassword) {
        alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        return;
      }
  
      try {
        // Hacer la solicitud POST a la API
        const response = await fetch('https://api-generator.retool.com/Ivm42D/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Mail: email,
            Name: fullname,
            Password: password,
            Organization: organization
          })
        });
  
        // Manejar la respuesta
        if (response.ok) {
          alert('Registro exitoso. Redirigiendo al inicio de sesión...');
          window.location.href = 'login.html'; // Redirigir al login
        } else {
          const errorData = await response.json();
          alert(`Error al registrar: ${errorData.message || 'Inténtalo de nuevo más tarde.'}`);
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        alert('Hubo un problema al registrarse. Por favor, inténtalo más tarde.');
      }
    });
  });
  