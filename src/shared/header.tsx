import React from 'react';
import LogoImage from '../images/logo-iplc.svg';
import { Button, Navbar, MegaMenu } from "flowbite-react";
import { useLocation, useNavigate } from 'react-router-dom';
import ROUTER_PATHS from '../router/constants';

const Header: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Navbar className="grid max-w-screen-xl px-4 pt-8 pb-8 mx-auto items-center">
    <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.HOME)}>
        <img className="w-full mb-4 rounded-lg lg:mb-0 lg:flex max-h-20 max-w-20" src={LogoImage} alt="IPLC Logo" />
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Button color="primary" onClick={() => navigate(ROUTER_PATHS.CONTATO)} size="lg">
          <span className="font-rubikLight text-white">Faça parte</span>
      </Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.HOME)} active={pathname === ROUTER_PATHS.HOME} className='font-rubikRegular hover:text-iplc'>
        Home
      </Navbar.Link>
      <Navbar.Link style={{ cursor: 'pointer' }} className="font-rubikRegular hover:text-iplc" active={pathname.includes(ROUTER_PATHS.SOBRE_NOS)}>
        <MegaMenu.Dropdown toggle={<>Sobre nós</>}>
          <ul className="grid grid-cols-1">
            <div className="space-y-4 p-4">
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.SOBRE_NOS)} className='font-rubikRegular hover:text-iplc'>Sobre nós</Navbar.Link></li>
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.SOBRE_NOS_HISTORIA)} className='font-rubikRegular hover:text-iplc'>Nossa história</Navbar.Link></li>
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.SOBRE_NOS_TIMELINE)} className='font-rubikRegular hover:text-iplc'>Linha do tempo</Navbar.Link></li>
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.SOBRE_NOS_ATUACAO)} className='font-rubikRegular hover:text-iplc'>Onde atuamos</Navbar.Link></li>
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.SOBRE_NOS_GESTAO)} className='font-rubikRegular hover:text-iplc'>Modelo de gestão</Navbar.Link></li>
            </div>
          </ul>
        </MegaMenu.Dropdown>
      </Navbar.Link>
      <Navbar.Link style={{ cursor: 'pointer' }} className="font-rubikRegular hover:text-iplc" active={pathname.includes(ROUTER_PATHS.PE_LUIS_CECCHIN)}>
        <MegaMenu.Dropdown toggle={<>Servo de Deus Luís Cecchin</>}>
          <ul className="grid grid-cols-1">
            <div className="space-y-4 p-4">
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.PE_LUIS_CECCHIN)} className='font-rubikRegular hover:text-iplc'>Servo de Deus Luís Cecchin</Navbar.Link></li>
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.PE_LUIS_CECCHIN_TESTAMENTOS)} className='font-rubikRegular hover:text-iplc'>Testamentos</Navbar.Link></li>
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.PE_LUIS_CECCHIN_MEMORIAL)} className='font-rubikRegular hover:text-iplc'>Memorial</Navbar.Link></li>
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.PE_LUIS_CECCHIN_CAUSA)} className='font-rubikRegular hover:text-iplc'>Abertura da Causa de Beatificação</Navbar.Link></li>
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.PE_LUIS_CECCHIN_CENTENARIO)} className='font-rubikRegular hover:text-iplc'>Centenário</Navbar.Link></li>
            </div>
          </ul>
        </MegaMenu.Dropdown>
      </Navbar.Link>
      <Navbar.Link style={{ cursor: 'pointer' }} className="font-rubikRegular hover:text-iplc" active={pathname.includes(ROUTER_PATHS.ATIVIDADES)}>
        <MegaMenu.Dropdown toggle={
          <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.ATIVIDADES)} className='font-rubikRegular hover:text-iplc'>Atividades</Navbar.Link>
        }>
          <ul className="grid grid-cols-1">
            <div className="space-y-4 p-4">
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.ATIVIDADES)} className='font-rubikRegular hover:text-iplc'>Atividades</Navbar.Link></li>
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.ATIVIDADES_CARIDADE)} className='font-rubikRegular hover:text-iplc'>Projeto Caridade</Navbar.Link></li>
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.ATIVIDADES_SOCIOFAMILIAR)} className='font-rubikRegular hover:text-iplc'>Atividade Sociofamiliar</Navbar.Link></li>
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.ATIVIDADES_FORMACAO)} className='font-rubikRegular hover:text-iplc'>Formação Geral para o Mundo do Trabalho</Navbar.Link></li>
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.ATIVIDADES_CONVIVENCIA)} className='font-rubikRegular hover:text-iplc'>Serviço de Convivência e Fortalecimento de Vínculos</Navbar.Link></li>
              <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.ATIVIDADES_INFANTIL)} className='font-rubikRegular hover:text-iplc'>Educação Infantil</Navbar.Link></li>
            </div>
          </ul>
        </MegaMenu.Dropdown>
      </Navbar.Link>
      <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.PARCEIROS)} className="font-rubikRegular hover:text-iplc" active={pathname === ROUTER_PATHS.PARCEIROS}>Parceiros</Navbar.Link>
      <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.DOACAO)} className="font-rubikRegular hover:text-iplc" active={pathname === ROUTER_PATHS.DOACAO}>Como doar</Navbar.Link>
      {/* <Navbar.Link style={{ cursor: 'pointer' }} active={pathname.includes(ROUTER_PATHS.DOACAO)}>
        <MegaMenu.Dropdown toggle={<>Como doar</>}>
            <ul className="grid grid-cols-1">
              <div className="space-y-4 p-4">
                <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.DOACAO)} className='font-rubikRegular hover:text-iplc'>Como doar</Navbar.Link></li>
                <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.DOACAO)} className='font-rubikRegular hover:text-iplc'>Seja um benfeitor</Navbar.Link></li>
                <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.DOACAO)} className='font-rubikRegular hover:text-iplc'>Apadrinhamento afetivo</Navbar.Link></li>
                <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.DOACAO)} className='font-rubikRegular hover:text-iplc'>Voluntariado</Navbar.Link></li>
                <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.DOACAO)} className='font-rubikRegular hover:text-iplc'>Doação de alimentos</Navbar.Link></li>
                <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.DOACAO)} className='font-rubikRegular hover:text-iplc'>Projetos</Navbar.Link></li>
                <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.DOACAO)} className='font-rubikRegular hover:text-iplc'>Imposto de renda PF</Navbar.Link></li>
                <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.DOACAO)} className='font-rubikRegular hover:text-iplc'>Imposto de renda PJ</Navbar.Link></li>
                <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.DOACAO)} className='font-rubikRegular hover:text-iplc'>Campanhas</Navbar.Link></li>
                <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.DOACAO)} className='font-rubikRegular hover:text-iplc'>Agende uma visita</Navbar.Link></li>
              </div>
            </ul>
          </MegaMenu.Dropdown>
      </Navbar.Link> */}
      <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.NOTICIAS)} className="font-rubikRegular" active={pathname === ROUTER_PATHS.NOTICIAS}>Notícias</Navbar.Link>
      <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.TRANSPARENCIA)} className="font-rubikRegular hover:text-iplc" active={pathname === ROUTER_PATHS.TRANSPARENCIA}>Transparência</Navbar.Link>
      {/* <Navbar.Link style={{ cursor: 'pointer' }} className="font-rubikRegular hover:text-iplc" active={pathname.includes(ROUTER_PATHS.TRANSPARENCIA)}>
        <MegaMenu.Dropdown toggle={<>Transparência</>}>
            <ul className="grid grid-cols-1">
              <div className="space-y-4 p-4">
                <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.TRANSPARENCIA)} className='font-rubikRegular hover:text-iplc'>Transparência</Navbar.Link></li>
                <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.TRANSPARENCIA)} className='font-rubikRegular hover:text-iplc'>Regulamento de compras e serviços</Navbar.Link></li>
                <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.TRANSPARENCIA)} className='font-rubikRegular hover:text-iplc'>Parcerias</Navbar.Link></li>
                <li><Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.TRANSPARENCIA)} className='font-rubikRegular hover:text-iplc'>Relatórios sociais</Navbar.Link></li>
              </div>
            </ul>
          </MegaMenu.Dropdown>
      </Navbar.Link> */}
      <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.CONTATO)} className="font-rubikRegular hover:text-iplc" active={pathname === ROUTER_PATHS.CONTATO}>Contato</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  );
};
export default Header;
