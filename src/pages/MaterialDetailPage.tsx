import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Download, 
  ExternalLink, 
  Clock, 
  FileType, 
  BookOpen, 
  Share2, 
  ChevronLeft 
} from 'lucide-react';
import { getMaterialById, getRelatedMaterials } from '../data/materials';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card, { CardContent } from '../components/ui/Card';
import MaterialCard from '../components/materials/MaterialCard';
import { Material } from '../types';

const MaterialDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [material, setMaterial] = useState<Material | null>(null);
  const [relatedMaterials, setRelatedMaterials] = useState<Material[]>([]);

  useEffect(() => {
    if (id) {
      const foundMaterial = getMaterialById(id);
      if (foundMaterial) {
        setMaterial(foundMaterial);
        setRelatedMaterials(getRelatedMaterials(foundMaterial, 3));
      }
    }
  }, [id]);

  if (!material) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Material not found</h2>
        <Link to="/materials">
          <Button variant="primary">Back to Materials</Button>
        </Link>
      </div>
    );
  }

  // Map levels to badge variants
  const levelVariants = {
    beginner: 'success' as const,
    intermediate: 'warning' as const,
    advanced: 'danger' as const,
  };

  // Get the category name
  const category = material.category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div>
      <PageHeader
        title={material.title}
        subtitle={category}
      />

      <Section className="bg-white dark:bg-gray-900">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <div className="mb-6">
              <Link to="/materials" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-4">
                <ChevronLeft size={20} className="mr-1" /> Back to All Materials
              </Link>

              <div className="rounded-xl overflow-hidden mb-6">
                <img 
                  src={material.thumbnail} 
                  alt={material.title} 
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant={levelVariants[material.level]}>
                  {material.level.charAt(0).toUpperCase() + material.level.slice(1)}
                </Badge>
                <Badge variant="primary">
                  {category}
                </Badge>
                <Badge variant="secondary">
                  {material.type.charAt(0).toUpperCase() + material.type.slice(1)}
                </Badge>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                  {material.description}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">About this material</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  This comprehensive {material.type} covers all essential aspects of {category.toLowerCase()} 
                  in computer networking. Designed for {material.level} level students, this material 
                  provides both theoretical knowledge and practical examples to enhance your understanding 
                  of networking concepts.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">What you'll learn</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                  <li>Fundamental principles of {category.toLowerCase()}</li>
                  <li>Practical applications in real-world networking scenarios</li>
                  <li>Best practices and common configurations</li>
                  <li>Troubleshooting techniques and problem-solving approaches</li>
                  <li>Latest standards and technologies in this domain</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                  {material.level === 'beginner' ? (
                    <li>No prior networking knowledge required</li>
                  ) : material.level === 'intermediate' ? (
                    <li>Basic understanding of networking fundamentals</li>
                  ) : (
                    <li>Strong foundation in networking concepts and protocols</li>
                  )}
                  <li>Access to Google Drive to download the materials</li>
                  {material.type === 'lab' && (
                    <li>Access to networking simulation software or lab equipment</li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Material Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FileType className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Type</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {material.type.charAt(0).toUpperCase() + material.type.slice(1)}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Level</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {material.level.charAt(0).toUpperCase() + material.level.slice(1)}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Last Updated</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {new Date(material.updatedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 space-y-3">
                  <a href={material.driveUrl} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="primary" 
                      fullWidth 
                      icon={<Download size={18} />}
                    >
                      Download Material
                    </Button>
                  </a>
                  <a href={material.driveUrl} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="outline" 
                      fullWidth 
                      icon={<ExternalLink size={18} />}
                    >
                      View on Google Drive
                    </Button>
                  </a>
                  <Button 
                    variant="ghost" 
                    fullWidth 
                    icon={<Share2 size={18} />}
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: material.title,
                          text: material.description,
                          url: window.location.href,
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }
                    }}
                  >
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {relatedMaterials.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Related Materials</h3>
                <div className="space-y-4">
                  {relatedMaterials.map((relatedMaterial) => (
                    <MaterialCard 
                      key={relatedMaterial.id} 
                      material={relatedMaterial}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MaterialDetailPage;