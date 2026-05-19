export type ServiceCategory = "Solutions" | "Workshops" | "Trainings";

export interface SubTopic {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export const servicesData: Record<ServiceCategory, SubTopic[]> = {
  Solutions: [
    {
      id: "ai-software-solutions",
      title: "AI Software Solutions & Consulting",
      description: "End-to-end artificial intelligence implementation, from strategic consulting to deploying robust, scalable machine learning architectures tailored for enterprise needs.",
      features: ["Custom AI Architecture", "Enterprise Integration", "Scalable Deployment", "Performance Monitoring"]
    },
    {
      id: "generative-ai",
      title: "Generative AI",
      description: "Harness the power of foundational models. We build custom LLMs, RAG pipelines, and automated content systems that seamlessly integrate into your current operations.",
      features: ["Large Language Models (LLMs)", "Retrieval-Augmented Generation (RAG)", "Automated Workflows", "Custom Fine-tuning"]
    },
    {
      id: "reinforcement-learning",
      title: "Reinforcement Learning",
      description: "Develop intelligent agents capable of complex decision-making in dynamic environments, optimizing supply chains, robotics, and algorithmic trading.",
      features: ["Deep Q-Networks", "Policy Gradient Methods", "Simulation Environments", "Reward Optimization"]
    },
    {
      id: "probabilistic-models",
      title: "Probabilistic Models",
      description: "Leverage uncertainty. We design Bayesian networks and Markov models to provide robust, explainable predictions in high-stakes industries.",
      features: ["Bayesian Inference", "Markov Decision Processes", "Risk Assessment", "Uncertainty Quantification"]
    },
    {
      id: "supervised-learning",
      title: "Supervised Learning",
      description: "High-precision predictive modeling using structured data. Ideal for classification, regression, and time-series forecasting across financial and medical domains.",
      features: ["Predictive Analytics", "Image Classification", "Time-Series Forecasting", "Feature Engineering"]
    },
    {
      id: "combinatorial-optimization",
      title: "Combinatorial Optimization & Search",
      description: "Solving the unsolvable. We apply advanced heuristics and exact algorithms to tackle complex routing, scheduling, and resource allocation problems.",
      features: ["Resource Allocation", "Route Optimization", "Scheduling Algorithms", "Heuristic Search"]
    }
  ],
  Workshops: [
    {
      id: "use-case-identification",
      title: "Use Case Identification & Assessment",
      description: "A collaborative workshop to identify high-impact AI opportunities within your organization. We evaluate feasibility, ROI, and technical readiness.",
      features: ["ROI Analysis", "Feasibility Studies", "Opportunity Mapping", "Risk Evaluation"]
    },
    {
      id: "ai-strategy",
      title: "AI Strategy Workshops",
      description: "Develop a comprehensive roadmap for AI adoption. Align technical capabilities with business objectives to create a sustainable competitive advantage.",
      features: ["Roadmap Development", "Executive Alignment", "Market Positioning", "Technology Assessment"]
    },
    {
      id: "product-ideation",
      title: "Product Ideation",
      description: "Brainstorm and conceptualize AI-driven products. We bridge the gap between user needs and cutting-edge machine learning capabilities.",
      features: ["User-Centric Design", "Rapid Prototyping", "Feature Prioritization", "Market Validation"]
    },
    {
      id: "technical-planning",
      title: "Technical Planning",
      description: "Translate high-level strategies into actionable engineering blueprints. Define architectures, data pipelines, and deployment strategies.",
      features: ["Architecture Blueprinting", "Data Pipeline Design", "Infrastructure Selection", "Security Planning"]
    },
    {
      id: "team-collaboration",
      title: "Team Collaboration Workshops",
      description: "Foster a culture of cross-functional innovation. Bridge the gap between data scientists, engineers, and product managers.",
      features: ["Cross-functional Alignment", "Agile Methodologies", "Communication Frameworks", "Knowledge Sharing"]
    }
  ],
  Trainings: [
    {
      id: "ai-trainings",
      title: "AI Trainings",
      description: "Comprehensive bootcamps covering the fundamentals of artificial intelligence, neural networks, and modern deep learning frameworks.",
      features: ["Deep Learning Fundamentals", "PyTorch & TensorFlow", "Model Training", "Evaluation Metrics"]
    },
    {
      id: "software-design",
      title: "Software Design",
      description: "Learn to architect scalable, maintainable software systems designed to support data-intensive AI workloads.",
      features: ["Design Patterns", "Microservices", "API Development", "System Scalability"]
    },
    {
      id: "rl-training",
      title: "Reinforcement Learning",
      description: "Advanced training in building intelligent agents. From basic Q-learning to state-of-the-art proximal policy optimization.",
      features: ["Q-Learning", "Actor-Critic Methods", "Environment Design", "Hyperparameter Tuning"]
    },
    {
      id: "ml-systems",
      title: "Machine Learning Systems",
      description: "End-to-end ML lifecycle management. Learn to build, test, and deploy robust machine learning pipelines in production.",
      features: ["MLOps", "Model Registry", "A/B Testing", "Continuous Integration"]
    },
    {
      id: "devops-training",
      title: "DevOps Training",
      description: "Master the tools and practices required to automate infrastructure, streamline deployments, and ensure high availability.",
      features: ["CI/CD Pipelines", "Containerization (Docker)", "Kubernetes", "Infrastructure as Code"]
    },
    {
      id: "cloud-architecture",
      title: "Cloud Architecture",
      description: "Design secure, scalable cloud environments tailored for AI applications on AWS, Google Cloud, or Azure.",
      features: ["Serverless Computing", "Cloud Storage", "Identity & Access Management", "Cost Optimization"]
    }
  ]
};
