import React from "react";

function Edit(props) {
  const pokemon = props.pokemon;
  return (
    <div
      style={{
        backgroundColor: "lemonchiffon",
        padding: "100px",
      }}
    >
      <form
        action={`/pokemon/${pokemon._id}?_method=PUT`}
        method="POST"
        style={{
          border: "solid black",
          borderRadius: "10px",
          maxWidth: "400px",
          margin: "0 auto",
          padding: "15px",
          lineHeight: "30px",
          textAlign: "center",
        }}
      >
        Name: <input type="text" name="name" defaultValue={pokemon.name} />
        <br />
        Type: <input type="text" name="type" />
        <br />
        Image: <input type="text" name="color" defaultValue={pokemon.img} />
        <br />
        Is Ready To Train:
        {pokemon.readyToTrain ? (
          <input type="checkbox" name="readyToTrain" defaultChecked />
        ) : (
          <input type="checkbox" name="readyToTrain" />
        )}
        <br />
        <input type="submit" value="Submit Changes" />
      </form>
    </div>
  );
}

export default Edit;
