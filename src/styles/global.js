import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
  }

  ul, li, lo {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100vw;
  }
`;

export default GlobalStyle;
