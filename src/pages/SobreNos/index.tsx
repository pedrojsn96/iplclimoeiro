
import React from 'react';
import { Footer, Header } from '../../shared';
import AboutImage from "../../images/iplc-about.png";
import MissaoImage from "../../images/iplc-missao.png";
import VisaoImage from "../../images/iplc-visao.png";
import ValoresImage from "../../images/iplc-valores.png";
import { Accordion } from 'flowbite-react';

const SobreNos: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Sobre nós</h1>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid md:grid-cols-2 md:gap-16 items-center">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Quem Somos</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">O Instituto Padre Luis Cecchin é uma instituição filantrópica de natureza civil e caráter beneficente, que atua desde 1970 prestando assistência a crianças, adolescentes, jovens de suas famílias em situação de risco e vulnerabilidade social. Oferecendo assistência, formação humana e cristã, educação e profissionalização, buscando interferir nas estruturas sociais para o exercício da cidadania, podendo ser um agente de transformação a fim de integrar e apostar como sujeitos da nova sociedade, pautados na dimensão dos valores da vida, ética, espiritualidade, respeito, qualidade, honestidade, espírito de família, formação integral, profissionalismo, responsabilidade, simplicidade e solidariedade.</p>
                </div>
                <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={AboutImage} alt="dashboard feature image" />
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="flex justify-center">
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex max-h-72 max-w-72" src={MissaoImage} alt="feature image 2" />
                </div>
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Missão</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">Promover crianças, adolescentes e famílias oferecendo-lhes assistência, formação humana e cristã, educação e profissionalização tendo em vista uma consciência crítica da realidade e do valor da pessoa, buscando interferir nas estruturas sociais para o exercício da cidadania.</p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Visão</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">Ser um agente de transformação a fim de integrar crianças, adolescentes, jovens e famílias em situação de vulnerabilidade social apostando como sujeitos da nova sociedade, economicamente desfavorecidas, apostando como sujeitos da nova sociedade.</p>
                </div>
                <div className="flex justify-center">
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex max-h-72 max-w-72" src={VisaoImage} alt="dashboard feature image" />
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-2 lg:grid-rows-1 xl:gap-16">
                <div className="flex justify-center">
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex max-h-72 max-w-72" src={ValoresImage} alt="feature image 2" />
                </div>
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Valores</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">O ser humano é a nossa preocupação fundamental onde toda nossa ação deve estar pautada na busca da sua realização plena e em todos os sentidos.</p>
                </div>
            </div>
            
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SobreNos;
