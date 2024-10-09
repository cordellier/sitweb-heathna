import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import dropdownData from '../data/dropdownData.json';

const renderOptionItem = (item, handleSelect, category = '', pole = '') => (
  <motion.div
    key={item.title || item}
    className="option-item"
    onClick={() => handleSelect(category && pole ? `${category} - ${pole} - ${item.title}` : item)}
    whileTap={{ scale: 0.95 }}
  >
    {item.title || item}
  </motion.div>
);

const EnhancedSelect = ({ options, placeholder, onChange, isSimple = false, isOpen, setIsOpen }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="enhanced-select">
      <div 
        className={`selected-option ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span>{selectedOption || placeholder}</span>
        <motion.span
          className="arrow"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`options-list ${isOpen ? 'open' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isSimple ? (
              Object.entries(options).map(([category, items]) => (
                <div key={category} className="option-category">
                  <div className="category-title">{category}</div>
                  {items.map(item => renderOptionItem(item, handleSelect))}
                </div>
              ))
            ) : (
              Object.entries(options).map(([category, poles]) => (
                <div key={category} className="option-category">
                  <div className="category-title">{category.toUpperCase()}</div>
                  {poles.map((pole) => (
                    <div key={pole.title} className="option-pole">
                      <div className="pole-title">{pole.title}</div>
                      {pole.items.map(item => renderOptionItem(item, handleSelect, category, pole.title))}
                    </div>
                  ))}
                </div>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactForm = ({ isOpen, onClose }) => {
  const serviceOptions = dropdownData.content;
  const budgetOptions = {
    "Budget": ["100€ - 500€", "500€ - 1 000€", "1 000€ - 5 000€", "5 000€ - 10 000€", "10 000€ et plus"]
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            <div className="contact-form-content">
              <div className="contact-form-left">
                <h4>Notre Mission</h4>
                <p>
                  Nous offrons des services de design exceptionnels adaptés à
                  vos besoins uniques.
                </p>

                <h4>Notre Objectif</h4>
                <p>
                  Notre objectif est de vous accompagner dans l'évolution de
                  votre entreprise, en garantissant une identité et une image
                  propre.
                </p>

                <h4>Nos Valeurs</h4>
                <p>
                  Nous valorisons la créativité, la qualité et l'engagement
                  envers nos clients.
                </p>

                <p className="contact-email">contact@haethna.com</p>
              </div>
              <div className="contact-form-right">
                <h2>Book un designer</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Prénom"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Nom"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-row">
                    <input
                      type="email"
                      name="email"
                      placeholder="Adresse mail"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Téléphone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Objet"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />

                  <EnhancedSelect
                    options={serviceOptions}
                    placeholder="Sélectionner un service"
                    onChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                    isSimple={false}
                    isOpen={isServiceOpen}
                    setIsOpen={(value) => {
                      setIsServiceOpen(value);
                      if (value) setIsBudgetOpen(false);
                    }}
                  />

                  <EnhancedSelect
                    options={budgetOptions}
                    placeholder="Votre budget"
                    onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                    isSimple={true}
                    isOpen={isBudgetOpen}
                    setIsOpen={(value) => {
                      setIsBudgetOpen(value);
                      if (value) setIsServiceOpen(false);
                    }}
                  />

                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  <button type="submit" className="submit-button">
                    ENVOYER
                  </button>
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