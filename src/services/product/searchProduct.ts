import { IPaginate, IProduct } from '@/interfaces';
import axios from '../axios/axios';

const searchProduct = async (term: string) => {
  const resp = await axios.get<IPaginate<IProduct>>(
    `/product/search?q=${term}`
  );
  return resp.data.docs;
};

export default searchProduct;
