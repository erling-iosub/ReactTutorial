import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Some Awesome App</h1>
    <p>Very important text</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more!
    </Link>
  </div>
);

export default HomePage;
