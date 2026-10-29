import type {
  EducationItem,
  ExperienceItem,
  ProfileLinks,
  ProjectItem,
  SkillGroup
} from '../types'

/**
 * ---------------------------------------------------------------------------
 * EDIT THIS FILE to update the portfolio content.
 * ---------------------------------------------------------------------------
 */

export const profile = {
  name: 'Amitasha Anand Verma',
  location: 'Chennai, India',
  roleTitle: 'AI/ML Engineer',
  heroHeadline: 'AI/ML Engineer building practical, production-focused AI systems',
  heroSupporting:
    'I work across machine learning, search, and generative AI—from retrieval workflows and backend APIs to user-facing applications.'
}

export const links: ProfileLinks = {
  email: 'amitashavermawork@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amitasha-verma-05543a205/',
  github: 'https://github.com/iamitasha2706',
  // Optional: to offer a downloadable resume, add the PDF to /public
  // (e.g. /public/resume.pdf) and set this to '/resume.pdf'. Leave empty to hide.
  resume: ''
}

/**
 * Availability note shown in the hero.
 * Phrased as an enthusiasm rather than a job-search statement, so the site
 * reads well whether or not you are actively looking.
 * Set `showAvailability` to false to hide it entirely.
 */
export const availability = {
  showAvailability: true,
  text: 'AI/ML & Generative AI enthusiast · AI product strategy'
}

export const aboutParagraphs: string[] = [
  'I am a Software Engineer at The Boeing Company. I care as much about the product as the model—how an AI feature actually helps someone, where it fits in a workflow, and when a simpler approach is the right call.',
  'I like thinking through AI product strategy: framing the problem, deciding what to build (and what not to), and shaping systems like retrieval, RAG, and search into something people can trust and use. I enjoy turning ideas into working software and learning from how real users respond to it.',
  'I am a constant learner—curious about new tools and techniques, and happiest when I am building something, breaking it, and making it better.'
]

/**
 * Personal interests shown in the About section to keep it human.
 * Add image file paths to `aboutPhotos` once you have them (see README).
 */
export const aboutHuman = {
  heading: 'Beyond the work',
  text: 'When I am not working, you will usually find me heading to the mountains. Travel—especially long trips into the hills—is how I reset, and it keeps me curious in a way that spills back into how I approach problems.'
}

/**
 * Optional travel/mountain photos for the About section.
 * Put images in `public/images/` and reference them as '/images/your-file.jpg'.
 * Leave the array empty to hide the gallery.
 */
export const aboutPhotos: { src: string; alt: string }[] = [
  { src: '/images/mountains-1.jpg', alt: 'Standing by the turquoise Suraj Taal lake in the mountains' },
  { src: '/images/mountains-2.jpg', alt: 'A quiet hillside garden with a resting dog' },
  { src: '/images/mountains-3.jpg', alt: 'Looking out over a green Himalayan valley village' },
  { src: '/images/mountains-4.jpg', alt: 'Sitting in fresh snow among bare winter trees' },
  { src: '/images/mountains-5.jpg', alt: 'A rainbow arching over mountains across a field' }
]

/**
 * Optional headshot shown in the hero.
 * Put the image in `public/images/` and set `src` to e.g. '/images/me.jpg'.
 * Leave `src` empty to keep the hero text-only.
 */
export const headshot = {
  src: '/images/me.png',
  alt: 'Portrait of Amitasha Anand Verma'
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    items: ['Python', 'Java', 'SQL', 'JavaScript']
  },
  {
    title: 'AI / ML',
    items: [
      'Supervised Learning',
      'Predictive Maintenance',
      'Natural Language Processing',
      'Computer Vision',
      'Transformers',
      'LightGBM',
      'XGBoost',
      'Scikit-learn',
      'NumPy',
      'Pandas',
      'OpenCV'
    ]
  },
  {
    title: 'Generative AI',
    items: [
      'Large Language Models',
      'Retrieval-Augmented Generation (RAG)',
      'Semantic Search',
      'LangChain',
      'LangGraph',
      'Hugging Face',
      'Azure AI Foundry',
      'OpenAI API'
    ]
  },
  {
    title: 'Backend & Web Development',
    items: ['FastAPI', 'Angular', 'Vue.js']
  },
  {
    title: 'Databases & Cloud Storage',
    items: ['PostgreSQL', 'MySQL', 'AWS S3']
  },
  {
    title: 'Tools & Practices',
    items: ['Git', 'GitLab', 'Azure DevOps', 'JIRA', 'Agile', 'Scrum']
  }
]

export const experience: ExperienceItem[] = [
  {
    company: 'The Boeing Company',
    role: 'Software Engineer – Developer',
    location: 'Chennai, India',
    period: 'August 2024 – Present',
    bullets: [
      'Built a hybrid search pipeline for 7,000+ aerospace records using BM25 keyword search, vector search, Reciprocal Rank Fusion (RRF), and GPT-4o-mini reranking, improving top-5 relevance by approximately 35% over keyword search.',
      'Developed an in-memory vector index using 3,072-dimensional embeddings and cosine similarity, achieving less than 5 ms retrieval-layer latency.',
      'Implemented query-intent classification using regex rules, database validation, and an LLM, with prompt-injection protections and fallback handling to maintain over 99% search availability during LLM or embedding-service outages.',
      'Led a team of five ML engineers on an aircraft-engine predictive-maintenance project using DCNN and LightGBM with real-time data; the project reported a 75% reduction in downtime.'
    ]
  },
  {
    company: 'Reevoly',
    role: 'Junior Developer',
    location: 'Bengaluru, India (Remote)',
    period: 'January 2024 – July 2024',
    bullets: [
      'Developed a Vue.js application connected to a SQL backend, supporting migration of application features to a JavaScript-based frontend.',
      'Implemented AWS S3 media storage and retrieval, and resolved issues across the Vue.js application, APIs, and SQL data flow.'
    ]
  },
  {
    company: 'The Boeing Company',
    role: 'Software Development Engineering Intern',
    location: 'Chennai, India',
    period: 'July 2023 – September 2023',
    bullets: [
      'Developed and deployed an LLM-based question-answering solution on Azure to generate answers from process flows, SOPs, and regulatory documents, as part of an Agile team.'
    ]
  }
]

export const projects: ProjectItem[] = [
  {
    name: 'BlogGEN',
    tagline: 'IEEE Paper',
    label: 'Personal / research project',
    description:
      'A Streamlit generative AI application that fine-tunes Llama models to generate personalized blogs from user prompts. The project was published as an IEEE paper and presented at an IEEE conference.',
    technologies: ['Streamlit', 'Generative AI', 'Llama'],
    repoUrl: '',
    paperUrl: 'https://ieeexplore.ieee.org/document/10533489'
  },
  {
    name: 'Log-AI',
    tagline: 'Logistics Operations AI Assistant',
    label: 'Portfolio project',
    description:
      'An end-to-end AI assistant with a Streamlit frontend and LangGraph orchestration. It supports natural-language queries over SQL Server supply-chain data, RAG-based SOP search through a vector database, and weather lookups through an external API.',
    technologies: [
      'Streamlit',
      'LangGraph',
      'SQL Server',
      'RAG',
      'Vector database',
      'Weather API'
    ],
    repoUrl: 'https://github.com/iamitasha2706/Log-AI'
  },
  {
    name: 'Retail-RAG',
    tagline: 'Retail Operations Knowledge Copilot',
    label: 'Portfolio project',
    description:
      'An end-to-end agentic RAG copilot for retail operations using LangGraph, FastAPI, Pinecone, Groq, and Hugging Face embeddings. It includes document ingestion, private knowledge-base search, evidence evaluation, and grounded answer generation through a web interface.',
    technologies: ['LangGraph', 'FastAPI', 'Pinecone', 'Groq', 'Hugging Face', 'RAG'],
    repoUrl: 'https://github.com/iamitasha2706/IT-Support-RAG'
  }
]

export const education: EducationItem[] = [
  {
    institution: 'Hindustan Institute of Technology and Science',
    qualification: 'B.Tech, Computer Science and Engineering',
    location: 'Chennai, Tamil Nadu',
    period: 'Batch of 2024',
    detail: 'CGPA: 9.28'
  },
  {
    institution: 'Kendriya Vidyalaya',
    qualification: 'PCM with Computer Science',
    period: 'Batch of 2020',
    detail: '90.6%'
  }
]

export const community = {
  organization: 'Google Developers',
  role: 'Campus Lead (Google Developer Students Club)',
  period: 'July 2023 – July 2024',
  intro:
    'I genuinely enjoy being around people and helping them get started. As the Google Developer Students Club lead on campus, I built and ran a community of hundreds of students.',
  bullets: [
    'Led the Google Developer Students Club and grew an active campus tech community of hundreds of students.',
    'Ran hands-on workshops on Google Cloud and machine learning, helping peers go from curious to building.',
    'Spent a lot of time one-on-one and in small groups—answering questions, unblocking people, and keeping the energy up.'
  ],
  /**
   * Community/workshop photos (shown as a strip with a click-to-expand lightbox).
   * Put images in `public/images/` and reference them as '/images/your-file.jpg'.
   * Leave the array empty to hide the gallery.
   */
  photos: [
    {
      src: '/images/community-1.jpg',
      alt: 'Group photo with the Google Developer Students Club community at a campus event'
    },
    {
      src: '/images/community-2.jpg',
      alt: 'Speaking at a podium during a Google Developer Students Club session'
    }
  ] as { src: string; alt: string }[]
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
]
