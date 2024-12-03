document.addEventListener("DOMContentLoaded", () => {
    const articles = [
      {
        title: "5 Consejos para ser más productivo",
        description: "Descubre cómo mejorar tu productividad con estos consejos prácticos.",
        content: "Contenido completo del artículo sobre productividad."
      },
      {
        title: "Cómo organizar un equipo remoto",
        description: "Aprende las mejores prácticas para gestionar equipos distribuidos.",
        content: "Consejos detallados para organizar un equipo remoto."
      },
      {
        title: "Plantillas de gestión de proyectos",
        description: "Accede a plantillas probadas para mejorar la gestión de tus proyectos.",
        content: "Explora plantillas para una gestión de proyectos efectiva."
      },
      {
        title: "Tips para la escritura colaborativa",
        description: "Mejora la colaboración en la creación de contenido con estos consejos.",
        content: "Guía práctica para una escritura colaborativa exitosa."
      },
      {
        title: "Casos de éxito en empresas",
        description: "Inspírate con historias reales de empresas que han logrado el éxito.",
        content: "Historias motivadoras de casos de éxito empresarial."
      }
    ];

    const articlesGrid = document.getElementById("articles-grid");

    // Generar dinámicamente las tarjetas de los artículos
    articles.forEach(article => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.75rem;">${article.title}</h3>
          <p style="color: var(--muted); margin-bottom: 1rem;">${article.description}</p>
        </div>
        <button class="btn preview-btn" style="align-self: flex-start;" data-content="${article.description}">Leer más</button>
      `;

      articlesGrid.appendChild(card);
    });

    const modal = document.getElementById("preview-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const closeModal = document.getElementById("close-modal");
    const previewButtons = document.querySelectorAll(".preview-btn");

    // Mostrar el modal con contenido dinámico
    previewButtons.forEach(button => {
      button.addEventListener("click", () => {
        const content = button.getAttribute("data-content");
        modalTitle.textContent = "Previsualización de Artículo";
        modalBody.textContent = content;
        modal.style.display = "flex"; // Muestra el modal
      });
    });

    // Cerrar el modal
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Cierra el modal si se hace clic fuera de su contenido
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  