import styled from "styled-components";

export const Left = styled.div`
  width: 40vw;
  display: flex;
  margin-top: 5%;
  margin-bottom: -10%;

  z-index: 0;
  img {
    margin-left: -10%;
    min-width: 100%;
  }
  @media (max-width: 1000px) {
    width: 80vw;
    img {
      margin-left: -30%;
      max-width: 150%;
    }
  }

  @media (max-width: 460px) {
    width: 80vw;
    img {
      margin-bottom: -10%;
      margin-left: -30%;
      max-width: 150%;
    }
  }
`;
