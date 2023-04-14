import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const StyledCountDown = styled.p`
    margin-top: 80px;
`;

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
      <StyledCountDown>Time left: {timeLeft} s</StyledCountDown>
    </div>
  );
};

export default CountDown;