import React from 'react';
import { useSelector } from 'react-redux';

export const Counter = () => {
  const storeAnswer = useSelector((state) => state.quiz.answers)
  const correctAnswers = storeAnswer.filter(
    (answer) => answer.isCorrect === true
  )
  return (
    <h1>You got {correctAnswers.length} out of {storeAnswer.length}</h1>
  )
}

// Stretch goal - ternary operator to give different messages depending
// on the amount of correct answers?