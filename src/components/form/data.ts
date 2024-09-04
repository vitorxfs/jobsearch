export const jobSites = [
  'boards.greenhouse.io',
  'careers.jobscore.com',
  'gupy.io',
  'indeed.com',
  'jobs.ashbyhq.com',
  'jobs.jobvite.com',
  'jobs.lever.co',
  'jobs.quickin.io',
  'linkedin.com',
  'myworkdaysjobs.com',
  'picpay.com',
  'remotar.com.br',
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
