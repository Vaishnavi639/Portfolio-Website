import React from 'react';
import { BriefcaseIcon, CalendarIcon } from 'lucide-react';
export const Experience: React.FC = () => {
  const experiences = [{
    company: 'Hosteze',
    position: 'Founding Member and DevOps Cloud Engineer',
    period: 'May 2023 – Nov 2024',
    description: 'Architected and implemented complete AWS cloud infrastructure for student housing platform.',
    technologies: ['AWS (S3, DynamoDB, Amplify, CloudWatch, IAM)', 'Docker', 'Terraform'],
    achievements: ['Implemented Infrastructure as Code reducing deployment time from hours to minutes', 'Built robust CI/CD pipelines with automated testing and deployment', 'Reduced operational overhead by 60% through automation', 'Established monitoring and alerting systems ensuring 99.9% uptime']
  }, {
    company: 'Fiverr',
    position: 'DevOps & Cloud Consultant',
    period: 'Mar 2025 – Present',
    description: 'Providing consulting services for DevOps transformation, cloud migration, and infrastructure optimization.',
    technologies: ['AWS/GCP migrations', 'Kubernetes deployments', 'MLOps implementations'],
    achievements: ['Helped 20+ clients implement cloud-native solutions', 'Designed and implemented custom CI/CD pipelines for various technology stacks', 'Provided cost optimization strategies resulting in 30-40% cloud cost reduction', 'Mentored development teams on DevOps best practices']
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