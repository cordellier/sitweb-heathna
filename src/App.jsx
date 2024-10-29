import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importer useTranslation
import Navbar from "./components/_Navbar";
import ContactForm from "./pages/ContactForm";
import ClientsPage from "./pages/ClientsPage";
import TemplateSelectionPage from "./pages/TemplateSelectionPage";
import OneWeekTemplate from "./pages/OneWeekTemplate";
import HomePage from "./pages/Accueil/_HomePage";
import "./styles/main.scss";
import SiteExpress from "./pages/SiteExpress";
import SiteSurMesureCms from "./pages/SiteSurMesureCms";
import "./i18n";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offre" element={<div>{t("offre.pageTitle")}</div>} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/template-selection" element={<TemplateSelectionPage />} />
        <Route path="/custom-website" element={<OneWeekTemplate />} />
        <Route path="/site-express" element={<SiteExpress />} />
        <Route path="/site-sur-mesure" element={<SiteSurMesureCms />} />
      </Routes>
    </div>
  );
}

export default App;
