import './App.less';
import logo from './medias/ghost.jfif';

import { useFullScreen } from './hooks/full-screen/useFullScreen';
import { useWakeLock } from './hooks/wake-lock/useWakeLock';
import { useAutoRefresh } from './hooks/auto-refresh/useAutoRefresh';
import { useQuote } from './hooks/quote/useQuote';

function App() {
  const message = useQuote();
  const { toggleFullScreen } = useFullScreen();

  useWakeLock();
  useAutoRefresh(10);

  return (
    <article className="quote" onClick={toggleFullScreen}>
      <div className="quote-media">
        <img src={logo} className="quote-picture" alt="Zeitgeist" />
      </div>
      <blockquote className="quote-box">
        <h1 className="quote-message">{message?.quote || '...'}</h1>
        <cite className="quote-author">{message?.author || 'Unknown'}</cite>
      </blockquote>
    </article>
  );
}

export default App;
