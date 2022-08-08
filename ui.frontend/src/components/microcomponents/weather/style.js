import styled from "styled-components";
export const Temp = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  #temp {
    font-size: 3em;
    font-weight: 700;
  }
  img {
    margin-top: 1%;
    width: 50px;
    height: auto;
  }
  @media (min-width: 2560px) {
    #temp {
      font-size: 4em;
      font-weight: 700;
    }
    img {
      margin-top: 1%;
      width: 75px;
      height: auto;
    }
  }

  @media (max-width: 2560px) {
    #temp {
      font-size: 4em;
      font-weight: 700;
    }
    img {
      margin-top: 1%;
      width: 75px;
      height: auto;
    }
  }
  @media (max-width: 2000px) {
    #temp {
      font-size: 4em;
      font-weight: 700;
    }
    img {
      margin-top: 1%;
      width: 75px;
      height: auto;
    }
  }
  @media (max-width: 1500px) {
    #temp {
      font-size: 3.5em;
      font-weight: 700;
    }
    img {
      margin-top: 1%;
      width: 50px;
      height: auto;
    }
  }
  @media (max-width: 1250px) {
    #temp {
      font-size: 3.5em;
      font-weight: 700;
    }
    img {
      margin-top: 1%;
      width: 50px;
      height: auto;
    }
  }

  @media (max-width: 1000px) {
    #temp {
      font-size: 3em;
      font-weight: 700;
    }
    img {
      margin-top: 1%;
      width: 50px;
      height: auto;
    }
  }
  @media (max-width: 500px) {
    #temp {
      font-size: 2em;
      font-weight: 700;
    }
    img {
      margin-top: 1%;
      width: 40px;
      height: auto;
    }
  }
`;
