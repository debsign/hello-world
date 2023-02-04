import React, { useState } from 'react';

const SumForm = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1 = (e) => {
    setNum1(parseInt(e.target.value, 10));
  };

  const handleNum2 = (e) => {
    setNum2(parseInt(e.target.value, 10));
  };

  const handleSum = () => {
    setResult(num1 + num2);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1} />
      <input type="number" value={num2} onChange={handleNum2} />
      <button onClick={handleSum}>Sumar</button>
      <p>Resultado: {result}</p>
    </div>
  );
};

export default SumForm;
