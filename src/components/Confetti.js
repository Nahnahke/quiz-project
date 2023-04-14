/* eslint-disable max-len */
import React from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = ({ runConfetti }) => {
  return <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} run={runConfetti} />;
}

export default ConfettiComponent;