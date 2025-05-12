import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import MaterialCard from '../materials/MaterialCard';
import Button from '../ui/Button';
import { Material } from '../../types';

interface FeaturedMaterialsProps {
  materials: Material[];
}

const FeaturedMaterials: React.FC<FeaturedMaterialsProps> = ({ materials }) => {
  return (
    <Section
      title="Featured Study Materials"
      subtitle="Explore these carefully selected resources to enhance your networking knowledge"
      centered
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {materials.map((material) => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/materials">
          <Button 
            variant="primary" 
            size="lg" 
            icon={<ArrowRight />} 
            iconPosition="right"
          >
            View All Materials
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default FeaturedMaterials;