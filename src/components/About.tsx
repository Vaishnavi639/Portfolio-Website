import React from 'react';
import { ServerIcon, CodeIcon, CloudIcon, ShieldIcon, UsersIcon } from 'lucide-react';
export const About: React.FC = () => {
  return <section id="about" className="py-20 bg-white dark:bg-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              About Me
            </h2>
            <div className="h-1 w-20 bg-[#2563eb] dark:bg-[#FF9900] mb-6"></div>
            <div className="text-sm font-mono mb-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-[#00C851] mr-2"></div>
                <span>B.Tech AI & Data Science (2022-2026)</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-[#326CE5] mr-2"></div>
                <span>Cloud Lead @ Google Developers Group</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#FF9900] mr-2"></div>
                <span>AWS User Group Pune Member</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Experienced DevOps & Cloud Engineer with proven expertise in
              designing and implementing scalable cloud infrastructures,
              automating CI/CD pipelines, and optimizing system performance
              across AWS, GCP, and Azure platforms. Combines strong foundation
              in infrastructure-as-code, containerization, and monitoring with
              advanced data science skills to build intelligent DevOps
              solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[{
              icon: <CloudIcon className="text-[#2563eb] dark:text-[#FF9900]" />,
              title: 'Cloud Architecture',
              description: 'Designing enterprise-grade, secure, and cost-optimized cloud solutions'
            }, {
              icon: <CodeIcon className="text-[#2563eb] dark:text-[#FF9900]" />,
              title: 'DevOps Automation',
              description: 'Building robust CI/CD pipelines and Infrastructure-as-Code implementations'
            }, {
              icon: <ServerIcon className="text-[#2563eb] dark:text-[#FF9900]" />,
              title: 'Data-Driven Operations',
              description: 'Applying ML/AI to enhance monitoring, alerting, and predictive maintenance'
            }, {
              icon: <ShieldIcon className="text-[#2563eb] dark:text-[#FF9900]" />,
              title: 'Security & Compliance',
              description: 'Implementing security best practices and compliance frameworks'
            }, {
              icon: <UsersIcon className="text-[#2563eb] dark:text-[#FF9900]" />,
              title: 'Technical Leadership',
              description: 'Mentoring teams and leading cloud transformation initiatives'
            }].map((item, index) => <div key={index} className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
                  <div className="flex items-center mb-3">
                    {item.icon}
                    <h3 className="ml-2 font-medium">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};