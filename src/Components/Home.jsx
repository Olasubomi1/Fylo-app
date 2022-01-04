import React from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <Intro />
    </React.Fragment>
  );
}

export default Home;
