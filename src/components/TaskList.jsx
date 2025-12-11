import React from 'react'
import './TaskList.css'

function TaskList({ tasks, onAddTask, onDeleteTask, onToggleComplete, onViewDetails, onBack }) {
  const pendingTasks = tasks.filter(task => !task.completed)
  const completedTasks = tasks.filter(task => task.completed)

  const getTypeIcon = (type) => {
    const icons = {
      'trabajo': '💼',
      'casa': '🏠',
      'negocios': '💰'
    }
    return icons[type] || '📌'
  }

  return (
    <div className="task-list-container">
      <div className="task-list-header">
        <button className="btn-back" onClick={onBack}>← Atrás</button>
        <h1>📝 Mis Tareas</h1>
        <button className="btn-add-floating" onClick={onAddTask}>➕</button>
      </div>

      <div className="tasks-content">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <p className="empty-icon">📭</p>
            <p className="empty-text">No hay tareas aún</p>
            <button className="btn btn-primary" onClick={onAddTask}>
              Crear primera tarea
            </button>
          </div>
        ) : (
          <>
            {pendingTasks.length > 0 && (
              <div className="task-section">
                <h2 className="section-title">
                  ⏳ Pendientes ({pendingTasks.length})
                </h2>
                <div className="tasks-list">
                  {pendingTasks.map(task => (
                    <div 
                      key={task.id} 
                      className="task-card pending-task"
                      onClick={() => onViewDetails(task)}
                    >
                      <div className="task-checkbox">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={(e) => {
                            e.stopPropagation()
                            onToggleComplete(task.id)
                          }}
                        />
                      </div>

                      <div className="task-info">
                        <div className="task-header">
                          <span className="task-type">{getTypeIcon(task.type)}</span>
                          <h3 className="task-title">{task.title}</h3>
                        </div>
                        <p className="task-description">{task.description}</p>
                        <span className="task-date">{task.createdAt}</span>
                      </div>

                      <button
                        className="btn-delete"
                        onClick={(e) => {
                          e.stopPropagation()
                          onDeleteTask(task.id)
                        }}
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {completedTasks.length > 0 && (
              <div className="task-section">
                <h2 className="section-title">
                  ✅ Completadas ({completedTasks.length})
                </h2>
                <div className="tasks-list">
                  {completedTasks.map(task => (
                    <div 
                      key={task.id} 
                      className="task-card completed-task"
                      onClick={() => onViewDetails(task)}
                    >
                      <div className="task-checkbox">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={(e) => {
                            e.stopPropagation()
                            onToggleComplete(task.id)
                          }}
                        />
                      </div>

                      <div className="task-info">
                        <div className="task-header">
                          <span className="task-type">{getTypeIcon(task.type)}</span>
                          <h3 className="task-title">{task.title}</h3>
                        </div>
                        <p className="task-description">{task.description}</p>
                        <span className="task-date">{task.createdAt}</span>
                      </div>

                      <button
                        className="btn-delete"
                        onClick={(e) => {
                          e.stopPropagation()
                          onDeleteTask(task.id)
                        }}
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default TaskList
