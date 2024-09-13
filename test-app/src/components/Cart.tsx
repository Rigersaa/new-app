// src/components/Cart.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';
import shoppingCartIcon from '../assets/shopping-cart.png'; // Ensure the path is correct

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (productName: string, quantity: number) => {
    if (quantity >= 0) { // Ensure quantity is not negative
      updateQuantity(productName, quantity);
    }
  };

  const handleClearCart = () => {
    cartItems.forEach(item => removeFromCart(item.name));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * (item.quantity || 0)), 0).toFixed(2);
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
              <li key={index} className="cart-item">
                <img src={item.imageUrl} alt={item.name} />
                <div className="item-details">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleQuantityChange(item.name, (item.quantity || 0) - 1)} 
                      className="quantity-button"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.name, (item.quantity || 0) + 1)} 
                      className="quantity-button"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.name)} 
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: ${getTotalPrice()}</p>
            <button className="clear-cart" onClick={handleClearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
