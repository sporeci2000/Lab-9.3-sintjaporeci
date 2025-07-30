import React from 'react';
import type { TaskListProps } from '../../types';
import { TaskItem } from '../TaskItem/TaskItem';
import './TaskList.css';

//The functional component TaskList
export const TaskList: React.FC<TaskListProps> = ({ tasks, onStatusChange, onDelete }) => {
    //Checks if there are no tasks
    if (tasks.length === 0) {
        return <p className="no-tasks">No tasks available.</p>;
    }

    return (
        //Loop over each task in the tasks array
        <div className="task-list">
    
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onStatusChange={onStatusChange}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};