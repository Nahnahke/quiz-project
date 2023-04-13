/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faMedal } from '@fortawesome/free-solid-svg-icons';
import { Counter } from '../Counter';
import { RestartBtn } from '../RestartBtn';

import './Summary.css';

export const Summary = () => {
  const storeAnswer = useSelector((state) => state.quiz.answers)
  return (
    <div className="summary">
      <Counter />
      <div className="answer-wrapper">
        {storeAnswer.map((results) => {
          return (
            <div key={results.questionId} className="summary-card">
              <h1 className="question-title">{results.questionId}</h1>
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
            </div>
          );
        })}
      </div>
      <RestartBtn />
    </div>
  )
}
