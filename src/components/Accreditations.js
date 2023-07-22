import React from "react";
import  ABRSM  from "../assets/abrsm.png";
import  SSR  from "../assets/ssr.png";
function Accreditations() {
  return (
    <>
      <div className="page-layout page-auto">
        <h2>Accreditations</h2>

        <ul>
          <li>
            <img src={ABRSM} alt="ABRSM" />
            <h5>associated board of the royal school of music</h5>
            <p>Lorem ipsum della mono ips dro no sasas weni xers ces abildo</p>
          </li>
          <li>
            <img src={SSR} alt="SSR" />
            <h5>school of sound engineering</h5>
            <p>Lorem ipsum della mono ips dro no sasas weni xers ces abildo</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Accreditations;
