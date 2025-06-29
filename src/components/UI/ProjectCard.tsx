import React from 'react';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
interface ProjectProps {
  project: {
    title: string;
    description: string;
    category: string;
    techStack: string[];
    highlights: string[];
    impact: string;
    github?: string;
    documentation?: string;
  };
}
export const ProjectCard: React.FC<ProjectProps> = ({
  project
}) => {
  return <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {project.title}
          </h3>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded text-gray-700 dark:text-gray-300">
                {tech}
              </span>)}
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Key Highlights
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
            {project.highlights.slice(0, 2).map((highlight, index) => <li key={index}>{highlight}</li>)}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Impact
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {project.impact}
          </p>
        </div>
        <div className="flex mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-[#2563eb] dark:text-[#FF9900] hover:underline mr-4">
              <GithubIcon size={16} className="mr-1" /> GitHub
            </a>}
          {project.documentation && <a href="#" className="flex items-center text-sm text-[#2563eb] dark:text-[#FF9900] hover:underline">
              <ExternalLinkIcon size={16} className="mr-1" /> Documentation
            </a>}
        </div>
      </div>
    </div>;
};