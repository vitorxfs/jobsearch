import { SearchForm } from '@/components/form/Form';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-8 mt-10 mx-4">
      <header>
        <h1 className="text-center text-3xl text-green-400 font-semibold">Buscador de Vagas</h1>
      </header>
      <SearchForm />
      <footer className="mb-5 mt-10">
        <p className="text-center">Made with 💚 by <Link className="underline" href="https://vitorsanches.com" target="_blank">Vitor Sanches</Link></p>
      </footer>
    </div>
  );
}
