import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/ui/Section';
import MaterialCard from '../components/materials/MaterialCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { 
  getMaterials, 
  getCategories, 
  getMaterialsByCategory,
  searchMaterials
} from '../data/materials';
import { Material, MaterialCategory } from '../types';

const MaterialsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  const searchParam = queryParams.get('q') || '';
  
  const [materials, setMaterials] = useState<Material[]>([]);
  const [categories] = useState<MaterialCategory[]>(getCategories());
  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  
  // Filter materials based on selected filters
  useEffect(() => {
    let filteredMaterials: Material[];
    
    // Start with category filter or all materials
    if (selectedCategory) {
      filteredMaterials = getMaterialsByCategory(selectedCategory);
    } else {
      filteredMaterials = getMaterials();
    }
    
    // Apply level filter if selected
    if (selectedLevel) {
      filteredMaterials = filteredMaterials.filter(
        material => material.level === selectedLevel
      );
    }
    
    // Apply type filter if selected
    if (selectedType) {
      filteredMaterials = filteredMaterials.filter(
        material => material.type === selectedType
      );
    }
    
    // Apply search query if present
    if (searchQuery) {
      filteredMaterials = searchMaterials(searchQuery);
    }
    
    setMaterials(filteredMaterials);
    
    // Update URL with filters
    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (searchQuery) params.set('q', searchQuery);
    
    const newSearch = params.toString();
    const newPath = newSearch ? `${location.pathname}?${newSearch}` : location.pathname;
    
    navigate(newPath, { replace: true });
  }, [selectedCategory, selectedLevel, selectedType, searchQuery, navigate, location.pathname]);
  
  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Already handled by the useEffect
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedLevel(null);
    setSelectedType(null);
    setSearchQuery('');
  };
  
  // Get the selected category object
  const selectedCategoryObject = selectedCategory 
    ? categories.find(cat => cat.id === selectedCategory)
    : null;
  
  return (
    <div>
      <PageHeader
        title="Study Materials"
        subtitle={selectedCategoryObject 
          ? `Browse materials for ${selectedCategoryObject.name}`
          : "Access comprehensive study materials for computer networking courses"
        }
      />
      
      <Section className="bg-white dark:bg-gray-900">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-1/4 space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Search</h3>
              <form onSubmit={handleSearchSubmit} className="flex">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search materials..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <button 
                  type="submit" 
                  className="px-3 py-2 bg-primary-600 text-white rounded-r-md hover:bg-primary-700"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h3>
                {(selectedCategory || selectedLevel || selectedType) && (
                  <button 
                    onClick={resetFilters}
                    className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center"
                  >
                    <X size={14} className="mr-1" /> Clear all
                  </button>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <input
                          type="radio"
                          id={category.id}
                          name="category"
                          checked={selectedCategory === category.id}
                          onChange={() => setSelectedCategory(category.id)}
                          className="mr-2"
                        />
                        <label 
                          htmlFor={category.id} 
                          className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Difficulty Level</h4>
                  <div className="space-y-2">
                    {['beginner', 'intermediate', 'advanced'].map((level) => (
                      <div key={level} className="flex items-center">
                        <input
                          type="radio"
                          id={level}
                          name="level"
                          checked={selectedLevel === level}
                          onChange={() => setSelectedLevel(selectedLevel === level ? null : level)}
                          className="mr-2"
                        />
                        <label 
                          htmlFor={level} 
                          className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
                        >
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Material Type</h4>
                  <div className="space-y-2">
                    {['slides', 'document', 'exercise', 'lab', 'video'].map((type) => (
                      <div key={type} className="flex items-center">
                        <input
                          type="radio"
                          id={type}
                          name="type"
                          checked={selectedType === type}
                          onChange={() => setSelectedType(selectedType === type ? null : type)}
                          className="mr-2"
                        />
                        <label 
                          htmlFor={type} 
                          className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
                        >
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Materials Grid */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {materials.length} {materials.length === 1 ? 'Result' : 'Results'}
              </h2>
              
              <div className="flex flex-wrap gap-2">
                {selectedCategory && (
                  <Badge variant="primary" className="flex items-center">
                    Category: {selectedCategoryObject?.name}
                    <button 
                      onClick={() => setSelectedCategory(null)} 
                      className="ml-2 hover:text-primary-800 dark:hover:text-primary-200"
                    >
                      <X size={14} />
                    </button>
                  </Badge>
                )}
                
                {selectedLevel && (
                  <Badge variant="secondary" className="flex items-center">
                    Level: {selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}
                    <button 
                      onClick={() => setSelectedLevel(null)} 
                      className="ml-2 hover:text-accent-800 dark:hover:text-accent-200"
                    >
                      <X size={14} />
                    </button>
                  </Badge>
                )}
                
                {selectedType && (
                  <Badge variant="info" className="flex items-center">
                    Type: {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
                    <button 
                      onClick={() => setSelectedType(null)} 
                      className="ml-2 hover:text-blue-800 dark:hover:text-blue-200"
                    >
                      <X size={14} />
                    </button>
                  </Badge>
                )}
              </div>
            </div>
            
            {materials.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {materials.map((material) => (
                  <MaterialCard key={material.id} material={material} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="mx-auto w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  <Filter size={24} className="text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  No materials found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
                <Button variant="outline" onClick={resetFilters}>Clear All Filters</Button>
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MaterialsPage;