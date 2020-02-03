import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>someText!!</p>;
}

render(<Hi />, document.getElementById("root"));
