import { useState } from "react";

interface FABHookParams {
  increment?: number;
  decrement?: number;
  initialValue?: number;
}

const FABHook = ({
  increment = 1,
  decrement = 1,
  initialValue = 0,
}: FABHookParams) => {
  const [count, setCount] = useState(initialValue);

  const onIncrementHandler = () => {
    setCount((prev) => prev + increment);
  };

  const onDecrementHandler = () => {
    setCount((prev) => prev - decrement);
  };

  const onResetHandler = () => {
    setCount(initialValue);
  };

  return {
    count,
    onIncrementHandler,
    onDecrementHandler,
    onResetHandler,
  };
};

export default FABHook;
