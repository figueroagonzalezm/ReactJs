import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useTodos } from '../hooks/useTodos';
import { TodoFormData } from '../types/todo';

// Test suite: Groups related tests for the useTodos hook
// Note: For React 19, renderHook is built into @testing-library/react
describe('useTodos', () => {
  // Test case: Verifies initial state is an empty array
  it('should initialize with empty todos', () => {
    // renderHook: Testing Library utility for testing custom hooks
    const { result } = renderHook(() => useTodos());
    // result.current: Access the current return value of the hook
    expect(result.current.todos).toEqual([]);
  });

  // Test case: Verifies adding a new todo works correctly
  it('should add a new todo', () => {
    const { result } = renderHook(() => useTodos());
    const formData: TodoFormData = {
      title: 'Test Todo',
      description: 'Test Description',
    };

    // act(): Wraps state updates to ensure React processes them
    act(() => {
      result.current.addTodo(formData);
    });

    // Assertions: Verify the todo was added with correct properties
    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].title).toBe('Test Todo');
    expect(result.current.todos[0].description).toBe('Test Description');
    expect(result.current.todos[0].status).toBe('todo');
  });

  // Test case: Verifies editing an existing todo updates it correctly
  it('should edit an existing todo', () => {
    const { result } = renderHook(() => useTodos());
    const formData: TodoFormData = {
      title: 'Original Title',
      description: 'Original Description',
    };

    // Setup: Add a todo first
    act(() => {
      result.current.addTodo(formData);
    });

    const todoId = result.current.todos[0].id;
    const updatedData: TodoFormData = {
      title: 'Updated Title',
      description: 'Updated Description',
    };

    // Action: Edit the todo
    act(() => {
      result.current.editTodo(todoId, updatedData);
    });

    // Assertion: Verify the todo was updated
    expect(result.current.todos[0].title).toBe('Updated Title');
    expect(result.current.todos[0].description).toBe('Updated Description');
  });

  // Test case: Verifies deleting a todo removes it from the list
  it('should delete a todo', () => {
    const { result } = renderHook(() => useTodos());
    const formData: TodoFormData = {
      title: 'Test Todo',
      description: 'Test Description',
    };

    // Setup: Add a todo
    act(() => {
      result.current.addTodo(formData);
    });

    const todoId = result.current.todos[0].id;

    // Action: Delete the todo
    act(() => {
      result.current.deleteTodo(todoId);
    });

    // Assertion: Verify todos array is empty
    expect(result.current.todos).toHaveLength(0);
  });

  // Test case: Verifies changing status updates the todo correctly
  it('should change todo status', () => {
    const { result } = renderHook(() => useTodos());
    const formData: TodoFormData = {
      title: 'Test Todo',
      description: 'Test Description',
    };

    // Setup: Add a todo
    act(() => {
      result.current.addTodo(formData);
    });

    const todoId = result.current.todos[0].id;

    // Action: Change status to in-progress
    act(() => {
      result.current.changeStatus(todoId, 'in-progress');
    });

    expect(result.current.todos[0].status).toBe('in-progress');

    // Action: Change status to done
    act(() => {
      result.current.changeStatus(todoId, 'done');
    });

    expect(result.current.todos[0].status).toBe('done');
  });

  // Test case: Verifies filtering todos by status works correctly
  it('should filter todos by status', () => {
    const { result } = renderHook(() => useTodos());

    // Setup: Add multiple todos
    act(() => {
      result.current.addTodo({ title: 'Todo 1', description: 'Desc 1' });
      result.current.addTodo({ title: 'Todo 2', description: 'Desc 2' });
      result.current.addTodo({ title: 'Todo 3', description: 'Desc 3' });
    });

    // Action: Change statuses of different todos
    act(() => {
      result.current.changeStatus(result.current.todos[1].id, 'in-progress');
      result.current.changeStatus(result.current.todos[2].id, 'done');
    });

    // Assertions: Verify filtering returns correct counts for each status
    expect(result.current.getTodosByStatus('todo')).toHaveLength(1);
    expect(result.current.getTodosByStatus('in-progress')).toHaveLength(1);
    expect(result.current.getTodosByStatus('done')).toHaveLength(1);
  });
});
