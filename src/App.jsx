import { Routes, Route } from 'react-router-dom';
import Navbar from './components/_Navbar';
import ContactForm from './pages/ContactForm';
import BlogPage from './pages/BlogPage';
import ClientsPage from './pages/ClientsPage';
import TemplateSelectionPage from './pages/TemplateSelectionPage';
import OneWeekTemplate from './pages/OneWeekTemplate';
import HomePage from './pages/Accueil/_HomePage';  // Importez le nouveau composant HomePage
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Ajoutez cette ligne pour la page d'accueil */}
        <Route path="/expertises" element={<div>Expertises Page</div>} />
        <Route path="/offre" element={<div>Collaboration Page</div>} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/template-selection" element={<TemplateSelectionPage />} />
        <Route path="/custom-website" element={<OneWeekTemplate />} />
      </Routes>
    </div>
  );
}

export default App;