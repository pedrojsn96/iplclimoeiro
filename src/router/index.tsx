import React from 'react';
import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import { Contato, Home, Noticias, OndeAtuamos, PeLuisCecchin, SobreNos, Transparencia, Parceiros } from '../pages';
import ROUTER_PATHS from './constants';
import { ProjetoCaridade, EducacaoInfantil, FormacaoGeral, ServicoConvivencia, Sociofamiliar } from '../pages/OndeAtuamos/internals';
import { NossaHistoria, Timeline, OndeAtuamos as SobreOndeAtuamos, ModeloGestao } from '../pages/SobreNos/internals';
import { Beatificacao, Centenario, Memorial, Testamentos } from '../pages/PeLuisCecchin/internals';

const Router: React.FunctionComponent = () => {
  return (
      <BrowserRouter basename='/my-vite-app'>
        <Routes>
            <Route index path={ROUTER_PATHS.HOME} Component={Home}/>
            <Route path={ROUTER_PATHS.SOBRE_NOS} Component={SobreNos} />
            <Route path={ROUTER_PATHS.SOBRE_NOS_HISTORIA} Component={NossaHistoria} />
            <Route path={ROUTER_PATHS.SOBRE_NOS_TIMELINE} Component={Timeline} />
            <Route path={ROUTER_PATHS.SOBRE_NOS_ATUACAO} Component={SobreOndeAtuamos} />
            <Route path={ROUTER_PATHS.SOBRE_NOS_GESTAO} Component={ModeloGestao} />
            <Route path={ROUTER_PATHS.PE_LUIS_CECCHIN} Component={PeLuisCecchin} />
            <Route path={ROUTER_PATHS.PE_LUIS_CECCHIN_TESTAMENTOS} Component={Testamentos} />
            <Route path={ROUTER_PATHS.PE_LUIS_CECCHIN_MEMORIAL} Component={Memorial} />
            <Route path={ROUTER_PATHS.PE_LUIS_CECCHIN_CAUSA} Component={Beatificacao} />
            <Route path={ROUTER_PATHS.PE_LUIS_CECCHIN_CENTENARIO} Component={Centenario} />
            <Route path={ROUTER_PATHS.ATIVIDADES} Component={OndeAtuamos} />
            <Route path={ROUTER_PATHS.ATIVIDADES_CARIDADE} Component={ProjetoCaridade} />
            <Route path={ROUTER_PATHS.ATIVIDADES_SOCIOFAMILIAR} Component={Sociofamiliar} />
            <Route path={ROUTER_PATHS.ATIVIDADES_FORMACAO} Component={FormacaoGeral} />
            <Route path={ROUTER_PATHS.ATIVIDADES_CONVIVENCIA} Component={ServicoConvivencia} />
            <Route path={ROUTER_PATHS.ATIVIDADES_INFANTIL} Component={EducacaoInfantil} />
            <Route path={ROUTER_PATHS.PARCEIROS} Component={Parceiros} />
            <Route path={ROUTER_PATHS.DOACAO} Component={Home} />
            <Route path={ROUTER_PATHS.NOTICIAS} Component={Noticias} />
            <Route path={ROUTER_PATHS.TRANSPARENCIA} Component={Transparencia} />
            <Route path={ROUTER_PATHS.CONTATO} Component={Contato} />
            {/* add tela de noticias */}
            {/* criar uma pagina de doação */}
            <Route path='*' Component={Home} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router;
