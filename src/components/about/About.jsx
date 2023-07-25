import React from "react";
import "./about.css";
import ME from "../../assets/rrte.png";
import { FaAward } from "react-icons/fa";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know  || All links are below  </h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>GFG</h5>
              <small>150+ Question of DSA</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Leetcode</h5>
              <small>400+ Question of DSA</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>20+</h5>
              <small>Website </small>
            </article>
          </div>

          <p>
            Hello! I'm Chandan Kumar chaubey Or Chandan Chaturvedi, a passionate and aspiring Software Engineer.
            With a strong foundation in programming and problem-solving, I'm
            eager to embark on a journey in the world of Full Stack Development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
