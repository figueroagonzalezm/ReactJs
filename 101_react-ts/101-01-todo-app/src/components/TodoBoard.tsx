import { useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoColumn } from './TodoColumn';
import { TodoModal } from './TodoModal';
import  type { Todo, TodoFormData } from '../types/todo';
import '../styles/TodoBoard.css';

// Main component: Orchestrates all child components and manages UI state
export const TodoBoard = () => {
  // Custom hook: Provides todos state and all CRUD operations
  // Destructuring: Extracts specific functions and data from the hook's return object
  const { todos, addTodo, editTodo, deleteTodo, changeStatus, getTodosByStatus } =
    useTodos();

  // Local UI state: Controls modal visibility (separate from todo data)
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Local UI state: Tracks which todo is being edited (null = add mode)
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  // Handler: Opens modal in "add" mode
  const handleAddClick = () => {
    setEditingTodo(null); // Clear editing state
    setIsModalOpen(true); // Open modal
  };

  // Handler: Opens modal in "edit" mode with existing todo data
  const handleEditClick = (todo: Todo) => {
    setEditingTodo(todo); // Set which todo to edit
    setIsModalOpen(true); // Open modal
  };

  // Handler: Determines whether to add or edit based on editingTodo state
  const handleModalSubmit = (formData: TodoFormData) => {
    if (editingTodo) {
      // Edit mode: Update existing todo
      editTodo(editingTodo.id, formData);
    } else {
      // Add mode: Create new todo
      addTodo(formData);
    }
  };

  // Handler: Asks for confirmation before deleting
  const handleDelete = (id: string) => {
    // window.confirm: Native browser confirmation dialog
    if (window.confirm('Are you sure you want to delete this todo?')) {
      deleteTodo(id);
    }
  };

  return (
    <div className="todo-board-container">
      <header className="board-header">
        <h1>📋 Todo Board</h1>
        <button className="btn-primary" onClick={handleAddClick}>
          + Add Todo
        </button>
      </header>

      <div className="board-columns">
        {/* Three columns: Each gets filtered todos for its status */}
        {/* Props drilling: Passing callbacks down through component tree */}
        <TodoColumn
          title="To Do"
          status="todo"
          todos={getTodosByStatus('todo')} // Only todos with status='todo'
          onEdit={handleEditClick}
          onDelete={handleDelete}
          onStatusChange={changeStatus}
        />
        <TodoColumn
          title="In Progress"
          status="in-progress"
          todos={getTodosByStatus('in-progress')} // Only todos with status='in-progress'
          onEdit={handleEditClick}
          onDelete={handleDelete}
          onStatusChange={changeStatus}
        />
        <TodoColumn
          title="Done"
          status="done"
          todos={getTodosByStatus('done')} // Only todos with status='done'
          onEdit={handleEditClick}
          onDelete={handleDelete}
          onStatusChange={changeStatus}
        />
      </div>

      {/* Modal: Conditionally renders based on isModalOpen state */}
      <TodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        // Conditional prop: Pass initialData only when editing
        initialData={
          editingTodo
            ? { title: editingTodo.title, description: editingTodo.description }
            : undefined
        }
        // Dynamic title: Changes based on add vs edit mode
        title={editingTodo ? 'Edit Todo' : 'Add New Todo'}
      />
    </div>
  );
};
