import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/_Navbar';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
