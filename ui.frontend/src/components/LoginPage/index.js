import { MapTo } from "@adobe/aem-react-editable-components";
import React, { useState } from "react";
import Input from "../microcomponents/form";
import { Left, Page, Right } from "./style";
import userIcon from "../../assets/user-icon.png";
import userPassword from "../../assets/password-icon.png";
import CompassLogo from "../../assets/white-logo.png";

export const LoginPage = ({ title, text, login, error, button }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState(null);

  const [cor, setCor] = useState("#ffffff");
  const [errorColor, setErrorColor] = useState("transparent");

  const handleSaveUser = (event) => {
    event.preventDefault();
    const data = { user, password };
    if (data.user && data.password === "admin") {
      setErro(false);
      window.location.replace(
        "/content/reactapp/us/en/Compass_Logon_Home.html?wcmmode=disabled"
      );
    } else {
      setErro(true);
      setCor("#e9b425");
      setErrorColor("#e9b425");
    }
  };

  return (
    <Page>
      <Left border={cor} errorColor={errorColor}>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>

        <form>
          <label>
            <h2>{login}</h2>
            <div id="input">
              <Input
                type="name"
                placeholder="Usuário"
                name="user"
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
              <i>
                <img src={userIcon} alt="" />
              </i>
            </div>
            <div id="input">
              <Input
                type="password"
                placeholder="Senha"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <i>
                <img src={userPassword} alt="" />
              </i>
            </div>

            <div id="error">
              <span>{error}</span>
            </div>
            <button onClick={handleSaveUser}>{button}</button>
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
