import React, { useState } from 'react';
import { TaskList } from './components/TaskList/TaskList';
import type { Task, TaskStatus } from './types';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Learn React',
    description: 'Read the React docs and build a small app.',
    status: 'pending',
    priority: 'high',
    dueDate: '2025-08-15',
  },
  {
    id: '2',
    title: 'Write Blog Post',
    description: 'Write about the new React features.',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2025-08-10',
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

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

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>Task Manager</h1>
      <TaskList
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;