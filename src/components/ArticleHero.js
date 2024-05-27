import React from "react";
import "../css/Hero.css";

const ArticleHero = ({ title, subTitle}) => {
  return (
    <div className="hero-container">
        <div className="hero-overlay"></div>
        <img src={require(`../img/forHero/lsao.jpg`)} className="hero-background" />
        <div className="hero-content">
            <h1>{title}</h1>
            <h4>by {subTitle}</h4>
        </div>
    </div>
  );
}

export default ArticleHero;
