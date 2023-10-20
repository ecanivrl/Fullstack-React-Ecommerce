import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []
  );

  // ! save to local storage
  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (cartItem) => {
    // setCartItems([...cartItems, product]) 1. YOL
    setCartItems((prevCart) => [...prevCart, cartItem]);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node,
};
