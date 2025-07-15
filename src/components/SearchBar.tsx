import React from 'react';
import { Search, Sparkles } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative">
      <div className="relative group">
        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 group-focus-within:text-purple-400 transition-colors" />
        <input
          type="text"
          placeholder="Search services, tools, or categories..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 sm:pl-12 pr-10 sm:pr-4 py-3 sm:py-4 bg-gray-800/50 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 hover:bg-gray-800/70 text-sm sm:text-base"
        />
        <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
        </div>
      </div>
    </div>
  );
};