import logo from './ghost.jfif';
import './App.less';

function App() {
  return (
    <article className="quote">
      <div className="quote-media">
        <img src={logo} className="quote-picture" alt="Zeitgeist" />
      </div>
      <blockquote className="quote-box">
        <h1 className="quote-message">
          Quote
        </h1>
        <cite className="quote-author">
        Author
        </cite>
      </blockquote>
    </article>
  );
}

export default App;
