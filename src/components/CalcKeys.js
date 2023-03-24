import React, { useEffect, useState } from 'react';
import CalcInput from './CalcInput';
import calculate from '../logic/calculate';
import '../styles/calcKeys.css';

export default function CalcKeys() {
  const [initialObj, setinitialObj] = useState({
    total: 0,
    next: 0,
    operation: null,
  });

  const calculatorKeys = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  let table = calculatorKeys.map((row) => {
    const tableData = row.map(
      (data) => `<td ${+data === 0 && 'colspan="2"'} >${data}</td>` // eslint-disable-line
    ); // eslint-disable-line

    const finalData = `<tr>${tableData}</tr>`;

    return finalData;
  });

  table = table.toString().replace(/,/g, '');

  useEffect(() => {
    document.querySelector('tbody').innerHTML = table;
    document.querySelectorAll('td').forEach((element) => {
      element.addEventListener('click', (e) => {
        const clickedBtn = e.target.innerText;
        const gotValue = calculate(initialObj, clickedBtn);
        setinitialObj(gotValue);
      });
    });
  }, [initialObj]);

  return (
    <>
      <CalcInput resObj={initialObj} />
      <div className="calcKeys">
        <table>
          <tbody />
        </table>
      </div>
    </>
  );
}
