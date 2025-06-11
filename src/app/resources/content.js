import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Kevin",
  lastName: "Okinedo",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "kokinedo@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kokinedo",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kevin-okinedo-39538719b/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Obaro AI</strong></>,
    href: "https://obaro.ai/",
  },
  subline: (
    <>
      We partner with forward-thinking companies to unlock AI's transformative potential. Our expertise in enterprise AI strategy, custom LLM development, and intelligent automation helps businesses gain competitive advantage and accelerate growth.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About Me`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/kevinokinedo/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Kevin is a Atlanta-based software engineer with a passion for building intuitive products powered by AI. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Splunk Inc.",
        timeframe: "May 2023 - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Revamped the Anomaly application UI using React, integrating LLM-powered insights that enhanced user experience and reduced analysis time by 40%.
          </>,
          <>
            Led development of a confidential AI project utilizing LlamaIndex for RAG implementation, building the entire front-end codebase with real-time LLM interaction capabilities.
          </>,
          <>
            Implemented advanced MLOps pipelines using TensorFlow and PyTorch for fine-tuning large language models, reducing inference latency by 30% and improving model accuracy by 15%.
          </>,
          <>
            Designed scalable Node.js architecture supporting 10,000+ concurrent users with vector database integration for semantic search, achieving 50ms average response times.
          </>,
          <>
            Built real-time data processing pipeline using Kafka and Spark for LLM training data preparation, processing 100,000+ events per second for continuous model improvement.
          </>,
        ],
        images: [],
      },
      {
        company: "Microsoft Inc.",
        timeframe: "Aug 2021 - May 2023",
        role: "Software Engineer II",
        achievements: [
          <>
            Led development team building AI-enhanced software applications, implementing GPT-3 integration across Microsoft products with 100% on-time delivery record.
          </>,
          <>
            Designed ETL pipelines for training data preparation using Python and SQL, optimizing transformer model training workflows and data quality validation.
          </>,
          <>
            Enhanced search algorithms with transformer-based semantic understanding, implementing BERT models for natural language query processing and improving search relevance by 35%.
          </>,
          <>
            Developed .NET microservices for AI model serving using Azure ML, implementing efficient message queuing with RabbitMQ for distributed inference requests.
          </>,
          <>
            Architected data governance solutions on Azure for LLM training datasets, ensuring compliance and implementing automated data lineage tracking for model auditing.
          </>,
        ],
        images: [],
      },
      {
        company: "Asset-Map Inc.",
        timeframe: "Jan 2020 - Jul 2021",
        role: "Software Engineer II",
        achievements: [
          <>
            Enhanced search capabilities using Elasticsearch and Node.js with NLP preprocessing, implementing entity recognition and semantic query expansion to improve search precision by 40%.
          </>,
          <>
            Built intelligent URL validation system in Angular using machine learning models, reducing false positives by 60% and cutting support workload by 25%.
          </>,
          <>
            Developed Python-based financial simulation engine with natural language interfaces, enabling users to configure complex scenarios through conversational AI, optimizing workflow efficiency.
          </>,
          <>
            Spearheaded cloud migration from GCP to AWS, implementing containerized ML model serving with Kubernetes, Aurora databases, and infrastructure-as-code using CloudFormation.
          </>,
          <>
            Created intelligent automation scripts using Python and PowerShell with anomaly detection capabilities, reducing manual intervention by 70% through predictive maintenance algorithms.
          </>,
        ],
        images: [],
      },
      {
        company: "Kined Systems Inc.",
        timeframe: "Mar 2017 - Nov 2019",
        role: "Software Engineer",
        achievements: [
          <>
            Developed Golang-based knowledge management platform utilizing early transformer architectures and graph neural networks for intelligent document processing and relationship extraction.
          </>,
          <>
            Implemented secure API integration layer using Java for multi-modal data processing, enabling seamless interaction between NLP models and various enterprise databases.
          </>,
          <>
            Built knowledge graph platform using Golang, Ruby on Rails, and GraphQL, incorporating word embeddings and entity linking for semantic content organization and retrieval.
          </>,
          <>
            Created intelligent data extraction agents using Golang with custom NLP pipelines, implementing named entity recognition and sentiment analysis for automated content processing.
          </>,
          <>
            Architected event-driven microservices with Spring Boot and Kafka, designing scalable infrastructure for processing millions of text documents daily with ML-powered content classification.
          </>,
        ],
        images: [],
      },
      {
        company: "McKinsey & Company Inc.",
        timeframe: "Apr 2015 - Feb 2017",
        role: "Full Stack Developer",
        achievements: [
          <>
            Built responsive web applications using React with integrated machine learning components, implementing predictive analytics dashboards for client engagement optimization.
          </>,
          <>
            Developed internal applications using React, Angular, and Node.js with embedded ML models for text analysis, enabling automated insight generation from business documents.
          </>,
          <>
            Designed RESTful APIs in Java and C# supporting machine learning workflows, implementing efficient data pipelines for training traditional ML models on client datasets.
          </>,
          <>
            Enhanced employee learning platforms by implementing recommendation algorithms using Python and scikit-learn, personalizing content delivery and improving engagement by 25%.
          </>,
          <>
            Optimized front-end performance through intelligent caching and predictive loading algorithms, achieving 15% performance improvement in data-heavy analytical applications.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of North Georgia",
        description: <>Bachelor of Science in Computer Science. Focused on algorithms, data structures, and software engineering principles.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Development",
        description: <>Expert in React, Angular, TypeScript, and modern JavaScript frameworks. Proficient in building responsive, performant user interfaces with advanced state management.</>,
        images: [],
      },
      {
        title: "Backend Development",
        description: <>Extensive experience with Node.js, Python, Java, Golang, and C#. Skilled in microservices architecture, API design, and cloud-native application development.</>,
        images: [],
      },
      {
        title: "AI & Machine Learning",
        description: <>Specialized in LLM fine-tuning, RAG systems, and MLOps. Proficient with TensorFlow, PyTorch, LlamaIndex, and building production-ready AI applications with vector databases.</>,
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: <>Experienced with AWS, Azure, GCP, Docker, Kubernetes, and CI/CD pipelines. Expert in scalable infrastructure design and automated deployment strategies.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
