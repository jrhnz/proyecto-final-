# 🚀 INSTRUCCIONES DE INSTALACIÓN Y EJECUCIÓN

## Requisitos del Sistema

- **Node.js**: v14.0.0 o superior
- **npm**: v6.0.0 o superior (incluido con Node.js)
- **Navegador web moderno**: Chrome, Firefox, Safari o Edge

## Paso 1: Descargar/Clonar el Proyecto

```bash
# Navega a la carpeta del proyecto
cd "c:\Users\Maske\Desktop\proyecto final\todo-list-app"
```

## Paso 2: Instalar Dependencias

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Esto instalará:
- React (versión 18.2.0)
- React DOM (versión 18.2.0)
- Vite (herramienta de build)
- Plugin de React para Vite

El proceso puede tomar 1-2 minutos en la primera instalación.

## Paso 3: Ejecutar la Aplicación

Una vez instaladas las dependencias, ejecuta:

```bash
npm run dev
```

**Lo que pasará:**
1. La aplicación se compilará
2. Se abrirá automáticamente en `http://localhost:3000`
3. Verás la pantalla de inicio con dos botones principales

## Paso 4: Usar la Aplicación

### Desde la Pantalla de Inicio:
- **📋 Agregar Nueva Tarea**: Crea una tarea rápidamente
- **📝 Ver Todas las Tareas**: Visualiza todas las tareas guardadas

### Agregar una Tarea:
1. Haz clic en "Agregar Nueva Tarea"
2. Completa:
   - **Título** (obligatorio): Nombre de la tarea
   - **Descripción** (obligatorio): Detalles
   - **Tipo**: Selecciona entre Trabajo, Casa o Negocios
3. Haz clic en "Guardar Tarea"

### Ver y Gestionar Tareas:
1. Abre "Ver Todas las Tareas"
2. Verás tus tareas separadas en:
   - **Pendientes**: Tareas no completadas
   - **Completadas**: Tareas finalizadas
3. Opciones disponibles:
   - ✓ Hacer click en el checkbox para marcar/desmarcar
   - 🗑️ Eliminar con el botón de basura
   - 👁️ Ver detalles haciendo clic en la tarea

### Ver Detalles de una Tarea:
- Muestra toda la información completa
- Permite marcar como completada/pendiente
- Opción para eliminar la tarea

## Compilar para Producción

Para crear una versión optimizada lista para subir a un servidor:

```bash
npm run build
```

Esto generará una carpeta `dist/` con los archivos optimizados.

## Detener la Aplicación

En la terminal donde corre `npm run dev`, presiona **Ctrl + C** para detener la aplicación.

## Solución de Problemas

### Error: "npm: comando no encontrado"
- Node.js no está instalado. Descárgalo de https://nodejs.org/

### Error: "ENOENT: no such file or directory"
- Asegúrate de estar en la carpeta correcta del proyecto

### Puerto 3000 en uso
```bash
# Si el puerto 3000 está ocupado, termina los procesos que lo usan
# O ejecuta vite en otro puerto:
npm run dev -- --port 3001
```

### Las tareas no se guardan
- Abre las DevTools (F12) y verifica que localStorage esté habilitado
- En modo incógnito puede no guardarse correctamente

## Notas Importantes

✅ La aplicación es completamente funcional sin servidor backend
✅ Los datos se guardan en el localStorage del navegador
✅ Los datos persisten entre sesiones del navegador
✅ No hay necesidad de instalar base de datos
✅ Funciona en dispositivos móviles y desktops

## Estructura de una Tarea Guardada

Cada tarea contiene:
```javascript
{
  id: 1234567890,                    // Identificador único (timestamp)
  title: "Mi tarea",                 // Título de la tarea
  description: "Detalles...",        // Descripción
  type: "trabajo",                   // Tipo: trabajo, casa, negocios
  completed: false,                  // Estado completado: true/false
  createdAt: "11/12/2025"           // Fecha de creación
}
```

---

**¿Preguntas o problemas?** Revisa el README.md para más detalles.
