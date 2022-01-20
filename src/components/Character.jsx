import React from 'react';
import styled from 'styled-components';
import { SuitHeartFill } from 'styled-icons/bootstrap';
import { FavoriteContext } from '../context/FavoriteContext';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bababa;
  width: 15rem;
  margin: 1rem auto;
  & > figure {
    & > img {
      width: 100%;
      height: 100%;
    }
    & > figcaption {
      display: flex;
      justify-content: end;
      & > button {
        border: 0.1rem solid red;
        border-radius: 50%;
        padding: 1rem;
        position: relative;
        top: -6rem;
        right: 1rem;
        background-color: #f601015e;
      }
    }
  }
  & > div {
    padding: 1rem;

    & > h1 {
      font-size: var(--text-md);
    }
    & > p {
      font-size: var(--text-sm);
    }
  }
`;

function Character({ item }) {
  const { OnAddToFavorite } = React.useContext(FavoriteContext);

  return (
    <StyledCard>
      <figure>
        <img src={item.image} alt="character" />
        <figcaption>
          <button onClick={() => OnAddToFavorite(item)}>
            <SuitHeartFill color="white" size={20} />
          </button>
        </figcaption>
      </figure>
      <div>
        <h1>{item.name}</h1>
        <p>{item.status}</p>
        <p>{item.gender}</p>
        <p>{item.location.name}</p>
      </div>
    </StyledCard>
  );
}

export default Character;
