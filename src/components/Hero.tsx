import React from 'react';
import { CloudIcon, FileTextIcon, BookOpenIcon, ArrowRightIcon } from 'lucide-react';
import { StatusIndicator } from './UI/StatusIndicator';
export const Hero: React.FC = () => {
  return <section className="w-full bg-gradient-to-br from-white to-gray-100 dark:from-[#1a1a2e] dark:to-[#16213e] py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-8">
            <div className="flex items-center mb-4">
              <StatusIndicator status="active" />
              <span className="ml-2 text-sm font-mono text-gray-600 dark:text-gray-400">
                SYSTEM STATUS: OPERATIONAL
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Vaishnavi Pangare
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Architecting scalable cloud infrastructure and automating DevOps
              pipelines with AI-powered solutions
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  CERTIFICATION
                </div>
                <div className="text-sm font-medium mt-1">
                  Google Cloud Certified
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  PUBLICATIONS
                </div>
                <div className="text-sm font-medium mt-1">
                  30+ Technical Articles
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  POSITION
                </div>
                <div className="text-sm font-medium mt-1">
                  Founding Member at Hosteze
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  COMMUNITY
                </div>
                <div className="text-sm font-medium mt-1">AWS & GDG Leader</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="flex items-center px-6 py-3 bg-[#2563eb] dark:bg-[#FF9900] text-white rounded-md hover:bg-[#1d4ed8] dark:hover:bg-[#e68a00] transition-colors">
                <span>View Projects</span>
                <ArrowRightIcon size={16} className="ml-2" />
              </a>
              <a href="#" className="flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <FileTextIcon size={16} className="mr-2" />
                <span>Download Resume</span>
              </a>
              <a href="#blog" className="flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <BookOpenIcon size={16} className="mr-2" />
                <span>Read Blog</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#326CE5]/20 to-[#FF9900]/20 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <CloudIcon size={20} className="text-[#326CE5] dark:text-[#FF9900] mr-2" />
                    <span className="font-medium">Infrastructure Status</span>
                  </div>
                  <StatusIndicator status="active" />
                </div>
                <div className="space-y-4">
                  {[{
                  name: 'AWS Production',
                  status: 'active',
                  metric: '99.99% Uptime'
                }, {
                  name: 'GCP Development',
                  status: 'active',
                  metric: '12 Services'
                }, {
                  name: 'CI/CD Pipeline',
                  status: 'active',
                  metric: 'Last deploy: 2h ago'
                }, {
                  name: 'Kubernetes Cluster',
                  status: 'warning',
                  metric: 'Scaling in progress'
                }].map((item, index) => <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                      <div className="flex items-center">
                        <StatusIndicator status={item.status as 'active' | 'warning' | 'error'} />
                        <span className="ml-2 text-sm">{item.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {item.metric}
                      </span>
                    </div>)}
                </div>
                <div className="mt-4 text-xs text-right text-gray-500 dark:text-gray-400">
                  Updated just now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};