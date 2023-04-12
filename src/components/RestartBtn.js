import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { quiz } from '../reducers/quiz';

const Button = styled.button`
cursor: pointer;
border-radius: 5px;
text-align: center;
width: 2rem;
`

export const RestartBtn = () => {
  const dispatch = useDispatch()

  return (
    <Button
      type="button"
      className="restartBtn">I want to go again!
      onClick={() => {
        dispatch(quiz.actions.restart())
      }}
    </Button>
  )
}

// To add: icon or svg