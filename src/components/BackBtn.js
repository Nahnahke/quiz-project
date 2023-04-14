import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

const Button = styled.button`
    border: none;
    background-color: transparent;
    font-family: 'Montserrat';
    font-size: 1rem;
    padding: 10px 15px;
    font-weight: 500;
    color: #363942;
    display: flex;
    position: absolute;
    top: 2vh;
    left: 3vw;
    gap: 5px;
    cursor: pointer;
`

export const BackBtn = () => {
  const dispatch = useDispatch()

  return (
    <Button
      type="button"
      className="back-btn"
      onClick={() => {
        dispatch(quiz.actions.restart())
      }}>
      <img src={`${process.env.PUBLIC_URL}/icons/icons8-back-to-50.png`} alt="Back" style={{ width: '20px', height: '20px' }} />
          Back to start
    </Button>
  )
}