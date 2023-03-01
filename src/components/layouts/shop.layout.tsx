import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { NavBar, Sidemenu } from '../ui';

interface Props {
  title?: string;
  pageDescription?: string;
  pageImgUrl?: string;
}

const ShopLayout = ({
  title = 'Teslo Shop',
  pageDescription,
  pageImgUrl,
  children,
}: PropsWithChildren<Props>) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="og:title" content={pageDescription} />
      {pageDescription ?? (
        <>
          <meta name="description" content={pageDescription} />
          <meta name="og:description" content={pageDescription} />
        </>
      )}
      {pageImgUrl && <meta name="og:image" content={pageImgUrl} />}
    </Head>
    <NavBar />
    <Sidemenu />
    <main
      style={{ margin: '80px auto', maxWidth: '1440px', padding: '0px 30px' }}
    >
      {children}
    </main>
  </>
);
export default ShopLayout;
