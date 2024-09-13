import React from 'react';
import '../styles/Breadcrumb.css';

type BreadCrumbProps = {
  categories: string[];
  currentProduct: string;
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({ categories, currentProduct }) => {
  return (
    <nav className="breadcrumb">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a href={`/${category.toLowerCase()}`}>{category}</a>
          </li>
        ))}
        <li>{currentProduct}</li>
      </ul>
    </nav>
  );
};

export default BreadCrumb;
