import styled from "styled-components";

export const Right = styled.div`
  width: 60vw;

  div {
    text-align: end;
    margin-right: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    @media (max-width: 1000px) {
      display: none;
    }
  }

  h1 {
    color: #c12d18;
    font-size: 3em;
    line-height: 0.9em;
    &:first-child {
      font-size: 2.25em;
    }
  }
  p {
    color: #000000;
    font-size: 1.5em;
    margin-bottom: 2%;
  }

  @media (min-width: 3212px) {
    h1 {
      font-size: 7em;
      &:first-child {
        font-size: 6em;
      }
    }
    p {
      color: #000000;
      font-size: 3.5em;
    }
  }
  @media (max-width: 3211px) {
    h1 {
      font-size: 7em;
      &:first-child {
        font-size: 4em;
      }
    }
    p {
      color: #000000;
      font-size: 2.75em;
    }
  }
  @media (max-width: 2803px) {
    h1 {
      font-size: 6em;
      &:first-child {
        font-size: 3.75em;
      }
    }
    p {
      color: #000000;
      font-size: 2.5em;
    }
  }
  @media (max-width: 2407px) {
    h1 {
      font-size: 5em;
      &:first-child {
        font-size: 2.75em;
      }
    }
    p {
      color: #000000;
      font-size: 1.75em;
    }
  }
  @media (max-width: 2002px) {
    h1 {
      font-size: 4em;
      &:first-child {
        font-size: 2.75em;
      }
    }
    p {
      color: #000000;
      font-size: 1.75em;
    }
  }
  @media (max-width: 1601px) {
    h1 {
      font-size: 3em;
      &:first-child {
        font-size: 1.7em;
      }
    }
    p {
      color: #000000;
      font-size: 1.05em;
    }
  }
  @media (max-width: 1201px) {
    h1 {
      font-size: 2em;
      &:first-child {
        font-size: 1.15em;
      }
    }
    p {
      color: #000000;
      font-size: 0.735em;
    }
  }
  @media (max-width: 460px) {
    width: 0vw;
  }
`;
