import React from 'react';
import '../styles/calcInput.css';

export default function CalcInput(props) {
  const res = { props };
  //   useEffect(() => console.log(res.props.resObj.total), [res]);
  return (
    <div className="calcinput">
      <input className="calcinput-display" value={`${res.props.resObj.next ? res.props.resObj.total + res.props.resObj.operation + res.props.resObj.next : res.props.resObj.total || 0}`} placeholder={res.props.resObj.next || res.props.resObj.total} />
    </div>
  );
}
