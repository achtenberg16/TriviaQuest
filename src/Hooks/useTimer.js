import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { INITIAL_TIME, ONE_SECOND } from '../helpers/constants';

function useTimer() {
  const [time, setTime] = useState(INITIAL_TIME);
  const { isAnswered, questionNumber } = useSelector((state) => state.questions);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time !== 0 && !isAnswered) {
        setTime((prevState) => prevState - 1);
      }
    }, ONE_SECOND);

    return () => clearInterval(interval);
  }, [time, isAnswered]);

  useEffect(() => {
    setTime(INITIAL_TIME);
  }, [questionNumber]);

  return (
    [time]
  );
}

export default useTimer;
