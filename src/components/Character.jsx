import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bababa;
  width: 15rem;
  /* height: 20rem; */
  margin:  1rem auto;
  & > figure {
    &> img {
      width: 100%;
      height: 100%;
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
  return (
    <StyledCard>
      <figure>
      <img src={item.image} alt="character" />
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
