import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Character from '../components/Character';
const URL_API = 'https://rickandmortyapi.com/api/character/';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function Characters() {
  const [character, setCharacter] = React.useState([]);

  React.useEffect( async() => {
     await axios.get(URL_API)
    .then((response)=>{
      console.log(response.data.results);
      setCharacter(response.data.results);
    })
  }, []);

  return (
    <StyledContainer>
      {character.map(item => (
       <Character key={item.id} item={item} />
      ))}
    </StyledContainer>
  );
}

export default Characters;
