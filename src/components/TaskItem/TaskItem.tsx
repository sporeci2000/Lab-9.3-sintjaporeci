import React from 'react';
import type { TaskItemProps } from '../../types';
import './TaskItem.css';

//Declare the component
export const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange, onDelete }) => {
    return (
        <div
            className={`task-item ${task.status} ${task.priority}`}

        ><div className="title-header">
                <h3>{task.title}</h3>



                <div className="task-buttons">
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
            </div>

            <p>{task.description}</p>
            <p>Priority: <strong>{task.priority}</strong></p>
            <p>Due: {task.dueDate}</p>
        </div>
    );
};