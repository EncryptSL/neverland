import Head from 'next/head'
import Header from './/components/header';
import About from './components/about';
import Team from './components/team';
import Discord from './components/discord/discord';
import {React, useEffect, useState } from 'react';

export default function Home() {
  return (
    <>
      <Head/>
      <Header />
      <About />
      <Discord />
      <Team />
    </>
  )
}
