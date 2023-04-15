/* eslint-disable max-len */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { CurrentQuestion } from './CurrentQuestion/CurrentQuestion';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: url(./images/wave-3.png);
`;

const StartPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #363942;
`;

const StartPageBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.19);

  @media (min-width: 668px) {
    width: 400px;
    height: 400px;
  }
`;

const StartH1 = styled.h1`
  font-size: 32px;
  animation: ${fadeIn} 1s ease-in;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-family: 'Playfair Display', serif;

  @media (min-width: 668px) {
    font-size: 38px;
    display: flex;
    flex-direction: row;
<<<<<<< HEAD
    align-items: baseline;}
=======
    align-items: baseline;
  }
>>>>>>> cf595e38c34f3bd8be1f314d987cec5b058fdd17
`;

const StartP = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align:  center;
  margin: 20px;
  animation: ${fadeIn} 1.5s ease-in;

  @media (min-width: 668px) {
    font-size: 20px;
    margin: 30px;
  }
`;

const StartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 7px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  background-color: white;
  color: #363942;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 999;
  transition: transform 0.3s, box-shadow 0.3s;
  animation: ${fadeIn} 2s ease-in;

  &:hover {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 0px 48px 16px rgba(102, 214, 192, 1);
    -moz-box-shadow: 0px 0px 48px 16px rgba(102, 214, 192, 1);
    box-shadow: 0px 0px 48px 16px rgba(102, 214, 192, 1);
  }
`;

const StartSpan = styled.span`
  font-size: 52px;
  margin-top: -10px;

  @media (min-width: 668px) {
    display: flex;
    align-items: flex-end;
    padding: 0 10px 0 10px;
    margin: 0;
  }
  `;

export const StartPage = () => {
  const dispatch = useDispatch()
  const stateQuiz = useSelector((state) => state.quiz)

  return (
    !stateQuiz.quizStart ? (
      <StyledBackground>
        <StartPageBox>
          <StartPageContent>
            <StartH1>the <StartSpan>fact</StartSpan> frenzy</StartH1>
            <StartP>A Random Trivia Quiz</StartP>
            <StartBtn type="button" onClick={() => dispatch(quiz.actions.startTheQuiz())}>
            Start Quiz
            </StartBtn>
          </StartPageContent>
        </StartPageBox>
      </StyledBackground>
    ) : (
      <CurrentQuestion />
    )
  )
}