import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --title: 2.4rem;
    --text-md: 1.8rem;
    --text-sm: 1.4rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body{
    font-size: 62.5%;
    background-color: ${(p)=> p.theme.bg};
    color: ${(p)=> p.theme.color};
  }
`;

export default GlobalStyle;