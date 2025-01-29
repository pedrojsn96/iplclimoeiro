
import React from 'react';
import { Footer, Header } from '../../shared';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import ROUTER_PATHS from '../../router/constants';
import { sendEvent } from '../../analytics';

const OndeAtuamos: React.FunctionComponent = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        sendEvent('Page View', {
          'Page Name': 'Atividades'
        })
      }, []);

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Onde atuamos</h1>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Educação Infantil</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">A Educação Infantil se vincula a dois espaços, a Creche Pe. Luis Cecchin atende 95 crianças de 06 meses a 03 anos de idade em período integral, e na Creche Sagrada Família são atendidas 105 crianças de 06 meses a 05 anos de idade em período integral e semi integral, oferecendo atividades pedagógicas, recreação, alimentação, higiene pessoal numa formação de valores para o desenvolvimento das habilidades e potencialidades da criança.</p>
                </div>
                <div className="flex justify-center">
                    <Button color='primary' size="sm" onClick={() => navigate(ROUTER_PATHS.ATIVIDADES_INFANTIL)}>
                        <span className="font-rubikLight text-white">Saiba mais</span>
                    </Button>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Serviço de Convivência e Fortalecimento de Vínculos para Crianças e Adolescentes</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Atua diretamente no atendimento integral de crianças, adolescentes e suas famílias em situação de risco e vulnerabilidade social no fortalecimento dos vínculos familiares e comunitários, com faixa etária dos 6 aos 15 anos, estimulando o desenvolvimento de suas capacidades através da vivência de oficinas que promotoras de protagonismo, autonomia e convívio social para o exercício pleno da cidadania.

Promovendo oficinas de: Formação humano/Cristã, Inclusão Digital, Educação Ambiental, Oficina Esportiva, Oficina de Música, Oficina de Horticultura, Oficina de Artes, Língua Estrangeira (Inglês), Capoeira, biblioteca e diariamente refeições nutritivas.</p>
                </div>
                <div className="flex justify-center">
                    <Button color='primary' size="sm" onClick={() => navigate(ROUTER_PATHS.ATIVIDADES_CONVIVENCIA)}>
                        <span className="font-rubikLight text-white">Saiba mais</span>
                    </Button>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Promoção da Autonomia: Formação Geral para o Mundo do Trabalho</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Promove formação profissional e cidadã aos adolescentes, jovens e adultos com faixa etária dos 16 aos 59 anos que vivem em situação de risco e vulnerabilidade social, ofertando cursos gratuitos que possibilitam a atuação no mercado de trabalho com qualidade e responsabilidade.</p>
                </div>
                <div className="flex justify-center">
                    <Button color='primary' size="sm" onClick={() => navigate(ROUTER_PATHS.ATIVIDADES_FORMACAO)}>
                        <span className="font-rubikLight text-white">Saiba mais</span>
                    </Button>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Promoção da Autonomia: Atividade Sociofamiliar</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Favorece sustentabilidade através da geração de renda, por meio do acompanhamento às famílias agricultoras, oferecendo terra pronta para o plantio de legumes, verduras e hortaliças, no qual as famílias realizam um trabalho de forma programada, continuada e gratuita, com a finalidade de garantir formação humana, social cristã e política para sua subsistência.</p>
                </div>
                <div className="flex justify-center">
                    <Button color='primary' size="sm" onClick={() => navigate(ROUTER_PATHS.ATIVIDADES_SOCIOFAMILIAR)}>
                        <span className="font-rubikLight text-white">Saiba mais</span>
                    </Button>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Cantinho Caridade - Serviço de Convivência e Fortalecimento de Vínculos para jovens e adultos</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Tem relevância pública e social com ações que visam o fortalecimento de vínculos familiares e comunitários que complementam o trabalho de Proteção Social com adultos, idosos e famílias, integrando e desenvolvendo projetos gratuitos nas áreas da assistência social, fortalecimento da educação, meio ambiente, cultura, lazer e artes. Além de estimular o voluntariado.</p>
                </div>
                <div className="flex justify-center">
                    <Button color='primary' size="sm" onClick={() => navigate(ROUTER_PATHS.ATIVIDADES_CARIDADE)}>
                        <span className="font-rubikLight text-white">Saiba mais</span>
                    </Button>
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default OndeAtuamos;
