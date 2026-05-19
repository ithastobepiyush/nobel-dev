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
      id: "generative-ai-enterprise-solutions",
      title: "Generative AI & Enterprise Solutions",
      description: "We provide end-to-end artificial intelligence implementation, specializing in integrating foundational models into enterprise workflows. By building custom Large Language Models (LLMs), highly optimized Retrieval-Augmented Generation (RAG) pipelines, and automated content generation systems, we transform your raw data into actionable intelligence. Our strategic consulting ensures that these robust, scalable machine learning architectures are perfectly tailored to meet your specific business requirements, driving unparalleled efficiency and innovation.",
      features: ["Custom LLMs & RAG Pipelines", "Enterprise System Integration", "Scalable AI Architecture", "Automated Workflows"]
    },
    {
      id: "advanced-predictive-modeling",
      title: "Advanced Predictive Modeling & Analytics",
      description: "Leverage the combined power of supervised learning and probabilistic modeling to extract high-precision insights from complex, structured datasets. We design sophisticated Bayesian networks and predictive algorithms that excel in classification, regression, and time-series forecasting. By rigorously quantifying uncertainty and assessing risk, our models provide robust, highly explainable predictions that empower high-stakes decision-making in critical industries such as finance and healthcare.",
      features: ["Bayesian Inference & Risk Assessment", "Time-Series Forecasting", "Explainable Predictive Analytics", "Uncertainty Quantification"]
    },
    {
      id: "autonomous-systems-optimization",
      title: "Autonomous Systems & Optimization",
      description: "Tackle your most complex operational challenges by deploying intelligent agents and advanced heuristic algorithms. Combining deep reinforcement learning with combinatorial optimization, we engineer systems capable of executing highly complex decision-making in dynamic, unpredictable environments. From optimizing intricate global supply chains and robotic movements to solving highly constrained routing and resource allocation problems, we deliver solutions that maximize reward and operational efficiency.",
      features: ["Deep Reinforcement Learning", "Advanced Route & Resource Optimization", "Simulation & Policy Gradient Methods", "Algorithmic Scheduling"]
    }
  ],
  Workshops: [
    {
      id: "ai-strategy-assessment",
      title: "AI Strategy & Opportunity Assessment",
      description: "An intensive, collaborative workshop designed to identify high-impact artificial intelligence opportunities specifically tailored to your organizational goals. We work closely with your leadership team to develop a comprehensive roadmap for AI adoption, rigorously evaluating technical feasibility, projected return on investment (ROI), and organizational readiness. By aligning cutting-edge technical capabilities with your core business objectives, we help you establish a sustainable competitive advantage in your market.",
      features: ["Comprehensive ROI Analysis", "Feasibility & Risk Evaluation", "Strategic Roadmap Development", "Executive Vision Alignment"]
    },
    {
      id: "product-ideation-blueprinting",
      title: "Product Ideation & Technical Blueprinting",
      description: "Bridge the critical gap between conceptual user needs and tangible, cutting-edge machine learning capabilities through guided brainstorming and architectural planning. We take your initial concepts and translate them into actionable engineering blueprints, defining robust data pipelines, scalable infrastructures, and stringent security protocols. This workshop ensures your product teams can move rapidly from user-centric design and rapid prototyping to structured, enterprise-ready technical deployment.",
      features: ["User-Centric AI Prototyping", "Architecture & Data Pipeline Blueprinting", "Feature Prioritization", "Secure Infrastructure Planning"]
    },
    {
      id: "cross-functional-innovation",
      title: "Cross-Functional Team Innovation",
      description: "Cultivate a thriving culture of continuous innovation by breaking down silos and fostering seamless collaboration across your entire organization. This workshop is specifically designed to bridge the communication gap between data scientists, software engineers, and product managers using agile methodologies and tailored communication frameworks. We equip your teams with the collaborative tools and shared knowledge necessary to execute complex AI initiatives smoothly and efficiently.",
      features: ["Cross-Functional Alignment", "Agile AI Methodologies", "Tailored Communication Frameworks", "Knowledge Transfer Strategies"]
    }
  ],
  Trainings: [
    {
      id: "applied-ml-systems",
      title: "Applied Machine Learning & AI Systems",
      description: "A comprehensive, deep-dive training program that covers the entire machine learning lifecycle, from theoretical fundamentals to state-of-the-art deployment. Participants will master neural networks, deep learning frameworks like PyTorch and TensorFlow, and advanced reinforcement learning techniques. Furthermore, the curriculum extensively covers MLOps, teaching your team how to build, test, and deploy robust, production-ready machine learning pipelines with integrated continuous CI/CD and model registries.",
      features: ["Deep Learning & RL Fundamentals", "PyTorch & TensorFlow Mastery", "End-to-End MLOps", "Model Registry & A/B Testing"]
    },
    {
      id: "scalable-software-design",
      title: "Scalable Software Design for AI",
      description: "Equip your engineering teams with the advanced architectural principles required to build scalable, highly maintainable software systems specifically designed to support data-intensive AI workloads. This training delves into modern design patterns, microservices architecture, and high-performance API development. Your developers will learn how to decouple complex systems, ensuring that your core applications remain responsive and resilient even under the immense computational demands of modern AI models.",
      features: ["Advanced Design Patterns", "Microservices for AI", "High-Performance API Development", "System Decoupling & Scalability"]
    },
    {
      id: "cloud-architecture-devops",
      title: "Cloud Architecture & DevOps Automation",
      description: "Master the essential tools and industry-best practices required to automate modern infrastructure, streamline rapid deployments, and guarantee high availability for AI applications. This intensive module covers containerization using Docker, orchestration via Kubernetes, and the principles of Infrastructure as Code. Participants will also learn how to design secure, highly optimized, and cost-effective cloud environments tailored for intense AI computation across major cloud providers.",
      features: ["Kubernetes & Docker Containerization", "CI/CD Pipeline Automation", "Secure Serverless Computing", "Cloud Cost Optimization"]
    }
  ]
};