import { PropsWithChildren, useReducer } from 'react';
import UIContext from './UIContext';
import UIReducer, { UIState } from './UIReducer';

const initialState: UIState = {
  isMenuOpen: false,
};

const UIProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(UIReducer, initialState);
  const toggleSideMenu = () => {
    dispatch({ type: 'UI - ToggleMenuOpen' });
  };
  return (
    <UIContext.Provider
      value={{
        ...state,

        // Methods
        toggleSideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
