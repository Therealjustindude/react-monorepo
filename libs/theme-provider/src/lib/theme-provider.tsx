import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme } from './theme.types';
import { defaultTheme } from './defaultTheme';

export const ThemeProvider = ({
  children,
  customTheme
}: ThemeProviderProps) => {
  const theme = customTheme ? { ...defaultTheme, ...customTheme } : defaultTheme;
  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  );
}

interface ThemeProviderProps {
  children: ReactNode;
  customTheme?: Partial<Theme>;
}

export default ThemeProvider;
