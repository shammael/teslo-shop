/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable arrow-body-style */
import { ProductList, ShopLayout } from '@/components';
import { IProduct } from '@/interfaces';
import { searchProduct } from '@/services';
import { capitalize } from '@/utils';
import { Box, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import { ReactNode } from 'react';
import { NextPageWithLayout } from '../_app';

interface Props {
  products: IProduct[];
  query: string;
  found: boolean;
}

const SearchPage: NextPageWithLayout<Props> = ({ products, query, found }) => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Buscar Producto
      </Typography>
      {found ? (
        <Typography variant="h2" sx={{ mb: 1 }}>
          Término: {capitalize(query)}
        </Typography>
      ) : (
        <Box display="flex">
          <Typography variant="h2" sx={{ mb: 1 }}>
            No encontramos ningún producto
          </Typography>
          <Typography color="secondary" variant="h2" sx={{ mb: 2, ml: 1 }}>
            {capitalize(query)}
          </Typography>
        </Box>
      )}
      <ProductList products={products} />
    </>
  );
};

SearchPage.getLayout = (page: ReactNode) => (
  <ShopLayout title="Search">{page}</ShopLayout>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { q = '' } = context.params as { q: string };
  let found = true;

  if (q.trim().length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  let products = await searchProduct(q);

  if (products.length === 0) {
    found = false;
    products = await searchProduct('cybertruck');
  }

  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  return {
    props: {
      products,
      query: q,
      found,
    },
  };
};

export default SearchPage;
