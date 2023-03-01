import { ICart, ICartProduct } from '@/interfaces';

export interface ICartState {
  cart: ICart;
}

type ActionType =
  | { type: 'CART - Add Product'; payload: ICartProduct }
  | { type: 'CART - Load cart from cookies/storage'; payload: ICart }
  | { type: 'CART - Update cart product'; payload: ICartProduct }
  | { type: 'CART - Delete cart product'; payload: string };

const cartReducer = (state: ICartState, action: ActionType) => {
  switch (action.type) {
    case 'CART - Add Product': {
      const product = action.payload;
      const products = [...state.cart.products, product];
      const cart: ICart = {
        products,
        total: products.reduce(
          (previous, current) => previous + current.quantity * current.price,
          0
        ),
      };

      return {
        ...state,
        cart,
      };
    }

    case 'CART - Update cart product': {
      const product = action.payload;
      const products = state.cart.products.map((prod) => {
        if (prod.slug === product.slug) {
          return product;
        }
        return prod;
      });

      const cart: ICart = {
        products,
        total: products.reduce(
          (previous, current) => previous + current.quantity * current.price,
          0
        ),
      };

      return {
        ...state,
        cart,
      };
    }
    case 'CART - Delete cart product': {
      const products = state.cart.products.filter(
        (prod) => prod.id !== action.payload
      );
      const cart: ICart = {
        products,
        total: products.reduce(
          (previous, current) => previous + current.quantity * current.price,
          0
        ),
      };

      return {
        ...state,
        cart,
      };
    }
    case 'CART - Load cart from cookies/storage':
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
