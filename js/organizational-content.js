const contents = [
  {
    name: "Guía de uso de la plataforma",
    type: "Organizacional",
    description: "Una guía completa para el uso efectivo de la plataforma.",
    author: "Juan Pérez",
    date: "2024-12-01",
  },
  {
    name: "Blog: Ideas para optimizar tareas",
    type: "Organizacional",
    description:
      "Un artículo con ideas prácticas para optimizar tu productividad.",
    author: "María Gómez",
    date: "2024-12-02",
  },
];

const contentList = document.getElementById("content-list");
const filterInput = document.getElementById("filter");

const modal = document.getElementById("preview-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("close-modal");

// Renderizar contenido
function renderContents(filteredContents) {
  contentList.innerHTML = "";
  filteredContents.forEach((content, index) => {
    const listItem = document.createElement("div");
    listItem.className = "content-item"; // Clase para estilizar
    listItem.innerHTML = `
            <h3 class="content-title" data-index="${index}">${content.name}</h3>
            <p class="content-meta">Autor: ${content.author} | Fecha: ${content.date}</p>
            <p class="content-type">${content.type}</p>
        `;

    listItem.querySelector(".content-title").addEventListener("click", () => {
      showModal(content);
    });

    contentList.appendChild(listItem);
  });
}

// Filtrar contenido
filterInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();
  const filteredContents = contents.filter((content) =>
    content.name.toLowerCase().includes(query)
  );
  renderContents(filteredContents);
});

// Mostrar modal
function showModal(content) {
  modalTitle.textContent = content.name;
  modalBody.textContent = content.description;
  modal.style.display = "flex";
}

// Cerrar modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de él
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Inicializar
renderContents(contents);
