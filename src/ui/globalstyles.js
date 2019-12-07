import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
    box-sizing: border-box;
    font-family:   'Varela Round', sans-serif;
  }
  body {
    background: #dfe6ff6b;
  }
  .button {
    cursor: pointer;
    &:hover {
      color: #a20555bd;
    }
  }
`;