
import React from 'react';
import { AboutUs, Header, Hero, News, Footer } from './components';

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
