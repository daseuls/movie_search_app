import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
	
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

:root{
    font-size: 10px;
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
