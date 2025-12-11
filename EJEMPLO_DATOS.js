// ARCHIVO DE REFERENCIA - NO ES NECESARIO INCLUIRLO EN EL PROYECTO
// Este archivo muestra ejemplos de datos que se guardarán en localStorage

/**
 * Ejemplo de estructura de tareas guardadas en localStorage
 * 
 * localStorage.getItem('tasks') retornará un JSON así:
 */

[
  {
    id: 1702300800000,
    title: "Completar proyecto React",
    description: "Terminar la aplicación To-Do List con todas las características solicitadas",
    type: "trabajo",
    completed: false,
    createdAt: "11/12/2025"
  },
  {
    id: 1702300900000,
    title: "Comprar despensa",
    description: "Leche, pan, huevos y verduras en el supermercado",
    type: "casa",
    completed: true,
    createdAt: "11/12/2025"
  },
  {
    id: 1702301000000,
    title: "Reunión con cliente",
    description: "Presentación del nuevo producto y discusión de presupuesto",
    type: "negocios",
    completed: false,
    createdAt: "11/12/2025"
  },
  {
    id: 1702301100000,
    title: "Limpiar la casa",
    description: "Pasar aspiradora, limpiar baños y organizar sala",
    type: "casa",
    completed: false,
    createdAt: "11/12/2025"
  },
  {
    id: 1702301200000,
    title: "Enviar reportes mensuales",
    description: "Compilar datos de ventas y enviar al departamento de finanzas",
    type: "trabajo",
    completed: true,
    createdAt: "11/12/2025"
  }
]

/**
 * TIPOS DE TAREA:
 * - "trabajo": 💼 Tareas relacionadas con trabajo
 * - "casa": 🏠 Tareas domésticas
 * - "negocios": 💰 Tareas de negocios
 */

/**
 * Para cargar datos de ejemplo manualmente:
 * 
 * 1. Abre la consola del navegador (F12)
 * 2. Copia y pega el siguiente código:
 * 
 * localStorage.setItem('tasks', JSON.stringify([
 *   {
 *     id: 1702300800000,
 *     title: "Tarea de ejemplo",
 *     description: "Esta es una tarea de ejemplo",
 *     type: "trabajo",
 *     completed: false,
 *     createdAt: "11/12/2025"
 *   }
 * ]));
 * 
 * 3. Recarga la página
 */

/**
 * Para ver qué tareas tienes guardadas:
 * 
 * En la consola:
 * JSON.parse(localStorage.getItem('tasks'))
 */

/**
 * Para limpiar todas las tareas:
 * 
 * En la consola:
 * localStorage.removeItem('tasks');
 * location.reload();
 */
