import React from 'react'
import './TaskDetails.css'

function TaskDetails({ task, onDelete, onToggleComplete, onBack }) {
  const getTypeLabel = (type) => {
    const labels = {
      'trabajo': '💼 Trabajo',
      'casa': '🏠 Casa',
      'negocios': '💰 Negocios'
    }
    return labels[type] || type
  }

  return (
    <div className="task-details-container">
      <div className="task-details-header">
        <button className="btn-back" onClick={onBack}>← Atrás</button>
        <h1>📋 Detalles de Tarea</h1>
      </div>

      <div className="task-details-content">
        <div className="task-detail-card">
          <div className="detail-status">
            {task.completed ? (
              <span className="status-badge completed">✅ Completada</span>
            ) : (
              <span className="status-badge pending">⏳ Pendiente</span>
            )}
          </div>

          <div className="detail-section">
            <h2 className="detail-title">{task.title}</h2>
          </div>

          <div className="detail-section">
            <h3 className="detail-label">📝 Descripción</h3>
            <p className="detail-text">{task.description}</p>
          </div>

          <div className="detail-section">
            <h3 className="detail-label">🏷️ Tipo de Tarea</h3>
            <p className="detail-text">{getTypeLabel(task.type)}</p>
          </div>

          <div className="detail-section">
            <h3 className="detail-label">📅 Fecha de Creación</h3>
            <p className="detail-text">{task.createdAt}</p>
          </div>

          <div className="detail-actions">
            <button 
              className={`btn btn-large ${task.completed ? 'btn-secondary' : 'btn-success'}`}
              onClick={onToggleComplete}
            >
              {task.completed ? '↩️ Marcar como Pendiente' : '✅ Marcar como Completada'}
            </button>

            <button 
              className="btn btn-danger btn-large"
              onClick={() => {
                if (window.confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
                  onDelete()
                }
              }}
            >
              🗑️ Eliminar Tarea
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDetails
