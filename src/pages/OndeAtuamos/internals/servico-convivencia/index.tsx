
import React from 'react';
import { Footer, Header } from '../../../../shared';

const ServicoConvivencia: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Serviço de Convivência e Fortalecimento de Vínculos</h1>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Serviço de Convivência e Fortalecimento de Vínculos para Crianças e Adolescentes</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                    O Serviço de Convivência e Fortalecimento de Vínculos para crianças e adolescentes é uma
modalidade de atendimento que oferece formação para a participação cidadã e o desenvolvimento
do protagonismo e da autonomia de crianças e adolescentes entre 6 e 15 anos, considerando seus
interesses, demandas e potencialidades. As atividades são realizadas no contraturno escolar, com
intervenções que se baseiam em experiências lúdicas, culturais e esportivas, promovendo a
expressão, interação, aprendizagem, sociabilidade e proteção social. Entre as atividades oferecidas,
destacam-se oficinas de inclusão digital, artesanato, horticultura, esportes, recreação, música,
capoeira e formação humano/cristã. Além disso, as ações têm como objetivo o combate ao trabalho
infantil e outras violações de direitos, contribuindo para ressignificar experiências de isolamento e
violação de direitos. Essas atividades proporcionam vivências que favorecem o desenvolvimento da
sociabilidade e a prevenção de situações de risco social. Para garantir a segurança alimentar e
nutricional dos beneficiários, são oferecidas diariamente, por turno, duas refeições balanceadas.
                    </p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Serviço de Convivência e Fortalecimento de Vínculos para Jovens e Adultos</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                    Esta atividade é desenvolvida em articulação com a rede socioassistencial, e sua execução acontece
de maneira estruturada e coordenada, a fim de garantir a proteção social e a integralidade dos
direitos dos beneficiários sendo estas integradas e que vão além da assistência imediata, visando a
promoção de direitos e a emancipação dos beneficiários. Para tal, é um serviço realizado em
grupos, organizado a partir de percursos, de modo a garantir aquisições progressivas, direcionado a
jovens e adultos na faixa etária de 18 a 59 anos. A cada encontro, são realizados momentos
formativos, abordando temas transversais como: cidadania, direitos sociais e protagonismo social,
com o objetivo de promover a conscientização e o empoderamento dos beneficiários a fim de
complementar o trabalho social com famílias e prevenir a ocorrência de situações de risco social.
                    </p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Serviço de Convivência e Fortalecimento de Vínculos para Idosos </h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                    O Serviço de Convivência e Fortalecimento de Vínculos para idosos, direcionado a faixa etária a
partir de 60 anos, tem por foco o desenvolvimento de atividades que contribuam no processo de
envelhecimento saudável, no desenvolvimento da autonomia e de sociabilidades, no fortalecimento
dos vínculos familiares e do convívio comunitário e na prevenção de situações de risco social. A
intervenção é pautada nas características, interesses e demandas dessa faixa etária considerando a
vivência em grupo, as experimentações artísticas, culturais, esportivas e de lazer e a valorização das
experiências vividas constituindo formas privilegiadas de expressão, interação e proteção social.
Com a inclusão de vivências que valorizam suas experiências e que estimulem e potencialize a
condição de escolher e decidir. Este serviço é direcionado aos idosos, com encontros duas vezes por
semana (quartas e sextas-feiras), no turno da manhã. Durante os encontros, são oferecidas duas
refeições balanceadas (lanche da manhã e almoço), em consonância com as necessidades
nutricionais dos idosos
                    </p>
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default ServicoConvivencia;
