import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/ui/Section';
import { Award, BookOpen, Monitor, GraduationCap, Clock, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: <Clock size={24} />, label: 'Years Teaching', value: '15+' },
    { icon: <Users size={24} />, label: 'Students Taught', value: '5,000+' },
    { icon: <BookOpen size={24} />, label: 'Published Works', value: '4' },
    { icon: <GraduationCap size={24} />, label: 'Courses Developed', value: '20+' },
  ];

  return (
    <div>
      <PageHeader
        title="About Me"
        subtitle="Learn more about my journey, expertise, and teaching philosophy"
        backgroundImage="https://images.pexels.com/photos/442574/pexels-photo-442574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <Section className="bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Professor Portrait"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Prof.Arun Ghandat </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                With over 15 years of experience teaching computer networking, I've dedicated my career to making complex 
                technical concepts accessible to students at all levels of expertise.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                After earning my PhD in Computer Science from Stanford University, I worked as a network engineer at Cisco 
                for 5 years before transitioning to academia full-time. This industry experience has been invaluable in 
                bridging the gap between theoretical networking concepts and real-world applications.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Throughout my career, I've authored 4 textbooks on networking topics, developed over 20 courses, and taught 
                thousands of students both in-person and online. My research focuses on next-generation network architectures, 
                security protocols, and educational methodologies for technical subjects.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="My Teaching Philosophy" centered className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            "I believe that learning networking should be practical, engaging, and connected to real-world scenarios. 
            My goal is to create an environment where students build both confidence and competence."
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
              <Monitor size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Hands-On Learning</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I emphasize practical exercises and labs that simulate real networking environments, allowing students to apply 
              concepts immediately and develop troubleshooting skills.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Conceptual Foundations</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Building strong theoretical understanding is essential for adaptation in the rapidly evolving networking field. 
              I ensure students grasp fundamental principles deeply.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Industry Relevance</h3>
            <p className="text-gray-700 dark:text-gray-300">
              My courses incorporate current industry standards, technologies, and best practices to prepare students for 
              real-world networking environments and certification exams.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Certifications & Expertise" className="bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technical Certifications</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Cisco Certified Network Professional (CCNP)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Cisco Certified DevNet Professional
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                CompTIA Network+
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                AWS Certified Advanced Networking
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Certified Information Systems Security Professional (CISSP)
              </li>
            </ul>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Specialized Fields</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Software-Defined Networking (SDN)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Network Function Virtualization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Cloud Networking Architectures
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Network Security & Encryption
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                IoT Networking Protocols
              </li>
            </ul>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Academic Background</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                PhD in Computer Science, Stanford University
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                MSc in Network Engineering, MIT
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                BSc in Computer Engineering, UC Berkeley
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Research Fellow, Internet2 Consortium
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Visiting Professor, ETH Zürich
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
