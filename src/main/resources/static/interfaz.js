document.addEventListener('DOMContentLoaded', function() {
    // Inicializar los iconos de Lucide
    lucide.createIcons();

    // Datos de ejemplo para las tareas
    const tasks = [
        { id: 1, title: 'Completar informe', status: 'En progreso' },
        { id: 2, title: 'Reunión con cliente', status: 'Pendiente' },
        { id: 3, title: 'Revisar propuesta', status: 'Completada' },
    ];

    // Función para renderizar las tareas
    function renderTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task-item';
            taskElement.innerHTML = `
                <div class="task-info">
                    <h3>${task.title}</h3>
                    <p>${task.status}</p>
                </div>
                <select class="task-status" data-task-id="${task.id}">
                    <option value="Pendiente" ${task.status === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
                    <option value="En progreso" ${task.status === 'En progreso' ? 'selected' : ''}>En progreso</option>
                    <option value="Completada" ${task.status === 'Completada' ? 'selected' : ''}>Completada</option>
                </select>
            `;
            taskList.appendChild(taskElement);
        });

        // Agregar event listeners a los selects de estado
        document.querySelectorAll('.task-status').forEach(select => {
            select.addEventListener('change', function() {
                const taskId = parseInt(this.getAttribute('data-task-id'));
                const newStatus = this.value;
                updateTaskStatus(taskId, newStatus);
            });
        });
    }

    // Función para actualizar el estado de una tarea
    function updateTaskStatus(taskId, newStatus) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.status = newStatus;
            renderTasks();
        }
    }

    // Renderizar las tareas iniciales
    renderTasks();

    // Event listener para el botón de nueva tarea
    document.querySelector('.btn-primary').addEventListener('click', function() {
        const newTask = {
            id: tasks.length + 1,
            title: 'Nueva tarea',
            status: 'Pendiente'
        };
        tasks.push(newTask);
        renderTasks();
    });
});