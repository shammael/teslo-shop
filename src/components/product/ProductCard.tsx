import { IProduct } from '@/interfaces';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  const [hovered, sethovered] = useState(false);
  const [isImageLoaded, setisImageLoaded] = useState(false);
  return (
    <Grid
      item
      xs={6}
      md={4}
      lg={3}
      key={product.slug}
      onMouseEnter={() => {
        sethovered(true);
      }}
      onMouseLeave={() => {
        sethovered(false);
      }}
    >
      <Link href={`/product/${product.slug}`} prefetch={false}>
        <Card>
          <CardActionArea>
            {product.inStock === 0 ? (
              <Chip
                color="primary"
                label="No hay disponible"
                sx={{ position: 'absolute', zIndex: 10, top: 10, left: 10 }}
              />
            ) : null}
            <CardMedia
              className="fadeIn"
              component="img"
              image={
                hovered
                  ? `/products/${product.images[1]}`
                  : `/products/${product.images[0]}`
              }
              onLoad={() => setisImageLoaded(true)}
            />
          </CardActionArea>
        </Card>
        <Box
          sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }}
          className="fadeIn"
        >
          <Typography fontWeight={700}>{product.title}</Typography>
          <Typography fontWeight={500}>${product.price}</Typography>
        </Box>
      </Link>
    </Grid>
  );
};

export default ProductCard;
