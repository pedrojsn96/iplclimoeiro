
import React from 'react';
import { Footer, Header } from '../../../../shared';
import MapLimoeiro from "../../../../images/map-limoeiro.png";

const OndeAtuamos: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Sobre nós</h1>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Onde atuamos</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">O Instituto Padre Luis Checcin atua no município de Limoeiro, situado na região do Agreste Setentrional, em Pernambuco.</p>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Com uma vasta área de 277,57 km², Limoeiro está localizado a 77 quilômetros da capital, Recife.</p>
                </div>
                <img className="w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={MapLimoeiro} width={500} alt="dashboard feature image" />
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default OndeAtuamos;
