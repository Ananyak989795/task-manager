import React from 'react';
import './styles/App.css';
import TaskCard from './components/TaskCard';

const sampleTasks = [
  {
    id: 1,
    title: "Build TaskCard Component",
    description: "Create a reusable card component for displaying tasks.",
    dueDate: "2024-06-01",
    priority: "High",
    status: "Done"
  },
  {
    id: 2,
    title: "Setup MongoDB Atlas",
    description: "Create a free cluster and configure network access.",
    dueDate: "2024-06-02",
    priority: "Medium",
    status: "Done"
  },
  {
    id: 3,
    title: "Build Login Page",
    description: "Create a login and signup form with validation.",
    dueDate: "2024-06-05",
    priority: "High",
    status: "Pending"
  },
  {
    id: 4,
    title: "Add Dark Mode",
    description: "Implement a dark/light mode toggle using CSS variables.",
    dueDate: "2024-06-10",
    priority: "Low",
    status: "Pending"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Smart Task Manager</h1>
      <div className="task-list">
        {sampleTasks.map(task => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            priority={task.priority}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;