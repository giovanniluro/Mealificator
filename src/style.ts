import styled, { createGlobalStyle } from 'styled-components';
import Colors from './config/Colors';

export default createGlobalStyle`
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Mulish', sans-serif;
  }

  body {
    background: ${Colors.background.normal};
  }

`

export const Container = styled.div`
`;