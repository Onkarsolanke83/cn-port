import React from 'react';
import Section from '../ui/Section';
import { Award, BookOpen, Users, Clock } from 'lucide-react';

const FeatureBox: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const TeacherIntro: React.FC = () => {
  return (
    <Section className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Teaching Computer Networking with Passion & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            With over 15 years of experience in both industry and academia, I bring practical knowledge and theoretical understanding to help students master complex networking concepts.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            My teaching philosophy centers on practical application, real-world examples, and creating engaging learning experiences that prepare students for successful careers in networking and IT.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent-600 dark:text-accent-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Certified Expert</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">CCNA, CCNP, Network+</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent-600 dark:text-accent-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Published Author</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">4 Technical Books</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent-600 dark:text-accent-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Students Taught</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">5000+ Worldwide</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900 flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent-600 dark:text-accent-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Teaching Hours</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">10,000+ Hours</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl">
          <img 
            src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Computer Networking Teacher" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default TeacherIntro;