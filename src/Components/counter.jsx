import React, { useState } from 'react'

const Counter = function () {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
    console.log(count)
  }
  function decrement() {
    setCount(count - 1)
    console.log(count)
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
      {/* // разница () => {decrement} */}
    </div>
  );
};
export default Counter;