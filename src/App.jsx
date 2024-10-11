import { Routes, Route } from 'react-router-dom';
import Navbar from './components/_Navbar';
import ContactForm from './pages/ContactForm';
import BlogPage from './pages/BlogPage';
import ClientsPage from './pages/ClientsPage';
import TemplateSelectionPage from './pages/TemplateSelectionPage';
import WebSurMesure from './pages/WebSurMesure';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/expertises" element={<div>Expertises Page</div>} />
        <Route path="/offre" element={<div>Collaboration Page</div>} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/template-selection" element={<TemplateSelectionPage />} />
        <Route path="/custom-website" element={<WebSurMesure />} />
      </Routes>
    </div>
  );
}

export default App;