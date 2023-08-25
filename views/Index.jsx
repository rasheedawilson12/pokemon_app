import React from "react";

function Index(props) {
  const pokemon = props.pokemon;
  return (
    <div
      style={{
        backgroundColor: "lightBlue",
        padding: "50px 100px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>See All The Pokemon!</h1>
      <nav
        style={{
          textAlign: "center",
          color: "mediumorchid",
          margin: "0 auto",
        }}
      >
        <h3>
          <a
            href="/pokemon/new"
            style={{ textDecoration: "none", textTransform: "uppercase" }}
          >
            Create a New Pokemon!
          </a>
        </h3>
      </nav>
      {pokemon.map((pokemon, i) => {
        return (
          <div
            key={i}
            style={{
              margin: "0 auto",
              border: "solid mediumorchid",
              borderRadius: "10px",
              marginBottom: "10px",
              maxWidth: "300px",
              textAlign: "center",
            }}
          >
            <ul style={{ listStyle: "none" }}>
              <li>
                <h2 style={{ textAlign: "center", margin: "0 auto" }}>
                  <a
                    href={`/pokemon/${pokemon._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {pokemon.name}
                  </a>
                </h2>
              </li>
            </ul>
            <div
              className="buttonGroup"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button
                style={{
                  background: "mediumorchid",
                  color: "aliceblue",
                  borderRadius: "25px",
                  padding: "5px",
                  margin: "10px auto",
                  textAlign: "center",
                }}
              >
                <a
                  href={`/pokemon/${pokemon._id}/edit`}
                  style={{ textDecoration: "none", textTransform: "uppercase" }}
                >
                  Edit This Pokemon!
                </a>
              </button>
              <form
                action={`/pokemon/${pokemon._id}?_method=DELETE`}
                method="POST"
                style={{ margin: "0 auto" }}
              >
                <input
                  type="submit"
                  value="DELETE"
                  style={{
                    background: "mediumorchid",
                    color: "aliceblue",
                    borderRadius: "25px",
                    padding: "5px",
                    margin: "10px auto",
                    textAlign: "center",
                  }}
                />
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
