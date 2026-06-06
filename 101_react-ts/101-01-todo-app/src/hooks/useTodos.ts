import { useState, useCallback } from 'react';
import type { Todo, TodoStatus, TodoFormData } from '../types/todo';

// Custom Hook: Encapsulates all todo-related state and logic
// This separates business logic from UI components (separation of concerns)
export const useTodos = (initialTodos: Todo[] = []) => {
  // State: Holds the array of all todos
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  // useCallback: Memoizes the function to prevent unnecessary re-renders
  // Dependencies array [] means this function is created once and never changes
  const addTodo = useCallback((formData: TodoFormData) => {
    const newTodo: Todo = {
      // crypto.randomUUID() generates a unique ID (available in modern browsers)
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      status: 'todo', // New todos always start in "todo" status
      createdAt: new Date(),
    };
    // Functional update: Uses prev state to ensure we have the latest todos
    // Spread operator [...prev, newTodo] creates a new array (immutability)
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  // Edit function: Updates title and description while keeping other fields intact
  const editTodo = useCallback((id: string, formData: TodoFormData) => {
    setTodos((prev) =>
      // map() creates a new array - immutability principle
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, title: formData.title, description: formData.description } // Spread to preserve other fields
          : todo // Return unchanged todos
      )
    );
  }, []);

  // Delete function: Removes a todo by filtering it out
  const deleteTodo = useCallback((id: string) => {
    // filter() creates a new array without the deleted todo
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  // Status change: Updates only the status field of a specific todo
  const changeStatus = useCallback((id: string, status: TodoStatus) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, status } : todo))
    );
  }, []);

  // Derived state function: Filters todos by status
  // useCallback with [todos] dependency - recreates when todos change
  const getTodosByStatus = useCallback(
    (status: TodoStatus) => todos.filter((todo) => todo.status === status),
    [todos] // Dependency: function updates when todos array changes
  );

  // Return object: Exposes state and methods to components
  return {
    todos,
    addTodo,
    editTodo,
    deleteTodo,
    changeStatus,
    getTodosByStatus,
  };
};
