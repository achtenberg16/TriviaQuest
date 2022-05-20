import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fredoka One', cursive;
    letter-spacing: 1.4px;
  }

  :root {
    --purple-primary: #6159C6;
    --purple-secondary: #423C96;
    --purple-tertiary: #332d7a;
    --blue: #332d7a;
    --yellow: #FFE05F;
    --green: #88f0c0;
    --gray: #76758A;
    --gray-secondary: #86849E;
  }
  label {
    color: yellow;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    width: 219px;
    font-weight: 600;
  }
  body {
    width: 100vw;
    height: 100vh;
    color: white;
    font-size: 14px;
    background-image: url('https://stopots.com/images/background.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    overflow: hidden;
  }
`;

export default Reset;
