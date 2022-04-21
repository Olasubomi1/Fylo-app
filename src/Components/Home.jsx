import React from "react";
import NavBar from "./NavBar";
import IntroBanner from "./IntroBanner";
import Intro from "./Intro";
import Main from "./Main";
import Footer from "./Footer";
import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <IntroBanner />
      <Intro />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
