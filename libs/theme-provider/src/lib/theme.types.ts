export interface Theme {
	borderRadius: string;
  palette: {
    mode: 'light' | 'dark';
    common: {
      black: string;
      white: string;
    };
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    error: {
      main: string;
      light: string;
      dark: string;
    };
    warning: {
      main: string;
      light: string;
      dark: string;
    };
    info: {
      main: string;
      light: string;
      dark: string;
    };
    success: {
      main: string;
      light: string;
      dark: string;
    };
    grey: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
  };
  typography: {
    htmlFontSize: number; 
    pxToRem: (px: number) => string;
    fontFamily: string; 
    fontSize: number; 
    fontWeightLight: number; 
    fontWeightRegular: number; 
    fontWeightMedium: number; 
    fontWeightBold: number; 
    h1: object; 
    h2: object; 
    h3: object; 
    h4: object; 
    h5: object; 
    h6: object; 
    subtitle1: object; 
    subtitle2: object; 
    body1: object; 
    body2: object; 
    button: object; 
    caption: object; 
  };
}
