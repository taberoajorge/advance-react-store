import React from 'react';
import styled from 'styled-components';
import Character from '../components/Character';
import { FavoriteContext } from '../context/FavoriteContext';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function Characters() {
  const {filteredUsers} = React.useContext(FavoriteContext);

  return (
    <StyledContainer>
      {filteredUsers.map(item => (
        <Character key={item.id} item={item} />
      ))}
    </StyledContainer>
  );
}

export default Characters;
