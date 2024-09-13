import React, { useState } from 'react';
import './App.css';
import ProductDetail from './components/ProductDetails';
import FilterSidebar from './components/FilterSIdebar'; // Fixed typo
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import advert from '../src/assets/Group 44 (2).png';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import SortingDropdown from './components/SortingDropdown';

// Import the images
import Black from './assets/dog1.png';
import AIRE from './assets/dog2.png';
import Sonie from './assets/dog3.png';
import Chloe from './assets/dog4.png';

import Salad from './assets/food1.png';
import Cloud from './assets/food2.png';
import Brunch from './assets/food3.png';
import Egg from './assets/food4.png';

import Land from './assets/Landmark1.png';
import Place from './assets/Landmark2.png';
import Sand from './assets/Landmark3.png';
import Muse from './assets/Landmark4.png';

import Smile from './assets/person1.png';
import Happy from './assets/person2.png';
import Family from './assets/people3.png';
import Together from './assets/people2.png';

// Define the products with categories
const allProducts = [
  { name: 'Black', price: '$50.00', imageUrl: Black, category: 'Pets', isBestseller: true },
  { name: 'AIRE', price: '$75.00', imageUrl: AIRE, category: 'Pets' },
  { name: 'Sonie', price: '$65.00', imageUrl: Sonie, category: 'Pets' },
  { name: 'Chloe', price: '$80.00', imageUrl: Chloe, category: 'Pets', isBestseller: true },
  { name: 'Salad', price: '$30.00', imageUrl: Salad, category: 'Food' },
  { name: 'Cloud', price: '$45.00', imageUrl: Cloud, category: 'Food' },
  { name: 'Brunch', price: '$40.00', imageUrl: Brunch, category: 'Food' },
  { name: 'Egg', price: '$20.00', imageUrl: Egg, category: 'Food' },
  { name: 'Land', price: '$60.00', imageUrl: Land, category: 'Landmark' },
  { name: 'Place', price: '$70.00', imageUrl: Place, category: 'Landmark' },
  { name: 'Sand', price: '$80.00', imageUrl: Sand, category: 'Landmark' },
  { name: 'Muse', price: '$90.00', imageUrl: Muse, category: 'Landmark' },
  { name: 'Smile', price: '$55.00', imageUrl: Smile, category: 'People' },
  { name: 'Happy', price: '$65.00', imageUrl: Happy, category: 'People' },
  { name: 'Family', price: '$75.00', imageUrl: Family, category: 'People' },
  { name: 'Together', price: '$85.00', imageUrl: Together, category: 'People' },
];

const App: React.FC = () => {
  const [filters, setFilters] = useState<{ category: string[], priceRange: string[] }>({ category: [], priceRange: [] });
  const [products, setProducts] = useState(allProducts);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showSignup, setShowSignup] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(true);

  const handleSortChange = (sortOption: string) => {
    let sortedProducts = [...products];
    if (sortOption === 'Alphabetically') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'Price: Low to High') {
      sortedProducts.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
    } else if (sortOption === 'Price: High to Low') {
      sortedProducts.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
    }
    setProducts(sortedProducts);
  };

  const applyFilters = (filters: { category: string[], priceRange: string[] }) => {
    let filteredProducts = allProducts;

    if (filters.category.length) {
      filteredProducts = filteredProducts.filter(product => filters.category.includes(product.category));
    }

    if (filters.priceRange.length) {
      filteredProducts = filteredProducts.filter(product => {
        const price = parseFloat(product.price.replace('$', '').replace(',', ''));
        return filters.priceRange.some(range => {
          if (range === 'Lower than $20') return price < 20;
          if (range === '$20 - $100') return price >= 20 && price <= 100;
          if (range === '$100 - $200') return price > 100 && price <= 200;
          if (range === 'More than $200') return price > 200;
          return false;
        });
      });
    }

    setProducts(filteredProducts);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <CartProvider>
      <div className="main-container">
        {/* Render login and signup forms conditionally */}
        {!isAuthenticated && (
          <div className="form-overlay">
            {showLogin && !isAuthenticated && (
              <LoginForm 
                setIsAuthenticated={setIsAuthenticated} 
                onSignupClick={handleSignupClick} 
              />
            )}
            {showSignup && !isAuthenticated && (
              <SignupForm onLoginClick={handleLoginClick} />
            )}
          </div>
        )}

        {/* Show content only if authenticated */}
        {isAuthenticated && (
          <>
            <header>
              <Cart />
              <button onClick={handleLogout}>Logout</button>
            </header>
            
            <ProductDetail 
              name="Samurai King Resting"
              price="$10000.00" // Correct price as a string
              description="So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book."
              imageUrl={advert} // Correctly pass the advert image URL
            />
            <div className="content">
              <FilterSidebar onFilterChange={applyFilters} />
              <div className="main-content">
                <SortingDropdown onSortChange={handleSortChange} />
                <ProductGrid products={products} />
              </div>
            </div>
          </>
        )}
      </div>
    </CartProvider>
  );
};

export default App;
