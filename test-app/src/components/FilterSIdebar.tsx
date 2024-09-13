import React, { useState } from "react";
import '../styles/FilterSidebar.css';

type FilterSidebarProps = {
  onFilterChange: (filters: { category: string[]; priceRange: string[] }) => void;
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <>
      {/* <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="filter-toggle">
        {isSidebarOpen ? "Close Filters" : "Open Filters"}
      </button> */}
      <aside className={`filters ${isSidebarOpen ? 'open' : ''}`}>
        <div className="filter-section">
          <h3>Category</h3>
          <ul>
            <li>
              <input
                type="checkbox"
                checked={selectedCategories.includes("People")}
                onChange={() => handleCategoryChange("People")}
              />
              <label>People</label>
            </li>
            <li>
              <input
                type="checkbox"
                checked={selectedCategories.includes("Pets")}
                onChange={() => handleCategoryChange("Pets")}
              />
              <label>Pets</label>
            </li>
            <li>
              <input
                type="checkbox"
                checked={selectedCategories.includes("Food")}
                onChange={() => handleCategoryChange("Food")}
              />
              <label>Food</label>
            </li>
            <li>
              <input
                type="checkbox"
                checked={selectedCategories.includes("Landmark")}
                onChange={() => handleCategoryChange("Landmark")}
              />
              <label>Landmark</label>
            </li>
          </ul>
        </div>
        <div className="filter-section">
          <h3>Price Range</h3>
          <ul>
            <li>
              <input
                type="checkbox"
                checked={selectedPriceRanges.includes("Lower than $20")}
                onChange={() => handlePriceRangeChange("Lower than $20")}
              />
              <label>Lower than $20</label>
            </li>
            <li>
              <input
                type="checkbox"
                checked={selectedPriceRanges.includes("$20 - $100")}
                onChange={() => handlePriceRangeChange("$20 - $100")}
              />
              <label>$20 - $100</label>
            </li>
            <li>
              <input
                type="checkbox"
                checked={selectedPriceRanges.includes("$100 - $200")}
                onChange={() => handlePriceRangeChange("$100 - $200")}
              />
              <label>$100 - $200</label>
            </li>
            <li>
              <input
                type="checkbox"
                checked={selectedPriceRanges.includes("More than $200")}
                onChange={() => handlePriceRangeChange("More than $200")}
              />
              <label>More than $200</label>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
