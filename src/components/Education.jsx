import React from 'react';

// Updated educationData from your PDF
const educationData = [
  { type: 'education', title: 'Bachelor of Science: Mathematics', school: 'Kwame Nkrumah University of Science and Technology', date: 'November 2019' },
  { type: 'cert', title: 'AWS Certified Cloud Practitioner', date: 'Amazon Web Services' },
  { type: 'cert', title: 'AWS Solutions Architect - Associate', date: 'Amazon Web Services' },
  { type: 'cert', title: 'ALX-T Cloud DevOps Engineer', date: 'Udacity' },
  { type: 'cert', title: 'ALX Software Engineering', date: 'ALX Africa' },
  { type: 'cert', title: 'Google IT Support', date: 'Coursera' },
  { type: 'cert', title: 'Google IT Automation with Python', date: 'Coursera' }
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;