import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> teyeearl@gmail.com</p> 
            <p><strong>Phone:</strong> +233272558664 / +233501430075</p> 
            <p><strong>Location:</strong> Accra, Ghana</p> 
            <p><strong>Website:</strong> <a href="https://eael.tech" target="_blank" rel="noopener noreferrer" style={{ color: '#764ba2' }}>eael.tech</a></p> 
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/earl-teye" target="_blank" rel="noopener noreferrer" style={{ color: '#764ba2' }}>linkedin.com/in/earl-teye</a></p> 
            <p><strong>GitHub:</strong> <a href="https://github.com/Eael" target="_blank" rel="noopener noreferrer" style={{ color: '#764ba2' }}>github.com/Eael</a></p> 
          </div>
          <div className="about-text">
            <p>Detail-oriented IT professional with 6+ years of experience in IT support, software development, and system administration. Proven expertise in managing IT infrastructure, troubleshooting hardware/software issues, and implementing cybersecurity protocols.</p>
            <p>Skilled in providing technical support, training non-technical users, and optimizing system performance. Adept at collaborating with cross-functional teams to deliver technology solutions that align with organizational goals.</p>
            <p>Passionate about leveraging technology to empower individuals and communities through digital literacy. Active member of the MAYEKOO and KETSA Foundation, committed to continuous learning and staying updated with emerging technologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;