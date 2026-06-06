# TodoBoard Application

A modern, responsive TodoBoard application built with React, TypeScript, and Vite. This application demonstrates core React concepts including custom hooks, component composition, form handling, and state management.

## Features

✅ **Full CRUD Operations**
- Add new todo items with title and description
- Edit existing todos
- Delete todos with confirmation
- Change todo status between "To Do", "In Progress", and "Done"

✅ **Organized Board Layout**
- Three-column Kanban-style board
- Todos grouped by status
- Visual todo count badges

✅ **User Experience**
- Modal-based add/edit forms
- Responsive design for mobile, tablet, and desktop
- Hover effects and smooth transitions
- Confirmation dialogs for destructive actions

✅ **Code Quality**
- TypeScript for type safety
- Custom hooks for business logic separation
- Unit tests with Vitest and Testing Library
- Educational comments throughout the code

## Project Structure

```
src/
├── types/
│   └── todo.ts              # TypeScript interfaces and types
├── hooks/
│   └── useTodos.ts          # Custom hook for todo state management
├── components/
│   ├── TodoBoard.tsx        # Main orchestrator component
│   ├── TodoColumn.tsx       # Column container for status groups
│   ├── TodoCard.tsx         # Individual todo card display
│   └── TodoModal.tsx        # Modal form for add/edit
├── styles/
│   └── TodoBoard.css        # Responsive styles
└── tests/
    ├── useTodos.test.ts     # Hook unit tests
    └── setup.ts             # Test configuration
```

## Key React Concepts Demonstrated

### 1. **Custom Hooks** (`useTodos.ts`)
- Encapsulates todo state and operations
- Uses `useState` for state management
- Uses `useCallback` for memoized functions
- Separates business logic from UI components

### 2. **Component Composition**
- **TodoBoard**: Main container, orchestrates child components
- **TodoColumn**: Groups todos by status
- **TodoCard**: Displays individual todo items
- **TodoModal**: Reusable form for add/edit operations

### 3. **Props and Callbacks**
- Props drilling pattern for passing data and functions
- Callback functions for child-to-parent communication
- TypeScript interfaces for prop type safety

### 4. **Controlled Components**
- Form inputs controlled by React state
- `value` and `onChange` pattern
- Synchronization between state and UI

### 5. **Conditional Rendering**
- Empty state display when no todos exist
- Modal visibility control
- Dynamic button text (Add vs Update)

### 6. **Event Handling**
- Form submission with validation
- Click handlers for buttons
- Event propagation control (stopPropagation)

### 7. **State Management Patterns**
- Immutable updates using spread operator
- Functional state updates for reliability
- Derived state with filtering functions

## Running the Application

### Development Mode
```bash
npm run dev
```
Visit `http://localhost:5173` to view the application.

### Build for Production
```bash
npm run build
```

### Run Tests
```bash
# Run tests once
npm test -- --run

# Run tests in watch mode
npm test

# Run tests with UI
npm run test:ui
```

### Linting
```bash
npm run lint
```

## Learning Points

### TypeScript
- **Union types**: `TodoStatus = 'todo' | 'in-progress' | 'done'`
- **Interfaces**: Define object shapes for type safety
- **Type assertions**: Cast values when TypeScript can't infer (`as TodoStatus`)

### React Patterns
- **Separation of concerns**: UI components vs. business logic (hooks)
- **Single responsibility**: Each component has one clear purpose
- **Composition over inheritance**: Build complex UIs from simple components

### State Management
- **Lifting state up**: Shared state lives in common ancestor
- **Immutability**: Never mutate state directly, always create new objects/arrays
- **Derived state**: Calculate filtered data from source state

### Forms
- **Controlled inputs**: React state as single source of truth
- **Form validation**: Check required fields before submission
- **Event.preventDefault()**: Prevent default form submission behavior

### CSS
- **CSS Grid**: Responsive column layout
- **Flexbox**: Component internal layouts
- **Media queries**: Adapt layout for different screen sizes
- **Transitions**: Smooth hover and interaction effects

## Browser Compatibility

Requires a modern browser with support for:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- `crypto.randomUUID()` (for ID generation)

## Testing

The application includes comprehensive unit tests for the `useTodos` custom hook:

- ✅ Initialize with empty state
- ✅ Add new todos
- ✅ Edit existing todos
- ✅ Delete todos
- ✅ Change todo status
- ✅ Filter todos by status

Tests use:
- **Vitest**: Fast unit test framework
- **@testing-library/react**: Testing utilities for React components and hooks
- **jsdom**: Browser environment simulation

## Future Enhancements

Potential features to add:
- 🎯 Drag-and-drop between columns
- 💾 Local storage persistence
- 🔍 Search and filter functionality
- 🏷️ Tags or categories
- 📅 Due dates and priorities
- ✨ Animations for adding/removing items
- 🌙 Dark mode toggle

## License

This is a learning project created for educational purposes.
