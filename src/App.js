import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import Accordion from './components/Accordion';
import ContactForm from './components/ContactForm';
import SocialLinks from './components/SocialLinks';
import { FaUser, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaCertificate, FaFile, FaPhone } from 'react-icons/fa';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <ProfileHeader />
      <hr />

      <Accordion title={<span><FaUser /> About</span>}>
        <p>{`Bonjour, je suis Sophie et je suis développeuse web junior. Auparavant éducatrice de jeunes enfants en crèche, j'ai souhaité me reconvertir afin de retrouver un équilibre entrema vie professionnelle et ma vie personnelle, et d'allier mon travail avec ma passion pour l'informatique.`} </p>
      </Accordion>

      <Accordion title={<span><FaBriefcase /> Work</span>}>
        <p>Apprentie: Développeuse web junior (Nalta System, Pau)</p>
        <p>Stagiaire: Développeuse web junior (gaea21, Genève)</p>
      </Accordion>

      <Accordion title={<span><FaGraduationCap /> Studies</span>}>
        <p>{`2024 - 2026 : Préparation du Titre Professionnel de Concepteur Développeur d'Applications option IA (avec la Fabrique Numérique Paloise)`}</p>
        <p>{`2024 : Obtention du Titre Professionnel de Développeur web et web mobile (avec l'Afpa)`}</p>
      </Accordion>

      <Accordion title={<span><FaProjectDiagram /> Projects</span>}>
        <p>Mes projets...</p>
      </Accordion>

     {/* 
      <Accordion title={<span><FaCertificate /> Certifications</span>}>
        <p>Certifications obtenues...</p>
      </Accordion>

      <Accordion title={<span><FaFile /> Files</span>}>
        <p>Documents et fichiers...</p>
      </Accordion> 
      */}

      <Accordion title={<span><FaPhone /> Contact</span>}>
        <h6>Contactez-moi</h6>
        <ContactForm />
        <SocialLinks />
      </Accordion>
    </div>
  );
}

export default App;
