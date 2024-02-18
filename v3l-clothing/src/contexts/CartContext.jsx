import { createContext, useState } from "react";


export const addCartItem = (cartItems, productToAdd) => {

  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    )
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }


  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
