import React from 'react';

// Updated skillData from your PDF
const skillData = [
  {
    title: 'Cloud Platforms',
    tags: ['AWS (EC2, S3, Lambda, IAM, CloudFront, API Gateway)']
  },
  {
    title: 'Infrastructure as Code & DevOps',
    tags: ['Terraform', 'AWS CLI', 'Git', 'Jira', 'Kubernetes', 'CloudFormation', 'CI/CD pipelines']
  },
  {
    title: 'Programming',
    tags: ['Python scripting', 'automation', 'SQL-data querying', 'JavaScript DOM Content', 'HTML5', 'CSS', 'Visual Basic']
  },
  {
    title: 'Databases',
    tags: ['MySQL', 'SQL Server', 'relational modelling', 'query optimization']
  },
  {
    title: 'Automation',
    tags: ['Automated testing', 'deployment', 'data pipelines', 'backup systems']
  },
  {
    title: 'Support & Tools',
    tags: ['Google Workspace', 'Microsoft Office Suite', 'Help Desk platforms', 'Virtual Event Tools']
  }
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillData.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.tags.map((tag, tagIndex) => (
                  <span className="skill-tag" key={tagIndex}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;