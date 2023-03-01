import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

const Loading = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="calc(100vh - 200px)"
    flexDirection="column"
  >
    <Typography sx={{ mb: 2 }} variant="h4">
      Cargando
    </Typography>
    <CircularProgress thickness={2} />
  </Box>
);

export default Loading;
