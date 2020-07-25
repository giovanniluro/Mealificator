import styled from 'styled-components';
import Colors from '../../config/Colors';

export const Container = styled.div`
`

export const FoodInfo = styled.div`
  margin: 10px;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 0 4px 4px rgba(0,0,0,0.4);
  display: flex;
  padding: 20px;
  background: ${Colors.background.darker};

  @media(max-width: 1100px) {
    flex-direction: column;
  }
  
  @media(max-width: 400px) {      
    padding: 5px;
  }

  > div {
    margin-left: 30px;

    img {
      height: 300px;
      width: 300px;
      border-radius: 12px;
    }

    div {
      h1 {
        margin: 20px 0;
      }

      span {
        font-weight: bold;
        margin-right: 8px;  
      }
    }
    
    @media(max-width: 1100px) {
      display: flex;
      margin-bottom: 30px;

      div {

        h1 {
          margin: 0;
        }
        display: flex;
        flex-direction: column;
        margin: 0 20px;
      }
    }

    @media(max-width: 820px) {
      display:flex;
      flex-direction: column;
      align-items: center;

      img {
        border-radius: 50%;
        box-shadow: 0 0 5px 5px rgba(0,0,0,0.4);
        margin-bottom: 20px;
      }

      div {

        h1{
          margin: 10px 0;
          text-align: center;
        }
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }

    @media(max-width: 500px) {  
      margin: 0;
      margin-top: 20px;

      img {
        height: 75%;
        width: 75%;
      }
      
      div {
        h1{
          text-align: center;
        }
      }

    }
  } 

  @media(max-width: 550px) {      
    margin: 15px 6px;

    div {
      h1{
        text-align: center;
      }
    }
  }
`

export const Tag = styled.p`

  font-size: 14px;
  background: ${Colors.details.normal};
  color: white;
  text-align: center;
  padding: 5px 10px;
  border-radius: 10px;
  width: 150px;
  margin: 5px 0;
  font-weight: bold;

  &:hover {
    cursor: default;
  }
`

export const FoodPrepare = styled.div`
  
  margin: 10px;
  border-radius: 12px;
  box-shadow: 0 0 4px 4px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  background: ${Colors.background.darker};

  iframe { 
    order: 2;
    height: 400px;
    width: 70%;
    align-self: center;
    justify-self: center;
    margin: 40px 0;
    border: 0;


    @media(max-width: 1100px) {
      width: 90%;
    } 
  }

  span {
    font-size: 20px;
    font-weight: bold;
  }

  p {
    font-weight: 400;
    margin-top: 20px;
    text-align: justify;
  }

  @media(max-width: 550px) {      
    padding: 2px;
    border: 0;
    box-shadow: none;

    iframe {
      height: 300px;
    }

    &:before {
      content: '';
      height: 2px;
      width: 60%;
      background: ${Colors.details.normal};
      margin: 20px 0;
    }
  }
`

export const Ingredients = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    margin-bottom: 20px;
  }

  &:before {
    content: '';
    height: 2px;
    width: 60%;
    background: ${Colors.details.normal};
    margin: 20px;
  }

  @media(min-width: 820px) and (max-width:1099px) {
    margin: 0;

    &:before {
    content: '';
    height: 260px;
    width: 2px;
    background: black;
    margin: 20px;
    position: absolute;
    left: -40px;
    }
  }

`