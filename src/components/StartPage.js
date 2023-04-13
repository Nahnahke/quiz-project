import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { CurrentQuestion } from './CurrentQuestion';

export const StartPage = () => {
  const dispatch = useDispatch()
  const stateQuiz = useSelector((state) => state.quiz)

  return (
    !stateQuiz.quizStart ? (
      <div className="startpage">
        <button type="button" onClick={() => dispatch(quiz.actions.startTheQuiz())}>
            Click here!
        </button>
        <p>dsdsds</p>
        <div className="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffa69e" fillOpacity="1" d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,149.3C672,117,768,107,864,133.3C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>
      </div>
    ) : (
      <CurrentQuestion />
    )
  )
}