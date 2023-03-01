import { IProduct } from '@/interfaces';
import axios from '../axios/axios';

const getProductBySlug = async (slug: string) => {
  const resp = await axios.get<IProduct>(`/product/${slug}`);
  return resp.data;
};

export default getProductBySlug;
