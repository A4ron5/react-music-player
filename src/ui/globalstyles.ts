import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
    box-sizing: border-box;
    font-family:   'Varela Round', sans-serif;
  }
  body {
    background: #fcdcd9;
  }
  .button {
    cursor: pointer;
    &:hover {
      color: #df405a;
    }
  }
`;