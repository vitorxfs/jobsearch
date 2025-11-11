"use client"

import { useState, useRef, useMemo } from 'react';

import { buildSearchQuery } from '@/helpers/query';
import { CheckBoxData, MultiSelector } from '@/components/Selector';
import { getKeys } from '@/helpers/object';
import { jobSites, Level, levelSearchTerms, Local, localSearchTerms } from './data';

const sitesDefault = jobSites.reduce<Record<string, CheckBoxData>>(
  (acc: Record<string, CheckBoxData>, site: string) => {
    return {
      ...acc,
      [site]: { checked: true }
    }
  },
  {}
);

const levelsDefault: Record<Level, CheckBoxData> = {
  intern: { checked: false, label: 'Estágio'},
  junior: { checked: false, label: 'Junior' },
  mid: { checked: false, label: 'Pleno' },
  senior: { checked: false, label: 'Senior' },
  lead: { checked: false, label: 'Tech Lead' },
}

const localDefault: Record<Local, CheckBoxData> = {
  remoteBR: { checked: false, label: 'Brasil' },
  remoteUS: { checked: false, label: 'Estados Unidos' },
  remoteEU: { checked: false, label: 'Europa' },
  remoteUK: { checked: false, label: 'Reino Unido'},
}

export function SearchForm() {
  const [sites, setSites] = useState(sitesDefault);
  const [levels, setLevels] = useState(levelsDefault);
  const [locals, setLocals] = useState(localDefault);
  const [text, setText] = useState('');
  const searchLink = useRef<HTMLAnchorElement>(null);

  const handleChangeSites = (value: string) => {
    setSites((prev) => ({
      ...prev,
      [value]: { checked: !prev[value].checked },
    }));
  }

  const handleChangeLevels = (value: string) => {
    const level: Level = value as Level;
    setLevels((prev) => ({
      ...prev, [level]: { ...prev[level], checked: !prev[level].checked },
    }));
  }

  const handleChangeLocals = (value: string) => {
    const local: Local = value as Local;
    setLocals((prev) => ({
      ...prev, [local]: { ...prev[local], checked: !prev[local].checked },
    }));
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchLink.current?.click();
  }

  const selectedLevels = useMemo(
    () => getKeys<Level>(levels)
      .filter((level:Level) => levels[level].checked)
      .flatMap((l) => levelSearchTerms[l]),
    [levels],
  );

  const selectedLocal = useMemo(
    () => getKeys<Local>(locals)
      .filter((local: Local) => locals[local].checked)
      .flatMap((l) => localSearchTerms[l]),
    [locals]
  );

  const selectedSites = useMemo(() => jobSites.filter((s) => sites[s].checked), [sites]);
  const keywords = text.split(',');

  const searchQuery = useMemo(() => buildSearchQuery({
    keywords,
    levels: selectedLevels,
    local: ['remote', ...selectedLocal],
    sites: selectedSites,
  }), [keywords, selectedLevels, selectedLocal, selectedSites]);

  const url = `https://google.com/search?q=${searchQuery.replace(' ', '+')}&as_qdr=w`;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center text-center gap-6">
      <h2 className="text-2xl mt-8">Sites</h2>
      <MultiSelector
        checkboxes={sites}
        changeCheckbox={handleChangeSites}
      />

      <h2 className="text-2xl mt-8">Níveis</h2>
      <MultiSelector
        checkboxes={levels}
        changeCheckbox={handleChangeLevels}
      />

      <h2 className="text-2xl mt-8">Locais (Remotos)</h2>
      <MultiSelector
        checkboxes={locals}
        changeCheckbox={handleChangeLocals}
      />

      <div>
        <h2 className="text-2xl mt-8">Palavras-chave</h2>
        <p className="text-neutral-400">Separadas por vírgula</p>
      </div>
      <input
        type="text"
        placeholder="Exemplo: Spring Boot, React, SQL"
        value={text}
        onChange={handleChangeText}
        className="border border-green-800 px-4 py-2 bg-black text-white rounded-full text-center"
      />

      <a
        href={url}
        target='_blank'
        ref={searchLink}
        className="bg-green-400 px-4 py-2 rounded-full text-black font-bold"
      >
        Buscar
      </a>
    </form>
  )
}
