import type { Todo, TodoStatus } from '../types/todo';

// Props interface: Defines the callback functions this component needs
interface TodoCardProps {
  todo: Todo; // The todo object to display
  onEdit: () => void; // Called when edit button is clicked
  onDelete: () => void; // Called when delete button is clicked
  onStatusChange: (status: TodoStatus) => void; // Called when status dropdown changes
}

// Presentational component: Receives data and callbacks via props
// Does not manage its own state - "dumb component" pattern
export const TodoCard = ({
  todo,
  onEdit,
  onDelete,
  onStatusChange,
}: TodoCardProps) => {
  return (
    <div className="todo-card">
      <div className="todo-card-header">
        <h3>{todo.title}</h3>
        <div className="todo-card-actions">
          {/* onClick: Calls the callback function passed from parent */}
          <button
            className="icon-btn edit-btn"
            onClick={onEdit}
            title="Edit todo"
          >
            ✏️
          </button>
          <button
            className="icon-btn delete-btn"
            onClick={onDelete}
            title="Delete todo"
          >
            🗑️
          </button>
        </div>
      </div>
      {/* Conditional rendering: Only show description if it exists */}
      {todo.description && (
        <p className="todo-description">{todo.description}</p>
      )}
      <div className="todo-card-footer">
        {/* Controlled select: value is controlled by todo.status prop */}
        <select
          value={todo.status}
          // Type assertion: Cast string to TodoStatus type
          onChange={(e) => onStatusChange(e.target.value as TodoStatus)}
          className="status-select"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        {/* Date formatting: Convert Date object to readable string */}
        <span className="todo-date">
          {new Date(todo.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};
