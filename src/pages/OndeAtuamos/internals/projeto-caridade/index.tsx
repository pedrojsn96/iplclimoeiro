
import React from 'react';
import { Footer, Header } from '../../../../shared';
import { sendEvent } from '../../../../analytics';

const ProjetoCaridade: React.FunctionComponent = () => {
    React.useEffect(() => {
        sendEvent('Page View', {
          'Page Name': 'Cantinho Caridade'
        })
      }, []);

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-1 mx-auto space-y-1">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Cantinho Caridade</h1>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Serviço de Convivência e Fortalecimento de Vínculos para jovens e adultos</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Tem relevância pública e social com ações que visam o fortalecimento de vínculos familiares e comunitários que complementam o trabalho de Proteção Social com adultos, idosos e famílias, integrando e desenvolvendo projetos gratuitos nas áreas da assistência social, fortalecimento da educação, meio ambiente, cultura, lazer e artes. Além de estimular o voluntariado, desenvolvem as seguintes ações:</p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Bazar</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Recebe doações de vestuário, calçados, brinquedos, entre outros e distribui em forma de bazar para o público vulnerável.</p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Dia do Pão</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Promove a segurança alimentar ofertando semanalmente uma refeição completa pela manhã. O público frenquentante varia, mas está sempre em número crescente. Famílias, crianças, idosos e mães sempre participam de um momento formativo e partilham do café da manhã em seguida.</p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Sopão</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Famílias previamente acompanhadas que apresentam maior fragilidade alimentar, participam uma vez por semana da distribuição de sopa, podendo contribuir com a janta das famílias. </p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Pastoral da Escuta</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Atividade de acolhimento, escuta e aconselhamento para pessoas que necessitem de apoio psicológico que conta com a ajuda voluntária de profissionais na área.</p>
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default ProjetoCaridade;
