import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding innerWidth flexCenter hero-container ">
        {/* left-side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover Most <br />
              Suitable Property
              <br />
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span>Find the varieties of properties that suits you well</span>
            <span>
              Forget all the difficulties in finding a residence for you
            </span>
          </div>
          <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={90000} duration={4} />
                <span>++</span>
              </span>
              <span className="secondaryText">Premiun Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} duration={4} />
                <span>++</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={10} end={150}  duration={3}/>
                <span>++</span>
              </span>
              <span className="secondaryText"> Award Winnings</span>
            </div>
          </div>
        </div>
        {/* right-side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" className="src" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
