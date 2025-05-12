import React from 'react';
import Section from '../ui/Section';
import CategoryCard from '../materials/CategoryCard';
import { MaterialCategory } from '../../types';

interface CategoriesProps {
  categories: MaterialCategory[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <Section
      title="Explore Topics"
      subtitle="Browse through specialized categories to find the specific networking topics you're interested in"
      centered
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </Section>
  );
};

export default Categories;