/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IPaginate, IProduct } from '@/interfaces';
import axios from '../axios/axios';

const getProductsByGenre = async (
  genre = 'all'
): Promise<IPaginate<IProduct>> => {
  const resp = await axios.get<IPaginate<IProduct>>(
    `/product?gender=${genre}&page=1&limit=10&offset=0`
  );
  return resp.data;
};

export default getProductsByGenre;
