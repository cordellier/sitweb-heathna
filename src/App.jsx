import { Routes, Route } from 'react-router-dom';
import Navbar from './components/_Navbar';
import ContactForm from './pages/ContactForm';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/expertises" element={<div>Expertises Page</div>} />
        <Route path="/offre" element={<div>Collaboration Page</div>} />
        <Route path="/clients" element={<div>Clients Page</div>} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;