import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import Input from "../microcomponents/form";
import { Left, Page, Right } from "./style";
import userIcon from "../../assets/user-icon.png";
import userPassword from "../../assets/password-icon.png";
import CompassLogo from "../../assets/white-logo.png";

const LoginPage = ({ title, text, login, error, button }) => {
  return (
    <Page>
      <Left>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>

        <form>
          <label htmlFor="">
            <h2>{login}</h2>
            <div id="input">
              <Input placeholder="Usuário" />
              <i>
                <img src={userIcon} alt="" />
              </i>
            </div>
            <div id="input">
              <Input placeholder="Senha" />
              <i>
                <img src={userPassword} alt="" />
              </i>
            </div>
            <div>
              <span>{error}</span>
            </div>

            <button>{button}</button>
          </label>
        </form>
      </Left>
      <Right>
        <img src={CompassLogo} alt="" />
      </Right>
    </Page>
  );
};

export default MapTo("reactapp/components/react-login")(LoginPage);
