import HeaderClients from '../components/_HeaderClients';
import CasClients from '../components/_CasClients';
import CTAButton from '../layout/CTAButton';
import { FaLaptopCode, FaPaintBrush, FaBook } from 'react-icons/fa';

const handleCTAClick = () => {
  console.log('CTA clicked!');
};

const ClientsPage = () => {
  return (
    <div className="clients-page">
      <HeaderClients />
      
      <main>
        <CasClients />

        <section className="contact-section">
          <h2>Échangeons sur votre projet !</h2>
          <div className="contact-container">
            <div className="contact-info">
              <p><FaLaptopCode /> Conception Web</p>
              <p><FaPaintBrush /> Design & Product</p>
              <p><FaBook /> Édition</p>
            </div>
            <div className="contact-button-container">
              <CTAButton onClick={handleCTAClick}>
                Nous contacter
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClientsPage;