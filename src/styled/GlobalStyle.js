import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
  }

    body{
        font-family :"Noto Sans", sans-serif;
        margin: 0;
        padding: 0;
        background-color: white;
        color: black;
        transition: all 0.3s;
        height: 100%;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    button{
        font-family: inherit;
        cursor: pointer;
    }
`;

export default GlobalStyle;
