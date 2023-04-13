/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

import './Summary.css';

export const Counter = () => {
  const storeAnswer = useSelector((state) => state.quiz.answers)
  const correctAnswers = storeAnswer.filter(
    (answer) => answer.isCorrect === true
  )
  return (
    <div className="counter">
      <div className="wave-bg">
        WAVE HERE?
      </div>
      <div className="result">
        <h1>You got {correctAnswers.length} out of {storeAnswer.length}</h1>
        {correctAnswers.length < 4 && (<p>Better luck next time!</p>)}
        {correctAnswers.length >= 4 && correctAnswers.length < 6 && (<p>Not too bad! Practice a little more for next time.</p>)}
        {correctAnswers.length >= 7 && (<p>You are a star! Excellent trivia skills!</p>)}
      </div>
    </div>
  )
}

// Stretch goal - ternary operator to give different messages depending
// on the amount of correct answers?