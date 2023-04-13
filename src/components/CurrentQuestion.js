/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import { Summary } from './Summary';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  // We store values from the Redux store in these variables:
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const store = useSelector((state) => state.quiz);
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const answer = useSelector((state) => state.quiz.answers.find((a) => a.questionId === question.id))

  // console.log('index', index);
  console.log('store', store);
  console.log('answer', answer);
  console.log('quizOver:', quizOver)
  console.log('currentQuestionIndex:', currentQuestionIndex)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  // When user clicks on one of the options, we dispatch.
  const onAnswerSubmit = (id, index) => {
    console.log('index:', index, 'id:', id);
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
    if (question.correctAnswerIndex === index) {
      document.getElementById(`${index}`).style.background = 'green'
    } else {
      document.getElementById(`${index}`).style.background = 'red'
    }
  }

  return (
    !quizOver ? (
      <>
        <div>
          <h1>Question: {question.questionText}</h1>
          <p>{question.id}</p>
          <hr />
        </div>
        <div>
          {question.options.map((option, index) => (
            <button
              type="button"
              id={index}
              key={option}
              onClick={() => {
                onAnswerSubmit(question.id, index)
              }}>
              {option}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              dispatch(quiz.actions.goToNextQuestion())
            }}>
            Next question
          </button>
        </div>
      </>
    ) : (
      <Summary />
    )
  )
}
