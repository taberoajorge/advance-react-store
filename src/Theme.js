import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyles';


const themes = {
  ligth: {
    bg: '#fff',
    color: 'black',
  },
  dark: {
    bg: '#000',
    color: 'white',
  },
};

export const Theme = (props) => (
  <ThemeProvider >
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);
