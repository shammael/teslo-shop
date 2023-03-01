import { AuthLayout } from '@/components';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { NextPageWithLayout } from '../_app';

const Register: NextPageWithLayout = () => (
  <Box sx={{ width: 350, padding: '10px 20px' }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" component="h1">
          Crear cuenta
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Nombre completo" variant="filled" fullWidth />
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
          Registrarse
        </Button>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="end">
        <Link href="/auth/login" className="link" prefetch={false}>
          ¿Ya tienes cuenta?
        </Link>
      </Grid>
    </Grid>
  </Box>
);

Register.getLayout = (page: ReactNode) => (
  <AuthLayout title="Registrar">{page}</AuthLayout>
);

export default Register;
