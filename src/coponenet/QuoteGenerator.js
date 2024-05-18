// src/QuoteGenerator.js
import React, { useState } from 'react';


const QuoteGenerator = () => {
  const [quote, setQuote] = useState({
    content: "If you have a dream, don't just sit there. Gather courage to believe that you can succeed and leave no stone unturned to make it a reality.",
    author: "Dr. Roopam Sharma"
  });

  const getQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/quotes/random");
      const data = await response.json();
      setQuote({
        content: data[0].content,
        author: data[0].author
      });
    } catch (error) {
      console.error("Error fetching quote: ", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Random Quote Generator</h1>
      </div>
      <div className="quote">
        <p id="quote">{quote.content}</p>
      </div>
      <div className="author">
        <p id="author">- {quote.author}</p>
      </div>
      <div className="buttons">
        <button id="new-quote" onClick={getQuote}>New Quote</button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
