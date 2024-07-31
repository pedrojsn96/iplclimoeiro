
import React from 'react';
import { AboutUs, Hero, News } from './components';
import { Header, Footer } from '../../shared';
import { Flowbite } from 'flowbite-react';
import customTheme from '../../shared/theme';

const Home: React.FunctionComponent = () => {

  return (
    <>
    <Flowbite theme={{ theme: customTheme }}>
      <Header />
        <Hero />
        <AboutUs />
        {/* <News /> */}
        <Footer />
    </Flowbite>
    </>
  )
}

export default Home;
