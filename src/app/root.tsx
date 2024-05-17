import { createContext, FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { defineTheme } from '../@portfolio/utils/defineTheme';

type Props = {
  children: ReactNode;
};

const ThemeContext = createContext(defineTheme());

export const Root: FC<Props> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
    </BrowserRouter>
  );
};
