import Head from 'next/head'
import Header from './/components/header';
import About from './components/about';
import Discord from './components/discord/discord';
import {React} from 'react';
import Vote from './components/vote';
import Status from './components/status/status';

export default function Home() {
  return (
    <>
      <Head/>
      <Header />
      <About />
      <Discord />
      <Vote />
      <Status />
    </>
  )
}
