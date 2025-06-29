import React, { useState } from 'react';
import { ProjectCard } from './UI/ProjectCard';
const projectCategories = ['All', 'DevOps', 'Cloud', 'Infrastructure', 'MLOps'];
const projects = [{
  title: 'System Sentinel',
  description: 'Automated Infrastructure Monitoring with real-time alerting and incident response',
  category: 'DevOps',
  techStack: ['Shell Scripting', 'BASH', 'Linux', 'Prometheus', 'Grafana'],
  highlights: ['Comprehensive system health monitoring with real-time alerting', 'Automated incident response and remediation', 'Historical analysis and performance trending', '90% reduction in manual monitoring effort'],
  impact: 'Enhanced system reliability and minimized downtime',
  github: 'https://github.com/Vaishnavi639/system-sentinel'
}, {
  title: 'VPC-to-VPC Peering Architecture',
  description: 'Enterprise-grade multi-environment connectivity solution for AWS',
  category: 'Infrastructure',
  techStack: ['AWS VPC', 'Route Tables', 'NAT Gateways', 'IAM', 'Terraform'],
  highlights: ['Enterprise-grade multi-environment connectivity', '99.9% secure private data transmission', 'Automated infrastructure provisioning', 'Cost-optimized and scalable network design'],
  impact: 'Secure and efficient multi-region cloud architecture',
  documentation: 'LinkedIn post with architecture diagrams'
}, {
  title: 'MEAN Stack Healthcare Portal',
  description: 'Cloud Native Deployment of a full healthcare application',
  category: 'Cloud',
  techStack: ['Docker', 'Kubernetes', 'AWS ECS', 'Fargate', 'GitHub Actions', 'Terraform'],
  highlights: ['Containerized full-stack application deployment', 'Complete CI/CD pipeline with automated testing', 'Infrastructure as Code implementation', 'Auto-scaling and load balancing configuration'],
  impact: 'Scalable healthcare platform with 99.9% uptime',
  github: 'https://github.com/Vaishnavi639/healthcare-portal'
}, {
  title: 'AI-Powered Infrastructure Automation',
  description: 'Using LLaMA 3.2 to automate infrastructure code generation',
  category: 'MLOps',
  techStack: ['Python', 'LLaMA 3.2', 'Ollama', 'Streamlit', 'Terraform', 'Ansible'],
  highlights: ['Intelligent infrastructure code generation', 'Automated Dockerfile and Terraform template creation', 'Self-healing infrastructure with ML-powered monitoring', 'Reduced deployment time by 70%'],
  impact: 'Next-generation DevOps automation with AI',
  github: 'https://github.com/Vaishnavi639/ai-infra-automation'
}, {
  title: 'MLOps Pipeline for Orange Disease Detection',
  description: 'End-to-end ML pipeline automation for agricultural use case',
  category: 'MLOps',
  techStack: ['Docker', 'Kubernetes', 'MLflow', 'AWS ECS', 'Terraform', 'GitHub Actions'],
  highlights: ['End-to-end ML pipeline automation', 'Container orchestration for ML workloads', 'Automated model deployment and monitoring', 'Infrastructure scaling based on ML workload demands'],
  impact: 'Production-ready ML infrastructure with DevOps best practices',
  github: 'https://github.com/Vaishnavi639/orange-disease-detection'
}, {
  title: 'Data-Driven Operations Dashboard',
  description: 'Real-time infrastructure metrics and KPIs with predictive maintenance',
  category: 'DevOps',
  techStack: ['Python', 'Grafana', 'Prometheus', 'Power BI', 'AWS CloudWatch'],
  highlights: ['Real-time infrastructure metrics and KPIs', 'Predictive maintenance using ML algorithms', 'Cost optimization recommendations', 'Business intelligence for IT operations'],
  impact: '40% reduction in operational costs through data insights',
  github: 'https://github.com/Vaishnavi639/ops-dashboard'
}];
export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);
  return <section id="projects" className="py-20 bg-white dark:bg-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-[#2563eb] dark:bg-[#FF9900] mx-auto mb-12"></div>
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {projectCategories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-md text-sm md:text-base transition-colors ${activeCategory === category ? 'bg-[#2563eb] dark:bg-[#FF9900] text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
              {category}
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
      </div>
    </section>;
};