import React from 'react';
import '../styles/SortingDropdown.css';

interface SortingDropdownProps {
  onSortChange: (sortOption: string) => void;
}

const SortingDropdown: React.FC<SortingDropdownProps> = ({ onSortChange }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="sorting-dropdown">
      <span className="sort-icon">🔽</span>
      <select onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="Alphabetically">Alphabetically</option>
        <option value="Price: Low to High">Price: Low to High</option>
        <option value="Price: High to Low">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortingDropdown;
