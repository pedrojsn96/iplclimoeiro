
import React from 'react';
import { Footer, Header } from '../../shared';

const OndeAtuamos: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <section className="bg-white">
          <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Onde atuamos</h1>
              {/* <!-- Row --> */}
              <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                  <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Projeto Caridade</h2>
                      <p className="mb-8 font-light lg:text-xl">Tem relevância pública e social com ações que visam o fortalecimento de vínculos familiares e comunitários que complementam o trabalho de Proteção Social com adultos, idosos e famílias, integrando e desenvolvendo projetos gratuitos nas áreas da assistência social, fortalecimento da educação, meio ambiente, cultura, lazer e artes. Além de estimular o voluntariado.
Com ações:
Bazar - doações de vestuário, calçados, brinquedos, entre outros para o público vulnerável
Dia do Pão - Realização de um café da manhã aberto a todos que chegarem ao Projeto caridade e distribuição de pães para o complemento da refeição familiar.
Sopão – Para o atendimento das necessidades de famílias de maior necessidade alimentar previamente acompanhadas pela assistente social são cadastradas para receber a doação da sopa.
Pastoral da Escuta – atividade de acolhida, escuta e aconselhamento para o público vulnerável que apresenta interesse e necessidade.</p>
                  </div>
              </div>
              {/* <!-- Row --> */}
              <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                  <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Atividade Sociofamiliar</h2>
                      <p className="mb-8 font-light lg:text-xl">Favorece sustentabilidade através da geração de renda, por meio do acompanhamento às famílias agricultoras, oferecendo terra pronta para o plantio de legumes, verduras e hortaliças, no qual as famílias realizam um trabalho de forma programada, continuada e gratuita, com a finalidade de garantir formação humana, social cristã e política para sua subsistência.</p>
                  </div>
              </div>
              {/* <!-- Row --> */}
              <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                  <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Formação Geral para o Mundo do Trabalho</h2>
                      <p className="mb-8 font-light lg:text-xl">Promove formação profissional e cidadã aos adolescentes, jovens e adultos com faixa etária dos 16 aos 59 anos que vivem em situação de risco e vulnerabilidade social, ofertando cursos gratuitos que possibilitam a atuação no mercado de trabalho com qualidade e responsabilidade.</p>
                  </div>
              </div>
              {/* <!-- Row --> */}
              <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                  <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Serviçp de Convivência e Fortalecimento de Vínculos</h2>
                      <p className="mb-8 font-light lg:text-xl">Atua diretamente no atendimento integral de crianças, adolescentes e suas famílias em situação de risco e vulnerabilidade social no fortalecimento dos vínculos familiares e comunitários, com faixa etária dos 6 aos 15 anos, estimulando o desenvolvimento de suas capacidades através da vivência de oficinas que promotoras de protagonismo, autonomia e convívio social para o exercício pleno da cidadania.

Promovendo oficinas de: Formação humano/Cristã, Inclusão Digital, Educação Ambiental, Oficina Esportiva, Oficina de Música, Oficina de Horticultura, Oficina de Artes, Língua Estrangeira (Inglês), Capoeira, biblioteca e diariamente refeições nutritivas.</p>
                  </div>
              </div>
              {/* <!-- Row --> */}
              <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                  <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Educaçãp Infantil</h2>
                      <p className="font-light lg:text-xl">A Educação Infantil se vincula a dois espaços, a Creche Pe. Luis Cecchin atende 95 crianças de 06 meses a 03 anos de idade em período integral, e na Creche Sagrada Família são atendidas 105 crianças de 06 meses a 05 anos de idade em período integral e semi integral, oferecendo atividades pedagógicas, recreação, alimentação, higiene pessoal numa formação de valores para o desenvolvimento das habilidades e potencialidades da criança.</p>
                  </div>
              </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default OndeAtuamos;
