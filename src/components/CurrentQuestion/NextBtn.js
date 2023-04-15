import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../../reducers/quiz';

const StyledNextBtn = styled.button`
  display: flex;
  position: relative;
  border: none;
  background-color: transparent;
  font-family: 'Montserrat';
  font-size: 1rem;
  padding: 10px 15px;
  font-weight: 500;
  color: #363942;
  margin-top: 5%;
  margin-right: 7%;
  cursor: pointer;
  gap: 5px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const NextButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const NextBtn = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  // eslint-disable-next-line max-len
  const answer = useSelector((state) => state.quiz.answers.find((a) => a.questionId === question.id));

  return (
    <NextButtonWrapper>
      <StyledNextBtn
        disabled={!answer}
        type="button"
        className="next-btn"
        onClick={() => {
          dispatch(quiz.actions.goToNextQuestion());
        }}>
        {!answer ? 'Choose an answer' : 'Next question'}
        <img
          src={`${process.env.PUBLIC_URL}/icons/icons8-next-page-50.png`}
          alt="Next"
          style={{ width: '20px', height: '20px' }} />
      </StyledNextBtn>
    </NextButtonWrapper>
  );
};