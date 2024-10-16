import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FormationModuleGrid = ({ modules }) => {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className="formation-module-grid">
      {modules.map((module, index) => (
        <motion.div 
          key={index}
          className="module-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <button
            className="module-header"
            onClick={() => toggleModule(index)}
          >
            <div className="module-title-wrapper">
              <span className="module-number">Module {module.number}</span>
              <h3 className="module-title">{module.title}</h3>
            </div>
            <motion.div
              animate={{ rotate: expandedModule === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="toggle-icon"
            >
              <ChevronDown size={24} />
            </motion.div>
          </button>
          <AnimatePresence>
            {expandedModule === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="module-content"
              >
                <p className="module-description">{module.description}</p>
                <ul className="module-list">
                  {module.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FormationModuleGrid;