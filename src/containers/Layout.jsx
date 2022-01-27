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
  const { state, search, setSearch } = React.useContext(FavoriteContext);

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <StyledMain>
      <StyledFavoriteContainer>
        <h1>favoritos:</h1>
        {state.favorites.map((fav)=>(
          <p key={fav.id}>{fav.name}</p>
        ))}
      </StyledFavoriteContainer>
      <div>
        <input type="text" value={search} onChange={e => handleSearch(e)} />
      </div>
      {children}
    </StyledMain>
  );
}

export default Layout;
