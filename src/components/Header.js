import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FixedNavigation = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 92px;
  display: grid;
  z-index: 10;
  background-color: white;
  align-items: center;
`;
const NavigationLayout = styled.div`
  width: 1107px;
  height: 24px;
  margin-inline: auto;
  margin-block: auto;
  display: grid;
  grid-template-columns: auto 280px 191px;
  grid-template-rows: auto;
  align-items: center;
`;
function Header() {
  return (
    <>
      <FixedNavigation>
        <NavigationLayout>
          <div>
            <Logo />
          </div>
          <div>
            <nav>
              <ul className="nav-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/faqs">Faqs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <button className="button-outline">make a booking</button>
          </div>
        </NavigationLayout>
      </FixedNavigation>
    </>
  );
}

export default Header;
