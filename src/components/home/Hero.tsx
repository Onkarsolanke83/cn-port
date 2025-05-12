import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      <div className="relative container mx-auto px-4 py-24 md:py-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-down">
            Networking Knowledge for the Digital Age
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-down animation-delay-150">
            Comprehensive computer networking resources for students at all levels. 
            Expert-curated materials to help you master networking concepts and technologies.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up">
            <Link to="/materials">
              <Button 
                variant="secondary" 
                size="lg" 
                icon={<ArrowRight />} 
                iconPosition="right"
              >
                Explore Materials
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:bg-opacity-10"
              >
                About Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;