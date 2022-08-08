import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import { HeaderDiv } from "./style";
import Clock from "../microcomponents/clock";
import Weather from "../microcomponents/weather";
import ImgHeader from "../../assets/black-logo.png";

const Header = () => {
  return (
    <HeaderDiv>
      <div>
        <img src={ImgHeader} alt="" />
      </div>
      <div id="date">
        <Clock />
      </div>
      <div>
        <Weather />
      </div>
    </HeaderDiv>
  );
};

export default MapTo("reactapp/components/react-home-header")(Header);
