/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = ({ runConfetti }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fulfix, the side scroll was 20px.
  const smallerScreenSize = screenSize - 20;

  return (
    <div style={{ width: '100%', height: '100%', overflowX: 'hidden' }}>
      <Confetti width={smallerScreenSize} height={window.innerHeight} recycle={false} run={runConfetti} />
    </div>
  );
}

export default ConfettiComponent;