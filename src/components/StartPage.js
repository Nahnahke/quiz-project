import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { CurrentQuestion } from './CurrentQuestion/CurrentQuestion';

export const StartPage = () => {
  const dispatch = useDispatch()
  const stateQuiz = useSelector((state) => state.quiz)

  return (
    !stateQuiz.quizStart ? (
      <div>
        <button type="button" onClick={() => dispatch(quiz.actions.startTheQuiz())}>
            Click here!
        </button>
        <p>dsdsds</p>
      </div>
    ) : (
      <CurrentQuestion />
    )
  )
}