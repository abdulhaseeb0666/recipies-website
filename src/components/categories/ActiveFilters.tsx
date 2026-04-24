// src/components/categories/ActiveFilters.tsx
import React from 'react';
import { X } from 'lucide-react';

interface ActiveFiltersProps {
  filters: { type: string; value: string }[];
  onRemove: (type: string) => void;
  onClearAll: () => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({ filters, onRemove, onClearAll }) => {
  if (filters.length === 0) return null;

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm text-gray-500">Active filters:</span>
      {filters.map(filter => (
        <button
          key={`${filter.type}-${filter.value}`}
          onClick={() => onRemove(filter.type)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-100 transition-colors"
        >
          {filter.value}
          <X size={14} />
        </button>
      ))}
      <button
        onClick={onClearAll}
        className="text-sm text-gray-500 hover:text-gray-700 underline"
      >
        Clear all
      </button>
    </div>
  );
};

export default ActiveFilters;