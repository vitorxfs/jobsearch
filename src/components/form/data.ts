export const jobSites = [
  'remoteok.com',
  'turing.com',
  'talent.bairesdev.com',
  'onstrider.com',
  'weworkremotely',
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
  mid: ['mid', 'mid level', 'II'],
  senior: ['senior', 'sr', 'III'],
  lead: ['tech lead', 'lead']
}

export type Local = 'remoteBR' | 'remoteUS' | 'remoteEU' | 'remoteUK';
export const localSearchTerms: Record<Local, string[]> = {
  remoteBR: ['brasil', 'brazil', 'são paulo', 'campinas', 'porto alegre', 'santa catarina', 'florianópolis', 'curitiba', 'salvador', 'belo horizonte', 'rio de janeiro'],
  remoteUS: ['US', 'United States', 'NY', 'New York', 'LA', 'Los Angeles', 'San Francisco', 'California', 'CA'],
  remoteEU: ['portugal', 'lisbon', 'coimbra', 'spain', 'madrid', 'barcelona' , 'germany', 'berlim', 'munich', 'netherlands', 'amsterdam', 'poland', 'warsaw', 'luxembourg', 'france', 'paris', 'austria', 'salzburg', 'estonia', 'finland', 'georgia', 'iceland', 'italy', 'lithuania', 'norway', 'romania', 'sweden', 'switzerland'],
  remoteUK: ['uk', 'london', 'manchester', 'oxford', 'liverpool', 'birmingham', 'cambridge', 'edinburgh', 'glasgow', 'dublin', 'galway', 'belfast']
}
