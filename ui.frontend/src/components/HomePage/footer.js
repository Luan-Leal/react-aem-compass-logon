import styled from "styled-components";

export const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 15vh;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  p,
  span {
    color: #ffffff;
  }

  #warning {
    display: flex;
    justify-content: flex-end;
    width: 50vw;
    @media (max-width: 1000px) {
      display: none;
      width: 0vw;
    }
    p {
      border-right: 1px solid #ffffff;
      font-size: 0.75em;
      width: 75%;
      text-align: end;
      padding: 2%;
    }
  }
  #count {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30vw;
    @media (max-width: 1000px) {
      display: none;
      width: 0vw;
    }
    p {
      text-align: center;
      font-size: 0.875em;
      margin-right: 10%;
    }

    span {
      font-size: 3em;
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      line-height: 50%;
    }

    #count div p {
      text-align: center;
    }
  }

  #buttons {
    display: flex;
    justify-content: space-evenly;
    width: 20vw;
    @media (max-width: 1000px) {
      justify-content: flex-end;
      width: 100vw;
    }

    #continua {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border: none;
      button {
        background: transparent;
        color: #c13216;
        border: none;
        text-align: center;
        cursor: pointer;
        height: 15vh;
        width: 10vw;
        padding: 0 17%;
      }
    }

    #logout {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      background: transparent;
      font-size: 0.75em;
      border: none;
      button {
        background: transparent;
        color: #ffffff;
        font-weight: 700;
        border: none;
        cursor: pointer;
        height: 15vh;
        width: 10vw;
      }
    }
  }
  @media (min-width: 2560px) {
    #warning {
      p {
        font-size: 1.9em;
      }
    }
    #count {
      p {
        font-size: 2em;
      }
      span {
        font-size: 6em;
      }
    }
    #continua {
      button {
        font-size: 2em;
      }
    }

    #logout {
      button {
        font-size: 2em;
      }
    }
  }
  @media (max-width: 2560px) {
    #warning {
      p {
        font-size: 1.55em;
      }
    }
    #count {
      p {
        font-size: 1.75em;
      }
      span {
        font-size: 5em;
      }
    }
    #continua {
      button {
        font-size: 1.5em;
      }
    }

    #logout {
      button {
        font-size: 1.5em;
      }
    }
  }

  @media (max-width: 2432px) {
    #warning {
      p {
        font-size: 1.4em;
      }
    }
  }

  @media (max-width: 2197px) {
    #warning {
      p {
        font-size: 1.3em;
      }
    }
  }

  @media (max-width: 2041px) {
    #warning {
      p {
        font-size: 1.2em;
      }
    }
  }

  @media (max-width: 1885px) {
    #warning {
      p {
        font-size: 1.15em;
      }
    }
    #count {
      p {
        font-size: 1em;
      }
      span {
        font-size: 3em;
      }
    }
    #continua {
      button {
        font-size: 1em;
      }
    }

    #logout {
      button {
        font-size: 1em;
      }
    }
  }

  @media (max-width: 1885px) {
    #warning {
      p {
        font-size: 1.1em;
      }
    }
  }

  @media (max-width: 1729px) {
    #warning {
      p {
        font-size: 1em;
      }
    }
  }

  @media (max-width: 1569px) {
    #warning {
      p {
        font-size: 0.95em;
      }
    }
  }

  @media (max-width: 1491px) {
    #warning {
      p {
        font-size: 0.9em;
      }
    }
  }

  @media (max-width: 1414px) {
    #warning {
      p {
        font-size: 0.8em;
      }
    }
  }

  @media (max-width: 1256px) {
    #warning {
      p {
        font-size: 0.7em;
      }
    }
  }

  @media (max-width: 1098px) {
    #warning {
      p {
        font-size: 0.6em;
      }
    }
  }

  @media (max-width: 1000px) {
    #continua {
      order: 2;
      width: 80vw;
      padding: 0%;
      button {
        padding: 0%;
      }
    }

    #logout {
      order: 1;
      width: 20vw;
      margin-left: -10%;
    }
  }
  @media (max-width: 500px) {
    button {
      padding: 0%;
    }

    #continua {
      order: 2;
      width: 75vw;
    }

    #logout {
      order: 1;
      width: 25vw;
      margin-left: -10%;
    }
  }
`;
