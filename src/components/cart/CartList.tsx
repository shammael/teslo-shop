import { ICartProduct } from '@/interfaces';
import CartListCard from './CartListCard';

interface Props {
  products: ICartProduct[];
}

const CartList = ({ products = [] }: Props) => (
  <>
    {products.map((product) => (
      <CartListCard key={product.id} product={product} />
    ))}
  </>
);

export default CartList;
