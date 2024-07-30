import React from 'react';
import LogoImage from '../../../images/logo-default.svg';
import { Button, Navbar } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import ROUTER_PATHS from '../../../router/constants';

const Header: React.FunctionComponent = () => {
  const navigate = useNavigate();
  // fazer um state para pegar qual pagina está ativa

  return (
    <Navbar>
      <Navbar.Brand href="#">
        <img src={LogoImage} className="mr-3 h-6 sm:h-9" alt="IPLC" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">IPLC</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button onClick={() => navigate(ROUTER_PATHS.HOME)}>
            Faça parte
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.HOME)} active>
          Home
        </Navbar.Link>
        <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.SOBRE_NOS)}>Sobre nós</Navbar.Link>
        <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.PE_LUIS_CECCHIN)}>Padre Luis Cecchin</Navbar.Link>
        <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.ONDE_ATUAMOS)}>Onde atuamos</Navbar.Link>
        <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.NOTICIAS)}>Notícias</Navbar.Link>
        <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.TRANSPARENCIA)}>Transparência</Navbar.Link>
        <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.CONTATO)}>Contato</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
