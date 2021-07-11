import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #222222;
    transition: all .3s;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #444444;
  border-radius: 10px;
  }

  ::selection {
    background-color: red;
    color: white;
  }
  
  span {
    color: red;
  }

`;
