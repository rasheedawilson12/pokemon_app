import React from "react";

function Index(props) {
  const pokemon = props.pokemon;
  return (
    <div>
      <h1>See All The Pokemon!</h1>
      <nav>
        <a href="/pokemon/new">Create a New Pokemon!</a>
      </nav>
      {pokemon.map((pokemon, i) => {
        return (
          <div key={i}>
            <ul>
              <li>
                <a href={`/pokemon/${pokemon._id}`}>{pokemon.name}</a>
              </li>
            </ul>
            <a href={`/pokemon/${pokemon._id}/edit`}>Edit This Pokemon!</a>
            <form
              action={`/pokemon/${pokemon._id}?_method=DELETE`}
              method="POST"
            >
              <input type="submit" value="DELETE" />
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
