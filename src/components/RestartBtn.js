import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: solid black 1px;
  padding: 6px 10px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  z-index: 999;
`

export const RestartBtn = () => {
  const dispatch = useDispatch()

  return (
    <ButtonDiv>
      <Button
        type="button"
        className="restartBtn"
        onClick={() => {
          dispatch(quiz.actions.restart())
        }}>
      Play again
      </Button>
    </ButtonDiv>
  )
}

// To add: icon or svg