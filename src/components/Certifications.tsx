import React from 'react';
import { AwardIcon, CheckCircleIcon, ExternalLinkIcon } from 'lucide-react';
export const Certifications: React.FC = () => {
  const certifications = [{
    name: 'Google Cloud Certified Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: 'Nov 2024 – Nov 2027',
    logo: 'google-cloud',
    active: true,
    credlyUrl: 'https://www.credly.com/badges/0a02fb9d-77ac-400c-8478-52b32f8038ef/public_url'
  }, {
    name: 'GitHub Actions Certification',
    issuer: 'GitHub',
    date: 'Jul 2024 – Jul 2027',
    logo: 'github',
    active: true,
    credlyUrl: 'https://www.credly.com/badges/ae206370-10d1-4ca8-812c-248efea0ef50/public_url'
  }, {
    name: 'Oracle Certified Foundation Associate',
    issuer: 'Oracle',
    date: 'Sept 2023 – Sept 2025',
    logo: 'oracle',
    active: true,
    credlyUrl: 'https://www.credly.com/organizations/oracle/badges'
  }, {
    name: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'In Progress',
    logo: 'aws',
    active: false
  }];
  return <section id="certifications" className="py-20 bg-gray-50 dark:bg-[#16213e]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Certifications & Achievements
      </h2>
      <div className="h-1 w-20 bg-[#2563eb] dark:bg-[#FF9900] mx-auto mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <AwardIcon size={32} className="text-[#2563eb] dark:text-[#FF9900]" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-center text-gray-800 dark:text-white mb-2">
            {cert.name}
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-4">
            {cert.issuer}
          </p>
          <div className="flex items-center justify-center mb-4">
            {cert.active ? <div className="flex items-center text-green-600 dark:text-green-500 text-sm">
              <CheckCircleIcon size={16} className="mr-1" />
              <span>{cert.date}</span>
            </div> : <span className="text-gray-500 dark:text-gray-400 text-sm">
              {cert.date}
            </span>}
          </div>
          {/* Verify button - only show for active certifications */}
          {cert.active && cert.credlyUrl && <div className="flex justify-center mt-4">
            <a href={cert.credlyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-sm bg-[#2563eb]/10 dark:bg-[#FF9900]/10 text-[#2563eb] dark:text-[#FF9900] rounded-md hover:bg-[#2563eb]/20 dark:hover:bg-[#FF9900]/20 transition-colors">
              <ExternalLinkIcon size={14} className="mr-2" />
              Verify on Credly
            </a>
          </div>}
        </div>)}
      </div>
    </div>
  </section>;
};