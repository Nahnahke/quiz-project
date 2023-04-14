/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Counter } from './Counter';
import { RestartBtn } from '../RestartBtn';

const StyledBackground = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, hsla(168, 67%, 83%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);
  z-index: -999;
  padding-bottom: 2rem;
`;

const StyledAnswerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  padding: 1rem;

  @media (min-width: 668px) {
    margin-top: 6rem;
  }

  @media (min-width: 1024px) {
    padding: 0;
  }

`;

const gradient = (potato) => {
  if ((potato - 1) % 4 === 0) {
    return 'linear-gradient(180deg, hsla(46, 75%, 92%, 1) 0%, hsla(0, 0%, 100%, 1) 100%)';
  }
  if ((potato - 2) % 4 === 0) {
    return 'linear-gradient(180deg, hsla(5, 100%, 81%, 1) 0%, hsla(0, 0%, 100%, 1) 100%)';
  }
  if ((potato - 3) % 4 === 0) {
    return 'linear-gradient(180deg, hsla(187, 44%, 78%, 1) 0%, hsla(0, 0%, 100%, 1) 100%)';
  }
  if ((potato - 4) % 4 === 0) {
    return 'linear-gradient(180deg, hsla(168, 67%, 83%, 1) 0%, hsla(0, 0%, 100%, 1) 100%)';
  }
}
// 5 % 4 = 1
// 5 / 4 = 1 and 1/4 rest
// 9 % 4 = 1
// 9 / 4 = 2 and (1) <= modulo /4

// return every 4th for 1, 2, 3, 4
// 1, 5, 9
// 2, 6, 10
// 3, 7, 11,
// 4, 8, 12
const StyledSummaryCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background: ${(props) => gradient(props.questionId)};
  width: 90%;
  height: 250px;
  padding: 1rem;
  box-shadow: 5px 6px 23px 1px rgba(0,0,0,0.3);
  font-size: 16px;
  z-index: 1;

  @media (min-width: 668px) {
    width: 40%;
    height: 250px;
    justify-content: flex-start;
  }

  @media (min-width: 1024px) {
    width: 22%;
    height: 200px;
  }
`;

const SummaryCardH1 = styled.h1`
  font-size: 16px;
  text-align: center;
  font-weight: normal;

  @media (min-width: 668px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const SummaryCardP = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;

  @media (min-width: 668px) {
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const CorrectAnswerP = styled.p`
  font-size: 16px;
  text-align: center;

  @media (min-width: 668px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

const CorrectAnswerSpan = styled.span`
font-style: italic;
`

export const Summary = () => {
  const storeAnswer = useSelector((state) => state.quiz.answers);
  return (
    <StyledBackground>
      <Counter />
      <RestartBtn />
      <StyledAnswerWrapper>
        {storeAnswer.map((results) => {
          return (
            <StyledSummaryCard key={results.questionId} isCorrect={results.isCorrect} questionId={results.questionId}>
              <SummaryCardH1 className="question-title">{results.questionId}. {results.question.questionText}</SummaryCardH1>
              <SummaryCardP className="your-answer">{results.answer}</SummaryCardP>
              {results.isCorrect ? (
                <img src={`${process.env.PUBLIC_URL}/icons/icons8-checkmark-40.png`} alt="Correct answer" style={{ width: '20px', height: '20px' }} />
              ) : (
                <img src={`${process.env.PUBLIC_URL}/icons/icons8-cancel-40.png`} alt="Incorrect answer" style={{ width: '20px', height: '20px' }} />
              )}
              {!results.isCorrect && (
                <CorrectAnswerP className="correct-answer">
                  (Correct answer: <CorrectAnswerSpan>{results.question.options[results.question.correctAnswerIndex]}</CorrectAnswerSpan>)
                </CorrectAnswerP>
              )}
            </StyledSummaryCard>
          );
        })}
      </StyledAnswerWrapper>
    </StyledBackground>
  )
}