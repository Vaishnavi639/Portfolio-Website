import React, { useState } from 'react';
import { SkillBadge } from './UI/SkillBadge';
const skillCategories = [{
  name: 'Cloud Platforms & Infrastructure',
  skills: [{
    name: 'AWS',
    level: 90,
    icon: 'aws'
  }, {
    name: 'GCP',
    level: 85,
    icon: 'gcp'
  }, {
    name: 'Azure',
    level: 75,
    icon: 'azure'
  }, {
    name: 'EC2',
    level: 90,
    icon: 'aws'
  }, {
    name: 'S3',
    level: 95,
    icon: 'aws'
  }, {
    name: 'Lambda',
    level: 85,
    icon: 'aws'
  }, {
    name: 'VPC',
    level: 90,
    icon: 'aws'
  }, {
    name: 'CloudWatch',
    level: 85,
    icon: 'aws'
  }, {
    name: 'DynamoDB',
    level: 80,
    icon: 'aws'
  }, {
    name: 'Compute Engine',
    level: 85,
    icon: 'gcp'
  }, {
    name: 'BigQuery',
    level: 75,
    icon: 'gcp'
  }, {
    name: 'Cloud Storage',
    level: 85,
    icon: 'gcp'
  }]
}, {
  name: 'DevOps & Automation',
  skills: [{
    name: 'Docker',
    level: 95,
    icon: 'docker'
  }, {
    name: 'Kubernetes',
    level: 90,
    icon: 'kubernetes'
  }, {
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
    name: 'GitLab CI',
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
    name: 'Helm',
    level: 80,
    icon: 'helm'
  }]
}, {
  name: 'Operating Systems & Scripting',
  skills: [{
    name: 'Linux',
    level: 95,
    icon: 'linux'
  }, {
    name: 'Shell',
    level: 90,
    icon: 'shell'
  }, {
    name: 'BASH',
    level: 90,
    icon: 'bash'
  }, {
    name: 'Python',
    level: 85,
    icon: 'python'
  }, {
    name: 'YAML',
    level: 90,
    icon: 'yaml'
  }, {
    name: 'Git',
    level: 95,
    icon: 'git'
  }, {
    name: 'PowerShell',
    level: 80,
    icon: 'powershell'
  }]
}, {
  name: 'Security & Compliance',
  skills: [{
    name: 'IAM',
    level: 90,
    icon: 'aws'
  }, {
    name: 'VPC Security',
    level: 85,
    icon: 'aws'
  }, {
    name: 'SSL/TLS',
    level: 85,
    icon: 'security'
  }, {
    name: 'HashiCorp Vault',
    level: 80,
    icon: 'hashicorp'
  }, {
    name: 'WAF',
    level: 75,
    icon: 'security'
  }, {
    name: 'SOC2',
    level: 70,
    icon: 'compliance'
  }, {
    name: 'GDPR',
    level: 75,
    icon: 'compliance'
  }]
}, {
  name: 'Data Science & ML',
  skills: [{
    name: 'TensorFlow',
    level: 75,
    icon: 'tensorflow'
  }, {
    name: 'Scikit-learn',
    level: 80,
    icon: 'sklearn'
  }, {
    name: 'MLflow',
    level: 75,
    icon: 'mlflow'
  }, {
    name: 'Pandas',
    level: 85,
    icon: 'pandas'
  }, {
    name: 'NumPy',
    level: 85,
    icon: 'numpy'
  }, {
    name: 'SQL',
    level: 90,
    icon: 'sql'
  }, {
    name: 'R',
    level: 70,
    icon: 'r'
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