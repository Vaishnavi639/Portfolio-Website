import React, { useState } from 'react';
import { SkillBadge } from './UI/SkillBadge';
const skillCategories = [{
  name: 'Cloud Platforms & Infrastructure',
  skills: [{
    name: 'AWS, GCP, Azure',
    level: 90,
    icon: 'aws'
  }, {
    name: ' Cloud Architecture',
    level: 85,
    icon: 'gcp'
  }, {
    name: 'CLoud Deployment',
    level: 75,
    icon: 'azure'
  }, {
    name: 'CLoud Cost Optimization',
    level: 90,
    icon: 'aws'
  }, {
    name: 'Load Balancing',
    level: 95,
    icon: 'aws'
  }, {
    name: 'CLoud Networking',
    level: 85,
    icon: 'aws'
  }, {
    name: 'CLoud Monitoring',
    level: 90,
    icon: 'aws'
  }, {
    name: 'Serverless Architectures',
    level: 85,
    icon: 'aws'
  }, {
    name: 'Cloud Database Management',
    level: 80,
    icon: 'aws'
  }, {
    name: 'Cloud Security',
    level: 85,
    icon: 'gcp'
  }, {
    name: 'BigQuery',
    level: 75,
    icon: 'gcp'
  }, {
    name: 'Cloud storage',
    level: 85,
    icon: 'gcp'
  }]
}, {
  name: 'DevOps & Automation',
  skills: [{
    name: 'Terraform',
    level: 90,
    icon: 'terraform'
  }, {
    name: 'Ansible',
    level: 85,
    icon: 'ansible'
  }, {
    name: 'Jenkins',
    level: 85,
    icon: 'jenkins'
  }, {
    name: 'GitHub Actions',
    level: 90,
    icon: 'github'
  }, {
    name: 'Docker',
    level: 80,
    icon: 'gitlab'
  }, {
    name: 'Prometheus',
    level: 85,
    icon: 'prometheus'
  }, {
    name: 'Grafana',
    level: 85,
    icon: 'grafana'
  }, {
    name: 'ELK Stack',
    level: 75,
    icon: 'elastic'
  }, {
    name: 'MLFlow',
    level: 75,
    icon: 'elastic'
  }, {
    name: 'Kubernetes',
    level: 75,
    icon: 'elastic'
  }, {
    name: 'Helm',
    level: 80,
    icon: 'helm'
  }]
}, {
  name: 'Data Science & Machine Learning',
  skills: [{
    name: 'Python',
    level: 90,
    icon: 'aws'
  }, {
    name: 'Pandas',
    level: 85,
    icon: 'aws'
  }, {
    name: 'NumPy',
    level: 85,
    icon: 'security'
  }, {
    name: 'Scikit-learn',
    level: 80,
    icon: 'hashicorp'
  }, {
    name: 'TensorFlow',
    level: 75,
    icon: 'security'
  }, {
    name: 'Keras',
    level: 70,
    icon: 'compliance'
  }, {
    name: 'Power BI, Tableau',
    level: 75,
    icon: 'compliance'
  }, {
    name: 'NLP',
    level: 75,
    icon: 'compliance'
  }, {
    name: 'EDA',
    level: 75,
    icon: 'compliance'
  }, {
    name: 'Deep Learning',
    level: 75,
    icon: 'compliance'
  }, {
    name: 'Statistical Analysis',
    level: 75,
    icon: 'compliance'
  }, {
    name: 'Machine Learning ',
    level: 75,
    icon: 'compliance'
  }]
}, {
  name: 'Databases and Version Control',
  skills: [{
    name: 'MySQL',
    level: 90,
    icon: 'shell'
  }, {
    name: 'MongoDB',
    level: 90,
    icon: 'bash'
  }, {
    name: 'DynamoDB',
    level: 85,
    icon: 'python'
  }, {
    name: 'Git',
    level: 90,
    icon: 'yaml'
  }, {
    name: ' GitHub',
    level: 95,
    icon: 'git'
  }, {
    name: 'REST APIs',
    level: 85,
    icon: 'numpy'
  }, {
    name: 'Agile Methodologies',
    level: 85,
    icon: 'numpy'
  }, {
    name: 'ETL',
    level: 85,
    icon: 'numpy'
  }]
}, {
  name: 'Operating Systems & Scripting',
  skills: [{
    name: 'RHEL ',
    level: 75,
    icon: 'tensorflow'
  }, {
    name: 'linux Administration',
    level: 80,
    icon: 'sklearn'
  }, {
    name: 'Ubuntu',
    level: 75,
    icon: 'mlflow'
  }, {
    name: 'Python Scripting',
    level: 85,
    icon: 'pandas'
  }, {
    name: 'Shell Scripting',
    level: 85,
    icon: 'numpy'
  }, {
    name: 'YAML',
    level: 85,
    icon: 'numpy'
  }, {
    name: 'Groovy',
    level: 85,
    icon: 'numpy'
  }, {
    name: 'Bash Scripting',
    level: 85,
    icon: 'numpy'
  }]
}];
export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);
  return <section id="skills" className="py-20 bg-gray-50 dark:bg-[#16213e]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Technical Skills
      </h2>
      <div className="h-1 w-20 bg-[#2563eb] dark:bg-[#FF9900] mx-auto mb-12"></div>
      <div className="flex flex-wrap justify-center mb-10 gap-2">
        {skillCategories.map(category => <button key={category.name} onClick={() => setActiveCategory(category.name)} className={`px-4 py-2 rounded-md text-sm md:text-base transition-colors ${activeCategory === category.name ? 'bg-[#2563eb] dark:bg-[#FF9900] text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
          {category.name}
        </button>)}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillCategories.find(category => category.name === activeCategory)?.skills.map(skill => <SkillBadge key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />)}
        </div>
      </div>
    </div>
  </section>;
};