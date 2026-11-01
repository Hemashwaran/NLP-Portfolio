import React, { useState } from 'react';
import { KEY_TERMS } from '../data/terms';
import { Info } from 'lucide-react';

interface ChalkTooltipProps {
  termKey: string;
  children: React.ReactNode;
}

export const ChalkTooltip: React.FC<ChalkTooltipProps> = ({ termKey, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const normalizedKey = termKey.toLowerCase().replace(/[^a-z]/g, '');
  const termData = KEY_TERMS[normalizedKey] || {
    term: termKey,
    definition: "Core computational linguistic concept covered in class.",
  };

  return (
    <span className="relative inline-block group">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="border-b-2 border-dotted border-gold text-chalk hover:text-gold cursor-help transition-colors text-left font-medium inline-flex items-center gap-0.5"
        aria-label={`Definition of ${termData.term}`}
      >
        <span>{children}</span>
        <span className="opacity-0 group-hover:opacity-100 text-[10px] text-gold transition-opacity">?</span>
      </button>

      {isOpen && (
        <span
          role="tooltip"
          className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 p-3 bg-chalkboard-dark text-chalk rounded-lg border border-chalk/30 shadow-xl text-xs backdrop-blur-md pointer-events-none transition-all duration-150 animate-in fade-in zoom-in-95"
        >
          <span className="flex items-center gap-1.5 font-bold text-gold text-sm font-chalk mb-1">
            <Info className="w-3.5 h-3.5 text-gold shrink-0" />
            {termData.term}
          </span>
          <span className="block text-chalk/90 leading-relaxed font-sans mb-1.5">
            {termData.definition}
          </span>
          {termData.example && (
            <span className="block p-1.5 bg-black/40 rounded border border-chalk/10 font-mono text-[11px] text-chalk-yellow">
              {termData.example}
            </span>
          )}
          {/* Arrow */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-chalkboard-dark" />
        </span>
      )}
    </span>
  );
};
