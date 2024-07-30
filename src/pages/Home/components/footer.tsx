import React from 'react';
import { Footer as FlowbiteFooter } from 'flowbite-react';
import { BsFacebook, BsInstagram } from "react-icons/bs";
import LogoImage from '../../../images/logo-iplc.svg';
import PobresServosLogoImage from '../../../images/pobres-servos-horizontal.svg';

const Footer: React.FunctionComponent = () => {

  return (
    <FlowbiteFooter container>
      <div className="w-full">
        <FlowbiteFooter.Divider />
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 items-center">
                <FlowbiteFooter.Brand
                    href="#"
                    src={LogoImage}
                    alt="IPLC Logo"
                    className='flex items-center justify-center'
                    />
                <FlowbiteFooter.Brand
                  href="https://www.pobresservos.org.br"
                  src={PobresServosLogoImage}
                  alt="Pobres Servos"
                  className='flex items-center justify-center'
                />
            </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 items-center">
            <FlowbiteFooter.Copyright href="#" by="IPLC. Todos os direitos reservados." year={2024} />
            <div className="mt-4 flex space-x-2 sm:mt-1 justify-center">
                <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
                <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
            </div>
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
};
export default Footer;
