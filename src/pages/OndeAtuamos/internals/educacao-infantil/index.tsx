
import React from 'react';
import { Footer, Header } from '../../../../shared';
import { sendEvent } from '../../../../analytics';

const EducacaoInfantil: React.FunctionComponent = () => {
  React.useEffect(() => {
    sendEvent('Page View', {
      'Page Name': 'Educação Infantil'
    })
  }, []);

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Educação</h1>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                    A Prefeitura Municipal de Limoeiro em conformidade com as diretrizes das Políticas Públicas de Educação, viabiliza atendimento na modalidade de Educação Infantil. Nesse contexto, o Instituto Padre Luís Cecchin através da celebração de um ACORDO DE COOPERAÇÃO com o município, disponibiliza os espaços físicos do Centro Municipal de Educação Infantil Padre Luís Cecchin e do Centro Municipal de Educação Infantil Sagrada Família.
                    </p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Educação Infantil</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                    Tendo a criança no centro de todas as atividades desenvolvidas, os Centros Municipais de Educação Infantil Padre Luís Cecchin e Sagrada Família em conformidade com as diretrizes das Políticas Públicas de Educação, a Prefeitura Municipal de Limoeiro através do ACORDO DE COOPERAÇÃO oportuniza 257 atendimentos para a faixa etária dos 06 meses aos 4 anos e 11 meses.
                    </p>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                    Na modalidade integral, as crianças têm uma rotina diária compostas por intencionalidades pedagógicas, socioemocionais, biológicas, cognitiva, dentre outras que são norteadas por documentos como: BNCC, Base Nacional Comum Curricular e o Currículo de Pernambuco que trazem como eixos estruturantes da Educação Infantil: as interações e as brincadeiras.
                    </p>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                    O cuidar e o educar como funções indissociáveis da educação infantil, fazem com que as experiências pedagógicas vivenciadas pelas crianças sejam garantidoras dos direitos de aprendizagem e desenvolvimento com equidade e inclusão. A alimentação, brincadeiras, descanso, higiene, atividades lúdicas, jogos, estímulos sensoriais e vivências de experiências que compõem a rotina assegurados pela estrutura física limpa, segura, organizada e acolhedora que permite a participação das crianças e sua relação com os pares que proporciona autonomia nas atividades individuais e grupais.
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
