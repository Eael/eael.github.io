import React from 'react';

// Updated educationData from your PDF
const educationData = [
  { type: 'education', title: 'Bachelor of Science: Mathematics', school: 'Kwame Nkrumah University of Science and Technology', date: 'November 2019', link: 'https://www.knust.edu.gh/' },
  { type: 'cert', title: 'AWS Certified Cloud Practitioner', date: 'Amazon Web Services', link: 'https://www.certmetrics.com/amazon/public/verification.aspx?pid=K3Q2KNXT6EXX2A3Y' },
  { type: 'cert', title: 'AWS Solutions Architect - Associate', date: 'Amazon Web Services', link: 'https://www.certmetrics.com/amazon/public/verification.aspx?pid=K3Q2KNXT6EXX2A3Y' },
  { type: 'cert', title: 'ALX-T Cloud DevOps Engineer', date: 'Udacity', link: 'https://www.udacity.com/course/alx-t-cloud-devops-engineer-nanodegree--nd9990' },
  { type: 'cert', title: 'ALX Software Engineering', date: 'ALX Africa', link: 'https://www.alxafrica.com/' },
  { type: 'cert', title: 'Google IT Support', date: 'Coursera', link: 'https://www.coursera.org/professional-certificates/google-it-support' },
  { type: 'cert', title: 'Google IT Automation with Python', date: 'Coursera', link: 'https://www.coursera.org/professional-certificates/google-it-automation-with-python' }
];


function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="education-grid">
          {educationData.map((item, index) => (
            <div className={item.type === 'education' ? 'education-item' : 'cert-item'} key={index}>
              <h3>{item.title}</h3>
              {item.school && <p><strong>{item.school}</strong></p>}
              <p>{item.date}</p>
              {item.link && <p><a href={item.link} target="_blank" rel="noopener noreferrer">View Certificate</a></p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;