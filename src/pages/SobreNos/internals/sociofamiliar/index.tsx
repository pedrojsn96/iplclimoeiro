
import React from 'react';
import { Footer, Header } from '../../../../shared';

const Sociofamiliar: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Sociofamiliar</h1>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Sociofamiliar</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Favorece sustentabilidade através da geração de renda, por meio do acompanhamento às famílias agricultoras, oferecendo terra pronta para o plantio de legumes, verduras e hortaliças, no qual as famílias realizam um trabalho de forma programada, continuada e gratuita, com a finalidade de garantir formação humana, social cristã e política para sua subsistência.</p>
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default Sociofamiliar;
