import { Material, MaterialCategory } from '../types';

export const categories: MaterialCategory[] = [
  {
    id: 'networking-fundamentals',
    name: 'Networking Fundamentals',
    description: 'Basic concepts and principles of computer networking',
    icon: 'Globe',
  },
  {
    id: 'protocols',
    name: 'Protocols & Standards',
    description: 'Detailed study of networking protocols and standards',
    icon: 'FileJson',
  },
  {
    id: 'network-security',
    name: 'Network Security',
    description: 'Security concepts, threats, and protection mechanisms',
    icon: 'Shield',
  },
  {
    id: 'routing-switching',
    name: 'Routing & Switching',
    description: 'Concepts and configuration of routers and switches',
    icon: 'Route',
  },
  {
    id: 'wireless-networks',
    name: 'Wireless Networks',
    description: 'Wireless technologies, standards, and implementations',
    icon: 'Wifi',
  },
  {
    id: 'cloud-networking',
    name: 'Cloud Networking',
    description: 'Networking concepts for cloud environments',
    icon: 'Cloud',
  },
];

export const materials: Material[] = [
  {
    id: '1',
    title: 'Introduction to Computer Networks',
    description: 'A comprehensive introduction to computer networking concepts, terminology, and basic principles. Perfect for beginners.',
    category: 'networking-fundamentals',
    level: 'beginner',
    type: 'slides',
    thumbnail: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=600',
    driveUrl: 'https://drive.google.com/file/d/example1',
    createdAt: '2025-01-15',
    updatedAt: '2025-01-15',
  },
  {
    id: '2',
    title: 'OSI Model Explained',
    description: 'Detailed explanation of the 7 layers of the OSI model with examples and practical applications.',
    category: 'networking-fundamentals',
    level: 'beginner',
    type: 'document',
    thumbnail: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=600',
    driveUrl: 'https://drive.google.com/file/d/example2',
    createdAt: '2025-01-20',
    updatedAt: '2025-02-05',
  },
  {
    id: '3',
    title: 'TCP/IP Protocol Suite',
    description: 'Comprehensive guide to understanding the TCP/IP protocol suite and its implementation.',
    category: 'protocols',
    level: 'intermediate',
    type: 'document',
    thumbnail: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
    driveUrl: 'https://drive.google.com/file/d/example3',
    createdAt: '2025-02-01',
    updatedAt: '2025-02-15',
  },
  {
    id: '4',
    title: 'Network Security Fundamentals',
    description: 'Introduction to key network security concepts, threats, vulnerabilities, and protection mechanisms.',
    category: 'network-security',
    level: 'intermediate',
    type: 'slides',
    thumbnail: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=600',
    driveUrl: 'https://drive.google.com/file/d/example4',
    createdAt: '2025-02-10',
    updatedAt: '2025-02-10',
  },
  {
    id: '5',
    title: 'Cisco Router Configuration Lab',
    description: 'Hands-on lab exercises for configuring Cisco routers with step-by-step instructions.',
    category: 'routing-switching',
    level: 'advanced',
    type: 'lab',
    thumbnail: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',
    driveUrl: 'https://drive.google.com/file/d/example5',
    createdAt: '2025-02-20',
    updatedAt: '2025-03-05',
  },
  {
    id: '6',
    title: 'Wireless Network Standards',
    description: 'Comprehensive overview of wireless networking standards including 802.11 variants.',
    category: 'wireless-networks',
    level: 'intermediate',
    type: 'document',
    thumbnail: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600',
    driveUrl: 'https://drive.google.com/file/d/example6',
    createdAt: '2025-03-01',
    updatedAt: '2025-03-01',
  },
  {
    id: '7',
    title: 'Network Troubleshooting Guide',
    description: 'Step-by-step guide for diagnosing and resolving common network issues.',
    category: 'networking-fundamentals',
    level: 'intermediate',
    type: 'document',
    thumbnail: 'https://images.pexels.com/photos/4336968/pexels-photo-4336968.jpeg?auto=compress&cs=tinysrgb&w=600',
    driveUrl: 'https://drive.google.com/file/d/example7',
    createdAt: '2025-03-10',
    updatedAt: '2025-03-15',
  },
  {
    id: '8',
    title: 'Cloud Networking Architecture',
    description: 'Overview of networking architectures used in major cloud providers like AWS, Azure, and GCP.',
    category: 'cloud-networking',
    level: 'advanced',
    type: 'slides',
    thumbnail: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600',
    driveUrl: 'https://drive.google.com/file/d/example8',
    createdAt: '2025-03-20',
    updatedAt: '2025-03-25',
  },
];

export const getCategories = (): MaterialCategory[] => {
  return categories;
};

export const getMaterials = (): Material[] => {
  return materials;
};

export const getMaterialsByCategory = (categoryId: string): Material[] => {
  return materials.filter(material => material.category === categoryId);
};

export const getMaterialById = (id: string): Material | undefined => {
  return materials.find(material => material.id === id);
};

export const getRelatedMaterials = (material: Material, limit: number = 3): Material[] => {
  return materials
    .filter(m => m.id !== material.id && m.category === material.category)
    .slice(0, limit);
};

export const getFeaturedMaterials = (limit: number = 4): Material[] => {
  return materials.slice(0, limit);
};

export const getRecentMaterials = (limit: number = 4): Material[] => {
  return [...materials]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, limit);
};

export const searchMaterials = (query: string): Material[] => {
  const searchTerms = query.toLowerCase().split(' ');
  return materials.filter(material => {
    const searchableText = `${material.title} ${material.description} ${material.category}`.toLowerCase();
    return searchTerms.some(term => searchableText.includes(term));
  });
};