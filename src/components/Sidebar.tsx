import React from 'react';
import { 
  X, 
  Layers, 
  Filter, 
  FolderGit2, 
  Code2, 
  GitBranch, 
  Globe, 
  Palette, 
  Cloud, 
  CloudCog, 
  Mail, 
  Settings, 
  CreditCard, 
  Database, 
  Map, 
  HelpCircle, 
  Shield, 
  Ruler, 
  BarChart3, 
  Gamepad2, 
  Box, 
  Key, 
  Activity, 
  BookOpen, 
  FlaskConical, 
  Video 
} from 'lucide-react';

interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  isOpen: boolean;
  onClose: () => void;
  allDiscountData: any[];
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  isOpen, 
  onClose,
  allDiscountData
}) => {
  const getCategoryIcon = (category: string) => {
    const iconComponents: { [key: string]: React.ReactNode } = {
      'Source Code Repos': <FolderGit2 className="w-5 h-5" />,
      'IDE and Code Editing': <Code2 className="w-5 h-5" />,
      'Version Control': <GitBranch className="w-5 h-5" />,
      'Web Hosting': <Globe className="w-5 h-5" />,
      'Design and Photo Editing': <Palette className="w-5 h-5" />,
      'SaaS': <Cloud className="w-5 h-5" />,
      'PaaS': <CloudCog className="w-5 h-5" />,
      'Email': <Mail className="w-5 h-5" />,
      'CI/CD': <Settings className="w-5 h-5" />,
      'Payments': <CreditCard className="w-5 h-5" />,
      'Management Systems': <Database className="w-5 h-5" />,
      'Maps': <Map className="w-5 h-5" />,
      'Programming Help': <HelpCircle className="w-5 h-5" />,
      'Security': <Shield className="w-5 h-5" />,
      'Software Modeling Tools': <Ruler className="w-5 h-5" />,
      'Visual Analytics': <BarChart3 className="w-5 h-5" />,
      'Game Development Tools': <Gamepad2 className="w-5 h-5" />,
      '3D Animation and Modeling': <Box className="w-5 h-5" />,
      'Password Managers': <Key className="w-5 h-5" />,
      'Infrastructure Monitoring': <Activity className="w-5 h-5" />,
      'Learning Resources': <BookOpen className="w-5 h-5" />,
      'Data Science': <FlaskConical className="w-5 h-5" />,
      'Screen Recorders': <Video className="w-5 h-5" />
    };
    return iconComponents[category] || <Box className="w-5 h-5" />;
  };

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-gray-900/95 backdrop-blur-xl border-r border-gray-800/50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>

        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-semibold text-white">Categories</h2>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {/* All Categories Button */}
          <button
            onClick={() => {
              onCategoryChange('all');
              onClose();
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300'
                : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
            }`}
          >
            <Layers className="w-5 h-5 flex-shrink-0" />
            <span className="font-medium">All Categories</span>
            <span className="ml-auto text-xs bg-gray-700/50 px-2 py-1 rounded-full">
              {categories.length}
            </span>
          </button>

          {/* Individual Categories */}
          {categories.sort().map((category) => {
            const count = allDiscountData.filter((service: any) => service.category === category).length;
            
            return (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  onClose();
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group transform hover:scale-105 active:scale-95 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 shadow-lg shadow-purple-500/10'
                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-white hover:shadow-md'
                }`}
              >
                <span className="flex-shrink-0 text-gray-400 group-hover:text-white transition-colors">{getCategoryIcon(category)}</span>
                <span className="font-medium text-sm leading-tight flex-1">{category}</span>
                <span className={`text-xs px-2 py-1 rounded-full transition-all duration-200 ${
                  selectedCategory === category 
                    ? 'bg-purple-500/20 text-purple-200' 
                    : 'bg-gray-700/50 group-hover:bg-gray-600/50'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-800/50">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-4 border border-purple-500/20">
            <p className="text-sm text-gray-300 mb-2">💡 Pro Tip</p>
            <p className="text-xs text-gray-400">
              Use the search bar to quickly find specific tools or services across all categories.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};