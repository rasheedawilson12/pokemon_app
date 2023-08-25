import React from "react";

function Show(props) {
  const pokemon = props.pokemon;
  return (
    <div
      style={{
        textAlign: "center",
        textTransform: "uppercase",
        backgroundColor: "crimson",
        color: "aliceblue",
        padding: "50px 100px",
      }}
    >
      <h1>Gotta Catch 'Em All!</h1>
      <h2 style={{ color: "yellow" }}>{pokemon.name}</h2>
      <h2 style={{ color: "cyan" }}>{pokemon.type}</h2>
      <h2 style={{ color: "lime" }}>
        {pokemon.readyToTrain
          ? "This pokemon is ready to train!"
          : "This pokemon isn't ready to train yet..."}
      </h2>
      <img src={pokemon.img + ".jpg"} alt={pokemon.name} />
    </div>
  );
}

export default Show;
