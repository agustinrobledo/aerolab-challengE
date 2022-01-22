import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing:border-box
  }
  html {
    height: 100%;
  }
  body {
    font: 400 16px Montserrat, sans-serif;
    height: 100%;
  }
  h1 {
    font: 100 64px Montserrat, sans-serif;
  }
  #__next {
  height: 100%;
  }
`