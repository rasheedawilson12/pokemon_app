import React from "react";

function New() {
  return (
    <div>
      <h1>New Pokemon Page</h1>
      {/* NOTE: action will be the route, method will be the HTTP verb */}
      <form action="/pokemon" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Img: <input type="text" name="img" />
        {/* <br />
        Is Ready To Eat: <input type="checkbox" name="readyToEat" /> */}
        <br />
        <input type="submit" name="" value="Create Pokemon" />
      </form>
    </div>
  );
}

export default New;
