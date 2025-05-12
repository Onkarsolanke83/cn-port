import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedMaterials from '../components/home/FeaturedMaterials';
import TeacherIntro from '../components/home/TeacherIntro';
import Categories from '../components/home/Categories';
import { getFeaturedMaterials, getCategories } from '../data/materials';

const HomePage: React.FC = () => {
  const featuredMaterials = getFeaturedMaterials();
  const categories = getCategories();

  return (
    <div>
      <Hero />
      <TeacherIntro />
      <FeaturedMaterials materials={featuredMaterials} />
      <Categories categories={categories} />
    </div>
  );
};

export default HomePage;