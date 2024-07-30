import React from 'react';
import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import { Contato, Home, Noticias, OndeAtuamos, PeLuisCecchin, SobreNos, Transparencia } from '../pages';
import ROUTER_PATHS from './constants';

const Router: React.FunctionComponent = () => {
  return (
      <BrowserRouter basename='/my-vite-app'>
        <Routes>
            <Route index path={ROUTER_PATHS.HOME} Component={Home}/>
            <Route path={ROUTER_PATHS.SOBRE_NOS} Component={SobreNos} />
            <Route path={ROUTER_PATHS.PE_LUIS_CECCHIN} Component={PeLuisCecchin} />
            <Route path={ROUTER_PATHS.ONDE_ATUAMOS} Component={OndeAtuamos} />
            <Route path={ROUTER_PATHS.NOTICIAS} Component={Noticias} />
            <Route path={ROUTER_PATHS.TRANSPARENCIA} Component={Transparencia} />
            <Route path={ROUTER_PATHS.CONTATO} Component={Contato} />
            <Route path='*' Component={Home} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router;
