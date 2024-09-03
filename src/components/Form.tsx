"use client"

import { getKeys } from '@/helpers/object';
import { useState, useRef } from 'react';
import { CheckBoxData, MultiSelector } from './Selector';

const sitesValues = [
  'jobs.lever.co',
  'boards.greenhouse.io',
  'jobs.ashbyhq.com',
  'jobs.jobvite.com',
  'myworkdaysjobs.com',
  'careers.jobscore.com',
  'ats.comparably.com',
  'jobs.quickin.io',
  'indeed.com',
  'catho.com',
  'linkedin.com'
];

const checkboxDefaultData = sitesValues.reduce<Record<string, CheckBoxData>>(
  (acc: Record<string, CheckBoxData>, site: string) => {
    return {
      ...acc,
      [site]: { checked: true }
    }
  },
  {}
);

const levelsStrings = {
  intern: [
    'estagiário', 'estágio', 'intern', 'internship',
  ],
  junior: [
    'jr', 'junior', 'entry', 'assistant'
  ],
  mid: [
    'pleno', 'pl', 'mid', 'II'
  ],
  senior: [
    'senior', 'sr', 'III'
  ],
  lead: [
    'tech lead', 'lead'
  ]
}

type Level = 'intern' | 'junior' | 'mid' | 'senior' | 'lead';

const levelsDefaultCheckboxes: Record<Level, CheckBoxData> = {
  intern: { checked: false, label: 'Estágio'},
  junior: { checked: true, label: 'Junior' },
  mid: { checked: false, label: 'Pleno' },
  senior: { checked: false, label: 'Senior' },
  lead: { checked: false, label: 'Tech Lead' },
}

export function SearchForm() {
  const [sites, setSites] = useState(checkboxDefaultData);
  const [levels, setLevels] = useState(levelsDefaultCheckboxes);
  const [text, setText] = useState('');
  const searchLink = useRef<HTMLAnchorElement>(null);

  const handleChangeSites = (value: string) => {
    setSites((prev) => ({ ...prev, [value]: { checked: !prev[value].checked }}))
  }

  const handleChangeLevels = (value: string) => {
    const level: Level = value as Level;
    setLevels((prev) => ({ ...prev, [level]: { ...prev[level], checked: !prev[level].checked }}))
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchLink.current?.click();
  }

  const checkedLevels = getKeys<Level>(levels).filter((level:Level) => levels[level].checked);
  const checkedLevelsStrings = checkedLevels.flatMap((l) => levelsStrings[l]);
  const keywords = text.split(',');
  const query = `(${Object.keys(sites).map(s => 'site:'+s).join(' OR ')}) AND (${checkedLevelsStrings.map((l) => `"${l}"`).join(' OR ')}) AND ("remote" OR "home office") AND (${keywords.map((k) => `"${k}"`).join(' OR ')})")`

  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-center text-center gap-6">
      <h2 className="text-2xl mt-8">Sites</h2>
      <MultiSelector values={Object.keys(checkboxDefaultData)} checkboxes={sites} changeCheckbox={handleChangeSites} />
      <h2 className="text-2xl mt-8">Níveis</h2>
      <MultiSelector values={Object.keys(levelsDefaultCheckboxes)} checkboxes={levels} changeCheckbox={handleChangeLevels} />
      <div>
        <h2 className="text-2xl mt-8">Palavras-chave</h2>
        <p className="text-neutral-400">Separadas por vírgula</p>
      </div>
      <input type="text" placeholder="Exemplo: Spring Boot, React, SQL" value={text} onChange={handleChangeText} className="border border-green-800 px-4 py-2 bg-black text-white rounded-full text-center" />
      <a href={`https://google.com/search?q=${query.replace(' ', '+')}&as_qdr=w`} target='_blank' ref={searchLink} className="bg-green-400 px-4 py-2 rounded-full text-black font-bold">Buscar</a>
    </form>
  )
}
