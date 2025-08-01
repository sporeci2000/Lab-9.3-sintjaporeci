//This creates a custom type 
export type TaskStatus = 'pending' | 'in-progress' | 'completed';

//Task Interface
export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
}

// Props for TaskList component
export interface TaskListProps {
    tasks: Task[];  //The tasks to display
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

// Props for TaskItem component
export interface TaskItemProps {
    task: Task; //The single task object to display
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void; //A function to delete a task 
}

// Props for TaskFilter component
export interface TaskFilterProps {
    onFilterChange: (filters: {
        status?: TaskStatus;
        priority?: 'low' | 'medium' | 'high';
    }) => void;
}
