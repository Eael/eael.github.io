import React from 'react';

function Contact() {
  return (

    <section id="contact" style={{ background: '#f8f9fa' }}>    
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            I'm currently looking for new opportunities and my inbox is always open.
            Whether you have a question or just want to say hi, I'll do my best
            to get back to you!
          </p>
          <a href="mailto:teyeearl@gmail.com" className="cta-button">
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;