const allCourses = {
  courses: [
    // Cloud Computing
    {
      title: 'AWS Certification Training',
      topic: 'Cloud Computing',
      learners: '181k',
      rating: 4.0,
      reviews: 67950,
      image: '/images/AWS.svg',
      completionRate: '89%',
      nextBatch: 'In 8 days - 12th May',
      topics: ['Intro to AWS', 'IAM in AWS', 'Amazon EC2'],
      description: `Edureka's AWS Solution Architect Certification Training prepares professionals to handle complex AWS infrastructure.`,
    },
    {
      title: 'Salesforce Training Course',
      topic: 'Cloud Computing',
      learners: '48k',
      rating: 4.7,
      reviews: 16750,
      image: '/images/Salesforce.svg',
      completionRate: '92%',
      nextBatch: 'In 5 days - 9th May',
      topics: ['Salesforce Basics', 'App Builder Tools', 'Admin Interface'],
      description: `Edureka's Salesforce online course is designed to teach CRM administration & customization on Salesforce.`,
    },
    {
      title: 'Microsoft Certified: Azure Administrator',
      topic: 'Cloud Computing',
      learners: '10k',
      rating: 4.2,
      reviews: 3500,
      image: '/images/Azure.svg',
      completionRate: '86%',
      nextBatch: 'In 6 days - 10th May',
      topics: ['Azure Management', 'VMs & Networking', 'Resource Groups'],
      description: `Edureka's Azure Administrator certification training helps manage Azure subscriptions, services, and storage.`,
    },
    {
      title: 'Google Cloud Professional Architect',
      topic: 'Cloud Computing',
      learners: '22k',
      rating: 4.3,
      reviews: 8200,
      image: '/images/googlecloud.svg',
      completionRate: '88%',
      nextBatch: 'In 4 days - 7th May',
      topics: ['GCP Fundamentals', 'Compute Engine', 'Cloud Storage'],
      description: `Master Google Cloud’s core services and architectures to pass the Professional Cloud Architect exam.`,
    },
    {
      title: 'IBM Cloud Foundations',
      topic: 'Cloud Computing',
      learners: '8k',
      rating: 4.1,
      reviews: 2300,
      image: '/images/IBM.svg',
      completionRate: '85%',
      nextBatch: 'In 10 days - 15th May',
      topics: ['IBM Cloud Overview', 'Watson AI', 'Cloud Security'],
      description: `Get hands-on with IBM Cloud’s IaaS, PaaS, and AI services in this beginner-friendly course.`,
    },

    // DevOps
    {
      title: 'Microsoft Azure DevOps Course Training',
      topic: 'DevOps',
      learners: '5k',
      rating: 4.5,
      reviews: 1850,
      image: '/images/Azure.svg',
      completionRate: '90%',
      nextBatch: 'In 7 days - 11th May',
      topics: ['CI/CD in Azure', 'Repos & Pipelines', 'Test Plans'],
      description: `Edureka's Azure DevOps training covers CI/CD pipelines, Git repos, testing, and release management.`,
    },
    {
      title: 'Docker for DevOps: A Complete Guide',
      topic: 'DevOps',
      learners: '12k',
      rating: 4.6,
      reviews: 5400,
      image: '/images/Docker.svg',
      completionRate: '89%',
      nextBatch: 'In 9 days - 13th May',
      topics: ['Docker Basics', 'Container Orchestration', 'CI/CD with Docker'],
      description: `Learn how to use Docker containers for DevOps automation, continuous integration, and testing.`,
    },
    {
      title: 'Kubernetes for DevOps: Scaling Applications',
      topic: 'DevOps',
      learners: '15k',
      rating: 4.7,
      reviews: 6700,
      image: '/images/Kubernetes.svg',
      completionRate: '91%',
      nextBatch: 'In 4 days - 7th May',
      topics: [
        'Kubernetes Architecture',
        'Pods & Services',
        'Scaling in Kubernetes',
      ],
      description: `Master Kubernetes to automate deployment, scaling, and management of containerized applications.`,
    },

    // Artificial Intelligence
    {
      title: 'AI for Beginners',
      topic: 'Artificial Intelligence',
      learners: '25k',
      rating: 4.6,
      reviews: 5800,
      image: '/images/AI.svg',
      completionRate: '87%',
      nextBatch: 'In 3 days - 6th May',
      topics: ['Neural Networks', 'Machine Learning', 'AI Tools'],
      description: `A practical beginner course that introduces key AI concepts and tools used in the industry.`,
    },
    {
      title: 'Deep Learning with TensorFlow',
      topic: 'Artificial Intelligence',
      learners: '32k',
      rating: 4.8,
      reviews: 7400,
      image: '/images/TensorFlow.svg',
      completionRate: '90%',
      nextBatch: 'In 6 days - 10th May',
      topics: ['Deep Learning', 'TensorFlow Basics', 'Neural Networks'],
      description: `An advanced course focused on deep learning techniques using TensorFlow to build AI models.`,
    },
    {
      title: 'Natural Language Processing with Python',
      topic: 'Artificial Intelligence',
      learners: '15k',
      rating: 4.7,
      reviews: 6100,
      image: '/images/NLP.svg',
      completionRate: '88%',
      nextBatch: 'In 8 days - 12th May',
      topics: ['Text Classification', 'Sentiment Analysis', 'NLP with Python'],
      description: `A hands-on course to master NLP using Python and popular libraries like NLTK and SpaCy.`,
    },

    // BI and Visualization
    {
      title: 'Power BI Certification Course',
      topic: 'BI and Visualization',
      learners: '30k',
      rating: 4.8,
      reviews: 7400,
      image: '/images/PowerBI.svg',
      completionRate: '91%',
      nextBatch: 'In 2 days - 5th May',
      topics: ['Power BI Desktop', 'DAX Functions', 'Data Modeling'],
      description: `Master data visualization and business analytics using Power BI tools and dashboards.`,
    },
    {
      title: 'Tableau for Data Visualization',
      topic: 'BI and Visualization',
      learners: '40k',
      rating: 4.9,
      reviews: 8500,
      image: '/images/Tableau.svg',
      completionRate: '92%',
      nextBatch: 'In 5 days - 9th May',
      topics: ['Tableau Basics', 'Creating Dashboards', 'Data Blending'],
      description: `Learn to create stunning data visualizations and reports using Tableau.`,
    },

    // Data Science
    {
      title: 'Data Science with Python',
      topic: 'Data Science',
      learners: '42k',
      rating: 4.5,
      reviews: 12900,
      image: '/images/DataScience.svg',
      completionRate: '88%',
      nextBatch: 'In 9 days - 13th May',
      topics: ['Pandas & NumPy', 'Visualization', 'ML Models'],
      description: `Hands-on course teaching data analysis, statistical modeling, and machine learning using Python.`,
    },
    {
      title: 'Machine Learning with Python',
      topic: 'Data Science',
      learners: '35k',
      rating: 4.7,
      reviews: 9800,
      image: '/images/MachineLearning.svg',
      completionRate: '90%',
      nextBatch: 'In 7 days - 11th May',
      topics: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Model Evaluation',
      ],
      description: `Learn machine learning algorithms and techniques to build powerful predictive models.`,
    },

    // Cyber Security
    {
      title: 'Cyber Security Certification Course',
      topic: 'Cyber Security',
      learners: '19k',
      rating: 4.4,
      reviews: 4600,
      image: '/images/CyberSecurity.svg',
      completionRate: '89%',
      nextBatch: 'In 6 days - 10th May',
      topics: ['Network Security', 'Ethical Hacking', 'Risk Management'],
      description: `Comprehensive security course covering cyber threats, countermeasures, and compliance.`,
    },
    {
      title: 'Ethical Hacking for Beginners',
      topic: 'Cyber Security',
      learners: '28k',
      rating: 4.6,
      reviews: 5700,
      image: '/images/EthicalHacking.svg',
      completionRate: '92%',
      nextBatch: 'In 8 days - 12th May',
      topics: ['Penetration Testing', 'Kali Linux', 'Web Application Security'],
      description: `A beginner’s guide to ethical hacking techniques and tools used by professionals to protect systems.`,
    },

    // HigherEd
    {
      title: 'Master’s Program in Cloud & DevOps',
      topic: 'HigherEd',
      learners: '4k',
      rating: 4.6,
      reviews: 1100,
      image: '/images/HigherEd.svg',
      completionRate: '93%',
      nextBatch: 'In 14 days - 19th May',
      topics: ['Cloud Foundations', 'DevOps Tools', 'Project Work'],
      description: `An intensive master’s program designed for aspiring cloud architects and DevOps engineers.`,
    },
    {
      title: 'Postgraduate Program in Data Science & AI',
      topic: 'HigherEd',
      learners: '3k',
      rating: 4.7,
      reviews: 800,
      image: '/images/DataScienceAI.svg',
      completionRate: '95%',
      nextBatch: 'In 20 days - 25th May',
      topics: ['Data Science Foundations', 'AI Models', 'Capstone Project'],
      description: `Postgraduate program aimed at advanced learners in data science, covering statistical modeling and AI applications.`,
    },
  ],

  faqs: [
    // Cloud Computing FAQs
    {
      topic: 'Cloud Computing',
      question: 'How do you define cloud computing?',
      answer:
        'Cloud computing is delivering computing services over the internet, such as servers, storage, databases, networking, software, and analytics, without direct active management from the user.',
    },
    {
      topic: 'Cloud Computing',
      question: 'What are beginner courses for cloud computing?',
      answer:
        'Beginner-friendly options for cloud computing include the AWS Cloud Practitioner certification, Azure Fundamentals, and Google Cloud Essentials. These courses introduce fundamental concepts of cloud platforms, their services, and deployment models.',
    },
    {
      topic: 'Cloud Computing',
      question: 'What certifications are best for intermediate learners?',
      answer:
        'For intermediate learners, certifications like AWS Solutions Architect Associate, Azure Administrator, and Google Cloud Architect are great choices. These certifications focus on more advanced topics such as deploying and managing cloud infrastructure, ensuring security, and optimizing cloud services.',
    },

    // DevOps FAQs
    {
      topic: 'DevOps',
      question: 'What is DevOps?',
      answer:
        'DevOps is a combination of cultural philosophies, practices, and tools that increase an organization’s ability to deliver applications and services at high velocity. It involves collaboration between development and IT operations teams to automate and streamline software delivery and infrastructure management.',
    },
    {
      topic: 'DevOps',
      question: 'What tools are essential for DevOps?',
      answer:
        'Popular DevOps tools include Jenkins for continuous integration/continuous deployment (CI/CD), Docker for containerization, Kubernetes for orchestration, Terraform for infrastructure as code, and Git for version control. These tools automate various stages of the software development lifecycle and enable continuous delivery.',
    },
    {
      topic: 'DevOps',
      question: 'What is the role of a DevOps engineer?',
      answer:
        'A DevOps engineer is responsible for facilitating collaboration between development and operations teams. They automate software development processes, monitor performance, manage infrastructure, and ensure that the software delivery pipeline is efficient, fast, and reliable.',
    },

    // Artificial Intelligence FAQs
    {
      topic: 'Artificial Intelligence',
      question: 'What is artificial intelligence?',
      answer:
        'Artificial intelligence (AI) refers to the simulation of human intelligence in machines. These machines are programmed to mimic human behaviors such as learning, reasoning, problem-solving, and decision-making. AI includes subfields like machine learning, natural language processing, and robotics.',
    },
    {
      topic: 'Artificial Intelligence',
      question: 'How do machine learning and AI differ?',
      answer:
        'Machine learning (ML) is a subset of AI that focuses on creating algorithms that allow computers to learn from data and improve their performance over time. While AI encompasses a broader scope of intelligence, including logic and reasoning, ML specifically deals with data-driven decision-making.',
    },
    {
      topic: 'Artificial Intelligence',
      question: 'What are some applications of AI?',
      answer:
        'AI has a wide range of applications across various industries, such as self-driving cars, predictive analytics, voice assistants (like Siri and Alexa), personalized recommendations on platforms like Netflix, fraud detection, and customer service chatbots.',
    },

    // BI and Visualization FAQs
    {
      topic: 'BI and Visualization',
      question: 'What is Business Intelligence (BI)?',
      answer:
        'Business Intelligence refers to the technologies, strategies, and practices used to collect, analyze, and present business data. BI helps organizations make informed decisions by providing actionable insights through data visualization, reporting, and dashboards.',
    },
    {
      topic: 'BI and Visualization',
      question: 'What are some popular BI tools?',
      answer:
        'Some of the most popular Business Intelligence tools include Microsoft Power BI, Tableau, QlikView, and Looker. These tools allow users to create reports, dashboards, and visualizations from various data sources to improve decision-making.',
    },
    {
      topic: 'BI and Visualization',
      question: 'How do data visualization and BI complement each other?',
      answer:
        'Data visualization is a key component of BI, helping to present complex data in an intuitive, easy-to-understand graphical format. By visualizing data, BI tools make it easier for users to spot trends, outliers, and patterns that inform business strategies.',
    },

    // Data Science FAQs
    {
      topic: 'Data Science',
      question: 'What is Data Science?',
      answer:
        'Data Science is an interdisciplinary field that uses scientific methods, algorithms, and systems to extract insights and knowledge from structured and unstructured data. Data science involves statistics, machine learning, data mining, and big data analytics.',
    },
    {
      topic: 'Data Science',
      question: 'What skills are required for a data scientist?',
      answer:
        'Data scientists typically need skills in programming languages like Python and R, knowledge of data analysis and visualization tools, familiarity with machine learning algorithms, and expertise in statistics and data cleaning techniques. Additionally, data scientists must understand data modeling and data wrangling.',
    },
    {
      topic: 'Data Science',
      question:
        'What is the difference between data science and data analytics?',
      answer:
        'While both data science and data analytics deal with data, data science is more focused on creating models, algorithms, and predictions based on data, whereas data analytics mainly focuses on interpreting historical data to inform business decisions.',
    },

    // Cyber Security FAQs
    {
      topic: 'Cyber Security',
      question: 'What is Cyber Security?',
      answer:
        'Cyber security is the practice of protecting systems, networks, and programs from digital attacks, theft, or damage. It includes safeguarding information systems from unauthorized access, data breaches, and other types of malicious activities.',
    },
    {
      topic: 'Cyber Security',
      question: 'What are some common types of cyber threats?',
      answer:
        'Common cyber threats include malware (viruses, ransomware), phishing attacks, denial-of-service (DoS) attacks, man-in-the-middle attacks, and insider threats. These threats can compromise sensitive data, steal identities, or cause significant disruptions to operations.',
    },
    {
      topic: 'Cyber Security',
      question: 'How can organizations prevent cyber attacks?',
      answer:
        'Organizations can prevent cyber attacks by implementing strong security measures, such as firewalls, encryption, multi-factor authentication, regular software updates, employee training, and vulnerability assessments to detect and address potential security flaws.',
    },

    // HigherEd FAQs
    {
      topic: 'HigherEd',
      question: 'What is a Master’s program in Cloud & DevOps?',
      answer:
        'A Master’s program in Cloud & DevOps is an advanced academic program designed to teach the skills needed to architect cloud-based systems and implement DevOps practices. It covers topics like cloud services, automation, continuous integration/continuous deployment (CI/CD), and DevOps tools and workflows.',
    },
    {
      topic: 'HigherEd',
      question: 'What is the difference between a certification and a degree?',
      answer:
        'A certification is typically a short-term credential earned by completing a specific course or passing an exam in a particular field, while a degree is an academic qualification that takes longer to complete and covers a broader curriculum. A degree is often more comprehensive, while certifications focus on specific skills.',
    },
    {
      topic: 'HigherEd',
      question:
        'What career opportunities exist after completing a Master’s in Cloud & DevOps?',
      answer:
        'Graduates of a Master’s program in Cloud & DevOps can pursue careers as cloud architects, DevOps engineers, system administrators, cloud security specialists, and software engineers. These roles are in high demand due to the increasing adoption of cloud technologies and DevOps practices in businesses.',
    },
  ],
  posts: [
    // AI and IoT Posts
    {
      topic: 'Artificial Intelligence',
      title: 'AI and IoT in FIFA: Smart Sports',
      date: 'September 3rd, 2024',
      image: '/images/AI.svg',
      link: '#',
      description:
        'Explore how AI and the Internet of Things (IoT) are revolutionizing sports like FIFA, enhancing player performance and fan experiences.',
    },
    {
      topic: 'Artificial Intelligence',
      title: 'AI in Healthcare: Transforming Diagnostics',
      date: 'May 2nd, 2025',
      image: '/images/HealthcareAI.svg',
      link: '#',
      description:
        'A deep dive into how AI is used in healthcare for diagnostics, patient care, and streamlining hospital operations.',
    },

    // Cloud Computing Posts
    {
      topic: 'Cloud Computing',
      title: 'Cloud Engineer Salary: All You Need To Know',
      date: 'April 23rd, 2025',
      image: '/images/Cloud.svg',
      link: '#',
      description:
        'A comprehensive guide to cloud engineering salaries, the skills required, and the career prospects in the cloud computing industry.',
    },
    {
      topic: 'Cloud Computing',
      title: 'Hybrid Cloud Strategies for 2025',
      date: 'January 10th, 2025',
      image: '/images/HybridCloud.svg',
      link: '#',
      description:
        'How hybrid cloud solutions are evolving in 2025, and why businesses are increasingly adopting hybrid strategies for greater flexibility.',
    },

    // DevOps Posts
    {
      topic: 'DevOps',
      title: 'AWS CodeCommit – A New Home For Your Repository',
      date: 'April 8th, 2025',
      image: '/images/AWS.svg',
      link: '#',
      description:
        'A look into AWS CodeCommit and its role in improving version control and repository management within the DevOps lifecycle.',
    },
    {
      topic: 'DevOps',
      title: 'Getting Started with Azure DevOps',
      date: 'March 15th, 2025',
      image: '/images/Azure.svg',
      link: '#',
      description:
        'An introduction to Azure DevOps services and tools that help developers automate the software delivery pipeline and implement continuous integration.',
    },

    // BI and Visualization Posts
    {
      topic: 'BI and Visualization',
      title: 'Data-Driven Decisions with Power BI: A Beginner’s Guide',
      date: 'March 10th, 2025',
      image: '/images/PowerBI.svg',
      link: '#',
      description:
        'A beginner-friendly guide on how to use Microsoft Power BI to make informed, data-driven business decisions using visualizations and dashboards.',
    },

    // Data Science Posts
    {
      topic: 'Data Science',
      title: 'Data Science Careers: Pathways and Opportunities',
      date: 'February 20th, 2025',
      image: '/images/DataScience.svg',
      link: '#',
      description:
        'An in-depth look at various career paths in data science, including roles such as data scientist, data engineer, and machine learning engineer.',
    },

    // Cyber Security Posts
    {
      topic: 'Cyber Security',
      title: 'Top 5 Cyber Security Best Practices for 2025',
      date: 'January 25th, 2025',
      image: '/images/CyberSecurity.svg',
      link: '#',
      description:
        'Top tips for enhancing your cyber security posture in 2025, including securing endpoints, utilizing encryption, and creating strong authentication systems.',
    },

    // HigherEd Posts
    {
      topic: 'HigherEd',
      title: 'How to Choose the Right Master’s Program for Cloud Engineering',
      date: 'February 5th, 2025',
      image: '/images/CloudMaster.svg',
      link: '#',
      description:
        'A guide to selecting the right graduate program in cloud engineering, covering factors like curriculum, faculty, and career support.',
    },
  ],

  categories: [
    'Artificial Intelligence',
    'BI and Visualization',
    'Cloud Computing',
    'DevOps',
    'Data Science',
    'Cyber Security',
    'HigherEd',
  ],
};

export default allCourses;
