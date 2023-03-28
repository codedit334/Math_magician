import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';
import MM from './assets/MM.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <div className="logo">
          <img src={MM} alt="logo" />
        </div>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quotes">Quote</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
      <footer>
        Made by
        &nbsp;
        <a href="https://github.com/codedit334">@codedit334</a>
        &nbsp;
        2023
      </footer>
    </div>
  );
}

export default App;
