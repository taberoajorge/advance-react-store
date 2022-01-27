import React from 'react';
import useFetch from '../hooks/useFetch';

const FavoriteContext = React.createContext();

function FavoriteProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [search, setSearch] = React.useState('');
  const characters = useFetch();

  const OnAddToFavorite = person => {
    dispatch({ type: actionTypes.addToFavorite, payload: person });
  };

  const filteredUsers = React.useMemo(
    () =>
      characters.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <FavoriteContext.Provider
      value={{
        OnAddToFavorite,
        state,
        setSearch,
        filteredUsers,
      }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
}

const initialState = {
  favorites: [],
};

const actionTypes = {
  addToFavorite: 'ADD_TO_FAVORITE',
};

function reducer(state, { type, payload }) {
  switch (type) {
    case actionTypes.addToFavorite:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    default:
      return state;
  }
}

<FavoriteContext.Consumer></FavoriteContext.Consumer>;

export { FavoriteContext, FavoriteProvider };
