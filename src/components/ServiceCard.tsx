import React from 'react';
import { ExternalLink, Gift, DollarSign, Star, CreditCard } from 'lucide-react';

interface Service {
  name: string;
  url: string;
  type: string;
  description: string;
  category: string;
}

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'free':
        return 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30';
      case 'discount':
        return 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/30';
      case 'credit':
        return 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30';
      default:
        return 'bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-300 border-gray-500/30';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'free':
        return <Gift className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'discount':
        return <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'credit':
        return <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />;
      default:
        return <Star className="w-3 h-3 sm:w-4 sm:h-4" />;
    }
  };

  return (
    <div className="group relative h-full">
      <div className="bg-gray-800/50 backdrop-blur-xl rounded-lg sm:rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 sm:hover:transform sm:hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 h-full flex flex-col">
        
        {/* Mobile Layout */}
        <div className="block sm:hidden p-3">
          {/* Header Row */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300 truncate">
                {service.name}
              </h3>
              <div className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded-md border text-xs font-medium ${getTypeColor(service.type)}`}>
                {getTypeIcon(service.type)}
                <span>{service.type}</span>
              </div>
            </div>
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center justify-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 text-purple-300 hover:text-purple-200 p-2 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 active:scale-95"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-2 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
            {service.description}
          </p>

          {/* Category Tag */}
          <div className="flex justify-start">
            <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-md group-hover:bg-gray-600/50 transition-all duration-300">
              {service.category}
            </span>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block p-6 h-full flex-col">
          {/* Service Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-all duration-300 line-clamp-2">
                {service.name}
              </h3>
              <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl border backdrop-blur-sm transition-all duration-300 group-hover:scale-105 text-sm ${getTypeColor(service.type)}`}>
                {getTypeIcon(service.type)}
                <span className="font-medium uppercase tracking-wide">{service.type}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
            {service.description}
          </p>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-auto">
            <span className="text-xs text-gray-400 bg-gray-700/50 px-3 py-1.5 rounded-lg backdrop-blur-sm group-hover:bg-gray-600/50 transition-all duration-300 mb-2 sm:mb-0">
              {service.category}
            </span>
            
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 text-purple-300 hover:text-purple-200 px-4 py-2 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95"
            >
              <span className="text-sm font-medium">Visit</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
      </div>
    </div>
  );
};