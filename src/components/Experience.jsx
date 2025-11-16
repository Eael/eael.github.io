import React from 'react';

// Updated experienceData from your PDF
const experienceData = [
  {
    title: 'Software Systems Analyst/Developer',
    company: 'Spagad Technologies Limited',
    date: 'April 2024 – Present',
    details: [
      'Architected and delivered web-based business systems, boosting operational performance by 30%.',
      'Conducted performance analysis and integrated new technologies that reduced processing times by 25%.',
      'Collaborated with cross-functional teams to refine workflows and deliver insights that improve management reporting.'
    ]
  },
  {
    title: 'I.T Support Specialist (Part-time)',
    company: 'Asah Makerspace',
    date: 'November 2023 – April 2024',
    details: [
      'Enhanced digital systems adoption for 25+ users, including robotics and 3D printing platforms.',
      'Created structured workflows and guidelines, improving system usability and knowledge transfer.'
    ]
  },
  {
    title: 'I.T Support Specialist',
    company: 'Goil PLC',
    date: 'September 2019 – February 2024',
    details: [
      'Streamlined IT support by scripting solutions in Python, cutting manual task time by 20%.',
      'Administered enterprise systems and local IT infrastructure for 30+ users maintaining a 95% first-call resolution rate and minimizing downtime.',
      'Designed and coordinated data backup and recovery systems, ensuring compliance with company security standards.',
      'Optimized inventory reconciliation and documentation processes, improving operational accuracy by 25%.'
    ]
  }
];

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experienceData.map((job, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-header">
                <div className="job-title">{job.title}</div>
                <div className="company">{job.company}</div>
                <div className="date">{job.date}</div>
              </div>
              <div className="experience-details">
                <ul>
                  {job.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;