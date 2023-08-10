import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div>
        <h1 className="title-heading">Discover the Joy of Playing Guitar</h1>
      </div>
      <div className="sub-title">
        <p>Master the Art of Playing with our Expert Tutors</p>
      </div>

      <div>
        <Link to="">EXPLORE our courses</Link>
      </div>
    </>
  );
}

export default Hero;
