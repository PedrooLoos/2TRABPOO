import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 8px 0;
  padding: 12px 20px;
  outline: 10px;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
}

body, button {
  background-color: #836FFF;
  width: 100%;
  padding: 15px 0px;
  max-width: 100%;
  margin: 2px 2px;
  display: inline-block;
  border: 5px solid #ccc;
  border-radius: 60px;
  box-sizing: border-box;
  
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

button {
  cursor: pointer;
}

`;
