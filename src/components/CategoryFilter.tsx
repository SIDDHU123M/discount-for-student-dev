import React from 'react';
import { Filter } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
          selectedCategory === 'all'
            ? 'bg-purple-500/30 border-purple-500 text-purple-300'
            : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
        }`}
      >
        All Categories
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
            selectedCategory === category
              ? 'bg-purple-500/30 border-purple-500 text-purple-300'
              : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};