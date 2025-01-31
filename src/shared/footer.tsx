import React from 'react';
import { Footer as FlowbiteFooter, FooterDivider } from 'flowbite-react';
import { BsFacebook, BsInstagram } from "react-icons/bs";
import LogoImage from '../images/logo-iplc.svg';
import PobresServosLogoImage from '../images/pobres-servos-horizontal.svg';

const Footer: React.FunctionComponent = () => {

  return (
    <FlowbiteFooter container>
      <div className="w-full">
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 items-center">
              <a href='#'>
                <img className="w-full mb-4 rounded-lg lg:mb-0 lg:flex max-h-20 max-w-20" src={LogoImage} alt="IPLC Logo" />
              </a>
              <a href='https://www.pobresservos.org.br/' target='_blank'>
                <img className="w-full mb-4 rounded-lg lg:mb-0 lg:flex max-h-36 max-w-36" src={PobresServosLogoImage} alt="IPLC Logo" />
              </a>
            </div>
        </div>
        <div className="flex items-center justify-center mb-2">
          <div className="grid grid-cols-1 items-center">
            <a className='font-rubikLight hover:text-iplc text-base' href='https://iplclimoeiro.org.br/view/login.php'>Área Administrativa</a>
          </div>
        </div>
        {/* <FooterDivider /> */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 items-center">
            <FlowbiteFooter.Copyright href="" by="IPLC. Todos os direitos reservados." year={2025} className="font-rubikMedium" />
            <div className="mt-4 flex space-x-2 sm:mt-1 justify-center">
                <FlowbiteFooter.Icon href="https://www.facebook.com/IPLCLimoeiro.pe" target='_blank' icon={BsFacebook} />
                <FlowbiteFooter.Icon href="https://www.instagram.com/iplclimoeiro/" target='_blank' icon={BsInstagram} />
            </div>
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
};
export default Footer;
