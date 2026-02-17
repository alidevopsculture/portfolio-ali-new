
import { Project, Skill, CaseStudy, HobbyItem } from './types';

export const TECH_STACK = ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Linux'];

export const SKILLS: Skill[] = [
  { name: 'AWS Cloud', level: 'Expert' },
  { name: 'Kubernetes', level: 'Expert' },
  { name: 'Docker', level: 'Expert' },
  { name: 'Terraform', level: 'Advanced' },
  { name: 'GitHub Actions', level: 'Expert' },
  { name: 'Linux Admin', level: 'Expert' },
  { name: 'Bash Scripting', level: 'Advanced' },
  { name: 'Python/Node.js', level: 'Intermediate' },
];

export const PROJECTS: Project[] = [
  {
    id: 'k8s-migration',
    title: 'Kubernetes Minikube Migration',
    category: 'Orchestration',
    subtitle: 'Container Orchestration Strategy',
    description: 'Migration of legacy monolithic applications to a containerized microservices architecture using Kubernetes.',
    image: 'https://assets.community.aws/a/2caY3iEtqpnUqDZwBKXlwnN96OO/Kube.webp',
    tags: ['Kubernetes', 'Docker', 'Helm', 'Minikube'],
    challenge: 'The client faced frequent downtime during traffic spikes and a 45-minute manual release process for their monolithic backend.',
    solution: 'Engineered a migration path to Kubernetes, utilizing Helm charts for configuration management and Horizontal Pod Autoscalers for dynamic load handling.',
    results: [
      'Zero downtime during migration',
      '90% reduction in deployment time',
      'Automated scaling for 5x traffic spikes'
    ]
  },
  {
    id: 'ai-ecommerce',
    title: 'AI-Powered E-Commerce Platform',
    category: 'Cloud Architecture',
    subtitle: 'Serverless Retail Architecture',
    description: 'Scalable cloud infrastructure for an AI-driven retail platform with global delivery capabilities.',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240409181759/dfd-level-0-(1).webp',
    tags: ['AWS', 'Next.js', 'PostgreSQL', 'Redis'],
    challenge: 'Need for high-performance recommendations and fast response times across different global regions for "Royal Digital Mart".',
    solution: 'Built a multi-region serverless API layer using AWS Lambda Edge and integrated Gemini for product metadata analysis.',
    results: [
      'Sub-100ms response times globally',
      '40% higher conversion through AI search',
      'Architecture supports 1M+ monthly users'
    ]
  },
  {
    id: 'cicd-automation',
    title: 'CI/CD Pipeline Automation',
    category: 'DevOps',
    subtitle: 'Enterprise Delivery Automation',
    description: 'Enterprise-grade automation pipelines reducing deployment time by 70% while ensuring code quality.',
    image: 'https://civo-com-assets.ams3.digitaloceanspaces.com/content_images/2585.blog.png?1704705311',
    tags: ['GitHub Actions', 'Jenkins', 'SonarQube'],
    challenge: 'Development teams were blocked by manual approvals and fragile Jenkins pipelines that broke 30% of the time.',
    solution: 'Standardized on GitHub Actions with reusable workflow templates and integrated automated security scanning (SAST/DAST).',
    results: [
      'Eliminated manual gatekeeping',
      '70% faster time-to-market',
      'Zero security leaks in production'
    ]
  },
  {
    id: 'aws-infra',
    title: 'AWS Infrastructure Setup',
    category: 'Infrastructure',
    subtitle: 'High-Availability Foundation',
    description: 'Full-stack AWS setup with Multi-AZ deployment, VPC peering, and automated backups.',
    image: 'https://www.prosperops.com/wp-content/uploads/2024/07/7.-AWS-Global-Infra_V1.webp',
    tags: ['AWS', 'CloudFormation', 'Route53'],
    challenge: 'Legacy infrastructure was running on a single-point-of-failure setup without any disaster recovery plan.',
    solution: 'Implemented a 3-tier Multi-AZ architecture with automated RDS snapshots and an immutable infrastructure approach.',
    results: [
      '15-minute Recovery Time Objective (RTO)',
      '100% infrastructure reproducibility',
      'Enhanced security with private subnets'
    ]
  },
  {
    id: 'terraform-iac',
    title: 'Terraform IaC Framework',
    category: 'Automation',
    subtitle: 'Multi-Cloud Management',
    description: 'Standardized Infrastructure as Code modules for multi-environment deployments across AWS and Azure.',
    image: 'https://d2908q01vomqb2.cloudfront.net/7719a1c782a1ba91c031a682a0a2f8658209adbf/2024/03/28/terraform-cicd-and-testing-on-aws-hero-image.png',
    tags: ['Terraform', 'HCL', 'Azure'],
    challenge: 'Infrastructure drift across Dev, Staging, and Prod was causing "works on my machine" issues for DevOps.',
    solution: 'Created a library of modular Terraform HCL scripts that use state-locking and remote backends for consistent deployments.',
    results: [
      'Eliminated manual config drift',
      'Environment spin-up in < 10 mins',
      'Audit logs for every infra change'
    ]
  },
  {
    id: 'bash-scripts',
    title: 'Bash Automation Scripts',
    category: 'Utilities',
    subtitle: 'System Administration Toolkit',
    description: 'Suite of custom system administration scripts for automated server maintenance and log analysis.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1200',
    tags: ['Bash', 'Shell', 'Linux'],
    challenge: 'Operations team was spending 10+ hours a week on repetitive log rotation and cleanup tasks.',
    solution: 'Developed a collection of robust, error-handling Bash scripts scheduled via Cron for self-healing server maintenance.',
    results: [
      'Reclaimed 40 hours of monthly labor',
      'Proactive disk space monitoring',
      'Consistent log retention compliance'
    ]
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'k8s-migration-deep-dive',
    title: 'Kubernetes Minikube Migration - High Availability & Auto-Scaling',
    subtitle: 'Scalability Transformation',
    description: 'Moving from manual VM-based deployments to a fully orchestrated Kubernetes cluster managed via GitOps.',
    image: 'https://miro.medium.com/0*jRx6cpWJWo4byWud.png',
    tags: ['Kubernetes', 'Auto-scaling', 'High Availability'],
    challenge: 'The client faced frequent downtime during traffic spikes and a 45-minute manual release process.',
    solution: 'Implemented a multi-node Kubernetes cluster with Horizontal Pod Autoscalers (HPA) and automated CI/CD.',
    results: [
      '99.99% Uptime achieved',
      'Release time reduced to 4 minutes',
      'Infrastructure costs optimized by 30%'
    ]
  },
  {
    id: 'ai-ecommerce-deep-dive',
    title: 'AI-Driven Development for E-Commerce - Royal Digital Mart',
    subtitle: 'Intelligent Retail',
    description: 'Leveraging AI APIs and serverless architecture to provide personalized shopping experiences at scale.',
    image: 'https://pixelplex.io/wp-content/uploads/2023/09/artificial-intelligence-in-ecommerce-main-1600.jpg',
    tags: ['Cloud Arch', 'AI Integration', 'Serverless'],
    challenge: 'Need for high-performance recommendations and fast response times across different global regions.',
    solution: 'Built a serverless API layer using AWS Lambda and integrated Gemini for product metadata analysis.',
    results: [
      '50% increase in user retention',
      'Sub-200ms API response times globally',
      'Seamless scaling for Black Friday peaks'
    ]
  },
];

export const HOBBIES: HobbyItem[] = [
  { id: '1', title: 'Minimalist Branding', type: 'Graphic Design', image: 'https://simplified.com/usetldr/971789/thumb/8f9e42ab-db1a-41f9-8b23-ee9d63c61d31.jpg' },
  { id: '2', title: 'Lucknow Architecture', type: 'Photography', image: 'https://media.istockphoto.com/id/1085810086/photo/imaambara.jpg?s=612x612&w=0&k=20&c=zHofLzQ4m0DXTeVYtjP3qqWgrTETpnxX54ZouH8y7Lc=' },
  { id: '3', title: 'Social Media Branding', type: 'Graphic Design', image: 'https://img.freepik.com/premium-psd/ecommerce-webinar-social-media-post-psd_1259336-532.jpg?w=360' },
  { id: '4', title: 'Janeshwar Mishra Park', type: 'Photography', image: 'https://nottinghamtrends.com/wp-content/uploads/2025/11/janeshwar-mishra-park-gate-no-5.jpg' },
  { id: '5', title: 'Flowers', type: 'Graphic Design', image: 'https://picsum.photos/seed/design3/600/800' },
  { id: '6', title: 'Streetograph', type: 'Photography', image: 'img/home/IMG_6594.JPG' },
  { id: '6', title: 'Streetograph', type: 'Photography', image: 'img/home/IMG_3597.jpg' },
  { id: '6', title: 'Streetograph', type: 'Photography', image: 'img/home/IMG_6588 2.jpg' },
  { id: '6', title: 'Streetograph', type: 'Photography', image: 'img/home/IMG_3417.JPG' },
  { id: '6', title: 'Streetograph', type: 'Photography', image: 'img/home/IMG_3079.JPG' },
  { id: '6', title: 'Streetograph', type: 'Photography', image: 'img/home/IMG_3077.JPG' },
  { id: '6', title: 'Streetograph', type: 'Photography', image: 'img/home/IMG_3075.JPG' },
  { id: '6', title: 'Streetograph', type: 'Photography', image: 'img/home/4F94F2FA-A7B5-4822-AAC6-0E4C0E7F95ED.JPG' },
  { id: '6', title: 'Streetograph', type: 'Photography', image: 'img/home/7D72A556-DFF3-4097-8B54-25A557DFBF76.JPG' },
  { id: '6', title: 'Streetograph', type: 'Photography', image: 'img/home/7753061B-0BFA-4E41-BF28-7675F1831443.JPG' },
];
