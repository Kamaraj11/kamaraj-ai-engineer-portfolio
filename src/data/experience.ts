export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    role: 'Gen AI and Agentic AI Intern',
    company: 'Cubeaisolutions Tech Pvt Ltd',
    period: 'May 2026 – Present',
    current: true,
    highlights: [
      'Built RAG pipelines using LangChain + ChromaDB',
      'Worked on document-processing automation',
      'Reduced manual effort by 50%',
      'Developed agentic AI workflows using MCP',
      'Worked on multi-step task automation',
      'Implemented prompt engineering strategies',
      'Improved LLM response accuracy for structured extraction',
    ],
  },
  {
    role: 'Web Scraping Intern',
    company: 'Cubeaisolutions Tech Pvt Ltd',
    period: 'March 2026 – May 2026',
    highlights: [
      'Scraped 50+ dynamic and static websites',
      'Used BeautifulSoup and Selenium',
      'Automated structured data collection',
      'Built data preprocessing pipelines',
      'Reduced manual data-cleaning time by 40%',
    ],
  },
];
