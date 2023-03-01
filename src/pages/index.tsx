/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable arrow-body-style */
import { Loading, ShopLayout } from '@/components';
import ProductList from '@/components/product/ProductList';
import { useProducts } from '@/hooks';
import { Typography } from '@mui/material';
import { ReactNode } from 'react';

import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  const { products, error, isLoading } = useProducts(
    '/product?gender=all&page=0&offset=0&limit=10&flat=false'
  );
  return (
    <>
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ marginBottom: 1 }}>
        Todos los productos
      </Typography>
      {isLoading ? <Loading /> : <ProductList products={products} />}
    </>
  );
};

HomePage.getLayout = (page: ReactNode) => (
  <ShopLayout title="Teslo Shop">{page}</ShopLayout>
);

export default HomePage;
