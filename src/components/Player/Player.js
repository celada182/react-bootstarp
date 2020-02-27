import React from 'react';

const player = (props) => {
  return (
      <React.Fragment>
        <p>{props.name}</p>
        <p>Puntos: {props.points}</p>
      </React.Fragment>
      );
};

export default player;