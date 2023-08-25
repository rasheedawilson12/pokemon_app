import React from "react";

function Show(props) {
  const pokemon = props.pokemon;
  return (
    <div>
      <h1>Gotta Catch 'Em All!</h1>
      <h2>{pokemon.name}</h2>
      {/* <img src={`${pokemon.name}.jpg`} alt={pokemon.name} /> */}
    </div>
  );
}

export default Show;
