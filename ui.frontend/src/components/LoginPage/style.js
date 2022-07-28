import styled from "styled-components";
import LoginImg from "../../assets/login-img.png";
export const Page = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  width: 100vw;
`;

export const Left = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  h1,
  p,
  h2 {
    color: #e0e0e0;
  }

  h1,
  p,
  form {
    padding: 0 20% 0;
  }

  h1 {
    font-weight: 400;
    line-height: 2em;
  }

  p {
    font-weight: 200;
    width: 55%;
  }

  label h2 {
    line-height: 2.5em;
    font-weight: 400;
  }

  label #input {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    border: 1px solid #ffffff;
    border-radius: 50px;
    margin-bottom: 5%;
  }

  i {
    img {
      width: 15px;
      height: auto;
      margin-left: -10%;
    }
  }

  input {
    width: 80%;
    background-color: transparent;
    font-size: 1.5em;
    font-weight: 200;
    color: #e0e0e0;
    padding: 4%;
    border-radius: 50px;
    border: none;
  }

  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  input::placeholder {
    color: #ffffff;
  }

  input:focus {
    color: #ffffff;
  }

  form div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form div span {
    color: #e9b425;
    text-align: center;
    font-weight: 700;
    padding: 0 15% 0;
  }

  button {
    width: 100%;
    border-radius: 50px;
    background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
    box-shadow: 5px 5px 15px 0px #00000026 inset;

    border-style: none;
    padding: 4%;
    color: #ffffff;
    font-weight: 700;
    margin-top: 5%;
    cursor: pointer;
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 3000px) {
    h1 {
      font-size: 9em;
    }

    p,
    span {
      font-size: 3.25em;
    }

    label h2 {
      font-size: 5em;
    }

    i img {
      width: 40px;
      height: auto;
    }

    button {
      font-size: 2em;
    }
  }

  @media (max-width: 3000px) {
    h1 {
      font-size: 8em;
    }

    p,
    span {
      font-size: 2.5em;
    }

    label h2 {
      font-size: 4em;
    }

    i img {
      width: 30px;
    }

    button {
      font-size: 2em;
    }
  }

  @media (max-width: 2500px) {
    h1 {
      font-size: 7em;
    }

    p,
    span {
      font-size: 2.25em;
    }

    label h2 {
      font-size: 3.5em;
    }

    i img {
      width: 25px;
    }

    button {
      font-size: 1.75em;
    }
  }

  @media (max-width: 2000px) {
    h1 {
      font-size: 6em;
    }

    p,
    span {
      font-size: 2em;
    }

    label h2 {
      font-size: 3em;
    }

    i img {
      width: 25px;
    }

    button {
      font-size: 1.5em;
    }
  }

  @media (max-width: 1500px) {
    h1 {
      font-size: 4.5em;
      line-height: 1.5em;
    }

    p,
    span {
      font-size: 1.25em;
    }

    label h2 {
      font-size: 2.1em;
    }

    h1,
    p,
    form {
      padding: 0 15% 0;
    }

    input {
      font-size: 1em;
    }

    i {
      img {
        width: 15px;
        height: auto;
        margin-left: -50%;
      }
    }

    button {
      font-size: 1.25em;
    }
  }

  @media (max-width: 1000px) {
    width: 100vw;
    h1 {
      font-size: 4em;
      line-height: 1.5em;
    }

    p,
    span {
      font-size: 1.25em;
    }

    label h2 {
      font-size: 2.1em;
    }

    input {
      font-size: 1em;
    }

    i {
      img {
        width: 15px;
        height: auto;
        margin-left: -50%;
      }
    }

    button {
      font-size: 1.25em;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 50vw;
  height: 100vh;
  background-image: url(${LoginImg});
  background-size: cover;

  img {
    width: 50%;
    height: auto;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
