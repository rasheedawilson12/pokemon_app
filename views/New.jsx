import React from "react";

function New() {
  return (
    <div
      style={{
        backgroundColor: "midnightblue",
        color: "aliceblue",
        padding: "100px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>New Pokemon Page</h1>
      <form
        action="/pokemon"
        method="POST"
        style={{
          border: "solid aliceblue",
          borderRadius: "10px",
          maxWidth: "400px",
          margin: "0 auto",
          padding: "15px",
          lineHeight: "30px",
          textAlign: "center",
        }}
      >
        Name: <input type="text" name="name" />
        <br />
        Type: <input type="text" name="type" />
        <br />
        Img: <input type="text" name="img" />
        <br />
        Is Ready To Train: <input type="checkbox" name="readyToTrain" />
        <br />
        <input type="submit" name="" value="Create Pokemon" />
      </form>
    </div>
  );
}

export default New;
