import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import InterBold from "../assets/font/InterBold.ttf";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "InterBold";
    src: url(${InterBold}) format("truetype");
  }
	
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "InterBold"
  }

:root{
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  font-size: 10px;
  font-family: "InterBold"

  }
  

button,
input {
  background-color: transparent;
  outline: none;
  border: none;
  font-size: inherit;
}

ul,li {
  list-style: none;
  
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyle;
