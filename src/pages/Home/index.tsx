
import React from 'react';
import { AboutUs, Hero, News } from './components';
import { Header, Footer } from '../../shared';

const Home: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <News />
      <Footer />
    </>
  )
}

export default Home;
