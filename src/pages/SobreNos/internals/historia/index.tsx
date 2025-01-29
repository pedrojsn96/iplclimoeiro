
import React from 'react';
import { Footer, Header } from '../../../../shared';
import { sendEvent } from '../../../../analytics';

const NossaHistoria: React.FunctionComponent = () => {
  React.useEffect(() => {
    sendEvent('Page View', {
      'Page Name': 'Nossa História'
    })
  }, []);

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Sobre nós</h1>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Nossa História</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">O Centro de Formação de Menores, atual Instituto Padre Luis Cecchin, é uma entidade filantrópica, de natureza civil, de caráter beneficente, sem fins lucrativos, suas atividades estão pautadas diretamente para o atendimento de crianças, adolescentes, jovens, adultos, idosos e famílias em situação de risco e vulnerabilidade social, tendo como missão oferecer-lhes assistência, formação humano e cristã, profissionalização adequada aos tempos, à realidade brasileira e mundial. Foi fundado pelo Pe. Luís Cecchin, sacerdote italiano, nascido na cidade de San Martino de Lupari – Itália, no ano de 1924. <br/></p>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Após sua ordenação sacerdotal, tendo desempenhado o ministério em seu país de origem por alguns anos, o Pe. Luís chegou no Brasil em 26 de maio de 1969, na cidade de Limoeiro, Pernambuco, onde exerceu de modo pleno a sua missão, com o apoio das Irmãs Franciscanas de Maristela, fundo o Centro de Formação de Menores em 1970. <br/></p>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Inicialmente, acolheram 50 crianças, garantindo-lhes a alimentação, o estudo, o lazer e o afeto. Com o aumento do número de crianças atendidas, ampliou-se a infraestrutura, a fim de que atendesse às novas necessidades. Desse modo, em 1974, inaugurou-se o prédio sede da Instituição, que, no mesmo local ainda hoje, continua a missão. <br/></p>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Posteriormente, dada a necessidade, deu início à fundação de Lares Substitutos, a Creche, aos Cursos Profissionalizantes, à Agricultura Familiar de Subsistência, a Moradia Social e à Lavanderia Pública. <br/></p>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Ao findar de sua vida, o Pe. Luís tendo dedicado à missão entre os mais pobres, confiou a administração da entidade à Congregação dos Pobres Servos da Divina Providência, assumindo em 2011, passando a ser reconhecido como Instituto Padre Luís Cecchin – IPLC, em homenagem a seu fundador. <br/></p>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Contudo, o Instituto Padre Luís Cecchin continua levando adiante o legado deixado por seu fundador, em prestar assistência a família como um todo, desde a fase inicial até a fase adulta, acolhendo a todos como filhos e filhas de um único Pai misericordioso,interferindo nas estruturas sociais para exercício pleno da cidadania e <b className='text-gray-800'>"Criando caminhos de oportunidades para um novo amanhã".</b></p>
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default NossaHistoria;
