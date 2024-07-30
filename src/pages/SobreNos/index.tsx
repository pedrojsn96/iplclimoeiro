
import React from 'react';
import { Footer, Header } from '../../shared';
import FeatureImage1 from "../../images/feature-1.png";
import FeatureImage2 from "../../images/feature-2.png";

const SobreNos: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <section className="bg-white">
          <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Sobre nós</h1>
              {/* <!-- Row --> */}
              <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                  <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Quem Somos</h2>
                      <p className="mb-8 font-light lg:text-xl">O Instituto Padre Luis Cecchin é uma instituição filantrópica de natureza civil e caráter beneficente, que atua desde 1970 prestando assistência a crianças, adolescentes, jovens de suas famílias em situação de risco e vulnerabilidade social. Oferecendo assistência, formação humana e cristã, educação e profissionalização, buscando interferir nas estruturas sociais para o exercício da cidadania, podendo ser um agente de transformação a fim de integrar e apostar como sujeitos da nova sociedade, pautados na dimensão dos valores da vida, ética, espiritualidade, respeito, qualidade, honestidade, espírito de família, formação integral, profissionalismo, responsabilidade, simplicidade e solidariedade.</p>
                  </div>
                  <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={FeatureImage1} alt="dashboard feature image" />
              </div>
              {/* <!-- Row --> */}
              <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                  <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={FeatureImage2} alt="feature image 2" />
                  <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Nossa Missão</h2>
                      <p className="mb-8 font-light lg:text-xl">Promover crianças, adolescentes e famílias oferecendo-lhes assistência, formação humana e cristã, educação e profissionalização tendo em vista uma consciência crítica da realidade e do valor da pessoa, buscando interferir nas estruturas sociais para o exercício da cidadania.</p>
                  </div>
              </div>
              {/* <!-- Row --> */}
              <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                  <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Nossa Visão</h2>
                      <p className="mb-8 font-light lg:text-xl">Ser um agente de transformação a fim de integrar crianças, adolescentes, jovens e famílias em situação de vulnerabilidade social apostando como sujeitos da nova sociedade, economicamente desfavorecidas, apostando como sujeitos da nova sociedade.</p>
                  </div>
                  <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={FeatureImage1} alt="dashboard feature image" />
              </div>
              {/* <!-- Row --> */}
              <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                  <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={FeatureImage2} alt="feature image 2" />
                  <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Nossos Valores</h2>
                      <p className="mb-8 font-light lg:text-xl">O ser humano é a nossa preocupação fundamental onde toda nossa ação deve estar pautada na busca da sua realização plena e em todos os sentidos.</p>
                  </div>
              </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default SobreNos;
