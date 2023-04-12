import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { quiz } from '../reducers/quiz';

const Button = styled.button`
border: none;
cursor: pointer;
box-shadow: 10px 10px 5px #000;
border-radius: 5px;
`

export const RestartBtn = () => {
  const dispatch = useDispatch()

  return (
    <Button
      type="button"
      className="restartBtn">Back to start
      onClick={() => {
        dispatch(quiz.actions.restart())
      }}
    </Button>
  )
}

// To add: icon or svg