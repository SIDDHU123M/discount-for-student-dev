import React from 'react';
import { Gift, Code, Star, TrendingUp } from 'lucide-react';

interface StatsCardsProps {
  totalServices: number;
  totalCategories: number;
  filteredCount: number;
}

export const StatsCards: React.FC<StatsCardsProps> = ({ 
  totalServices, 
  totalCategories, 
  filteredCount 
}) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
      <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 group sm:hover:scale-105 sm:hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-center sm:text-left">
          <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg sm:rounded-xl group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300 sm:group-hover:scale-110 mx-auto sm:mx-0 mb-2 sm:mb-0 w-fit">
            <Gift className="w-4 h-4 sm:w-6 sm:h-6 text-purple-400" />
          </div>
          <div>
            <p className="text-lg sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{totalServices}</p>
            <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">Services</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 group sm:hover:scale-105 sm:hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-center sm:text-left">
          <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg sm:rounded-xl group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300 sm:group-hover:scale-110 mx-auto sm:mx-0 mb-2 sm:mb-0 w-fit">
            <Code className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
          </div>
          <div>
            <p className="text-lg sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">{totalCategories}</p>
            <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">Categories</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 group sm:hover:scale-105 sm:hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-center sm:text-left">
          <div className="p-2 sm:p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-lg sm:rounded-xl group-hover:from-cyan-500/30 group-hover:to-cyan-600/30 transition-all duration-300 sm:group-hover:scale-110 mx-auto sm:mx-0 mb-2 sm:mb-0 w-fit">
            <Star className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-400" />
          </div>
          <div>
            <p className="text-lg sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{filteredCount}</p>
            <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">Showing</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-gray-700/50 hover:border-green-500/30 transition-all duration-500 group sm:hover:scale-105 sm:hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-center sm:text-left">
          <div className="p-2 sm:p-3 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg sm:rounded-xl group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all duration-300 sm:group-hover:scale-110 mx-auto sm:mx-0 mb-2 sm:mb-0 w-fit">
            <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-green-400" />
          </div>
          <div>
            <p className="text-lg sm:text-2xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">100%</p>
            <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">Free</p>
          </div>
        </div>
      </div>
    </div>
  );
};