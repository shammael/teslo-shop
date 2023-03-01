import { CartList, OrdenSummary, ShopLayout } from '@/components';
import { CartContext } from '@/context';
import {
  Card,
  Grid,
  Typography,
  CardContent,
  Divider,
  Box,
  Button,
} from '@mui/material';
import { ReactElement, useContext } from 'react';
import { NextPageWithLayout } from '../_app';

const CartPage: NextPageWithLayout = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <Typography variant="h1" component="h1">
        Carrito
      </Typography>

      <Grid container marginTop={1}>
        <Grid item xs={12} sm={7}>
          <CartList products={cart.products} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2" component="h2">
                Orden
              </Typography>
              <Divider sx={{ my: 1 }} />
              <OrdenSummary total={cart.total} />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Pagar
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

CartPage.getLayout = (page: ReactElement) => (
  <ShopLayout title="Cart">{page}</ShopLayout>
);

export default CartPage;
