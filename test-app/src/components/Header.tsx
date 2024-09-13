// src/components/Header.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';
import shoppingIcon from '../assets/shopping-cart.png'; // Update path if needed

const Header: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <header className="header">
      <h1>My Shop</h1>
      <div className="cart-icon">
        <img src={shoppingIcon} alt="Shopping Cart" />
        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
      </div>
    </header>
  );
};

export default Header;
