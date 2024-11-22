
import React from 'react';
import { Footer, Header } from '../../../../shared';

const EducacaoInfantil: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Educação Infatil</h1>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Educação</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">
                    A Prefeitura Municipal de Limoeiro em conformidade com as diretrizes das Políticas Públicas de
Educação, viabiliza atendimento na modalidade de Educação Infantil. Nesse contexto, o Instituto
Padre Luís Cecchin através da celebração de um ACORDO DE COOPERAÇÃO com o
município, disponibiliza os espaços físicos do Centro Municipal de Educação Infantil Padre Luís
Cecchin e do Centro Municipal de Educação Infantil Sagrada Família.
                    </p>
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default EducacaoInfantil;
