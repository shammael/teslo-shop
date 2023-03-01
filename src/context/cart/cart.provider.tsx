/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ICart, ICartProduct } from '@/interfaces';
import { PropsWithChildren, useEffect, useReducer, useState } from 'react';
import Cookie from 'js-cookie';
import CartContext from './cart.context';
import cartReducer, { ICartState } from './cart.reducer';

const initialState: ICartState = {
  cart: {
    products: [],
    total: 0,
  },
};

const CartProvider = ({ children }: PropsWithChildren) => {
  const [initialized, setInitialized] = useState(false);

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const loadCartProducts = (cart: ICart) => {
    dispatch({ type: 'CART - Load cart from cookies/storage', payload: cart });
  };

  useEffect(() => {
    const carto = Cookie.get('cart')
      ? (JSON.parse(Cookie.get('cart') as string) as ICart)
      : {
          products: [],
          total: 0,
        };

    loadCartProducts(carto);

    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      Cookie.set('cart', JSON.stringify(state.cart));
    }
  }, [state.cart, initialized]);

  const addProductCart = (product: ICartProduct) => {
    dispatch({ type: 'CART - Add Product', payload: product });
  };

  const updateProductCart = (product: ICartProduct) => {
    dispatch({ type: 'CART - Update cart product', payload: product });
  };

  const deleteProductCart = (id: string) => {
    dispatch({ type: 'CART - Delete cart product', payload: id });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addProductCart, updateProductCart, deleteProductCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
