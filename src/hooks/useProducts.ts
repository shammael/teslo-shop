import { IPaginate, IProduct } from '@/interfaces';
import { fetcher } from '@/services';
import useSWR, { SWRConfiguration } from 'swr';

const useProducts = (url: string, config: SWRConfiguration = {}) => {
  const { data, error, isLoading } = useSWR<
    IPaginate<IProduct>,
    { message: string }
  >(url, fetcher, config);

  return {
    products: data?.docs || ([] as IProduct[]),
    isLoading,
    error: error?.message,
  };
};

export default useProducts;
