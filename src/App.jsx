import React, { useState, useEffect } from 'react'
import HomeScreen from './components/HomeScreen'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import TaskDetails from './components/TaskDetails'

function App() {
  const [tasks, setTasks] = useState([])
  const [currentView, setCurrentView] = useState('home') // 'home', 'list', 'add', 'details'
  const [selectedTask, setSelectedTask] = useState(null)

  // Cargar tareas desde localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Guardar tareas en localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
      completed: false,
      createdAt: new Date().toLocaleDateString()
    }
    setTasks([...tasks, newTask])
    setCurrentView('list')
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    setCurrentView('list')
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const openTaskDetails = (task) => {
    setSelectedTask(task)
    setCurrentView('details')
  }

  const pendingTasks = tasks.filter(task => !task.completed)
  const completedTasks = tasks.filter(task => task.completed)

  return (
    <div className="app-container">
      <div className="app-content">
        {currentView === 'home' && (
          <HomeScreen
            pendingCount={pendingTasks.length}
            completedCount={completedTasks.length}
            onNavigate={setCurrentView}
          />
        )}

        {currentView === 'list' && (
          <TaskList
            tasks={tasks}
            onAddTask={() => setCurrentView('add')}
            onDeleteTask={deleteTask}
            onToggleComplete={toggleComplete}
            onViewDetails={openTaskDetails}
            onBack={() => setCurrentView('home')}
          />
        )}

        {currentView === 'add' && (
          <AddTask
            onAddTask={addTask}
            onCancel={() => setCurrentView('list')}
          />
        )}

        {currentView === 'details' && selectedTask && (
          <TaskDetails
            task={selectedTask}
            onDelete={() => {
              deleteTask(selectedTask.id)
            }}
            onToggleComplete={() => {
              toggleComplete(selectedTask.id)
              setCurrentView('list')
            }}
            onBack={() => setCurrentView('list')}
          />
        )}
      </div>
    </div>
  )
}

export default App
