import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a className="footerImg">
        <img src="logo.svg" />
      </a>
      <div className="footerContent">
        <div className="location">
          <div className="">
            <a>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </a>
          </div>
          <p className="footerP">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            asperiores possimus quae repudiandae iusto esse velit tempora ullam
            dolor perferendis itaque hic nobis sint id praesentium, voluptatem
            libero sapiente sequi.
          </p>
        </div>
        <div className="">
          <div className="reachingOut">
            <div className="">
              <a>
                <i class="fa fa-phone" aria-hidden="true"></i>
              </a>
            </div>
            <p className="footerP">+2348154433626</p>
          </div>
          <div className="reachingOut">
            <div className="">
              <a>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </a>
            </div>
            <a>
              <p className="footerP">shubbynlaa@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="gettingIntouch">
          <a className="bottomStyle">About Us</a>
          <a className="bottomStyle">Jobs</a>
          <a className="bottomStyle">Press</a>
          <a className="bottomStyle">Blog</a>
        </div>
        <div className="gettingIntouch">
          <a className="bottomStyle">Contact Us</a>
          <a className="bottomStyle">Terms</a>
          <a className="bottomStyle">Privacy</a>
        </div>
        <div className="media">
          <a className="">
            <i class="fa fa-facebook icons" aria-hidden="true"></i>
          </a>
          <a className="">
            <i class="fa fa-twitter icons" aria-hidden="true"></i>
          </a>
          <a className="">
            <i class="fa fa-instagram icons" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
