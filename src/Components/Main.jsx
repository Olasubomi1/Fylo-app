import React from "react";
import Fade from "react-reveal/Fade";
import "./Main.css";

function Main() {
  return (
    <div className="main-section">
      <div className="cards">
        <Fade left>
          <div className="columns">
            <div className="card" style={{ width: 300 }}>
              <img
                src="icon-access-anywhere.svg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="columns">
            {" "}
            <div className="card" style={{ width: 300 }}>
              <img src="icon-security.svg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="cards">
        <Fade left>
          <div className="columns">
            {" "}
            <div className="card" style={{ width: 300 }}>
              <img
                src="icon-collaboration.svg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="columns">
            {" "}
            <div className="card" style={{ width: 300 }}>
              <img src="icon-any-file.svg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Main;
