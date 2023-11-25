"use client"

import {useState} from 'react'

import Image from 'next/image'
import Navbar from './components/navbar'
import Welcome from './components/welcome'
import Wordinfo from './components/wordInfo'

export default function Home() {

  const [query, setQuery] = useState('');

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <main className="flex min-h-screen items-center  h-full p-24">
      <Welcome />
      <Navbar handleQueryChange={handleQueryChange} />
     <Wordinfo  query={query} />
    </main>
  )
}
