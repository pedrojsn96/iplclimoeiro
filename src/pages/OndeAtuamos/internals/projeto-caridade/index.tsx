
import React from 'react';
import { Footer, Header } from '../../../../shared';

const ProjetoCaridade: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-1 mx-auto space-y-1">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Projeto Caridade</h1>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Projeto Caridade</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Tem relevância pública e social com ações que visam o fortalecimento de vínculos familiares e comunitários que complementam o trabalho de Proteção Social com adultos, idosos e famílias, integrando e desenvolvendo projetos gratuitos nas áreas da assistência social, fortalecimento da educação, meio ambiente, cultura, lazer e artes. Além de estimular o voluntariado.</p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Bazar</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Doações de vestuário, calçados, brinquedos, entre outros para o público vulnerável.</p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Dia do Pão</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Realização de um café da manhã aberto a todos que chegarem ao Projeto caridade e distribuição de pães para o complemento da refeição familiar.</p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Sopão</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify"> Para o atendimento das necessidades de famílias de maior necessidade alimentar previamente acompanhadas pela assistente social são cadastradas para receber a doação da sopa.</p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Pastoral da Escuta</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">atividade de acolhida, escuta e aconselhamento para o público vulnerável que apresenta interesse e necessidade.</p>
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default ProjetoCaridade;
