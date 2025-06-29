import React from 'react';
import { BookOpenIcon, ExternalLinkIcon } from 'lucide-react';
export const Blog: React.FC = () => {
  const blogPosts = [{
    title: 'Why VPC Peering is Crucial in Multi-Cloud Architectures',
    excerpt: 'Explore the benefits and implementation strategies of VPC peering in multi-cloud environments to ensure secure and efficient communication.',
    date: 'May 15, 2024',
    readTime: '8 min read',
    tags: ['AWS', 'Cloud Architecture', 'Networking']
  }, {
    title: 'Building Bulletproof CI/CD Pipelines with GitHub Actions',
    excerpt: 'A comprehensive guide to creating reliable, secure, and efficient CI/CD pipelines using GitHub Actions for modern DevOps workflows.',
    date: 'April 22, 2024',
    readTime: '12 min read',
    tags: ['CI/CD', 'GitHub Actions', 'DevOps']
  }, {
    title: 'Terraform State Management: Best Practices for Enterprise',
    excerpt: 'Learn how to properly manage Terraform state in enterprise environments to avoid common pitfalls and ensure infrastructure stability.',
    date: 'March 10, 2024',
    readTime: '10 min read',
    tags: ['Terraform', 'IaC', 'Enterprise']
  }, {
    title: 'Container Orchestration: From Docker to Kubernetes',
    excerpt: 'A step-by-step journey from basic Docker containers to fully orchestrated Kubernetes clusters for scalable applications.',
    date: 'February 28, 2024',
    readTime: '15 min read',
    tags: ['Kubernetes', 'Docker', 'Orchestration']
  }, {
    title: 'AWS Cost Optimization: 10 Strategies That Actually Work',
    excerpt: 'Practical strategies to optimize your AWS cloud costs without compromising performance or reliability.',
    date: 'January 14, 2024',
    readTime: '9 min read',
    tags: ['AWS', 'Cost Optimization', 'Cloud']
  }, {
    title: 'Monitoring Microservices: Prometheus and Grafana Setup',
    excerpt: 'A detailed guide to implementing comprehensive monitoring for microservices architecture using Prometheus and Grafana.',
    date: 'December 5, 2023',
    readTime: '11 min read',
    tags: ['Monitoring', 'Prometheus', 'Grafana']
  }];
  return <section id="blog" className="py-20 bg-white dark:bg-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Technical Blog
            </h2>
            <div className="h-1 w-20 bg-[#2563eb] dark:bg-[#FF9900] mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">
              Sharing insights on DevOps, cloud architecture, and infrastructure
              automation
            </p>
          </div>
          <a href="https://medium.com/@pangarevaishnavi639" target="_blank" rel="noopener noreferrer" className="flex items-center mt-4 md:mt-0 text-[#2563eb] dark:text-[#FF9900] hover:underline">
            <span>View all articles</span>
            <ExternalLinkIcon size={16} className="ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <BookOpenIcon size={16} className="text-[#2563eb] dark:text-[#FF9900] mr-2" />
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {post.date} · {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded text-gray-700 dark:text-gray-300">
                      {tag}
                    </span>)}
                </div>
                <a href="#" className="inline-flex items-center text-sm text-[#2563eb] dark:text-[#FF9900] hover:underline">
                  Read article
                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};