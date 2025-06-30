import { BookOpenIcon, ExternalLinkIcon } from 'lucide-react';

const blogPosts = [
  {
    title: 'Streamlined CI/CD : Deploying Jenkins on AWS EC2',
    excerpt: 'Introduction to setting up Jenkins pipelines on EC2 with best practices and automation.',
    date: 'December 19, 2023',
    readTime: '7 min read',
    tags: ['CI/CD', 'Jenkins', 'AWS'],
    href: 'https://medium.com/@pangarevaishnavi639/streamlined-ci-cd-deploying-jenkins-on-aws-ec2-4a4a72ad3e01'
  },
  {
    title: 'Efficient Cloud Resource Management by Automating GP2 to GP3 Conversion…',
    excerpt: 'Automating AWS storage optimization using CloudWatch metrics and Lambda functions.',
    date: 'February 5, 2024',
    readTime: '8 min read',
    tags: ['AWS', 'CloudWatch', 'Automation'],
    href: 'https://medium.com/@pangarevaishnavi639/efficient-cloud-resource-management-by-automating-gp2-to-gp3-conversion-2ffb19e387df'
  },
  {
    title: 'Stop Downtime Before It Happens: System Health Monitoring Made Easy',
    excerpt: 'Building a proactive monitoring and alerting system using shell scripting and Cron.',
    date: 'January 3, 2024',
    readTime: '9 min read',
    tags: ['Monitoring', 'Prometheus', 'Alerting'],
    href: 'https://medium.com/@pangarevaishnavi639/stop-downtime-before-it-happens-system-health-monitoring-made-easy-725aa3fc27c4'
  },
  {
    title: 'Building Smarter Models: The Role of Machine Learning Pipelines',
    excerpt: 'A step-by-step breakdown of implementing ML pipelines for reliable model deployment.',
    date: 'January 28, 2025',
    readTime: '10 min read',
    tags: ['MLOps', 'Pipelines', 'ML'],
    href: 'https://medium.com/@pangarevaishnavi639/building-smarter-models-the-role-of-machine-learning-pipelines-6c86bfbfc63b'
  },
  {
    title: 'DOCKER IN DOCKER',
    excerpt: 'A guide on using Docker inside Docker for advanced CI/CD setups and test environments.',
    date: 'July 8, 2023',
    readTime: '4 min read',
    tags: ['Docker', 'CI/CD', 'Containers'],
    href: 'https://medium.com/@pangarevaishnavi639/docker-in-docker-8291178c9aa4'
  },
  {
    title: 'OpenShift in Action: How It Transforms Workflow',
    excerpt: 'Exploring OpenShift capabilities in orchestrating container workloads and team collaboration.',
    date: 'September 10, 2023',
    readTime: '5 min read',
    tags: ['OpenShift', 'Kubernetes', 'Containers'],
    href: 'https://medium.com/@pangarevaishnavi639/openshift-in-action-how-it-transforms-workflow-ef5f5bc513b8'
  }
];

export default function Blog() {
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