import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import { Right } from "./right";
import { Left } from "./left";
import { Page } from "./page";
import { FooterDiv } from "./footer";
import Img from "../../assets/uol-ball.png";
import { Link } from "react-router-dom";

import Button from "../microcomponents/button";
import ClockDown from "../microcomponents/countdown";

const HomePage = ({
  phase1,
  phase2,
  phase3,
  phase4,
  phase5,
  phase6,
  phase7,
  phase8,
  warning,
  continua,
  logout,
}) => {
  return (
    <>
      <Page>
        <Left>
          <img src={Img} alt="UOL ball" />
        </Left>
        <Right>
          <div>
            <h1>{phase1}</h1>
            <p>{phase2}</p>
            <h1>{phase3}</h1>
            <p>{phase4}</p>
            <h1>{phase5}</h1>
            <p>{phase6}</p>
            <h1>{phase7}</h1>
            <p>{phase8}</p>
          </div>
        </Right>
      </Page>
      <FooterDiv>
        <div id="warning">
          <p>{warning}</p>
        </div>
        <div id="count">
          <p>
            Application <br></br> refresh in
          </p>
          <div>
            <ClockDown />
          </div>
        </div>
        <div id="buttons">
          <div id="continua">
            <Button text={continua} />
          </div>
          <div id="logout">
            <Link to="/content/reactapp/us/en/home.html?wcmmode=disabled">
              <Button text={logout} />
            </Link>
          </div>
        </div>
      </FooterDiv>
    </>
  );
};

export default MapTo("reactapp/components/react-home")(HomePage);
