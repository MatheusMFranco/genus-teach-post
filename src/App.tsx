import { useEffect, useState } from 'react';

import styles from './App.module.less';
import logo from './medias/ghost.jfif';

import { Quote } from './models/Quote';
import { useFullScreen } from './utils/useFullScreen';
import { useWakeLock } from './utils/useWakeLock';
import { useAutoRefresh } from './utils/useAutoRefresh';

import { fetchAlternativeQuote, fetchRandomQuote } from './services/quoteService';

function App() {
  const [message, setMessage] = useState({} as Quote);
  const { toggleFullScreen } = useFullScreen();
  
  useEffect(() => {
    fetchRandomQuote()
      .then(setMessage)
      .catch(() => fetchAlternativeQuote().then(setMessage));
  }, []);

  useWakeLock();
  useAutoRefresh(10);

  return (
    <article className={styles.quote} onClick={toggleFullScreen}>
      <div className={styles['quote-media']}>
        <img src={logo} className={styles['quote-picture']} alt="Zeitgeist" />
      </div>
      <blockquote className={styles['quote-box']}>
        <h1 className={styles['quote-message']}>
          {message.quote || '...'}
        </h1>
        <cite className={styles['quote-author']}>
          {message.author || 'Unknown'}
        </cite>
      </blockquote>
    </article>
  );
}

export default App;
