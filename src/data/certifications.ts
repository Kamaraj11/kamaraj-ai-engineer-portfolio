export type Certification = {
  title: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: 'Generative AI Certification',
    issuer: 'NASSCOM FutureSkills Prime',
    date: 'August 2026',
  },
  {
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    date: '',
  },
  {
    title: 'Introduction to Claude Cowork',
    issuer: 'Anthropic',
    date: '',
  },
  {
    title: 'Foundation: Introduction to LangChain - Python',
    issuer: 'LangChain',
    date: 'May 2026',
  },
  {
    title: 'Foundation: Building Reliable Agents',
    issuer: 'LangChain',
    date: 'May 2026',
  },
  {
    title: 'Cyber Security by Google',
    issuer: 'Tamil Nadu Skill Development Corporation',
    date: 'November 2025',
  },
  {
    title: 'AI Developer Certification',
    issuer: 'C# Corner',
    date: 'March 2025',
  },
  {
    title: 'NM-EBPL Data Science Hackathon – Certificate of Participation',
    issuer: 'AdroIT Technologies Innovative Solutions Pvt Ltd',
    date: 'October 2025',
  },
];
