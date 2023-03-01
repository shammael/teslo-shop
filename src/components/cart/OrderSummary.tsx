import { Box, Typography } from '@mui/material';
import Link from 'next/link';

interface Props {
  total: number;
}

const OrderSummary = ({ total }: Props) => (
  <Box>
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography component="h3" variant="h6">
        Order
      </Typography>
      <Link
        style={{
          color: '#274494',
          fontSize: '15px',
          textDecoration: 'underline',
        }}
        href="/"
      >
        Ver Lista
      </Link>
    </Box>
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="subtitle2">Total productos:</Typography>
      <Typography variant="subtitle2">${total}</Typography>
    </Box>
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography fontWeight="500" variant="subtitle2">
        Impuestos (15%):
      </Typography>
      <Typography variant="subtitle2">${(total * 15) / 100}</Typography>
    </Box>
    <Box
      mt={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography fontWeight="700" variant="h5">
        Total:
      </Typography>
      <Typography variant="subtitle1">${(total * 1.15).toFixed(2)}</Typography>
    </Box>
  </Box>
);

export default OrderSummary;
