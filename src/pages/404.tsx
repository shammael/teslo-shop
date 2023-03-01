/* eslint-disable arrow-body-style */
import { ShopLayout } from '@/components';
import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { NextPageWithLayout } from './_app';

const Custom404: NextPageWithLayout = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 200px)"
      flexDirection={{ sm: 'row', xs: 'column' }}
    >
      <Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>
        404 |
      </Typography>
      <Typography marginLeft={2}>Página no encontrada</Typography>
    </Box>
  );
};

Custom404.getLayout = (page: ReactNode) => (
  <ShopLayout title="Page not found">{page}</ShopLayout>
);

export default Custom404;
