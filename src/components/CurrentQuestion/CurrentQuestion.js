/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CountDown from 'components/CountDown';
import { quiz } from '../../reducers/quiz';
import { Summary } from '../Summary/Summary';
import './CurrentQuestion.css';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  // We store values from the Redux store in these variables:
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const store = useSelector((state) => state.quiz);
  const quizOver = useSelector((state) => state.quiz.quizOver);
  // const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const answer = useSelector((state) => state.quiz.answers.find((a) => a.questionId === question.id))

  console.log('---- start')
  console.log('store', store);
  // console.log('answer', answer);
  // console.log('quizOver:', quizOver)
  // console.log('currentQuestionIndex:', currentQuestionIndex)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  // When user clicks on one of the options, we dispatch.
  const onAnswerSubmit = (id, index) => {
    // console.log('index/index of options:', index, '/ out of 3');
    // console.log('max number of index:', question.options);
    // console.log('id / question #:', id);
    // console.log('selected answer', question.options[index])
    // console.log('correct?', question.correctAnswerIndex === index)
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
    if (question.correctAnswerIndex === index) {
      console.log('Answer is correct'); // Log if the selected answer is correct
      document.getElementById(`${index}`).style.background = 'green'
    } else {
      console.log('Answer is incorrect'); // Log if the selected answer is incorrect
      document.getElementById(`${index}`).style.background = 'red'
    }
  }

  return (
    !quizOver ? (
      <>
        <div className="current-question">
          <h1>Question: {question.questionText}</h1>
          <p>Question no: {question.id}</p>
          <p>Progress: {question.id} out of {store.questions.length}</p>
          <CountDown />
          <hr />
        </div>
        <div>
          {question.options.map((option, index) => (
            <button
              disabled={answer} // If answer state is filled, disable clicking more buttons.
              type="button"
              id={index}
              key={option}
              name={`question-${question.id}`}
              onClick={() => {
                onAnswerSubmit(question.id, index)
              }}>
              {option}
            </button>
          ))}
          <button
            disabled={!answer} // If answer is empty, disable this button.
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
