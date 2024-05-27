import React from "react";
import heroData from "./HeroItems";  
import "../css/Hero.css";

export default function Hero( {page}) {

  const pageData = heroData[page] || {};
  const { title, subTitle, imgPath } = pageData;
  

  return (
    <div className="hero-container">
        <div className="hero-overlay"></div>
        <img src={require(`../img/forHero/${imgPath}`)} className="hero-background" />
        <div className="hero-content">
            <h1>{title}</h1>
            <h4>{subTitle}</h4>
        </div>
    </div>
  );
}
