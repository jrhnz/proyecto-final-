# 🔧 GUÍA DE TROUBLESHOOTING

## ❌ Problemas Comunes y Soluciones

### 1. "npm: comando no encontido"

**Síntoma:**
```
npm: comando no encontrado
```

**Causa:** Node.js no está instalado

**Solución:**
- Descarga Node.js desde https://nodejs.org/
- Instala la versión LTS (recomendado)
- Reinicia tu terminal después de instalar
- Verifica la instalación:
```bash
node --version
npm --version
```

---

### 2. "ENOENT: no such file or directory"

**Síntoma:**
```
ENOENT: no such file or directory, open 'package.json'
```

**Causa:** No estás en la carpeta correcta

**Solución:**
```bash
# Navega a la carpeta correcta
cd "c:\Users\Maske\Desktop\proyecto final\todo-list-app"

# Verifica que estés en el lugar correcto
dir

# Deberías ver: package.json, src/, index.html, etc.
```

---

### 3. "Error: listen EADDRINUSE: address already in use :::3000"

**Síntoma:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Causa:** Puerto 3000 ya está siendo usado por otra aplicación

**Solución (Opción 1):**
```bash
# Ejecutar en puerto diferente
npm run dev -- --port 3001
```

**Solución (Opción 2 - Terminar proceso en Windows):**
```bash
# Encuentra qué está usando el puerto
netstat -ano | findstr :3000

# Termina el proceso (reemplaza PID por el número)
taskkill /PID <PID> /F
```

---

### 4. Las tareas no se guardan

**Síntoma:**
- Creo una tarea pero desaparece al recargar
- No veo las tareas guardadas

**Causa posible 1:** localStorage deshabilitado

**Solución:**
```bash
# En Chrome/Firefox/Edge:
# 1. Abre las DevTools (F12)
# 2. Ve a Consola
# 3. Escribe:
localStorage.setItem('test', 'funciona')
localStorage.getItem('test')

# Si retorna 'funciona', localStorage está habilitado
```

**Causa posible 2:** Navegación privada/incógnito

**Solución:**
- Abre la app en una pestaña normal (no incógnito)
- Los datos se borran al cerrar modo privado

**Causa posible 3:** Almacenamiento lleno

**Solución:**
```bash
# Limpia localStorage
localStorage.clear()
location.reload()
```

---

### 5. La aplicación está muy lenta

**Síntoma:**
- Demora en cargar
- Retraso al agregar/eliminar tareas

**Causa posible:** Demasiadas tareas

**Solución:**
```bash
# En consola, comprueba cuántas tareas tienes
JSON.parse(localStorage.getItem('tasks')).length

# Si tienes >10,000 tareas, considera:
# 1. Eliminar tareas antiguas
# 2. Usar un backend (base de datos)
```

---

### 6. "Module not found" o errores de importación

**Síntoma:**
```
Module not found: Can't resolve 'react'
```

**Causa:** Dependencias no instaladas

**Solución:**
```bash
# Reinstala todas las dependencias
rm -r node_modules
npm install

# En Windows (PowerShell alternativo):
Remove-Item -Path "node_modules" -Recurse
npm install
```

---

### 7. Estilos CSS no se aplican correctamente

**Síntoma:**
- Los botones se ven planos
- Colores incorrectos
- Layout roto

**Causa:** Archivos CSS no se cargan

**Solución:**
```bash
# 1. Verifica que todos los archivos .css existan:
# - src/index.css
# - src/App.css (no existe, se define en index.css)
# - src/components/*.css (todos los archivos CSS)

# 2. Limpia caché del navegador
# Presiona Ctrl+Shift+Delete en tu navegador

# 3. Recarga la página
# Ctrl+F5 (recarga forzada)
```

---

### 8. Errores de sintaxis en la consola

**Síntoma:**
```
SyntaxError: Unexpected token '<'
```

**Causa:** Vite está sirviendo HTML en lugar de JavaScript

**Solución:**
```bash
# 1. Detén el servidor (Ctrl+C)
# 2. Limpia caché
rm -r node_modules/.vite

# 3. Reinicia
npm run dev
```

---

### 9. "Cannot find module '../components/...'"

**Síntoma:**
```
Cannot find module '../components/HomeScreen'
```

**Causa:** Archivo no existe o ruta incorrecta

**Solución:**
```bash
# Verifica que existan todos estos archivos:
src/components/HomeScreen.jsx
src/components/TaskList.jsx
src/components/AddTask.jsx
src/components/TaskDetails.jsx

# Los nombres deben coincidir exactamente (mayúsculas/minúsculas)
```

---

### 10. Formular no funciona correctamente

**Síntoma:**
- No puedo escribir en los inputs
- Los botones no responden

**Causa:** Problemas con onChange handlers

**Solución:**
```bash
# 1. Abre DevTools (F12)
# 2. Ve a Consola
# 3. Busca errores de JavaScript
# 4. Si hay errores, copia la tarea que falla:
#    - Cierra el servidor
#    - Verifica el archivo del componente
#    - Revisa el handler onChange
```

---

### 11. localStorage se borra después de cerrar el navegador

**Síntoma:**
- Las tareas desaparecen cuando cierro Firefox/Chrome

**Posibles Causas:**
- Navegador en modo privado
- Configuración de privacidad muy restrictiva
- Extension de navegador limpiando datos

**Solución:**
```bash
# Usa la app en modo normal (no privado)

# Si usas una extensión que limpia datos:
# Desactívala o agrega excepciones
```

---

## 🐛 Debugging Avanzado

### Ver localStorage completo
```javascript
// En consola
console.table(JSON.parse(localStorage.getItem('tasks')))
```

### Ver estado de React (en App.jsx)
```javascript
// Abre DevTools → Aplicación → localStorage
// Busca la clave 'tasks'
```

### Verificar que Vite está ejecutando
```bash
# En la terminal donde corres npm run dev, deberías ver:
# VITE v5.0.8 ready in XXX ms
# ➜ Local:   http://localhost:3000/
# ➜ press h to show help
```

### Limpiar completamente el proyecto
```bash
# 1. Detén el servidor (Ctrl+C)
# 2. Elimina node_modules
rm -r node_modules

# 3. Elimina archivos de caché
rm -r .vite
rm -r dist

# 4. Reinstala todo
npm install

# 5. Inicia de nuevo
npm run dev
```

---

## ✅ Checklist de Verificación

Si la app no funciona, verifica:

- [ ] Node.js está instalado (node --version)
- [ ] npm está instalado (npm --version)
- [ ] Estoy en la carpeta correcta (dir muestra package.json)
- [ ] Ejecuté npm install (existe carpeta node_modules/)
- [ ] npm run dev no tiene errores
- [ ] La URL es correcta (http://localhost:3000)
- [ ] Recargué la página (F5)
- [ ] Abrí DevTools (F12) para ver errores
- [ ] localhost:3000 muestra la aplicación
- [ ] Puedo hacer clic en los botones
- [ ] Puedo escribir en los formularios

---

## 📞 Si Nada Funciona

Sigue estos pasos en orden:

1. **Cierra todo**
```bash
# Ctrl+C en la terminal
```

2. **Elimina y reinstala**
```bash
rm -r node_modules package-lock.json
npm install
```

3. **Limpia el navegador**
   - Abre DevTools (F12)
   - Limpia localStorage: `localStorage.clear()`
   - Limpia caché (Ctrl+Shift+Delete)

4. **Reinicia todo**
```bash
npm run dev
```

5. **Abre una URL nueva**
   - Cierra la pestaña anterior
   - Abre: http://localhost:3000

---

## 📝 Logs Útiles

Agrega estos logs al código para debugging:

En `App.jsx`:
```javascript
useEffect(() => {
  console.log('Tareas guardadas:', tasks);
  console.log('Vista actual:', currentView);
}, [tasks, currentView]);
```

En `TaskList.jsx`:
```javascript
useEffect(() => {
  console.log('Tareas pendientes:', pendingTasks.length);
  console.log('Tareas completadas:', completedTasks.length);
}, [tasks]);
```

---

## 🚀 Optimizaciones Si Va Lento

```javascript
// En App.jsx, agrega esto en useEffect del localStorage:
useEffect(() => {
  const timer = setTimeout(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Tareas guardadas:', tasks.length);
  }, 500); // Espera 500ms antes de guardar
  
  return () => clearTimeout(timer);
}, [tasks]);
```

---

**¿Aún tienes problemas? Verifica el archivo README.md o INSTRUCCIONES.md**
