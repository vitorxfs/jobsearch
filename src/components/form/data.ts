export const jobSites = [
  'jobs.lever.co',
  'boards.greenhouse.io',
  'jobs.ashbyhq.com',
  'jobs.jobvite.com',
  'myworkdaysjobs.com',
  'careers.jobscore.com',
  'ats.comparably.com',
  'jobs.quickin.io',
  'indeed.com',
  'linkedin.com',
  'picpay.com',
  'gupy.io',
  'vagas.com.br',
];

export type Level = 'intern' | 'junior' | 'mid' | 'senior' | 'lead';
export const levelSearchTerms: Record<Level, string[]> = {
  intern: ['estagiário', 'estágio', 'intern', 'internship'],
  junior: ['jr', 'junior', 'entry', 'assistant'],
  mid: ['pleno', 'pl', 'mid', 'II'],
  senior: ['senior', 'sr', 'III'],
  lead: ['tech lead', 'lead']
}
