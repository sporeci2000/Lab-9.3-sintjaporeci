import React, { useState } from 'react';
import { TaskList } from './components/TaskList/TaskList';
import { TaskFilter } from './components/TaskFilter/TaskFilter';
import type { Task, TaskStatus } from './types';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    status: 'pending',
    priority: 'high',
    dueDate: '2025-07-30',
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description 2',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2025-08-1',
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Description 3',
    status: 'completed',
    priority: 'low',
    dueDate: '2025-07-29',
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filters, setFilters] = useState<{ status?: TaskStatus; priority?: 'low' | 'medium' | 'high' }>({});

  // Update status of a task
  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // Delete a task
  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  // Update filters when changed in TaskFilter component
  const handleFilterChange = (newFilters: { status?: TaskStatus; priority?: 'low' | 'medium' | 'high' }) => {
    setFilters(newFilters);
  };

  // Filter tasks based on selected filters
  const filteredTasks = tasks.filter((task) => {
    const statusMatch = filters.status ? task.status === filters.status : true;
    const priorityMatch = filters.priority ? task.priority === filters.priority : true;
    return statusMatch && priorityMatch;
  });

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>Task Manager App</h1>

      <TaskFilter onFilterChange={handleFilterChange} />

      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
