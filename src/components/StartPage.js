import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { CurrentQuestion } from './CurrentQuestion/CurrentQuestion';

const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, hsla(168, 67%, 83%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);  
`;

const StartPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5E6472;
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
`;

const StartP = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const StartBtn = styled.button`
  width: 50%;
  padding: 5px 0;
  border-radius: 5%;
  font-weight: bold;
  text-transform: uppercase;
  background-color: white;
  color: #5E6472;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
`;

const StyledWave = styled.svg`
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: auto;
`;

export const StartPage = () => {
  const dispatch = useDispatch()
  const stateQuiz = useSelector((state) => state.quiz)

  return (
    !stateQuiz.quizStart ? (
      <StyledBackground>
        <StartPageBox>
          <StartPageContent>
            <StartH1>This is a quiz</StartH1>
            <StartP>This is some text about a quiz</StartP>
            <StartBtn type="button" onClick={() => dispatch(quiz.actions.startTheQuiz())}>
            Start quiz!
            </StartBtn>
          </StartPageContent>
        </StartPageBox>
        <StyledWave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#B8F1E6" fillOpacity="1" d="M0,160L34.3,144C68.6,128,137,96,206,96C274.3,96,343,128,411,160C480,192,549,224,617,208C685.7,192,754,128,823,117.3C891.4,107,960,149,1029,181.3C1097.1,213,1166,235,1234,234.7C1302.9,235,1371,213,1406,202.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
        </StyledWave>
      </StyledBackground>
    ) : (
      <CurrentQuestion />
    )
  )
}