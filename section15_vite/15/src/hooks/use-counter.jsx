import { useState, useEffect } from "react";

const useCounter = (forwards) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (forwards) {
         return prevCounter + 1;
        } else {
           return prevCounter - 1
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;
