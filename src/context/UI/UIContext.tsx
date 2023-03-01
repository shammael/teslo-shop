import { createContext } from 'react';

interface Props {
  isMenuOpen: boolean;
  toggleSideMenu: () => void;
}

const UIContext = createContext({} as Props);

export default UIContext;
