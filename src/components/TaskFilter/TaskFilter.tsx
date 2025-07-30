import React, { useState } from 'react';
import type { TaskFilterProps, TaskStatus } from '../../types';
import './TaskFilter.css';

//onFilterChange is a function passed from the parent that this component will call when the user changes the filters
export const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
    const [status, setStatus] = useState<TaskStatus | ''>('');
    const [priority, setPriority] = useState<'low' | 'medium' | 'high' | ''>('');

    // Handle status change
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as TaskStatus | '';
        setStatus(value);
        onFilterChange({ status: value || undefined, priority: priority || undefined });
    };

    // Handle priority change
    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as 'low' | 'medium' | 'high' | '';
        setPriority(value);
        onFilterChange({ status: status || undefined, priority: value || undefined });
    };

    return (
        <div className="task-filter">
            <label>
                Status:
                <select value={status} onChange={handleStatusChange}>
                    <option value="">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </label>

            <label>
                Priority:
                <select value={priority} onChange={handlePriorityChange}>
                    <option value="">All Priorities</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
        </div>
    );
};
