import styled from 'styled-components';
import Colors from '../../config/Colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background: ${Colors.main.normal};
  padding: 12px;

  > div {
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    input {
      padding: 6px;
      background: ${Colors.background.normal};
      border: 0px solid transparent;
      width: 60%;
      transition: .4s;

      &:focus {
        outline: 0;
        width: 100%;
      }

      &:focus + ul {
        width: 100%;
        display: flex;
        opacity: 1;
        animation: showlist .4s;
      }
    }

    ul {
      list-style: none;
      position: absolute;
      top: 101%;
      background: ${Colors.background.normal};
      width: 60%;
      flex-direction: column;
      opacity: 0;
      box-shadow: 0 4px 4px 4px rgba(0,0,0,0.3);
      transition: .4s;

      li {
        padding: 6px 10px;
        transition: .6s;

        &:hover {
          background: rgba(119,135,69,0.7);
        }
      }

      @keyframes showlist {
        from {
          opacity: 0;
          transform: translateY(-40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }

  svg {
    margin-left: 12px;
    color: ${Colors.background.normal};
  }

  button {
    margin-left: 100px;
    background: ${Colors.details.normal};
    color: ${Colors.background.normal};
    padding: 12px;
    border-radius: 8px;
    border: 0;
    font-weight: bold;
    transition: .4s;

    &:hover {
      cursor: pointer;
      background: ${Colors.details.lighter};
    }

    &:focus {
      outline: 0;
    }

  }
`;