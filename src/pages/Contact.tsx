import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import github_icon from "../assets/images/github_icon.svg";
import gmail_icon from "../assets/images/gmail_icon.svg";
import seobin from "../assets/images/seobin.jpeg";
import jinhyo from "../assets/images/jinhyo.jpeg";
import hyunmin from "../assets/images/hyunmin.png";

function Contact() {
  return (
    <React.Fragment>
      <div className="contact_text">
        <div className="contact_us">
          Contact
          <br />
          Us
        </div>
        <div className="contact_introduction">
          저희는 전남대 IoT 인공지능융합전공의
          <br />
          QuitBoard의 개발자들입니다!
          <br />
          QuitBoard를 이용하는데
          <br />
          불편한 점이나 궁금한 점이 있나요?
          <br />
          저희에게 문의해보세요.
        </div>
      </div>
      <div className="crews">
        <div className="seobin">
          <img src={seobin} className="crewimg" alt="seobin" />
          <p className="name">Hwang Seo-bin</p>
          <p className="position">AI Developer</p>
          <div className="sns">
            <Link to="mailto:cnu.cvl.hsb@gmail.com" target={"_blank"}>
              <img src={gmail_icon} alt="gmail_icon" />
            </Link>
            <Link to="https://kkanuseobin.github.io/about/" target={"_blank"}>
              <img src={github_icon} alt="github_icon" />
            </Link>
          </div>
        </div>
        <div className="jinhyo">
          <img src={jinhyo} className="crewimg" alt="jinhyo" />
          <p className="name">Son Jin-hyo</p>
          <p className="position">Back-end Developer</p>
          <div className="sns">
            <Link to="mailto:jinhyo14@gmail.com" target={"_blank"}>
              <img src={gmail_icon} alt="gmail_icon" />
            </Link>
            <Link to="https://github.com/SonJinHYo" target={"_blank"}>
              <img src={github_icon} alt="github_icon" />
            </Link>
          </div>
        </div>
        <div className="hyunmin">
          <img src={hyunmin} className="crewimg" alt="hyunmin" />
          <p className="name">Kim Hyun-min</p>
          <p className="position">Front-end Developer</p>
          <div className="sns">
            <Link to="mailto:mezzo9917@gmail.com" target={"_blank"}>
              <img src={gmail_icon} alt="gmail_icon" />
            </Link>
            <Link to="https://github.com/hy-minee" target={"_blank"}>
              <img src={github_icon} alt="github_icon" />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
