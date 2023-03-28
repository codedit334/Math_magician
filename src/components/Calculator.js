import React from 'react';
import CalcKeys from './CalcKeys';
import '../styles/calculator.css';

export default function Calculator() {
  return (
    <div className="calculator-page">
      <h1>
        Let&#39;s do some math!
      </h1>
      <div className="calculator">
        <CalcKeys />
      </div>
    </div>
  );
}
