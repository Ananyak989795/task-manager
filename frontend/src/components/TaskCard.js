import React from 'react';
import './TaskCard.css';

function TaskCard({ title, description, dueDate, priority, status }) {
  const priorityColors = {
    High: '#ef4444',
    Medium: '#f59e0b',
    Low: '#22c55e'
  };

  return (
    <div className="task-card">
      <div className="task-card-header">
        <h3 className="task-title">{title}</h3>
        <span
          className="priority-badge"
          style={{ backgroundColor: priorityColors[priority] }}
        >
          {priority}
        </span>
      </div>

      <p className="task-description">{description}</p>

      <div className="task-card-footer">
        <span className="due-date">📅 {dueDate}</span>
        <span className={`status-badge ${status === 'Done' ? 'done' : 'pending'}`}>
          {status === 'Done' ? '✅ Done' : '⏳ Pending'}
        </span>
      </div>
    </div>
  );
}

export default TaskCard;