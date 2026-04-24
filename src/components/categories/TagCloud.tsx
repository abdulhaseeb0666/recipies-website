// src/components/categories/TagCloud.tsx
import React from 'react';

interface TagCloudProps {
  tags: { name: string; count: number }[];
  activeTag: string | null;
  onTagClick: (tag: string | null) => void;
}

const TagCloud: React.FC<TagCloudProps> = ({ tags, activeTag, onTagClick }) => {
  const maxCount = Math.max(...tags.map(t => t.count));
  const minCount = Math.min(...tags.map(t => t.count));

  const getSize = (count: number) => {
    const normalized = (count - minCount) / (maxCount - minCount || 1);
    if (normalized > 0.8) return 'text-xl px-5 py-2.5';
    if (normalized > 0.6) return 'text-lg px-4 py-2';
    if (normalized > 0.4) return 'text-base px-3.5 py-1.5';
    if (normalized > 0.2) return 'text-sm px-3 py-1.5';
    return 'text-xs px-2.5 py-1';
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {tags.map(tag => (
        <button
          key={tag.name}
          onClick={() => onTagClick(activeTag === tag.name ? null : tag.name)}
          className={`rounded-full font-medium transition-all duration-300 ${
            activeTag === tag.name
              ? 'bg-orange-500 text-white shadow-lg scale-110'
              : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600 hover:scale-105'
          } ${getSize(tag.count)}`}
        >
          {tag.name}
          <span className={`ml-1.5 text-xs ${activeTag === tag.name ? 'text-orange-200' : 'text-gray-400'}`}>
            {tag.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TagCloud;