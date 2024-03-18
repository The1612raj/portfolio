import React, { useState } from 'react';
import { FaBuilding, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Sayhello.scss';

function Sayhello() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      full_name: fullName,
      email: email,
      message: message
    };

    // Send form data to email
    fetch('https://formspree.io/f/moqglbzv', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      setStatus('Message sent successfully!');
      setFullName('');
      setEmail('');
      setMessage('');
    }).catch((error) => {
      setStatus('Error sending message. Please try again later.');
      console.error(error);
    });
  }

  const extractName = (fullName) => {
    const nameParts = fullName.split(' ');
    return {
      firstName: nameParts[0],
      lastName: nameParts[nameParts.length - 1]
    };
  }

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Get in touch</h1>
        <p><FaBuilding /> Cuttack, Odisha, India</p>
        <p><FaEnvelope /> <a href="mailto:pandasubhasish@outlook.com">pandasubhasish@outlook.com</a></p>
        <p><FaPhone className='phone' /> +917008107775</p>
      </div>
      <div className="contact-form">
        <h1>Say hello</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="full_name" placeholder="Full Name" required value={fullName} onChange={e => setFullName(e.target.value)} />
          <input type="email" name="email" placeholder="Your Email" required value={email} onChange={e => setEmail(e.target.value)} />
          <textarea name="message" placeholder="Write Down A Message" required value={message} onChange={e => setMessage(e.target.value)}></textarea>
          <button type="submit">Send Message</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  )
}

export default Sayhello;