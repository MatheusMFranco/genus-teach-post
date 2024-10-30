import './App.less';
import { useEffect, useState } from 'react';
import logo from './ghost.jfif';
import { Quote } from './Quote';

function App() {
  const [message, setMessage] = useState({} as Quote);

  useEffect(() => {
    fetch('https://programming-quotesapi.vercel.app/api/random')
    .then(response => response.json())
    .then((data: Quote) => setMessage(data));
  }, []);

  return (
    <article className="quote">
      <div className="quote-media">
        <img src={logo} className="quote-picture" alt="Zeitgeist" />
      </div>
      <blockquote className="quote-box">
        <h1 className="quote-message">
          {message.quote || '...'}
        </h1>
        <cite className="quote-author">
          {message.author || 'Unknown'}
        </cite>
      </blockquote>
    </article>
  );
}

export default App;
