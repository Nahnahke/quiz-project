/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import { Summary } from './Summary';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const store = useSelector((state) => state.quiz);
  const answer = useSelector((state) => state.quiz.answers.find((a) => a.questionId === question.id));

  // console.log('index', index);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  }

  return (
    !store.quizOver ? (
      <div>
        <h1>Question: {question.questionText}</h1>
        <p>Matilda was here</p>
        <button type="button" onClick={onAnswerSubmit(question.id, index)}>Next question</button>
      </div>
    ) : (
      <Summary />
    )
  )
}
