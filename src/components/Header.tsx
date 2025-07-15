import React from 'react';
import { Sparkles, Menu, Github, Star } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-900/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden fixed top-3 left-3 z-50 p-2.5 bg-gray-800/90 backdrop-blur-xl rounded-lg border border-gray-700/50 text-white hover:bg-gray-700/90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="text-center max-w-4xl mx-auto px-4 sm:px-0">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-purple-500/20">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-300" />
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Student Dev Discounts
              </h1>
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover amazing discounts on software, tools, and services for student developers. 
              From IDEs to cloud hosting, find everything you need to build your next project.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-700/50">
                <span className="text-xs sm:text-sm text-gray-300">✨ Free Tools</span>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-700/50">
                <span className="text-xs sm:text-sm text-gray-300">💰 Discounts</span>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-700/50">
                <span className="text-xs sm:text-sm text-gray-300">🎓 Student Only</span>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-700/50">
                <span className="text-xs sm:text-sm text-gray-300">💳 Credits</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 left-1/4 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse"></div>
      </div>
    </header>
  );
};