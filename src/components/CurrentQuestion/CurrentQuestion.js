/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CountDown from 'components/CountDown';
import { BackBtn } from 'components/BackBtn';
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
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));

    const buttonElement = document.getElementById(`${index}`);

    if (question.correctAnswerIndex === index) {
      console.log('Answer is correct'); // Log if the selected answer is correct
      buttonElement.style.background = '#84a98c';
    } else {
      console.log('Answer is incorrect'); // Log if the selected answer is incorrect
      buttonElement.style.background = '#e76f51';
    }

    buttonElement.style.fontWeight = 'bold';
    buttonElement.style.color = 'white';
  }

  return (
    !quizOver ? (
      <div className={`question-${question.id}`}>
        <div className="box">
          <svg className="wave-summary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="xMinYMin slice">
            <path fill="current-color" fillOpacity="1" d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,149.3C672,117,768,107,864,133.3C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
          {/* <h1>Question {question.id}</h1> */}
          <h2>{question.questionText}</h2>
          <p>{question.id} / {store.questions.length}</p>
          <CountDown />
          <div className="button-box">
            {question.options.map((option, index) => (
              <button
                disabled={answer} // If answer state is filled, disable clicking more buttons.
                type="button"
                className="answer-btn"
                id={index}
                key={option}
                onClick={() => {
                  onAnswerSubmit(question.id, index)
                }}>
                {option}
              </button>
            ))}
          </div>
        </div>
        <button
          disabled={!answer} // If answer is empty, disable this button.
          type="button"
          className="next-btn"
          onClick={() => {
            dispatch(quiz.actions.goToNextQuestion())
          }}>
            Next question<img src={`${process.env.PUBLIC_URL}/icons/icons8-next-page-50.png`} alt="Next" style={{ width: '20px', height: '20px' }} />
        </button>
        <BackBtn />
      </div>
    ) : (
      <Summary />
    )
  )
}
