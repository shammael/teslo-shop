/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
import {
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  AppBar,
  Input,
  InputAdornment,
} from '@mui/material';
import NextLink from 'next/link';
import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { CartContext, UIContext } from '@/context';

const NavBar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [isInputSearchVisible, setIsInputSearchVisible] = useState(false);
  const { toggleSideMenu } = useContext(UIContext);
  const { cart } = useContext(CartContext);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return null;
    setSearchTerm('');
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push(`/search/${searchTerm}`);
  };

  return (
    <AppBar elevation={0}>
      <Toolbar>
        <NextLink
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
          href="/"
        >
          <Typography variant="h6">Teslo |</Typography>
          <Typography sx={{ ml: 0.5 }}>Shop</Typography>
        </NextLink>
        <Box flex={1} />
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: isInputSearchVisible ? 'none' : 'block',
              md: 'block',
            },
          }}
        >
          <NextLink href="/category/men">
            <Button
              color={router.asPath === '/category/men' ? 'primary' : 'info'}
            >
              Hombre
            </Button>
          </NextLink>
          <NextLink href="/category/women">
            <Button
              color={router.asPath === '/category/women' ? 'primary' : 'info'}
            >
              Mujeres
            </Button>
          </NextLink>
          <NextLink href="/category/kid">
            <Button
              color={router.asPath === '/category/kid' ? 'primary' : 'info'}
            >
              Niños
            </Button>
          </NextLink>
        </Box>
        <Box flex={1} />

        {isInputSearchVisible ? (
          <Input
            className="fadeIn"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => (e.key === 'Enter' ? onSearchTerm() : null)}
            type="text"
            placeholder="Buscar..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => onSearchTerm()}
                >
                  <ClearOutlined
                    onClick={() => setIsInputSearchVisible(false)}
                  />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            className="fadeIn"
            onClick={() => setIsInputSearchVisible(true)}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <SearchOutlined />
          </IconButton>
        )}

        {/* Pantalla grande */}
        <IconButton
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          onClick={() => toggleSideMenu()}
        >
          <SearchOutlined />
        </IconButton>
        <NextLink href="/cart">
          <IconButton>
            <Badge
              badgeContent={
                cart.products.length > 9 ? '+9' : cart.products.length
              }
              color="secondary"
            >
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </NextLink>
        <Button onClick={() => toggleSideMenu()}>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
