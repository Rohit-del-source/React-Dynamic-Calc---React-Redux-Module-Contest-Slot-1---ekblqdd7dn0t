import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleChange1 = (event) => {
    const parsedNumber1 = parseFloat(event.target.value) || 0;
    setNumber1(parsedNumber1);
    setSum(number1 + number2);
  };

  const handleChange2 = (event) => {
    const parsedNumber2 = parseFloat(event.target.value) || 0;
    setNumber2(parsedNumber2);
    setSum(number1 + number2);
  };

  return (
    <div id="main">
      <input id="input1" type="number" value={number1} onChange={handleChange1} />
      +
      <input id="input2" type="number" value={number2} onChange={handleChange2} />
      =
      <p id="result">{sum}</p>
    </div>
  );
};

export default App;
