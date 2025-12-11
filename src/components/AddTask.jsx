import React, { useState } from 'react'
import './AddTask.css'

function AddTask({ onAddTask, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'trabajo'
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.title.trim()) {
      newErrors.title = 'El título es requerido'
    }
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onAddTask(formData)
      setFormData({
        title: '',
        description: '',
        type: 'trabajo'
      })
    }
  }

  return (
    <div className="add-task-container">
      <div className="add-task-header">
        <button className="btn-back" onClick={onCancel}>← Atrás</button>
        <h1>➕ Nueva Tarea</h1>
      </div>

      <form className="add-task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ingresa el título de la tarea"
            className={errors.title ? 'input-error' : ''}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripción *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe la tarea..."
            rows="4"
            className={errors.description ? 'input-error' : ''}
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="type">Tipo de Tarea</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="select-input"
          >
            <option value="trabajo">💼 Trabajo</option>
            <option value="casa">🏠 Casa</option>
            <option value="negocios">💰 Negocios</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary btn-submit">
            Guardar Tarea
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTask
