# 🗂️ ESTRUCTURA DEL PROYECTO

## Árbol de Carpetas

```
todo-list-app/
│
├── 📄 index.html                     # Punto de entrada HTML
├── 📄 package.json                   # Dependencias y scripts
├── 📄 vite.config.js                 # Configuración de Vite
├── 📄 .gitignore                     # Archivos ignorados por git
│
├── 📄 README.md                      # Documentación principal
├── 📄 INSTRUCCIONES.md               # Instrucciones de instalación
├── 📄 RESUMEN.md                     # Resumen del proyecto
│
└── 📁 src/                           # Código fuente
    ├── 📄 main.jsx                   # Punto de entrada React
    ├── 📄 App.jsx                    # Componente principal
    ├── 📄 index.css                  # Estilos globales
    │
    └── 📁 components/                # Componentes reutilizables
        ├── 📄 HomeScreen.jsx         # Pantalla de inicio
        ├── 📄 HomeScreen.css
        │
        ├── 📄 TaskList.jsx           # Lista de tareas
        ├── 📄 TaskList.css
        │
        ├── 📄 AddTask.jsx            # Formulario de nueva tarea
        ├── 📄 AddTask.css
        │
        ├── 📄 TaskDetails.jsx        # Detalles de tarea
        └── 📄 TaskDetails.css
```

---

## 📊 Flujo de Componentes

```
┌─────────────────────────────────┐
│         App.jsx                 │
│   (Gestor de Estado Global)     │
│  - tasks[]                      │
│  - currentView                  │
│  - selectedTask                 │
└──────────────┬──────────────────┘
               │
    ┌──────────┼──────────┬────────────────┐
    │          │          │                │
    ▼          ▼          ▼                ▼
┌─────────┐┌────────┐┌────────┐┌──────────────┐
│ Home    ││TaskList││AddTask ││TaskDetails   │
│Screen   ││        ││        ││              │
└─────────┘└────────┘└────────┘└──────────────┘
    │          │          │                │
    └──────────┴──────────┴────────────────┘
          (Componentes Hijos)
          (No tienen estado local)
```

---

## 🔗 Flujo de Datos

```
useState                              localStorage
  ↓                                        ↑
[tasks]  ←→  App.jsx  ←→  [saveOnChange]
  ↓
[Componentes]
  ├─ HomeScreen (lee: pendientes, completadas)
  ├─ TaskList (lee: tasks, actualiza completed/deleted)
  ├─ AddTask (crea: nuevas tareas)
  └─ TaskDetails (lee: task seleccionado, actualiza)
```

---

## 📋 Descripción de Archivos Principales

### **App.jsx** (Componente Principal)
- Gestor central de estado
- Maneja las 4 vistas principales
- Integra localStorage
- Funciones: addTask, deleteTask, toggleComplete

### **HomeScreen.jsx**
- Pantalla de bienvenida
- Muestra estadísticas
- Botones de navegación principales
- No tiene estado local

### **TaskList.jsx**
- Muestra todas las tareas
- Organiza en secciones (Pendientes/Completadas)
- Permite checkbox, eliminar, ver detalles
- Botón flotante para agregar

### **AddTask.jsx**
- Formulario con validación
- Campos: título, descripción, tipo
- Manejo de errores
- Submit envía datos al padre

### **TaskDetails.jsx**
- Visualiza tarea completa
- Opciones para completar/eliminar
- Confirmación antes de eliminar
- Navegación hacia atrás

---

## 🎨 Estructura de Estilos

```
index.css (Global)
├─ Variables CSS (colores, sombras)
├─ Reset (*, body)
├─ Clases utilitarias (.btn, .form-group)
└─ Media queries (responsive)

HomeScreen.css
├─ .home-screen
├─ .stats-container
└─ .stat-card

TaskList.css
├─ .task-list-container
├─ .task-card
├─ .task-section
└─ Media queries para móvil

AddTask.css
├─ .add-task-container
├─ .add-task-form
└─ .form-actions

TaskDetails.css
├─ .task-details-container
├─ .detail-section
└─ .detail-actions
```

---

## 🔄 Ciclo de Vida de una Tarea

### 1. **Creación**
```
Usuario → AddTask.jsx → onAddTask() → App.jsx → setTasks([...tasks, newTask])
                                                        ↓
                                                  localStorage.setItem()
```

### 2. **Lectura/Visualización**
```
TaskList.jsx ← (lee tasks) ← App.jsx
              ↓
          Renderiza en secciones
          (Pendientes/Completadas)
```

### 3. **Actualización**
```
User (checkbox) → toggleComplete(id) → App.jsx → setTasks(mapeada)
                                                        ↓
                                                   localStorage.setItem()
```

### 4. **Eliminación**
```
User (click 🗑️) → deleteTask(id) → App.jsx → setTasks(filtrada)
                                                   ↓
                                              localStorage.setItem()
```

---

## 📦 Dependencias

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

**DevDependencies:**
- `vite`: ^5.0.8 (Build tool)
- `@vitejs/plugin-react`: ^4.2.1 (Plugin para React)

---

## 🎯 Puntos de Entrada

### Desarrollo
```bash
npm run dev
→ Vite inicia en http://localhost:3000
→ Carga index.html
→ Ejecuta src/main.jsx
→ Monta React en #root
```

### Producción
```bash
npm run build
→ Compila en dist/
→ Optimiza assets
→ Lista para deploy
```

---

## 💾 LocalStorage Schema

```javascript
// localStorage key: 'tasks'
[
  {
    id: 1702297800000,           // timestamp único
    title: "Tarea importante",    // string
    description: "Detalles...",   // string
    type: "trabajo",              // "trabajo" | "casa" | "negocios"
    completed: false,             // boolean
    createdAt: "11/12/2025"      // string (fecha)
  },
  // ... más tareas
]
```

---

## 🎨 Paleta de Colores Global

Definidas en `src/index.css` como variables CSS:

```css
--primary-color: #6366f1       /* Botones principales */
--secondary-color: #8b5cf6     /* Botones secundarios */
--success-color: #10b981       /* Tareas completadas */
--danger-color: #ef4444        /* Eliminar */
--warning-color: #f59e0b       /* Tareas pendientes */
--light-bg: #f9fafb            /* Fondo claro */
--border-color: #e5e7eb        /* Bordes */
--text-primary: #1f2937        /* Texto principal */
--text-secondary: #6b7280      /* Texto secundario */
```

---

## 🔧 Scripts Disponibles

```bash
npm run dev       # Inicia modo desarrollo
npm run build     # Compila para producción
npm run preview   # Visualiza build producción
```

---

## 📱 Breakpoints Responsivos

```css
/* Desktop (por defecto) */
max-width: 480px  /* Ancho máximo para móvil */

/* Tablet y mobile */
@media (max-width: 768px) {
  /* Ajustes responsivos */
}

@media (max-width: 480px) {
  /* Ajustes para móvil pequeño */
}
```

---

**Estructura clara y modular para fácil mantenimiento y escalabilidad ✅**
