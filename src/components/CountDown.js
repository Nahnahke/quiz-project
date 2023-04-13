import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

const CountDown = () => {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(30); // Set initial time here

  useEffect(() => {
    if (timeLeft === 0) {
      alert('Time is up! Better luck next time!');
      dispatch(quiz.actions.goToNextQuestion());
      window.location.reload();
    }

    // Exit early when timeLeft reaches 0
    if (!timeLeft) return;

    // Save intervalId to clear the interval when the component unmounts
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Clear interval on unmount
    return () => clearInterval(intervalId);
  }, [timeLeft, dispatch]);

  return (
    <div>
      <p>Time left: {timeLeft}s</p>
    </div>
  );
};

export default CountDown;