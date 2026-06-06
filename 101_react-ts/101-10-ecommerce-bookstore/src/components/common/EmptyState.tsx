import './EmptyState.css';

interface EmptyStateProps {
  message: string;
  description?: string;
}

// Reusable empty state component for displaying "no results" or "no items" UI
// Uses optional props pattern - description is optional with the ? syntax
export const EmptyState = ({ message, description }: EmptyStateProps) => {
  return (
    <div className="empty-state">
      <svg
        className="empty-state__icon"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M32 8L8 20V44L32 56L56 44V20L32 8Z" />
        <path d="M32 32L8 20M32 32L56 20M32 32V56" />
      </svg>
      <h3 className="empty-state__message">{message}</h3>
      {/* Conditional rendering: only show description paragraph if it exists */}
      {description && <p className="empty-state__description">{description}</p>}
    </div>
  );
};
