import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="contact-form-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="contact-form-container"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button className="close-button" onClick={onClose}>&times;</button>
            <div className="contact-form-content">
              <div className="contact-form-left">
                <h3>Notre Mission</h3>
                <p>Nous offrons des services de design exceptionnels adaptés à vos besoins uniques.</p>
                
                <h3>Notre Objectif</h3>
                <p>Notre objectif est de vous accompagner dans l'évolution de votre entreprise, en garantissant une identité et une image propre.</p>
                
                <h3>Nos Valeurs</h3>
                <p>Notre objectif est de vous accompagner dans l'évolution de votre entreprise, en garantissant une identité et une image propre.</p>
                
                <p className="contact-email">contact@haethna.com</p>
              </div>
              <div className="contact-form-right">
                <h2>Book un designer</h2>
                <form>
                  <div className="form-row">
                    <input type="text" placeholder="Prénom" />
                    <input type="text" placeholder="Nom" />
                  </div>
                  <div className="form-row">
                    <input type="email" placeholder="Adresse mail" />
                    <input type="tel" placeholder="Téléphone" />
                  </div>
                  <input type="text" placeholder="Objet" />
                  <input type="text" placeholder="Service qui vous intéresse" />
                  <input type="text" placeholder="Votre budget en tête" />
                  <textarea placeholder="Message"></textarea>
                  <button type="submit" className="submit-button">ENVOYER</button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;