import React from 'react';
import './App.css';
import Router from './router';
import { WhatsApp } from './shared';
import { MixpanelInit } from './analytics';

const App: React.FunctionComponent = () => {
  MixpanelInit(); // inicializa o Mixpanel

  return (
    <>
      <Router />
      <WhatsApp />
    </>
  )
}

export default App
