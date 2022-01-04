import React from "react";
import Fade from "react-reveal/Fade";
import "./Intro.css";

function Intro() {
  return (
    <div className="main">
      <img src="illustration-intro.png" alt="illustration intro" />
      <div className="parent">
        <object
          data="bg-curvy-desktop.svg"
          className="child bgCurvyImg"
          aria-label="intro"
          width="100%"
          height="auto"
        ></object>
        <div className="child introContent">
          <Fade top>
            <h1 className="introH">
              All your files in one secure location accessible anywhere
            </h1>
          </Fade>
          <Fade left>
            <p className="introP">
              Fylo stores all your most important files in one secure location.
              <br />
              Access them wherever you need, share and collaborete with friends
              <br />
              family, and co-workers
            </p>
          </Fade>
          <Fade bottom>
            <button
              className="btn btn-info btn-md introB"
              style={{ width: 200, borderRadius: 50 }}
            >
              Get Started
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Intro;
