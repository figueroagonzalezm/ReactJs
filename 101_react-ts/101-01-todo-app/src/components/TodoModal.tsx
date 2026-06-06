import { useState, useEffect } from 'react';
import type { TodoFormData } from '../types/todo';

// Props interface: Defines what data this component expects from parent
interface TodoModalProps {
  isOpen: boolean; // Controls modal visibility
  onClose: () => void; // Callback function - no parameters, no return value
  onSubmit: (formData: TodoFormData) => void; // Callback with form data parameter
  initialData?: TodoFormData; // Optional prop (?) - used for editing existing todos
  title: string; // Modal title text
}

// Controlled component: Form inputs are controlled by React state
export const TodoModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  title,
}: TodoModalProps) => {
  // Local state: Manages form input values
  const [formData, setFormData] = useState<TodoFormData>({
    title: '',
    description: '',
  });

  // useEffect: Syncs form state with initialData prop
  // Runs when initialData or isOpen changes
  useEffect(() => {
    if (initialData) {
      // Editing mode: populate form with existing data
      setFormData(initialData);
    } else {
      // Add mode: reset form to empty values
      setFormData({ title: '', description: '' });
    }
  }, [initialData, isOpen]); // Dependencies: re-run when these change

  // Event handler: Prevents default form submission and validates
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page reload on form submit
    if (formData.title.trim()) { // Basic validation: title is required
      onSubmit(formData); // Call parent's submit handler
      setFormData({ title: '', description: '' }); // Reset form
      onClose(); // Close modal
    }
  };

  // Early return: If modal is closed, render nothing
  if (!isOpen) return null;

  return (
    // Event bubbling: Clicking overlay calls onClose
    <div className="modal-overlay" onClick={onClose}>
      {/* stopPropagation: Prevents clicks inside modal from closing it */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            {/* Controlled input: value comes from state */}
            <input
              type="text"
              id="title"
              value={formData.title}
              // onChange: Updates state on every keystroke
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Enter todo title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            {/* Controlled textarea: same pattern as input */}
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Enter todo description"
              rows={4}
            />
          </div>
          <div className="modal-actions">
            {/* type="button": Prevents form submission */}
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            {/* type="submit": Triggers form onSubmit handler */}
            {/* Conditional text: Shows "Update" or "Add" based on mode */}
            <button type="submit" className="btn-primary">
              {initialData ? 'Update' : 'Add'} Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
