import { IProduct, TSize } from './product';

export type ICartProduct = Omit<
  IProduct,
  'createdAt' | 'updatedAt' | 'description' | 'images' | 'sizes'
> & { quantity: number; image: string; size: TSize; id: string };

export interface ICart {
  products: ICartProduct[];
  total: number;
}
