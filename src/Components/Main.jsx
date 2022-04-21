import React from "react";
import Fade from "react-reveal/Fade";
import Card from "./Common/Card";
import Product from "./Product";
import ProfileCard from "./Common/ProfileCard";
import "./Main.css";

function Main() {
  return (
    <div className="main-section">
      <div className="cards">
        <Fade left>
          <Card
            svgIcon={"icon-access-anywhere.svg"}
            title={"Card title"}
            text={`
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.`}
          />
        </Fade>
        <Fade right>
          <Card
            svgIcon={"icon-security.svg"}
            title={"Card title"}
            text={`
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.`}
          />
        </Fade>
      </div>
      <div className="cards">
        <Fade left>
          <Card
            svgIcon={"icon-collaboration.svg"}
            title={"Card title"}
            text={`
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.`}
          />
        </Fade>
        <Fade right>
          <Card
            svgIcon={"icon-any-file.svg"}
            title={"Card title"}
            text={`Some quick example text to build on the card title and make up
                  the bulk of the card's content.`}
          />
        </Fade>
      </div>
      <Product />
      <div>
        <div className="profile-cards">
          <ProfileCard
            statement={`
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.`}
            position={"Founder & CEO, Huddle"}
            name={"Satish Patel"}
            picture={"profile-1.jpg"}
          />
          <ProfileCard
            statement={`
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.`}
            position={"Founder & CEO, Huddle"}
            name={"Bruce Mckenzie"}
            picture={"profile-2.jpg"}
          />
          <ProfileCard
            statement={`
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.`}
            position={"Founder & CEO, Huddle"}
            name={"Iva Boyd"}
            picture={"profile-3.jpg"}
          />
        </div>
      </div>
      <div className="getStarted">
        <h1>Get early access today</h1>
        <p style={{ marginTop: "30px" }}>
          It only takes a few minutes to sign up and our free starter tier is
          extremely generous. if you have any questionsm, our support team would
          be happy to help
        </p>
        <div className="emailForm">
          <input
            type="text"
            className="emailInput"
            placeholder="email@example.com"
            required
          />
          <button type="submit" className="emailButton">
            <a>Submit</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
