import React from 'react'
import './HomeScreen.css'

function HomeScreen({ pendingCount, completedCount, onNavigate }) {
  return (
    <div className="home-screen">
      <div className="home-header">
        <h1>📋 My Tasks</h1>
        <p>Gesiona tus tareas de forma fácil</p>
      </div>

      <div className="stats-container">
        <div className="stat-card pending">
          <div className="stat-number">{pendingCount}</div>
          <div className="stat-label">Tareas Pendientes</div>
        </div>

        <div className="stat-card completed">
          <div className="stat-number">{completedCount}</div>
          <div className="stat-label">Tareas Completadas</div>
        </div>
      </div>

      <div className="home-actions">
        <button 
          className="btn btn-primary btn-large"
          onClick={() => onNavigate('add')}
        >
          ➕ Agregar Nueva Tarea
        </button>

        <button 
          className="btn btn-secondary btn-large"
          onClick={() => onNavigate('list')}
        >
          📝 Ver Todas las Tareas
        </button>
      </div>

      <div className="quick-stats">
        <div className="total-tasks">
          <span className="total-number">{pendingCount + completedCount}</span>
          <span className="total-label">Total de tareas</span>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
