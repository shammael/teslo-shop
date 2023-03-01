import { ICartProduct } from '@/interfaces';
import {
  Box,
  CardActionArea,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { DeleteOutline } from '@mui/icons-material';
import { CartContext } from '@/context';
import { ItemCounter } from '../ui';

interface Props {
  product: ICartProduct;
}

/* eslint-disable arrow-body-style */
const CartListCard = ({ product }: Props) => {
  const [counter, setCounter] = useState(product.quantity);
  const { updateProductCart, deleteProductCart } = useContext(CartContext);
  return (
    <Grid spacing={2} container key={product.slug} sx={{ mb: 1 }}>
      <Grid item xs={3}>
        <Link href={`/product/${product.slug}`}>
          <CardActionArea>
            <CardMedia
              image={`/products/${product.image}`}
              component="img"
              sx={{ borderRadius: '5px' }}
            />
          </CardActionArea>
        </Link>
      </Grid>
      <Grid item xs={7}>
        <Box display="flex" flexDirection="column">
          <Typography
            sx={{ color: 'rgba(0,0,0,0.7)' }}
            component="h5"
            variant="h1"
            fontSize={18}
          >
            {product.title}
          </Typography>
          <Typography
            sx={{ fontSize: 15, color: 'rgba(0,0,0,0.4)' }}
            variant="body1"
          >
            Talla:{' '}
            <strong style={{ color: 'rgba(0,0,0,0.6)' }}>{product.size}</strong>
          </Typography>
          <Box display="flex">
            <Typography
              fontSize="18px"
              sx={{ color: 'rgba(0,0,0,0.3)', mr: 1 }}
              variant="body1"
            >
              Precio:{' '}
            </Typography>
            <Typography
              sx={{ color: 'rgba(0,0,0,0.5)' }}
              variant="body1"
              fontSize="18px"
            >
              ${product.price}
            </Typography>
          </Box>
          <ItemCounter
            counter={counter}
            onSelectCounter={(count) => {
              setCounter(count);
              updateProductCart({
                ...product,
                quantity: count,
              });
            }}
            maxValue={product.inStock}
          />
          <Box display="flex">
            <Typography
              sx={{
                mr: 1,
                color: 'rgba(0,0,0,0.3)',
                fontSize: '20px',
                fontWeight: '500',
              }}
            >
              Total:{' '}
            </Typography>
            <Typography
              sx={{ color: 'green', fontSize: '20px', fontWeight: '500' }}
            >
              ${counter * product.price}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={2}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <IconButton
          sx={{ color: 'rgba(0,0,0,0.2)' }}
          onClick={() => deleteProductCart(product.id)}
        >
          <DeleteOutline />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CartListCard;
