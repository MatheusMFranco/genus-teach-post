import styles from './App.module.less';
import logo from './medias/ghost.jfif';

import { useFullScreen } from './hooks/useFullScreen';
import { useWakeLock } from './hooks/useWakeLock';
import { useAutoRefresh } from './hooks/useAutoRefresh';
import { useQuote } from './hooks/useQuote';

function App() {
  const message = useQuote();
  const { toggleFullScreen } = useFullScreen();

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
