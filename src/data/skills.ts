export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'Code2',
    skills: ['Python', 'SQL', 'Java Basics'],
  },
  {
    title: 'Generative AI',
    icon: 'Sparkles',
    skills: ['LLMs', 'RAG', 'LangChain', 'MCP', 'Prompt Engineering', 'NLP', 'Transformers', 'Groq API'],
  },
  {
    title: 'AI Agents',
    icon: 'Bot',
    skills: ['AI Agents', 'Agentic AI', 'MCP'],
  },
  {
    title: 'Machine Learning',
    icon: 'BrainCircuit',
    skills: ['Linear Regression', 'Logistic Regression', 'Decision Tree', 'Random Forest', 'Scikit-Learn'],
  },
  {
    title: 'Data Science',
    icon: 'BarChart3',
    skills: ['NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Web Scraping',
    icon: 'Globe',
    skills: ['BeautifulSoup', 'Selenium', 'Playwright'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: ['MySQL', 'ChromaDB'],
  },
  {
    title: 'Backend / Development',
    icon: 'Server',
    skills: ['FastAPI', 'REST API', 'Streamlit'],
  },
  {
    title: 'Data Engineering',
    icon: 'Workflow',
    skills: ['Apache Airflow', 'ETL', 'Workflow Orchestration'],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'Linux', 'N8N', 'Google Colab', 'PyCharm'],
  },
];
