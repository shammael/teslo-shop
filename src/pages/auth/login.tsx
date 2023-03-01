import { AuthLayout } from '@/components';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { NextPageWithLayout } from '../_app';

const Login: NextPageWithLayout = () => (
  <Box sx={{ width: 350, padding: '10px 20px' }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" component="h1">
          Iniciar sesión
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Correo" variant="filled" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Contraseña"
          type="password"
          variant="filled"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          color="secondary"
          className="circular-btn"
          size="large"
          fullWidth
        >
          Ingresar
        </Button>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="end">
        <Link href="/auth/register" className="link" prefetch={false}>
          No tienes cuenta
        </Link>
      </Grid>
    </Grid>
  </Box>
);

Login.getLayout = (page: ReactNode) => (
  <AuthLayout title="Ingresar">{page}</AuthLayout>
);

export default Login;
