import React from 'react';

import {dark, light} from '../constants/';
import {Theme, ThemeProviderType} from '../constants/types';

export const ThemeContext = React.createContext({
  theme: light,
  setTheme: () => {
  },
});

export const ThemeProvider = ({
  children,
  theme = light,
  setTheme = () => {
  },
}: ThemeProviderType) => {
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme(): Theme {
  const {theme} = React.useContext(ThemeContext);
  return theme;
}
