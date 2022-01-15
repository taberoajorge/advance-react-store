import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyles';


const themes = {
  true: {
    bg: 'hsl(0, 0%, 100%)',
    color: 'black',
  },
  false: {
    bg: 'hsl(230, 17%, 14%)',
    color: 'white',
  },
};

export const Theme = (props) => (
  <ThemeProvider theme={themes[props.theme]} >
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);
