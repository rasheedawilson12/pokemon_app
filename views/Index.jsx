import React from "react";

function Index(props) {
  const pokemon = props.pokemon;
  return (
    <div>
      <h1>See All The Pokemon!</h1>
      {pokemon.map((pokemon, i) => {
        return (
          <div key={i}>
            <ul>
              <ll>{pokemon.name}</ll>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
