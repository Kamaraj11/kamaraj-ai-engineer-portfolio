export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  tags: string[];
  filters: string[];
  description: string;
  featured?: boolean;
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    architecture: string[];
    technicalImplementation: string[];
    techStack: string[];
    results?: { label: string; value: string }[];
    engineeringDecisions: string[];
    links: { label: string; url: string }[];
  };
};

export const projects: Project[] = [
  {
    id: 'fund-grant-intelligence',
    title: 'AI-Powered Fund & Grant Intelligence Platform',
    shortTitle: 'Grant Intelligence Platform',
    category: 'Generative AI · RAG · LLM · NLP · Web Scraping · Vector Database',
    tags: ['Generative AI', 'RAG', 'LLM', 'NLP', 'Web Scraping', 'ChromaDB'],
    filters: ['GenAI', 'RAG', 'Automation'],
    description:
      'An end-to-end AI platform for automated grant discovery, eligibility analysis, summarization, and intelligent querying.',
    featured: true,
    caseStudy: {
      overview:
        'An end-to-end AI platform that automates grant discovery from 10+ data sources, extracts eligibility criteria using NLP, generates transformer-based LLM summaries, and provides a RAG chatbot for intelligent querying — all backed by a ChromaDB vector database with an interactive analytics dashboard.',
      problem:
        'Researchers and organizations spend significant manual effort scanning dozens of funding sources, reading eligibility documents, and determining whether a grant is a fit. The process is repetitive, slow, and error-prone.',
      solution:
        'A fully automated pipeline that scrapes grant sources, processes and structures the data, extracts eligibility criteria with NLP, generates concise LLM summaries, indexes everything into a ChromaDB vector database, and exposes a RAG chatbot plus analytics dashboard for intelligent querying and filtering.',
      architecture: [
        'GRANT SOURCES',
        'WEB SCRAPING',
        'DATA PROCESSING',
        'ELIGIBILITY EXTRACTION',
        'LLM SUMMARIZATION',
        'CHROMADB',
        'RAG RETRIEVAL',
        'AI CHATBOT',
        'ANALYTICS DASHBOARD',
      ],
      technicalImplementation: [
        'Automated scraping pipeline across 10+ grant data sources feeding a structured database',
        'NLP-based eligibility extraction to identify qualification criteria from unstructured text',
        'Transformer-based LLM summarization for concise grant overviews',
        'ChromaDB vector database for semantic retrieval of grant documents',
        'RAG chatbot enabling natural-language queries over the entire grant corpus',
        'Interactive analytics dashboard with filtering by category, deadline, and eligibility',
        'End-to-end scraping-to-database workflow with minimal manual intervention',
      ],
      techStack: [
        'Python',
        'LangChain',
        'ChromaDB',
        'LLM',
        'NLP',
        'Transformers',
        'BeautifulSoup',
        'Selenium',
        'Streamlit',
      ],
      results: [
        { label: 'Funding opportunities processed', value: '500+' },
        { label: 'Data sources integrated', value: '10+' },
        { label: 'Manual research time reduced', value: '60%' },
      ],
      engineeringDecisions: [
        'Used ChromaDB over a relational store to enable semantic similarity search across grant documents',
        'Separated scraping, processing, and retrieval into distinct stages for independent scaling and debugging',
        'Chose a RAG chatbot over a keyword search to let users ask nuanced eligibility questions in natural language',
      ],
      links: [],
    },
  },
  {
    id: 'mcp-ai-database-agent',
    title: 'MCP AI Database Agent',
    shortTitle: 'MCP Database Agent',
    category: 'AI Agents · MCP · LLM · SQL · Database Automation',
    tags: ['AI Agents', 'MCP', 'LLM', 'SQL', 'Database Automation'],
    filters: ['AI Agents', 'MCP'],
    description:
      'An AI-powered database agent that converts natural-language questions into context-aware SQL queries using Model Context Protocol.',
    featured: true,
    caseStudy: {
      overview:
        'An AI database agent built on the Model Context Protocol that translates natural-language questions into context-aware SQL queries, executes them against a database, and returns results in natural language.',
      problem:
        'Non-technical users cannot query databases without writing SQL, and even technical users spend time writing repetitive queries for common data questions.',
      solution:
        'A modular MCP-based agent architecture where the LLM receives schema context, generates SQL through a standardized MCP tool interface, executes it against the database, and translates the result back into a natural-language response.',
      architecture: [
        'USER QUESTION',
        'LLM',
        'SCHEMA / CONTEXT',
        'MCP',
        'SQL GENERATION',
        'DATABASE',
        'QUERY RESULT',
        'NATURAL LANGUAGE RESPONSE',
      ],
      technicalImplementation: [
        'Natural Language to SQL conversion using a transformer-based LLM',
        'Schema and context injection so generated queries respect table structure and relationships',
        'Model Context Protocol architecture for standardized, modular tool integration',
        'Database integration supporting 5+ automated workflows',
        'Automated query execution and result formatting',
        'Modular design allowing new data sources and tools to be added via MCP servers',
      ],
      techStack: ['Python', 'MCP', 'LLM', 'SQL', 'FastAPI'],
      results: [{ label: 'Manual query-writing time reduced', value: '40%' }],
      engineeringDecisions: [
        'Adopted MCP to decouple the LLM from direct database access, enabling standardized tool calls and future extensibility',
        'Injected schema context into the prompt rather than fine-tuning, keeping the system adaptable to schema changes without retraining',
        'Built 5+ automated database workflows to cover the most common query patterns',
      ],
      links: [{ label: 'GitHub', url: 'https://github.com/Kamaraj11' }],
    },
  },
  {
    id: 'rag-document-query-engine',
    title: 'RAG Document Query Engine',
    shortTitle: 'RAG Query Engine',
    category: 'RAG · LLM · Document Intelligence · Vector Database',
    tags: ['RAG', 'LLM', 'Document Intelligence', 'Vector Database'],
    filters: ['RAG', 'GenAI'],
    description:
      'RAG-based document querying system designed to retrieve relevant information from documents and generate context-aware answers.',
    caseStudy: {
      overview:
        'A RAG-based document querying system that chunks documents, generates embeddings, stores them in a vector database, and retrieves relevant context to generate accurate, grounded answers.',
      problem:
        'LLMs hallucinate when asked about documents they have not seen, and feeding entire document sets into a prompt is impractical for large corpora.',
      solution:
        'A retrieval-augmented generation pipeline that chunks documents, embeds them into a vector database, retrieves the most relevant chunks for a given query, and passes them as context to the LLM for grounded answer generation.',
      architecture: [
        'DOCUMENTS',
        'CHUNKING',
        'EMBEDDINGS',
        'VECTOR DATABASE',
        'RETRIEVER',
        'CONTEXT',
        'LLM',
        'ANSWER',
      ],
      technicalImplementation: [
        'Document chunking strategy to balance retrieval granularity and context preservation',
        'Embedding generation for semantic search over document chunks',
        'Vector database storage for efficient similarity retrieval',
        'Retriever component that selects the most relevant chunks per query',
        'Context assembly and LLM prompting for grounded, source-aware answers',
      ],
      techStack: ['Python', 'RAG', 'Ollama', 'LLM', 'Vector Database', 'Linux'],
      results: [],
      engineeringDecisions: [
        'Used local LLM inference via Ollama for privacy and cost control',
        'Separated the retrieval layer from generation to allow independent tuning of chunk size, embedding model, and retrieval parameters',
      ],
      links: [{ label: 'GitHub', url: 'https://github.com/Kamaraj11' }],
    },
  },
  {
    id: 'multi-site-web-scraper',
    title: 'AI-Powered Multi-Site Web Scraper',
    shortTitle: 'Multi-Site Scraper',
    category: 'AI · Web Scraping · Automation · Data Extraction',
    tags: ['AI', 'Web Scraping', 'Automation', 'Data Extraction'],
    filters: ['Automation'],
    description:
      'AI-powered web scraping application designed to extract and process structured information from multiple websites.',
    caseStudy: {
      overview:
        'An AI-powered web scraping application that extracts and processes structured information across multiple dynamic and static websites, with AI-assisted processing and automation.',
      problem:
        'Data collection from multiple websites with different structures requires custom scrapers per site, and unstructured HTML needs processing into clean, structured data.',
      solution:
        'A multi-site scraping framework that handles both static and dynamic websites, with AI-assisted extraction and processing to normalize unstructured content into structured records.',
      architecture: [
        'TARGET WEBSITES',
        'STATIC / DYNAMIC DETECTION',
        'SCRAPE (BEAUTIFULSOUP / SELENIUM)',
        'AI-ASSISTED PROCESSING',
        'STRUCTURED DATA OUTPUT',
      ],
      technicalImplementation: [
        'Multi-site scraping supporting both static (BeautifulSoup) and dynamic (Selenium) websites',
        'Structured data extraction with consistent output schemas',
        'AI-assisted processing for cleaning and normalizing extracted content',
        'Automation pipeline reducing manual data collection effort',
      ],
      techStack: ['Python', 'BeautifulSoup', 'Selenium', 'Playwright'],
      results: [],
      engineeringDecisions: [
        'Used both BeautifulSoup and Selenium to handle the split between static and JavaScript-rendered pages',
        'Applied AI-assisted processing to normalize heterogeneous site structures into a unified output format',
      ],
      links: [],
    },
  },
  {
    id: 'airflow-etl-pipeline',
    title: 'Airflow ETL Orchestration Pipeline',
    shortTitle: 'Airflow ETL Pipeline',
    category: 'Data Engineering · ETL · Workflow Orchestration · Airflow',
    tags: ['Data Engineering', 'ETL', 'Airflow', 'Workflow Orchestration'],
    filters: ['Data Engineering', 'Automation'],
    description:
      'Automated ETL orchestration pipeline designed for scheduled data processing workflows using Apache Airflow.',
    caseStudy: {
      overview:
        'An automated ETL orchestration pipeline built on Apache Airflow that schedules and monitors data processing workflows from extraction through loading, with validation at each stage.',
      problem:
        'Data processing workflows need to run reliably on a schedule, with visibility into failures and the ability to retry individual stages.',
      solution:
        'An Airflow DAG-based pipeline that orchestrates extraction, transformation, validation, and loading as discrete, monitored tasks with scheduling and retry logic.',
      architecture: [
        'DATA SOURCE',
        'EXTRACT',
        'TRANSFORM',
        'VALIDATE',
        'LOAD',
        'AIRFLOW DAG',
        'SCHEDULED WORKFLOW',
      ],
      technicalImplementation: [
        'Airflow DAG defining the full ETL workflow as modular tasks',
        'Scheduled execution for recurring data processing',
        'Validation stage to ensure data quality before loading',
        'Task-level retry and failure handling',
      ],
      techStack: ['Python', 'Apache Airflow', 'ETL', 'Linux', 'Workflow Orchestration'],
      results: [],
      engineeringDecisions: [
        'Separated transform and validate into distinct Airflow tasks so failures can be retried at the task level without re-extracting',
        'Used Airflow scheduling over cron for visibility into run history and task-level monitoring',
      ],
      links: [{ label: 'GitHub', url: 'https://github.com/Kamaraj11' }],
    },
  },
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction System',
    shortTitle: 'Churn Prediction',
    category: 'Machine Learning · Classification · Predictive Analytics',
    tags: ['Machine Learning', 'Classification', 'Predictive Analytics'],
    filters: ['Machine Learning'],
    description:
      'Machine learning system to identify customers at risk of churn using Decision Tree and Random Forest classifiers.',
    caseStudy: {
      overview:
        'A machine learning system that predicts customer churn from a dataset of 7,000+ records, with emphasis on recall to correctly identify at-risk customers.',
      problem:
        'Losing customers is costly, and the business needs to proactively identify those at risk of leaving so retention actions can be taken.',
      solution:
        'A classification pipeline that preprocesses customer data, performs feature encoding and EDA, trains Decision Tree and Random Forest models, and tunes hyperparameters to maximize recall — prioritizing the identification of at-risk customers over overall accuracy.',
      architecture: [
        'DATASET',
        'PREPROCESSING',
        'FEATURE ENCODING',
        'EDA',
        'MODEL TRAINING',
        'HYPERPARAMETER TUNING',
        'MODEL EVALUATION',
        'CHURN PREDICTION',
      ],
      technicalImplementation: [
        'Dataset of 7,000+ customer records with preprocessing and feature encoding',
        'Exploratory data analysis to identify churn-correlated features',
        'Decision Tree and Random Forest model training',
        'Hyperparameter tuning to optimize for recall',
        'Model evaluation prioritizing recall over precision',
      ],
      techStack: ['Python', 'Scikit-Learn', 'Decision Tree', 'Random Forest', 'NumPy', 'Pandas'],
      results: [
        { label: 'Churn Recall (improved from 48%)', value: '70%' },
        { label: 'Classification Accuracy', value: '75%' },
        { label: 'Customer records analyzed', value: '7,000+' },
      ],
      engineeringDecisions: [
        'Optimized for recall rather than accuracy because the business cost of missing an at-risk customer exceeds the cost of a false positive',
        'Used Random Forest over a single Decision Tree to reduce variance and improve generalization',
        'Applied hyperparameter tuning specifically targeting recall, improving it from 48% to 70%',
      ],
      links: [],
    },
  },
];
