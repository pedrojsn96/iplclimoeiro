
import React from 'react';
import { Footer, Header } from '../../../../shared';

const FormacaoGeral: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Formação Geral para o Mundo do Trabalho
            </h1>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Cursos Profissionalizantes</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">
                    O Instituto Padre Luís Cecchin, buscando atender às demandas dos jovens do município de
Limoeiro/PE, oferece programas de qualificação profissional com foco na inserção no mercado de
trabalho, contemplando as modalidades de Corte e Costura, Costura Industrial, Informática Básica,
Informática Avançada, Marcenaria e Tornearia Mecânica. Essas atividades, além de proporcionar o
aprendizado técnico e específico de cada curso, promovem a convivência social e a participação
cidadã, visando à formação integral dos participantes para o mundo do trabalho. O objetivo é
fortalecer os vínculos familiares e comunitários, além de desenvolver oficinas formativas que
abordam temas transversais relevantes para a juventude, integrando aspectos profissionais e sociais
na formação dos beneficiários.
                    </p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Agricultura Familiar</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">
                    O Instituto Padre Luís Cecchin desenvolve um projeto voltado para a promoção da geração de renda
junto a jovens, adultos e suas famílias, denominado de Agricultura. Nesse projeto, são
disponibilizados espaço de terra para que as famílias realizem o cultivo de alimentos. A partir da
colheita e comercialização dos produtos pelos agricultores, essas famílias conseguem gerar renda e
garantir sua subsistência, promovendo autonomia econômica e fortalecendo os vínculos
comunitários por meio do trabalho agrícola.
                    </p>
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default FormacaoGeral;
