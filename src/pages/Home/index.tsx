
import React from 'react';
import { AboutUs, Hero, News } from './components';
import { Header, Footer, ModalIR } from '../../shared';
import { Flowbite } from 'flowbite-react';
import customTheme from '../../shared/theme';
import { sendEvent } from '../../analytics';

const Home: React.FunctionComponent = () => {

  React.useEffect(() => {
    sendEvent('Page View', {
      'Page Name': 'Home'
    })
  }, []);

  return (
    <>
    <Flowbite theme={{ theme: customTheme }}>
      <Header />
      <Hero />
      <AboutUs />
      {/* <News /> */}
      <Footer />
      {/* <ModalIR /> */}
    </Flowbite>
    </>
  )
}

export default Home;
