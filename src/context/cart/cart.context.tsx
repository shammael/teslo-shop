import { ICart, ICartProduct } from '@/interfaces';
import { createContext } from 'react';

interface Props {
  cart: ICart;

  addProductCart: (product: ICartProduct) => void;
  updateProductCart: (product: ICartProduct) => void;
  deleteProductCart: (id: string) => void;
}

const CartContext = createContext({} as Props);

export default CartContext;
