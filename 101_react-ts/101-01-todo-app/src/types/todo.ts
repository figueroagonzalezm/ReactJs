// Type definition: Union type restricts status to only these 3 specific string values
export type TodoStatus = 'todo' | 'in-progress' | 'done';

// Interface: Defines the shape of a Todo object with strict typing
export interface Todo {
  id: string;
  title: string;
  description: string;
  status: TodoStatus; // Uses the union type above
  createdAt: Date;
}

// Interface for form data - separates form concerns from the full Todo object
// This is useful because forms don't need id, status, or createdAt
export interface TodoFormData {
  title: string;
  description: string;
}
