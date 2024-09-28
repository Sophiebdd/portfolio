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
        <p>{`Bonjour, je suis Sophie et je suis développeuse web junior. Auparavant éducatrice de jeunes enfants en crèche, j'ai souhaité me reconvertir afin de retrouver un équilibre entre ma vie professionnelle et ma vie personnelle, et d'allier mon travail avec ma passion pour l'informatique.`} </p>
      </Accordion>

      <Accordion title={<span><FaBriefcase /> Work</span>}>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', lineHeight: '1.8' }}>
          <li>
            <strong>Apprentie:</strong> Développeuse web junior (Nalta System, Pau)
            <br />
            <span style={{ color: '#555' }}>
              Expérience de 18 mois en tant que développeuse. Utilisation du framework Symfony.
            </span>
          </li>
          <li>
            <strong>Stagiaire:</strong> Développeuse web junior (gaea21, Genève)
            <br />
            <span style={{ color: '#555' }}>
              Stage de 3 mois au cours duquel j'ai appris à utiliser React dans une architecture Symfony UX.
              Mes tâches ont été de restructurer la page newsletter du site, de créer une page d'archives comportant
              les flipbooks des newsletters passées, mais également de créer un back-office permettant de gérer les newsletters.
            </span>
          </li>
        </ul>
      </Accordion>

      <Accordion title={<span><FaGraduationCap /> Studies</span>}>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', lineHeight: '1.8' }}>
          <li>
            <strong>2024 - 2026:</strong> Préparation du Titre Professionnel de Concepteur Développeur d'Applications option IA
            <br />
            <span style={{ color: '#555' }}>(avec la Fabrique Numérique Paloise)</span>
          </li>
          <li>
            <strong>2024:</strong> Obtention du Titre Professionnel de Développeur web et web mobile (DWWM)
            <br />
            <span style={{ color: '#555' }}>(avec l'Afpa)</span>
            <ul style={{ listStyleType: 'circle', marginLeft: '20px', color: '#555' }}>
              <li>Création d'un back-office en PHP procédural avec interface de connexion</li>
              <li>Développement d'une application affichant la météo en temps réel avec Angular</li>
            </ul>
          </li>
        </ul>
      </Accordion>

      <Accordion title={<span><FaProjectDiagram /> Personal projects</span>}>
        <p>Rent a biquette: de la rédaction du cahier des charges au déploiement, en passant par les étapes de conception (maquettes, base de données...), du développement (python et Django) et des tests</p>
        <p>This portfolio (React)</p>
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
