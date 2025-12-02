import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSendMessage = () => {
    // You can customize this to open an email client or a contact form modal
    window.location.href = 'mailto:nkchaudhary431@gmail.com';
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Get In Touch</h2>
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="contact-details">
              <p className="contact-label">Email</p>
              <a href="mailto:nkchaudhary431@gmail.com" className="contact-value">
                nkchaudhary431@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="contact-details">
              <p className="contact-label">Mobile</p>
              <a href="tel:+919263087676" className="contact-value">
                +91 9263087676
              </a>
            </div>
          </div>
        </div>
        <button className="send-message-button" onClick={handleSendMessage}>
          Send Message
        </button>
      </div>
    </section>
  );
};

export default Contact;

