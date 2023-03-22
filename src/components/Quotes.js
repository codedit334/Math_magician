import React, { useEffect, useState } from 'react';
import Book from '../assets/Book.gif';
import '../styles/quotes.css';

export default function Quotes() {
  const [quote, setQuote] = useState('');
  const [spinner, setSpinner] = useState(false);
  const [displayError, setError] = useState('');

  let spinnerStyle;

  useEffect(() => {
    setError('');
  }, [quote]);

  useEffect(() => {
    const fetchQuote = async () => {
      setSpinner(true);
      try {
        const URL = 'https://api.api-ninjas.com/v1/quotes';
        const res = await fetch(URL, {
          headers: {
            'X-Api-Key': '9gIDMqe2KdUO/d++zPtwQw==fdgQmNP1uakeUI1d',
          },
        });
        const json = await res.json();
        setSpinner(false);
        setQuote(`"${json[0].quote}" by ${json[0].author}`);
      } catch (error) {
        const err = `Error: ${error}`;
        setSpinner(false);
        setError(err);
      }
    };
    fetchQuote();
  }, []);

  if (!spinner) { spinnerStyle = { display: 'none' }; }
  return (
    <div className="display-quote">
      <img src={Book} alt="loading..." style={spinnerStyle} />
      <div className="quote">
        {quote}
      </div>
      <span className="error">{displayError}</span>
    </div>
  );
}
