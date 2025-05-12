import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, FileJson, Shield, Route, Wifi, Cloud } from 'lucide-react';
import Card, { CardContent } from '../ui/Card';
import { MaterialCategory } from '../../types';

interface CategoryCardProps {
  category: MaterialCategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  // Map category icons to Lucide React components
  const iconMap = {
    Globe: <Globe size={36} className="text-primary-600 dark:text-primary-400" />,
    FileJson: <FileJson size={36} className="text-primary-600 dark:text-primary-400" />,
    Shield: <Shield size={36} className="text-primary-600 dark:text-primary-400" />,
    Route: <Route size={36} className="text-primary-600 dark:text-primary-400" />,
    Wifi: <Wifi size={36} className="text-primary-600 dark:text-primary-400" />,
    Cloud: <Cloud size={36} className="text-primary-600 dark:text-primary-400" />,
  };

  const IconComponent = iconMap[category.icon as keyof typeof iconMap];

  return (
    <Link to={`/materials?category=${category.id}`} className="block">
      <Card hoverable className="h-full transition-all duration-300 border border-gray-200 dark:border-gray-700">
        <CardContent className="flex flex-col items-center text-center p-6">
          <div className="mb-4 p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
            {IconComponent}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {category.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {category.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;