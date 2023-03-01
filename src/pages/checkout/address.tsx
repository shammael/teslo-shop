/* eslint-disable arrow-body-style */
import { ShopLayout } from '@/components';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

const AddressPage: NextPageWithLayout = () => {
  return (
    <Box
      sx={{
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Typography variant="h1" component="h1">
        Dirección
      </Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={6}>
          <TextField label="Nombre" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Apellido" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Dirección 1" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Dirección 2" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Código Postal" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Ciudad" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>País</InputLabel>
            <Select variant="filled" value={1}>
              <MenuItem value={1}>Costa Rica</MenuItem>
              <MenuItem value={2}>Venezuela</MenuItem>
              <MenuItem value={3}>Argentina</MenuItem>
              <MenuItem value={4}>Colombia</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Teléfono" variant="filled" fullWidth />
        </Grid>
      </Grid>
      <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
        <Button color="secondary" className="circular-btn" size="large">
          Confirmo mis datos
        </Button>
      </Box>
    </Box>
  );
};

AddressPage.getLayout = (page: ReactElement) => (
  <ShopLayout title="Address">{page}</ShopLayout>
);

export default AddressPage;
