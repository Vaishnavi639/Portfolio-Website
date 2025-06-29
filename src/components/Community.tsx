import React from 'react';
import { UsersIcon, CalendarIcon } from 'lucide-react';
export const Community: React.FC = () => {
  const communityRoles = [{
    role: 'Cloud Lead',
    organization: 'Google Developers Group, AISSMS IOIT',
    period: 'Sept 2024 – Present',
    description: 'Leading cloud-focused workshops, organizing hands-on labs, and mentoring students on Google Cloud technologies.'
  }, {
    role: 'Volunteer',
    organization: 'AWS User Group Pune',
    period: 'Feb 2025 – Present',
    description: 'Contributing to community events, assisting with workshops, and sharing knowledge on AWS best practices.'
  }, {
    role: 'Technical Writer',
    organization: 'Medium',
    period: 'Sept 2022 – Present',
    description: 'Publishing articles on DevOps practices, cloud architecture, and infrastructure automation.'
  }, {
    role: 'DevOps Mentor',
    organization: 'Freelance',
    period: 'Jan 2024 – Present',
    description: 'Helping teams with cloud transformation, CI/CD implementation, and DevOps best practices.'
  }];
  return <section id="community" className="py-20 bg-white dark:bg-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
          Leadership & Community
        </h2>
        <div className="h-1 w-20 bg-[#2563eb] dark:bg-[#FF9900] mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {communityRoles.map((role, index) => <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#2563eb]/10 dark:bg-[#FF9900]/10 rounded-full flex items-center justify-center mr-4">
                  <UsersIcon size={20} className="text-[#2563eb] dark:text-[#FF9900]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white">
                    {role.role}
                  </h3>
                  <p className="text-sm text-[#2563eb] dark:text-[#FF9900]">
                    {role.organization}
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                <CalendarIcon size={14} className="mr-1" />
                <span>{role.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {role.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};