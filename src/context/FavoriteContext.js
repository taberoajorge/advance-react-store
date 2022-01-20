import React from 'react';
const FavoriteContext = React.createContext();

function FavoriteProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const OnAddToFavorite = person => {
    dispatch({ type: actionTypes.addToFavorite, payload: person });
  };

  return (
    <FavoriteContext.Provider
      value={{
        OnAddToFavorite,
        state
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
