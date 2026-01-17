import React from 'react';
import { BriefcaseIcon, CalendarIcon } from 'lucide-react';
export const Experience: React.FC = () => {
  
  const experiences = [{
    company: 'Afto Dynamo',
    position: 'DevOps Engineer',
    period: 'Jul 2025 – Present',
    description: 'Architected infrastructure modernization from monolithic VM to microservices on Azure.',
    technologies: ['Azure', 'Docker', 'GitHub Actions', 'Elasticsearch', 'Python', 'Locust', 'Azure Monitor'],
    achievements: [
      'Modernized infrastructure to microservices architecture on Azure, reducing monthly cloud spend by 71% (from $3,000 to $859)',
      'Engineered production CI/CD pipelines with GitHub Actions, reducing deployment time by 60% and achieving 95% uptime SLA',
      'Implemented comprehensive observability using Azure Monitor and Application Insights with custom metrics and distributed tracing',
      'Developed Python automation scripts for database migration and ETL pipeline processing 10K+ product records with AI-powered generation',
      'Migrated Chatwoot service to containerized microservices, resolved SSO/CORS issues, and designed VNet-based security architecture'
    ]
  }, {
    company: 'Hosteze',
    position: 'Founding Member and DevOps Cloud Engineer',
    period: 'May 2023 – Nov 2024',
    description: 'Designed and deployed scalable AWS infrastructure for a student housing platform.',
    technologies: ['AWS (S3, DynamoDB, Amplify, ECS, CloudWatch, IAM)', 'Docker', 'GitHub Actions'],
    achievements: [
      'Architected and deployed AWS cloud infrastructure to support roommate and room search functionality at scale',
      'Containerized applications using Docker and engineered streamlined CI/CD pipelines',
      'Reduced operational overhead through automated deployment processes and infrastructure as code practices'
    ]
  }];

  return <section id="experience" className="py-20 bg-gray-50 dark:bg-[#16213e]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Experience
      </h2>
      <div className="h-1 w-20 bg-[#2563eb] dark:bg-[#FF9900] mx-auto mb-12"></div>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => <div key={index} className="mb-12 relative">
          {index < experiences.length - 1 && <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>}
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="w-16 h-16 bg-[#2563eb] dark:bg-[#FF9900] rounded-full flex items-center justify-center">
                <BriefcaseIcon size={24} className="text-white" />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex-grow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg text-[#2563eb] dark:text-[#FF9900]">
                    {exp.company}
                  </h4>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <CalendarIcon size={16} className="text-gray-500 dark:text-gray-400 mr-1" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {exp.description}
              </p>
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Technologies
                </h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>)}
                </div>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Key Achievements
                </h5>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                  {exp.achievements.map((achievement, i) => <li key={i}>{achievement}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  </section>;
};
