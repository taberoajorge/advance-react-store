import React from 'react';
import styled from 'styled-components';
import { FavoriteContext } from '../context/FavoriteContext';

const StyledMain = styled.main`
  
`;
const StyledFavoriteContainer = styled.div`
  margin: 1rem;
  border: 0.1rem solid #bababa;

  & > h1 {
    font-size: var(--title);
  }
  & > p {
    font-size: var(--text-md);
  }
`;

function Layout({ children }) {
  const { state } = React.useContext(FavoriteContext);


  return (
    <StyledMain>
      <StyledFavoriteContainer>
        <h1>favoritos:</h1>
        {state.favorites.map((fav)=>(
          <p key={fav.id}>{fav.name}</p>
        ))}
      </StyledFavoriteContainer>
      {children}
    </StyledMain>
  );
}

export default Layout;
