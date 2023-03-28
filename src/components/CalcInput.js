import React from 'react';
import '../styles/calcInput.css';

export default function CalcInput(props) {
  const res = { props };
  return (
    <div className="calcinput">
      <input
        data-testid="CalcInput"
        className="calcinput-display"
        disabled
        value={`${res.props.resObj.total || ''}${
          res.props.resObj.operation || ''
        }${res.props.resObj.next || ''}`}
        placeholder={res.props.resObj.next || res.props.resObj.total}
      />
    </div>
  );
}
