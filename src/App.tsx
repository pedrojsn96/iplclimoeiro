import React from 'react';
import './App.css';
import Router from './router';
import { WhatsApp } from './shared';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router />
      <WhatsApp />
    </>
  )
}

export default App
