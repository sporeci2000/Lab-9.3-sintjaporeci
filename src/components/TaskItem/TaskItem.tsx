import React from 'react';
import type { TaskItemProps } from '../../types';
import './TaskItem.css';

//Declare the component
export const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange, onDelete }) => {
    return (
        <div
            className={`task-item ${task.status} ${task.priority}`}
        >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: <strong>{task.status}</strong></p>
            <p>Priority: <strong>{task.priority}</strong></p>
            <p>Due: {task.dueDate}</p>

            <select
                value={task.status} // show current status
                onChange={(e) => onStatusChange(task.id, e.target.value as 'pending' | 'in-progress' | 'completed')}
            >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>


            <button
                onClick={() => onDelete(task.id)}
                className="delete-btn"
            >
                Delete
            </button>
        </div>
    );
};