import React, { useState } from "react";
import '../styles/FilterSidebar.css';

type FilterSidebarProps = {
  onFilterChange: (filters: { category: string[]; priceRange: string[] }) => void;
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newCategories);
    onFilterChange({ category: newCategories, priceRange: selectedPriceRanges });
  };

  const handlePriceRangeChange = (priceRange: string) => {
    const newPriceRanges = selectedPriceRanges.includes(priceRange)
      ? selectedPriceRanges.filter((range) => range !== priceRange)
      : [...selectedPriceRanges, priceRange];
    setSelectedPriceRanges(newPriceRanges);
    onFilterChange({ category: selectedCategories, priceRange: newPriceRanges });
  };

  return (
    <aside className="filters">
      <h3>Category</h3>
      <ul>
        <li>
          <input
            type="checkbox"
            checked={selectedCategories.includes("People")}
            onChange={() => handleCategoryChange("People")}
          />
          People
        </li>
        <li>
          <input
            type="checkbox"
            checked={selectedCategories.includes("Pets")}
            onChange={() => handleCategoryChange("Pets")}
          />
          Pets
        </li>
        <li>
          <input
            type="checkbox"
            checked={selectedCategories.includes("Food")}
            onChange={() => handleCategoryChange("Food")}
          />
          Food
        </li>
        <li>
          <input
            type="checkbox"
            checked={selectedCategories.includes("Landmark")}
            onChange={() => handleCategoryChange("Landmark")}
          />
          Landmark
        </li>
      </ul>

      <h3>Price Range</h3>
      <ul>
        <li>
          <input
            type="checkbox"
            checked={selectedPriceRanges.includes("Lower than $20")}
            onChange={() => handlePriceRangeChange("Lower than $20")}
          />
          Lower than $20
        </li>
        <li>
          <input
            type="checkbox"
            checked={selectedPriceRanges.includes("$20 - $100")}
            onChange={() => handlePriceRangeChange("$20 - $100")}
          />
          $20 - $100
        </li>
        <li>
          <input
            type="checkbox"
            checked={selectedPriceRanges.includes("$100 - $200")}
            onChange={() => handlePriceRangeChange("$100 - $200")}
          />
          $100 - $200
        </li>
        <li>
          <input
            type="checkbox"
            checked={selectedPriceRanges.includes("More than $200")}
            onChange={() => handlePriceRangeChange("More than $200")}
          />
          More than $200
        </li>
      </ul>
    </aside>
  );
};

export default FilterSidebar;
