import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const CountDown = () => {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) {
      alert('Time is up! Better luck next time!');
      window.location.reload();
    }

    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, dispatch]);

  return (
    <div>
      <p>Time left: {timeLeft}s</p>
    </div>
  );
};

export default CountDown;