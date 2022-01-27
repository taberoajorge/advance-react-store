import React from 'react';
import axios from 'axios';
const URL_API = 'https://rickandmortyapi.com/api/character/';

function useFetch() {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(async () => {
    await axios.get(URL_API).then(response => {
      setCharacters(response.data.results);
    });
  }, []);

  return characters;
}

export default useFetch;
