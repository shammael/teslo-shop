import {
  CartList,
  DirectionSummary,
  OrdenSummary,
  ShopLayout,
} from '@/components';
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

const SummaryPage: NextPageWithLayout = () => {
  const { cart } = useContext(CartContext);
  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
      <Typography variant="h1" component="h1">
        Resumen de la orden
      </Typography>
      <Grid
        container
        marginTop={2}
        sx={{
          position: 'relative',
          justifyContent: { xs: 'center', md: 'space-between' },
        }}
      >
        <Grid item xs={12} md={7}>
          <CartList products={cart.products} />
        </Grid>
        <Grid item xs={12} md={4} style={{ maxWidth: '400px' }}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2" component="h2">
                Resumen
              </Typography>
              <Divider sx={{ my: 1 }} />
              <DirectionSummary />
              <Divider sx={{ my: 1 }} />
              <OrdenSummary total={cart.total} />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

SummaryPage.getLayout = (page: ReactElement) => (
  <ShopLayout title="Summary" pageDescription="Resumen de la orden">
    {page}
  </ShopLayout>
);

export default SummaryPage;
