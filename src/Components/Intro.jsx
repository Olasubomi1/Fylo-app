import React from "react";
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
          <h1 className="introH">
            All your files in one secure location accessible anywhere
          </h1>
          <p className="introP">
            Fylo stores all your most important files in one secure location.
            <br />
            Access them wherever you need, share and collaborete with friends
            <br />
            family, and co-workers
          </p>
          <button
            className="btn btn-info btn-md introB"
            style={{ width: 200, borderRadius: 50 }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
