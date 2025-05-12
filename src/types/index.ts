export interface Material {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  type: 'slides' | 'document' | 'exercise' | 'lab' | 'video';
  thumbnail: string;
  driveUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface MaterialCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}