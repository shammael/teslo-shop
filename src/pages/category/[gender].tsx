/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Loading, ProductList, ShopLayout } from '@/components';
import { useProducts } from '@/hooks';
import { capitalize } from '@/utils';
import { Typography } from '@mui/material';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { products, isLoading } = useProducts(
    `/product?limit=10&page=1&gender=${router.query.gender as string}`
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

CategoryPage.getLayout = (page: ReactElement<{ gender: string }>) => (
  <ShopLayout title={capitalize(page.props.gender || '')}>{page}</ShopLayout>
);

export const getStaticPaths = () => ({
  paths: [
    { params: { gender: 'men' } },
    { params: { gender: 'women' } },
    { params: { gender: 'kid' } },
    { params: { gender: 'unisex' } },
  ],
  fallback: false, // can also be true or 'blocking'
});

export const getStaticProps: GetStaticProps = (context) => {
  const { gender } = context.params!;
  return {
    props: {
      gender,
    },
  };
};

export default CategoryPage;
