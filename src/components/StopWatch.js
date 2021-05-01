import React, { useEffect, useState } from 'react'
const Stoptwatch = ({ cardsPerRowColumn, context, setTotalSeconds }) => {
  const [seconds, setSeconds] = useState(-7);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    if (context.correctPairs === (cardsPerRowColumn / 2)) {
      clearInterval(interval);
      setTotalSeconds(seconds);
    }
    return () => clearInterval(interval);
  }, [seconds, cardsPerRowColumn, context.correctPairs, setTotalSeconds]);

  return (
    <>
      <h1>{seconds}</h1>
    </>
  )
}

export default Stoptwatch;