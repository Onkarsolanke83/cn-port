import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Presentation, Video, DownloadCloud, FlaskRound as Flask } from 'lucide-react';
import Card, { CardImage, CardContent, CardFooter } from '../ui/Card';
import Badge from '../ui/Badge';
import { Material } from '../../types';

interface MaterialCardProps {
  material: Material;
  className?: string;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material, className = '' }) => {
  // Map material types to icons
  const typeIcons = {
    slides: <Presentation size={16} />,
    document: <FileText size={16} />,
    video: <Video size={16} />,
    exercise: <DownloadCloud size={16} />,
    lab: <Flask size={16} />,
  };

  // Map levels to badge variants
  const levelVariants = {
    beginner: 'success' as const,
    intermediate: 'warning' as const,
    advanced: 'danger' as const,
  };

  return (
    <Link to={`/materials/${material.id}`} className={`block ${className}`}>
      <Card hoverable className="h-full animate-fade-in">
        <CardImage 
          src={material.thumbnail} 
          alt={material.title} 
          aspectRatio="video"
        />
        <CardContent className="flex flex-col h-full">
          <div className="flex items-center space-x-2 mb-2">
            <Badge variant={levelVariants[material.level]}>
              {material.level.charAt(0).toUpperCase() + material.level.slice(1)}
            </Badge>
            <Badge variant="info" className="flex items-center space-x-1">
              <span>{typeIcons[material.type]}</span>
              <span className="ml-1">{material.type.charAt(0).toUpperCase() + material.type.slice(1)}</span>
            </Badge>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white line-clamp-2">
            {material.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
            {material.description}
          </p>
        </CardContent>
        <CardFooter className="text-sm text-gray-500 dark:text-gray-400 flex justify-between items-center">
          <span>Updated: {new Date(material.updatedAt).toLocaleDateString()}</span>
          <span className="text-primary-600 dark:text-primary-400 font-medium">View Details</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default MaterialCard;