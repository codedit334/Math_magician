import React from 'react';
import CalcInput from './CalcInput';
import CalcKeys from './CalcKeys';
import '../styles/calculator.css';

export default function Calculator() {
  return (
    <div className="calculator">
      <CalcInput />
      <CalcKeys />
    </div>
  );
}
