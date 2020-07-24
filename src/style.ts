import { createGlobalStyle } from 'styled-components';
import Colors from './config/Colors';

export default createGlobalStyle`
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background: ${Colors.background.normal};
  }

  p, input, button {
    font-size: 20px;
  }

`