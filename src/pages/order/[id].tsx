import {
  CartList,
  DirectionSummary,
  OrdenSummary,
  ShopLayout,
} from '@/components';
import {
  Card,
  Grid,
  Typography,
  CardContent,
  Divider,
  Box,
  Button,
  Chip,
} from '@mui/material';
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from '@mui/icons-material';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

interface Props {
  orden: {
    pagado?: boolean;
  };
}

const OrderPage: NextPageWithLayout<Props> = ({
  orden = { pagado: false },
}) => {
  const { pagado = false } = orden;
  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
      <Typography variant="h1" component="h1">
        Orden: 521462444
      </Typography>
      {pagado ? (
        <Chip
          sx={{ my: 2, px: 1, py: 1 }}
          variant="outlined"
          label="Orden Pagada"
          color="success"
          icon={<CreditScoreOutlined />}
        />
      ) : (
        <Chip
          sx={{ my: 2, px: 1, py: 1 }}
          variant="outlined"
          label="Pendiente de pago"
          color="warning"
          icon={<CreditCardOffOutlined />}
        />
      )}

      <Grid
        container
        marginTop={2}
        sx={{
          position: 'relative',
          justifyContent: { xs: 'center', md: 'space-between' },
        }}
      >
        <Grid item xs={12} md={7}>
          <CartList />
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
              <OrdenSummary />
              {/* <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar orden
                </Button>
              </Box> */}
              <Typography>Pagar</Typography>
              <Chip
                sx={{ my: 2, px: 1, py: 1 }}
                variant="outlined"
                label="Orden Pagada"
                color="success"
                icon={<CreditScoreOutlined />}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

OrderPage.getLayout = (page: ReactElement) => (
  <ShopLayout
    title="Resumen de la orden 4324cf5fds434r"
    pageDescription="Resumen de la orden"
  >
    {page}
  </ShopLayout>
);

export default OrderPage;
