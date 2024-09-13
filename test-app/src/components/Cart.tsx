// src/components/Cart.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';
import shoppingCartIcon from '../assets/shopping-cart.png'; // Ensure the path is correct

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (productName: string, quantity: number) => {
    updateQuantity(productName, quantity);
  };

  const handleClearCart = () => {
    cartItems.forEach(item => removeFromCart(item.name));
  };

  return (
    <div className="cart-dropdown">
      <img src={shoppingCartIcon} alt="Shopping Cart" className="cart-icon" />
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.imageUrl} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.name, (item.quantity || 0) - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.name, (item.quantity || 0) + 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.name)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <button className="clear-cart" onClick={handleClearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
