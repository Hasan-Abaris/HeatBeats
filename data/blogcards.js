export const blogs = [
  {
    slug: 'aws-fargate-tutorial',
    title: 'AWS Fargate Tutorial: Container Management Made Easy',
    subtitle:
      'Learn how to deploy containers without managing servers using AWS Fargate.',
    author: 'John Doe',
    date: 'May 10, 2025',
    readTime: '8 min read',
    categories: ['Cloud Computing', 'AWS', 'DevOps'],
    videoUrl: 'https://www.youtube.com/embed/example',
    imageUrl: '/images/aws-fargate-banner.jpg',
    sections: [
      {
        heading: 'What is AWS Fargate?',
        content: 'AWS Fargate is a serverless compute engine for containers...',
      },
      {
        heading: 'Key Benefits',
        content: 'Fargate removes the need to provision and manage servers...',
      },
      // Add more sections...
    ],
    schedule: [
      { module: 'Module 1', topic: 'Fargate Overview', duration: '1 hour' },
      {
        module: 'Module 2',
        topic: 'Deploying Containers',
        duration: '2 hours',
      },
    ],
    cta: {
      title: 'Master AWS Fargate Today!',
      description: 'Join our AWS course to get hands-on experience.',
      buttonLabel: 'Enroll Now',
      buttonLink: '/courses/aws-certification',
    },
    comments: [
      {
        name: 'Reddy',
        avatar: '/images/avatar.png',
        date: 'Mar 29, 2019 at 5:39 am GMT',
        message:
          'It was an interesting article. But, I didn’t get how EKS will use Fargate as per your diagram and description.',
      },
    ],
  },
  // More blog entries...
];

export const sidebarData = [
  {
    title: 'Cloud Computing',
    links: [
      'AWS Fargate – A Compute Engine For ECS',
      'Introduction to AWS Lambda',
      'AWS S3 Basics',
    ],
  },
  {
    title: 'Artificial Intelligence',
    links: [
      'Machine Learning Overview',
      'Deep Learning Basics',
      'Natural Language Processing',
    ],
  },
  {
    title: 'DevOps',
    links: [
      'CI/CD Pipelines',
      'Containerization with Docker',
      'Kubernetes Essentials',
    ],
  },
  {
    title: 'AWS',
    links: ['AWS EC2 Overview', 'AWS IAM Fundamentals', 'AWS Networking'],
  },
];

export const cardDataByCategory = {
  'Cloud Computing': {
    title: 'Cloud Computing',
    topics: [
      'AWS Architect Certification Training (84 Blogs)',
      'AWS Development (7 Blogs)',
      'SFDC Administration Foundation (3 Blogs)',
      'Salesforce Admin and Dev Foundation (26 Blogs)',
    ],
    link: '/cloud-computing',
  },
  'Artificial Intelligence': {
    title: 'Artificial Intelligence',
    topics: [
      'Machine Learning Basics (45 Blogs)',
      'Deep Learning (30 Blogs)',
      'NLP Techniques (20 Blogs)',
      'Computer Vision (15 Blogs)',
    ],
    link: '/ai',
  },
  DevOps: {
    title: 'DevOps',
    topics: [
      'CI/CD Pipelines (25 Blogs)',
      'Containerization with Docker (40 Blogs)',
      'Kubernetes Basics (35 Blogs)',
      'Infrastructure as Code (30 Blogs)',
    ],
    link: '/devops',
  },
  AWS: {
    title: 'AWS',
    topics: [
      'AWS Lambda (40 Blogs)',
      'AWS EC2 (30 Blogs)',
      'AWS S3 (20 Blogs)',
      'AWS IAM (15 Blogs)',
    ],
    link: '/aws',
  },
};
export const recommendedVideos = [
  {
    title: 'Architecting in Cloud-III',
    src: 'https://www.youtube.com/embed/VIDEO_ID_1',
  },
  {
    title: 'AWS vs Google Cloud – Cloud Platform Compared',
    src: 'https://www.youtube.com/embed/VIDEO_ID_2',
  },
  {
    title: 'Power The Hadoop Cluster With AWS Cloud',
    src: 'https://www.youtube.com/embed/VIDEO_ID_3',
  },
];

export const recommendedBlogs = [
  {
    title: 'Salesforce Service Cloud – One Stop Solution For Customer Needs',
    img: '/images/blog/blog1.png',
  },
  {
    title: 'What is IoT (Internet of Things)? IoT Architecture Explained',
    img: '/images/blog/blog2.png',
  },
  {
    title: 'What is AWS: An Introduction to Amazon Web Services',
    img: '/images/blog/blog3.png',
  },
];
export const comments = [
  {
    name: 'Reddy',
    avatar: '/images/avatar.png',
    date: 'Mar 29, 2019 at 5:39 am GMT',
    message:
      'It was an interesting article. But, I didn’t get how EKS will use Fargate as per your diagram and description. Is Fargate a common mechanism for both EKS and ECS?',
  },
];
export const relatedPostSection = {
  introText:
    'Now, let’s go ahead and deploy a simple web application on Amazon ECS using AWS Fargate launch type.',
  relatedPostText: 'What Is Amazon EventBridge?',
  relatedPostLink: '#',
  footerText: 'AWS Fargate In Action',
};
