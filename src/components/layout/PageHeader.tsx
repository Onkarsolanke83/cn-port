import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage,
  children,
}) => {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  const hasBackground = !!backgroundImage;

  return (
    <div
      className={`relative py-16 md:py-24 ${
        hasBackground ? 'text-white' : 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900'
      }`}
      style={backgroundStyle}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${hasBackground ? 'text-white' : ''} animate-slide-down`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-xl ${hasBackground ? 'text-gray-200' : 'text-gray-600 dark:text-gray-400'} max-w-3xl mx-auto mb-8 animate-slide-down`}>
              {subtitle}
            </p>
          )}
          {children && <div className="mt-6 animate-slide-up">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;