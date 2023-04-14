import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledRestartBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 5px;
  border: solid grey 1px;
  padding: 6px 10px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  position: relative;
  z-index: 999;
  margin-top: 10px;
  font-family: 'Montserrat', sans-serif;
  color: #363942;

  &:hover {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 0px 48px 16px rgba(102, 214, 192, 1);
    -moz-box-shadow: 0px 0px 48px 16px rgba(102, 214, 192, 1);
    box-shadow: 0px 0px 48px 16px rgba(102, 214, 192, 1);
  }
`

export const RestartBtn = () => {
  const dispatch = useDispatch()

  return (
    <ButtonDiv>
      <StyledRestartBtn
        type="button"
        className="restartBtn"
        onClick={() => {
          dispatch(quiz.actions.restart())
        }}>
      Play again
      </StyledRestartBtn>
    </ButtonDiv>
  )
}
