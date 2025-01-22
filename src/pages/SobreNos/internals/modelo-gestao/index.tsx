
import React from 'react';
import { Footer, Header } from '../../../../shared';
import ModeloGestaoImg from "../../../../images/modelo-gestao.png";

const ModeloGestao: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
          <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Sobre nós</h1>
          {/* <!-- Row --> */}
          <div className="gap-1 lg:grid lg:grid-cols-1">
              <div className="text-gray-500 sm:text-lg">
                  <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Gestão</h2>
                  {/* adicionar a imagem */}
                  {/* <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">O Instituto Padre Luis Checcin tem como estilo uma gestão colegiada focada em proporcionar um ambiente organizacional motivador visando sempre a melhoria nos serviços prestados.
                  Assim desenvolve sua gestão por meio do Diretor Presidente com a participação do Conselho Operacional e das coordenações dos setores.</p> */}
                  <div className="flex justify-start gap-6">
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">O Instituto Padre Luis Checcin tem como estilo uma gestão colegiada focada em proporcionar um ambiente organizacional motivador visando sempre a melhoria nos serviços prestados.
                    Assim desenvolve sua gestão por meio do Diretor Presidente com a participação do Conselho Operacional e das coordenações dos setores.</p>
                    <img className="w-full mb-4 rounded-lg lg:mb-0 lg:flex max-h-56 max-w-56" src={ModeloGestaoImg} alt="modelo de gestao" />
                  </div>
              </div>
          </div>
          {/* <!-- Row --> */}
          {/* <div className="gap-1 lg:grid lg:grid-cols-1">
            <div className="text-gray-500 sm:text-lg">
              <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Presidente e Diretor</h2>
              <div className="flex justify-start gap-6">
                <img className="w-full mb-4 rounded-lg lg:mb-0 lg:flex max-h-48 max-w-48" src={MapLimoeiro} alt="feature image 2" />
                <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">O atual Presidente e Diretor é Padre Adelmo Cagliari.</p>
              </div>
            </div>
          </div> */}
          {/* <!-- Row --> */}
          {/* <div className="gap-1 lg:grid lg:grid-cols-1">
            <div className="text-gray-500 sm:text-lg">
              <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Conselho Operacional</h2>
              <div className="flex justify-start gap-6">
                <img className="w-full mb-4 rounded-lg lg:mb-0 lg:flex max-h-48 max-w-48" src={MapLimoeiro} alt="feature image 2" />
                <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                O conselho operacional ..... <br/><br/>
                Nome 1 - Responsabilidade<br/>
                Nome 1 - Responsabilidade<br/>
                Nome 1 - Responsabilidade<br/>
                Nome 1 - Responsabilidade<br/>
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ModeloGestao;
