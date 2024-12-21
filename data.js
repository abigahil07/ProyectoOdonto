const proyectos = [
    {
        id: 1,
        nombre: "Proyecto Clínica Odontológica",
        descripcion: "Desarrollo de un sistema de gestión para la clínica",
        tareas: [
            {
                id: 1,
                nombre: "Diseñar la base de datos",
                descripcion: "Definir las tablas, campos y relaciones para almacenar",
                estado_completo: false,
                fecha_limite: "2024-12-01"
            },
            {
                id: 2,
                nombre: "Crear las tablas APIs necesarias para gestionar",
                estado_completo: false,
                fecha_limite: "2024-12-15"
            },
            {
                id: 3,
                nombre: "Diseño de UI/UX",
                descripcion: "Desarrollar una Interfaz amigable para la gestion del proyecto",
                estado_completo: true,
                fecha_limite: "2024-11-20"
            }
        ]
    }
];

function mostrarProyectos() {
    const container = document.getElementById("contenedor-proyectos");
    container.innerHTML = ''; // Limpiar contenedor antes de mostrar
    proyectos.forEach(proyecto => {
        const proyectoDiv = document.createElement("div");
        proyectoDiv.className = "proyecto";
        proyectoDiv.innerHTML = `
            <h2>${proyecto.nombre}</h2>
            <p>${proyecto.descripcion}</p>
            <h3>Tareas:</h3>
            <button class="editar" onclick="editarProyecto(${proyecto.id})">Editar</button>
            <button onclick="eliminarProyecto(${proyecto.id})">Eliminar</button>
        `;

        const tareasUl = document.createElement("ul");
        proyecto.tareas.forEach(tarea => {
            const tareaLi = document.createElement("li");
            tareaLi.innerHTML = `
                <strong>${tarea.nombre}</strong><br>
                Descripción: ${tarea.descripcion || "Sin descripción"}<br>
                Estado: ${tarea.estado_completo ? "Completo" : "Pendiente"}<br>
                Fecha Límite: ${tarea.fecha_limite}
            `;
            tareasUl.appendChild(tareaLi);
        });

        proyectoDiv.appendChild(tareasUl);
        container.appendChild(proyectoDiv);
    });
}

function crearProyecto(nombre, descripcion) {
    const id = proyectos.length ? proyectos[proyectos.length - 1].id + 1 : 1;
    proyectos.push({ id, nombre, descripcion, tareas: [] });
}

function editarProyecto(id) {
    const proyecto = proyectos.find(p => p.id === id);
    document.getElementById('proyecto-id').value = proyecto.id;
    document.getElementById('proyecto-nombre').value = proyecto.nombre;
    document.getElementById('proyecto-descripcion').value = proyecto.descripcion;
}

function actualizarProyecto(id, nombre, descripcion) {
    const proyecto = proyectos.find(p => p.id === id);
    proyecto.nombre = nombre;
    proyecto.descripcion = descripcion;
}

function eliminarProyecto(id) {
    const index = proyectos.findIndex(p => p.id === id);
    proyectos.splice(index, 1);
    mostrarProyectos();
}









