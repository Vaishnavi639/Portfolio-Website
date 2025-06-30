import React, { useState } from 'react';
import { ProjectCard } from './UI/ProjectCard';
const projectCategories = ['All', 'DevOps', 'Cloud', 'Infrastructure', 'MLOps'];
const projects = [{
  title: 'MLOps Pipeline for Orange Disease Detection',
  description: 'Automated ML workflow for disease detection in citrus plants',
  category: 'MLOps',
  techStack: ['Docker', 'Kubernetes', 'MLflow', 'AWS ECS', 'Terraform', 'GitHub Actions'],
  highlights: ['End-to-end ML pipeline automation', 'Container orchestration for ML workloads', 'Automated model deployment and monitoring', 'Infrastructure scaling based on ML workload demands'],
  impact: 'Production-ready ML infrastructure with DevOps best practices',
  github: 'https://github.com/Vaishnavi639/orange-disease-detection'
}, {
  title: 'System Sentinel',
  description: 'Linux-based health monitoring and alerting tool',
  category: 'DevOps',
  techStack: ['Shell Scripting', 'BASH', 'Linux', 'Prometheus', 'Grafana'],
  highlights: ['Comprehensive system health monitoring with real-time alerting', 'Automated incident response and remediation', 'Historical analysis and performance trending', '90% reduction in manual monitoring effort'],
  impact: 'Enhanced system reliability and minimized downtime',
  github: 'https://github.com/Vaishnavi639/System-HealthCheck-Script'
}, {
  title: 'VPC-to-VPC Peering Architecture',
  description: 'Secure cloud connectivity across AWS environments',
  category: 'Infrastructure',
  techStack: ['AWS VPC', 'Route Tables', 'NAT Gateways', 'IAM', 'Terraform'],
  highlights: ['Enterprise-grade multi-environment connectivity', '99.9% secure private data transmission', 'Automated infrastructure provisioning', 'Cost-optimized and scalable network design'],
  impact: 'Secure and efficient multi-region cloud architecture',
  github: 'https://github.com/Vaishnavi639/Secure-VPC-Peering-for-Multi-Cloud-Connectivity'
}, {
  title: 'LLM-Powered Dockerfile Generator',
  description: 'AI-assisted generation of infra code and Dockerfiles',
  category: 'MLOps',
  techStack: ['Python', 'LLaMA 3.2', 'Ollama', 'Streamlit', 'Terraform', 'Ansible'],
  highlights: ['Intelligent infrastructure code generation', 'Automated Dockerfile and Terraform template creation', 'Self-healing infrastructure with ML-powered monitoring', 'Reduced deployment time by 70%'],
  impact: 'Next-generation DevOps automation with AI',
  github: 'https://github.com/Vaishnavi639/llama3.2-dockerfile_generator'
}, {
  title: 'MEAN Stack Healthcare Portal',
  description: 'CI/CD deployment of a containerized health portal',
  category: 'Cloud',
  techStack: ['Docker', 'Kubernetes', 'AWS ECS', 'Fargate', 'GitHub Actions', 'Terraform'],
  highlights: ['Containerized full-stack application deployment', 'Complete CI/CD pipeline with automated testing', 'Infrastructure as Code implementation', 'Auto-scaling and load balancing configuration'],
  impact: 'Scalable healthcare platform with 99.9% uptime',
  github: 'https://github.com/Vaishnavi639/healthcare-portal-smallf'
}, {
  title: 'Amazon Sales Data Science Project',
  description: 'EDA-driven sales insights and BI visualizations on Amazon data',
  category: 'Data Science',
  techStack: ['Python', 'Pandas', 'Matplotlib', 'Power BI', 'NumPy', 'Seaborn'],
  highlights: ['Detailed EDA and data cleaning', 'Sales trend and regional performance analysis', 'Interactive Power BI dashboards', 'Business insights through data storytelling'],
  impact: 'Helped derive actionable insights from raw sales data',
  github: 'https://github.com/Vaishnavi639/Amazon-Sales-DataScience'
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