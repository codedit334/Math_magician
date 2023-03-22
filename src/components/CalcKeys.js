import React, { useState } from 'react';
import CalcInput from './CalcInput';
import calculate from '../logic/calculate';
import '../styles/calcKeys.css';

export default function CalcKeys() {
  const [initialObj, setinitialObj] = useState({
    total: 0,
    next: 0,
    operation: null,
  });

  return (
    <>
      <CalcInput resObj={initialObj} />

      <div className="calcKeys">
        <table>
          <tr>
            <td
              onClick={() => setinitialObj(calculate(initialObj, 'AC'))}
              aria-hidden="true"
            >
              AC
            </td>
            <td
              onClick={() => setinitialObj(calculate({ ...initialObj }, '+/-'))}
              aria-hidden="true"
            >
              +/-
            </td>
            <td
              onClick={() => setinitialObj(calculate({ ...initialObj }, '%'))}
              aria-hidden="true"
            >
              %
            </td>
            <td
              onClick={() => setinitialObj(calculate({ ...initialObj }, '÷'))}
              aria-hidden="true"
            >
              ÷
            </td>
          </tr>
          <tr>
            <td
              onClick={() => setinitialObj({
                ...initialObj,
                next: parseInt(`${initialObj.next}7`, 10) || 7,
              })}
              aria-hidden="true"
            >
              7
            </td>
            <td
              onClick={() => setinitialObj({
                ...initialObj,
                next: parseInt(`${initialObj.next}8`, 10) || 8,
              })}
              aria-hidden="true"
            >
              8
            </td>
            <td
              onClick={() => setinitialObj({
                ...initialObj,
                next: parseInt(`${initialObj.next}9`, 10) || 9,
              })}
              aria-hidden="true"
            >
              9
            </td>
            <td
              onClick={() => setinitialObj(calculate({ ...initialObj }, 'x'))}
              aria-hidden="true"
            >
              x
            </td>
          </tr>
          <tr>
            <td
              onClick={() => setinitialObj({
                ...initialObj,
                next: parseInt(`${initialObj.next}4`, 10) || 4,
              })}
              aria-hidden="true"
            >
              4
            </td>
            <td
              onClick={() => setinitialObj({
                ...initialObj,
                next: parseInt(`${initialObj.next}5`, 10) || 5,
              })}
              aria-hidden="true"
            >
              5
            </td>
            <td
              onClick={() => setinitialObj({
                ...initialObj,
                next: parseInt(`${initialObj.next}6`, 10) || 6,
              })}
              aria-hidden="true"
            >
              6
            </td>
            <td
              onClick={() => setinitialObj(calculate({ ...initialObj }, '-'))}
              aria-hidden="true"
            >
              -
            </td>
          </tr>
          <tr>
            <td
              onClick={() => setinitialObj({
                ...initialObj,
                next: parseInt(`${initialObj.next}1`, 10) || 1,
              })}
              aria-hidden="true"
            >
              1
            </td>
            <td
              onClick={() => setinitialObj({
                ...initialObj,
                next: parseInt(`${initialObj.next}2`, 10) || 2,
              })}
              aria-hidden="true"
            >
              2
            </td>
            <td
              onClick={() => setinitialObj({
                ...initialObj,
                next: parseInt(`${initialObj.next}3`, 10) || 3,
              })}
              aria-hidden="true"
            >
              3
            </td>
            <td
              onClick={() => setinitialObj(calculate({ ...initialObj }, '+'))}
              aria-hidden="true"
            >
              +
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              onClick={() => setinitialObj({
                ...initialObj,
                next: parseInt(`${initialObj.next}0`, 10) || 0,
              })}
              aria-hidden="true"
            >
              0
            </td>
            <td>.</td>
            <td
              className="equals"
              onClick={() => setinitialObj(calculate({ ...initialObj }, '='))}
              aria-hidden="true"
            >
              =
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
