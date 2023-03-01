/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable arrow-body-style */
import {
  ShopLayout,
  ProductSlideShow,
  ItemCounter,
  SizeSelector,
} from '@/components';
import { CartContext } from '@/context';
import { IProduct, TSize } from '@/interfaces';
import { getProductBySlug, getProductsByGenre } from '@/services';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ReactElement, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NextPageWithLayout } from '../_app';

interface Props {
  product: IProduct;
}

const ProductPage: NextPageWithLayout<Props> = ({
  product: {
    title,
    price,
    description,
    images,
    sizes,
    inStock,
    gender,
    type,
    slug,
    tags,
  },
}) => {
  const [size, setSize] = useState<TSize | null>(null);
  const [counter, setCounter] = useState(1);
  const router = useRouter();
  const { addProductCart } = useContext(CartContext);

  const addProduct = () => {
    if (!size || counter < 1) {
      return null;
    }

    addProductCart({
      gender,
      image: images[0],
      inStock,
      price,
      quantity: counter,
      size,
      slug,
      tags,
      title,
      type,
      id: uuidv4(),
    });

    router
      .push('/cart')
      .then(() => {})
      .catch(() => {});

    return null;
  };

  return (
    <Grid container spacing={3} maxWidth="1200px" marginX="auto">
      <Grid item xs={12} sm={7}>
        <ProductSlideShow images={images} />
      </Grid>
      <Grid item xs={12} sm={5} sx={{ height: '100%' }}>
        <Box display="flex" flexDirection="column">
          <>
            <Typography variant="h1" component="h1">
              {title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              {price}
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter
                counter={counter}
                onSelectCounter={(count) => setCounter(count)}
                maxValue={inStock}
              />
              <SizeSelector
                selectedSize={size}
                sizes={sizes}
                onSelectedSize={(data) => setSize(data)}
              />

              {inStock > 0 ? (
                <Button
                  sx={{ my: 1, width: '100%' }}
                  className="circular-btn"
                  color="secondary"
                  disabled={size === null}
                  onClick={() => addProduct()}
                >
                  {size ? 'Agregar al carrito' : 'Selecione una talla'}
                </Button>
              ) : (
                <Chip
                  label="No hay disponible"
                  variant="outlined"
                  color="error"
                  sx={{ width: '100%', my: 1 }}
                />
              )}
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle2">Descripción</Typography>
                <Typography variant="body2">{description}</Typography>
              </Box>
            </Box>
          </>
        </Box>
      </Grid>
    </Grid>
  );
};

ProductPage.getLayout = (page: ReactElement<Props>) => {
  return (
    <ShopLayout
      title={page.props.product.title}
      pageDescription={page.props.product.description}
    >
      {page}
    </ShopLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productsDB = await getProductsByGenre();
  const paths = productsDB.docs.map((product) => {
    return {
      params: { slug: product.slug },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<{ product: IProduct }> = async (
  context
) => {
  const { slug } = context?.params!;
  const productDB = await getProductBySlug(slug as string);
  if (!productDB) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
  return {
    props: {
      product: productDB,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default ProductPage;
