import React from 'react';

const projectData = [
  {
    title: 'CI/CD Pipeline Development', 
    subtitle: 'Udacity Project (Link)', 
    link: 'https://github.com/Eael/ci-cd-pipeline-development',
    details: [
      'Architected CI/CD pipelines using GitHub Actions and AWS to automate integration, testing, and deployment stages, reducing lead time for releases by 30%.', 
      'Deployed blue/green environments to maintain uptime during rollouts and enhanced system reliability with integrated recovery protocols and test coverage metrics.' 
    ]
  },
  {
    title: 'Cloud Solution Architecture & Deployment', 
    subtitle: 'AWS Personal Project (Link)', 
    link: 'https://github.com/Eael/cloud-solution-architecture',
    details: [
      'Designed and deployed a static website using AWS S3 and CloudFront, enhancing global performance and achieving over 40% faster page loads.',
      'Engineered automated deployments through CloudFormation templates, creating fault-tolerant infrastructure with zero downtime rollouts and improved scalability across environments.',
      'Built and containerized a Kubernetes-based ML inference microservice hosted on AWS, validating resilience and load-handling through controlled stress testing.'
    ]
  }
];

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Project Experience</h2>
        <div className="project-grid">
          {projectData.map((project, index) => (
            <div className="project-item" key={index}>
              <div className="project-header">
                <div className="project-title">{project.title}</div>
                <div className="project-subtitle"><a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#764ba2' }}>
                    {project.subtitle}
                  </a></div>
              </div>
              <div className="project-details">
                <ul>
                  {project.details.map((detail, detailIndex) => (
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

export default Projects;