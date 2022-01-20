import React from 'react';
import logo from '../assets/logo.png';
import logo_mobile from '../assets/logo_mobil.png';
import styled from 'styled-components';
import ToggleButton from './ToggleButton';
import ThemeContext from '../context/ThemeContext';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  width: 100vw;
  & > picture {
    height: 100%;
  }
`;

const StyledLogo = styled.img`
  height: 100%;
`;

const StyledNav = styled.nav`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

function Header({ theme, setTheme }) {
  const color = React.useContext(ThemeContext);

  return (
    <StyledHeader>
      <picture>
        <source media="(min-width: 600px)" srcSet={logo} />
        <StyledLogo src={logo_mobile} alt="" />
      </picture>
      <StyledNav>
        <ToggleButton selected={theme} toggleSelected={setTheme} />
        <ul>
          <li>Hola</li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
