import React from "react";
import styled from "styled-components";

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
function Footer() {
  return (
    <NavigationLayout>
      <div>Footer</div>
    </NavigationLayout>
  );
}

export default Footer;
