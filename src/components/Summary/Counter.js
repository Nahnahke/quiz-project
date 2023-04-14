/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import ConfettiComponent from 'components/Confetti';
import { useSelector } from 'react-redux';

const StyledCounter = styled.div`
  background: transparent;
  width: 100%;
  height: 15%;
  margin-top: 50px;
`;

const StyledResult = styled.div`
  position: relative;
  font-size: 32px;
  z-index: 100;
  text-align: center;
  margin: 2rem;
`;

const StyledWave = styled.svg`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
  transform: rotate(180deg);
`;

const StyledResultH1 = styled.h1`
  font-size: 30px;
  margin-bottom: 1rem;

  @media (min-width: 668px) {
    font-size: 42px;
    margin-bottom: 2rem;
  }
`;

const StyledResultP = styled.p`
  font-size: 22px;

  @media (min-width: 668px) {
  font-size: 26px;
  }
`;

export const Counter = () => {
  const storeAnswer = useSelector((state) => state.quiz.answers);
  const correctAnswers = storeAnswer.filter((answer) => answer.isCorrect === true);

  const [showConfetti, setShowConfetti] = useState(false);
  if (correctAnswers.length >= 7 && !showConfetti) {
    setShowConfetti(true);
  }

  return (
    <StyledCounter>
      {showConfetti && <ConfettiComponent />}
      <StyledWave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="xMinYMin slice">
        <path fill="#B8F1E6" fillOpacity="1" d="M0,160L34.3,144C68.6,128,137,96,206,96C274.3,96,343,128,411,160C480,192,549,224,617,208C685.7,192,754,128,823,117.3C891.4,107,960,149,1029,181.3C1097.1,213,1166,235,1234,234.7C1302.9,235,1371,213,1406,202.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
      </StyledWave>
      <StyledResult>
        <StyledResultH1>You got {correctAnswers.length} out of {storeAnswer.length}</StyledResultH1>
        {correctAnswers.length < 4 && (<StyledResultP>Better luck next time!</StyledResultP>)}
        {correctAnswers.length >= 4 && correctAnswers.length < 6 && (<StyledResultP>Not too bad! Practice a little more for next time.</StyledResultP>)}
        {correctAnswers.length >= 7 && (<StyledResultP>You are a star! Excellent trivia skills!</StyledResultP>)}
      </StyledResult>
    </StyledCounter>
  );
};
