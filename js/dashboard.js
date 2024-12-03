document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('Name');
    const userOrganization = localStorage.getItem('Organization');
  
    // Verificar si los datos existen
    if (userName && userOrganization) {
      document.querySelector('h2').textContent = `Bienvenido, ${userName}`;
      document.querySelector('p strong').textContent = userOrganization;
    } else {
      // Redirigir al login si no hay datos de usuario
      alert('Por favor, inicia sesión primero.');
      window.location.href = 'login.html';
    }
  });
  