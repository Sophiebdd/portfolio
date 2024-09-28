import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { CSSTransition } from 'react-transition-group';
import './Accordion.css'; // Fichier CSS pour gérer les animations

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <div
        onClick={toggleAccordion}
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontWeight: 'bold' }}
      >
        <span style={{ flexGrow: 1 }}>{title}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </div>
      {<CSSTransition
        in={isOpen}
        timeout={500}
        classNames="accordion"
        unmountOnExit
      >
        <div style={{ padding: '10px' }}>
          {children}
        </div>
      </CSSTransition>}
    </div>
  );
}

export default Accordion;
