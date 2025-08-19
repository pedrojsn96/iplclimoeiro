import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
import ROUTER_PATHS from '../../../router/constants';

import AboutImage from "../../../images/iplc-about.png";
import { sendEvent } from '../../../analytics';

const AboutUs: React.FunctionComponent = () => {
    const navigate = useNavigate();

    const handleAtividades = () => {
        sendEvent('Click', {
          'Button Name': 'Conheça nossas atividades',
          'Page Name': 'Home'
        })
        navigate(ROUTER_PATHS.CONTATO);
      };

    return (
        <React.Fragment>
            <section className="bg-gray-50">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    {/* <!-- Row --> */}
                    <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16 items-center">
                        <div className="text-gray-500 sm:text-lg">
                            <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Quem Somos</h2>
                            <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">O Instituto Padre Luis Cecchin é uma instituição filantrópica de natureza civil e caráter beneficente, que atua desde 1970 prestando assistência a crianças, adolescentes, jovens, adultos, idosos e famílias do município de Limoeiro/PE que vivem em situação de exclusão, risco e vulnerabilidade social. Desenvolve atividades, projetos e programas através de ações de inclusão social fundamentado em dois pilares: educação para o protagonismo sustentável e fortalecimento da rede de proteção social, inspirados nas diretrizes do Estatuto da Criança e do Adolescente, com vistas à convivência familiar, respeitando a territorialidade conforme o Sistema Único de Assistência Social - SUAS.</p>
                        </div>
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={AboutImage} alt="crianças atentidas pelo IPLC" />
                    </div>
                    {/* <!-- Row --> */}
                    <div className="gap-1 lg:grid lg:grid-cols-1">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight text-center">Nossos números</h2>
                        </div>
                    </div>
                    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-6">
                        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3">
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl md:text-4xl font-rubikBold">6</dt>
                                <dd className="font-rubikLight text-gray-500">modalidades de atendimento</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl md:text-4xl font-rubikBold">1036</dt>
                                <dd className="font-rubikLight text-gray-500">beneficiários diretos</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl md:text-4xl font-rubikBold">2119</dt>
                                <dd className="font-rubikLight text-gray-500">beneficiários indiretos</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="flex justify-center">
                        <Button color='primary' size="sm" onClick={handleAtividades}>
                            <span className="font-rubikLight text-white">Conheça nossas atividades</span>
                        </Button>
                    </div>
                </div>
            </section>
        </React.Fragment>
  );
};
export default AboutUs;