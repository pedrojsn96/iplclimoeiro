import React from 'react';
import LogoImage from '../images/logo-iplc.svg';
import { Button, Navbar } from "flowbite-react";
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
        <Button color="primary" onClick={() => navigate(ROUTER_PATHS.HOME)} size="lg">
            <span className="font-rubikLight text-white">Faça parte</span>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.HOME)} active={pathname === ROUTER_PATHS.HOME} className='font-rubikRegular hover:text-iplc'>
          Home
        </Navbar.Link>
        <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.SOBRE_NOS)} className="font-rubikRegular hover:text-iplc" active={pathname === ROUTER_PATHS.SOBRE_NOS}>Sobre nós</Navbar.Link>
        <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.PE_LUIS_CECCHIN)} className="font-rubikRegular hover:text-iplc" active={pathname === ROUTER_PATHS.PE_LUIS_CECCHIN}>Padre Luis Cecchin</Navbar.Link>
        <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.ONDE_ATUAMOS)} className="font-rubikRegular hover:text-iplc" active={pathname === ROUTER_PATHS.ONDE_ATUAMOS}>Onde atuamos</Navbar.Link>
        {/* <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.NOTICIAS)} className="font-rubikRegular" active={pathname === ROUTER_PATHS.NOTICIAS}>Notícias</Navbar.Link> */}
        <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.TRANSPARENCIA)} className="font-rubikRegular hover:text-iplc" active={pathname === ROUTER_PATHS.TRANSPARENCIA}>Transparência</Navbar.Link>
        {/* <Navbar.Link style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTER_PATHS.CONTATO)} className="font-rubikRegular" active={pathname === ROUTER_PATHS.CONTATO}>Contato</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
