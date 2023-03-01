/* eslint-disable @typescript-eslint/ban-types */
import { UIProvider, CartProvider } from '@/context';
import '@/styles/globals.css';
import { lightTheme } from '@/themes';
import { ThemeProvider } from '@mui/material/styles';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider theme={lightTheme}>
      <UIProvider>
        <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>
      </UIProvider>
    </ThemeProvider>
  );
}

