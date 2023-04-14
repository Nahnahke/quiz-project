/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faMedal } from '@fortawesome/free-solid-svg-icons';
import { Counter } from './Counter';
import { RestartBtn } from '../RestartBtn';

const StyledBackground = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, hsla(168, 67%, 83%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);  
`;

const StyledAnswerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem;
  margin-top: 5rem;
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
  flex-direction: column;
  gap: 1rem;
  background: ${(props) => gradient(props.questionId)};
  width: 320px;
  height: 300px;
  padding: 1rem;
  box-shadow: 5px 6px 23px 1px rgba(0,0,0,0.3);
`;

export const Summary = () => {
  const storeAnswer = useSelector((state) => state.quiz.answers)
  return (
    <StyledBackground>
      <Counter />
      <StyledAnswerWrapper>
        {storeAnswer.map((results) => {
          return (
            <StyledSummaryCard key={results.questionId} isCorrect={results.isCorrect} questionId={results.questionId}>
              <h1 className="question-title">{results.questionId}.</h1>
              <h2 className="question-text">{results.question.questionText}</h2>
              <p className="your-answer">{results.answers}</p>
              {results.isCorrect ? (
                <FontAwesomeIcon icon={faMedal} />
              ) : (
                <FontAwesomeIcon icon={faX} />
              )}
              {!results.isCorrect && (
                <p className="correct-answer">
                  (Next time answer - {results.question.options[results.question.correctAnswerIndex]})
                </p>
              )}
            </StyledSummaryCard>
          );
        })}
      </StyledAnswerWrapper>
      <RestartBtn />
    </StyledBackground>
  )
}