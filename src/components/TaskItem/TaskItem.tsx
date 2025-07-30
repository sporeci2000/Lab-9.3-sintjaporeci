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

            {/* Buttons for actions */}
            <button onClick={() => onStatusChange(task.id, 'completed')}>
                Mark Completed
            </button>
            <button className="delete-btn" onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </div>
    );
};