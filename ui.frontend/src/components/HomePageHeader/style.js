import styled from "styled-components";
export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20vh;
  width: 100vw;
  background-color: #ffffff;
  font-family: "Roboto", sans-serif;
  img {
    width: auto;
  }

  #date {
    display: flex;
    flex-direction: column;
    text-align: center;
    @media (max-width: 1000px) {
      display: none;
    }
    span {
      &:nth-child(1) {
        display: flex;
        justify-content: center;
        font-size: 6em;
        font-weight: 700;
        line-height: 100%;
      }
      &:nth-child(2) {
        font-size: 0.875em;
        line-height: 0%;
        text-align: center;
        margin-bottom: 10%;
      }
    }

    #weather {
      padding-top: 1%;
      #name {
      }
    }
  }
  @media (min-width: 2560px) {
    img {
      height: 75px;
    }

    #date {
      span {
        &:nth-child(1) {
          font-size: 10em;
        }
        &:nth-child(2) {
          font-size: 1.5em;
        }
      }
    }
    #weather {
      padding-top: 1%;
      #name {
        font-size: 1.5em;
      }
    }
  }

  @media (max-width: 2560px) {
    img {
      height: 75px;
    }
    #date {
      span {
        &:nth-child(1) {
          font-size: 10em;
        }
        &:nth-child(2) {
          font-size: 1.5em;
        }
      }
    }
    #weather {
      #name {
        font-size: 1.5em;
      }
    }
  }
  @media (max-width: 2000px) {
    img {
      height: 75px;
    }
    #date {
      span {
        &:nth-child(1) {
          font-size: 8em;
        }
        &:nth-child(2) {
          font-size: 1.4em;
        }
      }
    }
    #weather {
      #name {
        font-size: 1.25em;
      }
    }
  }
  @media (max-width: 1500px) {
    img {
      height: 50px;
    }
    #date {
      span {
        &:nth-child(1) {
          font-size: 7em;
        }
        &:nth-child(2) {
          font-size: 1.25em;
        }
      }
    }
    #weather {
      #name {
        font-size: 1.25em;
      }
    }
  }
  @media (max-width: 1250px) {
    img {
      height: 50px;
    }
    #date {
      span {
        &:nth-child(1) {
          font-size: 6.5em;
        }
        &:nth-child(2) {
          font-size: 0.9em;
        }
      }
    }
    #weather {
      #name {
        font-size: 1m;
      }
    }
  }

  @media (max-width: 1000px) {
    img {
      height: 50px;
    }
    #weather {
      #name {
        font-size: 0.875em;
      }
    }
  }
`;
