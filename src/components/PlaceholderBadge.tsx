import React from 'react';

interface PlaceholderBadgeProps {
  label: string;
  field?: string;
  hint?: string;
  className?: string;
}

// Renders real values as plain text. Unfilled [PLACEHOLDER] tags are hidden.
export const PlaceholderBadge: React.FC<PlaceholderBadgeProps> = ({ label, className = '' }) => {
  if (!label || label.trim().startsWith('[')) return null;
  return <span className={className}>{label}</span>;
};
