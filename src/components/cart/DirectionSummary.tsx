import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const DirectionSummary = () => (
  <>
    <Box
      sx={{ mt: 1 }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="subtitle1">Dirección de entrega</Typography>
      <Link
        style={{
          color: '#274494',
          textDecoration: 'underline',
          fontFamily: 'Roboto',
        }}
        href="/checkout/address"
      >
        Editar
      </Link>
    </Box>
    <Typography variant="subtitle2">Juan Andrés Morales</Typography>
    <Typography>324 Main Street Carry, CA</Typography>
    <Typography>United States</Typography>
    <Typography>+18026541256</Typography>
  </>
);

export default DirectionSummary;
