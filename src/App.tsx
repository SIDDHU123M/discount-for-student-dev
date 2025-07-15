import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Github, Star, Sparkles, Filter, Code2 } from 'lucide-react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { SearchBar } from './components/SearchBar';
import { ServiceCard } from './components/ServiceCard';
import { StatsCards } from './components/StatsCards';
import { discountData } from './data/discounts';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredServices, setFilteredServices] = useState(discountData);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let filtered = discountData;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory]);

  const categories = [...new Set(discountData.map(service => service.category))];

  const handleCategoryChange = (category: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsTransitioning(false);
    }, 150);
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none transition-all duration-1000">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        {/* Dynamic category-based background effects */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ${
          selectedCategory === 'IDE and Code Editing' ? 'bg-green-500/5 scale-110' :
          selectedCategory === 'Design and Photo Editing' ? 'bg-pink-500/5 scale-110' :
          selectedCategory === 'Security' ? 'bg-red-500/5 scale-110' :
          selectedCategory === 'PaaS' ? 'bg-blue-500/5 scale-110' :
          selectedCategory === 'Learning Resources' ? 'bg-yellow-500/5 scale-110' :
          'bg-purple-500/5'
        }`}></div>
      </div>

      {/* Sidebar */}
      <Sidebar 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        allDiscountData={discountData}
      />

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-80 relative z-10">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="px-4 sm:px-6 lg:px-8 py-8 transition-all duration-500">
          {/* Search Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>

          {/* Stats Cards */}
          <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <StatsCards 
              totalServices={discountData.length}
              totalCategories={categories.length}
              filteredCount={filteredServices.length}
            />
          </div>

          {/* Services Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 mb-12 transition-all duration-500 ${
            isTransitioning ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'
          }`}>
            {filteredServices.map((service, index) => (
              <div 
                key={`${selectedCategory}-${index}`}
                className="animate-in slide-in-from-bottom-4 fade-in"
                style={{ animationDelay: `${index * 50}ms`, animationDuration: '400ms' }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 max-w-md mx-auto">
                <Search className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-400">Try adjusting your search terms or selecting a different category</p>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900/80 backdrop-blur-xl border-t border-gray-800/50 mt-16">
          <div className="px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-6xl mx-auto">
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {/* Brand Section */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-xl backdrop-blur-sm border border-purple-500/20">
                      <Sparkles className="w-6 h-6 text-purple-300" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Student Dev Discounts
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
                    Discover amazing discounts on software, tools, and services for student developers worldwide.
                  </p>
                </div>

                {/* Repository Links */}
                <div className="flex flex-col items-center md:items-start">
                  <h3 className="text-lg font-semibold text-white mb-4">Repository</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://github.com/AchoArnold/discount-for-student-dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-medium">Original Repository</div>
                        <div className="text-xs text-gray-500">Data & Content Source</div>
                      </div>
                    </a>
                    <a 
                      href="https://github.com/SIDDHU123M/discount-for-student-dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-medium">Web UI Repository</div>
                        <div className="text-xs text-gray-500">Interface & Design</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Creator Info */}
                <div className="flex flex-col items-center md:items-start">
                  <h3 className="text-lg font-semibold text-white mb-4">Created By</h3>
                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-4 border border-purple-500/20 backdrop-blur-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">S</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">Sidharth</div>
                        <div className="text-xs text-gray-400">For Student Developers</div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">
                      Made with ❤️ to help students access amazing developer tools and resources.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="border-t border-gray-800/50 pt-6">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>© 2024 Student Dev Discounts</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Open Source Project</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>Star on GitHub</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {discountData.length}+ Services Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;