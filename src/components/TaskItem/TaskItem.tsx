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

            <div className="bottom-part">

                <span className={`priority ${task.priority}`}>
                    Priority: <strong>{task.priority}</strong>
                </span>
                <span className="due-date">Due: {task.dueDate}</span>
            </div>
        </div>
    );
};