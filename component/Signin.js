import React from "react";
import "../style/signin.css";
import bgImg from "../images/bgImg.jpg";

export default function signin() {
  return (
    <>
      <div className="landing-page">
        <img src={bgImg} alt="" />
        <div className="main">
          <div className="signin">
            <div className="member">
              <h1 style={{ color: "orange",marginRight:"30px"}}>ALREADY MEMBERS</h1>
              <h1 style={{ color: "GrayText" }}>Need help?</h1>
            </div>
            <div className="signin-field">
              <input type="text" placeholder="Enter your name." />
              <input type="password" placeholder="Enter your password." />
              <button>SIGN IN</button>
            </div>
           
          </div>
          <div className="account">
              <h1 style={{color:"#fff"}}>Don't have a account yet ?</h1>
              <h1 style={{color:"#2d8659"}}>Create an account</h1>
            </div>
        </div>
      </div>
    </>
  );
}
