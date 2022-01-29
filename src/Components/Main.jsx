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
      <div className="products">
        <div className="product-image">
          <img
            src="illustration-stay-productive.png"
            className="productImage"
            alt="illustration-stay-productive"
          />
        </div>
        <div className="product-info">
          <h1>
            Stay productive,
            <br />
            wherever you are
          </h1>
          <p className="product-paragraph">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleague
            for live collaboration. No email attachments required.
          </p>
          <a href="#" className="product-anchor">
            See how Fylo works
          </a>
        </div>
      </div>
      <div>
        <div className="profile-cards">
          <div className="profile-card">
            <p className="profile-paragraph">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="profile-info">
              <img src="profile-1.jpg" className="profile-image" alt="..." />
              <div className="profile-name">
                <h4>Satish Patel</h4>
                <p style={{ textDecoration: "underline" }}>
                  Founder & CEO, Huddle
                </p>
              </div>
            </div>
          </div>
          <div className="profile-card">
            <p className="profile-paragraph">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="profile-info">
              <img src="profile-2.jpg" className="profile-image" alt="..." />
              <div className="profile-name">
                <h4>Bruce Mckenzie</h4>
                <p style={{ textDecoration: "underline" }}>
                  Founder & CEO, Huddle
                </p>
              </div>
            </div>
          </div>
          <div className="profile-card">
            <p className="profile-paragraph">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="profile-info">
              <img src="profile-3.jpg" className="profile-image" alt="..." />
              <div className="profile-name">
                <h4>Iva Boyd</h4>
                <p style={{ textDecoration: "underline" }}>
                  Founder & CEO, Huddle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
