// src/components/Breadcrumb.tsx
import React from 'react';
import './Breadcrumb.css';

interface BreadcrumbProps {
  categories: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ categories }) => {
  return (
    <nav className="breadcrumb">
      {categories.map((category, index) => (
        <span key={index}>
          {category} {index < categories.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
