import React from 'react';

interface PlaceholderBadgeProps {
  label: string;
  field?: string;
  hint?: string;
  className?: string;
}

export const PlaceholderBadge: React.FC<PlaceholderBadgeProps> = ({ label, field, hint, className = '' }) => {
  return (
    <span
      title={hint || `User editable field: ${field || label}`}
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-mono font-semibold bg-gold/20 text-gold-light border border-gold/40 shadow-sm cursor-help hover:bg-gold/30 transition-colors mx-0.5 ${className}`}
    >
      <span className="mr-1 text-[10px] text-gold/70">✎</span>
      {label}
    </span>
  );
};
