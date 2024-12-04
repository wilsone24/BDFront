let contents = [];

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

// Filtrar contenido por nombre
filterInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    // Filtrar solo los contenidos cuyo nombre contiene la consulta
    const filteredContents = contents.filter(content =>
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

// Obtener los datos de la API y filtrar los de tipo "Privado"
async function fetchContents() {
    try {
        const response = await fetch("https://api-generator.retool.com/DOU8tz/data");
        const data = await response.json();
        
        // Filtramos solo los elementos cuyo tipo sea "Privado"
        const privateContents = data.filter(content => content.type === "Privado");

        // Asignamos los contenidos filtrados a la variable global `contents`
        contents = privateContents;

        // Renderizamos los contenidos filtrados inicialmente
        renderContents(contents);
    } catch (error) {
        console.error("Error al obtener los contenidos:", error);
    }
}

// Inicializar al cargar la página
fetchContents();