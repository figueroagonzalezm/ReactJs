import type { Todo, TodoStatus } from '../types/todo';
import { TodoCard } from './TodoCard';

// Props interface: Column receives filtered todos and callback functions
interface TodoColumnProps {
  title: string; // Column header text
  status: TodoStatus; // Which status this column represents
  todos: Todo[]; // Array of todos to display in this column
  onEdit: (todo: Todo) => void; // Callback receives the full todo object
  onDelete: (id: string) => void; // Callback receives just the id
  onStatusChange: (id: string, status: TodoStatus) => void; // Callback receives id and new status
}

// Container component: Organizes TodoCards for a specific status
export const TodoColumn = ({
  title,
  status,
  todos,
  onEdit,
  onDelete,
  onStatusChange,
}: TodoColumnProps) => {
  return (
    <div className="todo-column">
      <div className="column-header">
        <h2>{title}</h2>
        {/* Dynamic count: Shows number of todos in this column */}
        <span className="todo-count">{todos.length}</span>
      </div>
      <div className="todo-list">
        {/* Conditional rendering: Show empty state or todo list */}
        {todos.length === 0 ? (
          <div className="empty-state">No todos yet</div>
        ) : (
          // map(): Renders a TodoCard for each todo in the array
          todos.map((todo) => (
            <TodoCard
              key={todo.id} // React key: Helps React identify which items changed
              todo={todo}
              // Arrow functions: Create new functions that pass specific data to callbacks
              onEdit={() => onEdit(todo)} // Passes the full todo object
              onDelete={() => onDelete(todo.id)} // Passes just the id
              onStatusChange={(newStatus) => onStatusChange(todo.id, newStatus)} // Passes id and new status
            />
          ))
        )}
      </div>
    </div>
  );
};
