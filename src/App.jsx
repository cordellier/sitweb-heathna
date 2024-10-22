import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importer useTranslation
import Navbar from './components/_Navbar';
import ContactForm from './pages/ContactForm';
import BlogPage from './pages/BlogPage';
import ClientsPage from './pages/ClientsPage';
import TemplateSelectionPage from './pages/TemplateSelectionPage';
import OneWeekTemplate from './pages/OneWeekTemplate';
import HomePage from './pages/Accueil/_HomePage';  // Importez le nouveau composant HomePage
import './styles/main.scss';
import './i18n';

function App() {
  const { t } = useTranslation(); // Utiliser useTranslation

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offre" element={<div>{t('offre.pageTitle')}</div>} /> {/* Utilisation de la traduction */}
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
