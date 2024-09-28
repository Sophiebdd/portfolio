import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Initialiser EmailJS
  emailjs.init('x6F-jduxXXN0mhoLM');  // Remplacez par votre clé publique (publicKey)

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_p5pt74l',     // Service ID que vous avez créé
        'template_fyjd38j',    // Template ID que vous avez créé
        e.target              // Formulaire à envoyer (e.target correspond au formulaire)
      )
      .then(() => {
        console.log('SUCCESS!');
        alert('Merci! Votre message a été envoyé avec succès.');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      });
  };

  return (
    <form onSubmit={handleSubmit} id="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto' }}>
      <input
        type="text"
        name="from_name"  // Utiliser from_name pour correspondre au template EmailJS
        placeholder="Votre nom et prénom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ padding: '10px', fontSize: '1em' }}
      />
      <input
        type="email"
        name="from_email"  // Utiliser from_email pour correspondre au template EmailJS
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ padding: '10px', fontSize: '1em' }}
      />
      <textarea
        name="message"  // Correspond au modèle EmailJS
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        style={{ padding: '10px', fontSize: '1em', height: '100px' }}
      />
      <button type="submit" style={{ padding: '10px', fontSize: '1em', cursor: 'pointer' }}>Envoyer</button>
    </form>
  );
}

export default ContactForm;
