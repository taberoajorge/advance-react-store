import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  
`;

function Layout({ children }) {
  return (
    <StyledMain>{children}</StyledMain>
  );
}

export default Layout;
