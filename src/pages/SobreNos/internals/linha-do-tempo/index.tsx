
import React from 'react';
import { Button, Timeline as TimelineComponent } from 'flowbite-react';
import { Footer, Header } from '../../../../shared';
import { sendEvent } from '../../../../analytics';

const Timeline: React.FunctionComponent = () => {
  const CalendarIcon = () => {
    return (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clip-rule="evenodd"/>
    </svg>
    );
  };

  React.useEffect(() => {
    sendEvent('Page View', {
      'Page Name': 'Linha do Tempo'
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
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Linha do tempo</h2>

                    <TimelineComponent>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1969</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Chegada do Fundador</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          Após sua ordenação sacerdotal, o Pe. Luís chegou no Brasil em 26 de maio de 1969, na cidade de Limoeiro, Pernambuco
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1970</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Fundação do IPLC</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          Com o apoio das Irmãs Franciscanas de Maristela, fundou o Centro de Formação de Menores, acolhendo inicialmente 50 crianças.
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1973</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Início da atividade com famílias agricultoras </TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          Com as consequências do êxodo rural, as famílias que viviam no campo ficaram sem opção de trabalho, surge daí o acompanhamento que ofereceu um hectare de terra, suporte e orientação para que as famílias pudessem se organizar e trabalhar de forma sustentável, cultivando alimentos que garantissem sua sobrevivência.
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1974</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Inauguração do Prédio da Sede</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          Com o apoio da comunidade e benfeitores, no dia 16 de novembro de 1974 foi inaugurado o prédio da sede do Centro de Formação de Menores.
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1980</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Lares Substitutos</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          Com o objetivo de reduzir o número de crianças das ruas, os lares substitutos oferecia uma dinâmica de acolhimento para crianças e adolescentes órfãos e que tinham fragilidades em seus contextos familiares.
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1980</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Início das atividades na Creche Menino Jesus</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                            Para acolher crianças na primeira infância com atendimento integral possibilitando o desenvolvimento saudável dos filhos enquanto suas mães buscavam trabalho para contribuir com o sustento da família.
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1981</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Cursos Profissionalizantes</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          Com o objetivo de oportunizar aos jovens uma opção de ocupação e aprendizado para o ingresso no mercado de trabalho, iniciou a oferta de cursos gratuitos
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1981</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Moradia Social</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          Oferecia uma moradia com um baixo custo para que as famílias, mulheres, viúvas em situação de vulnerabilidade tivessem a dignidade de um lar.
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1997</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Mudança de Prédio da Creche</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          A Creche Menino Jesus ganha novo espaço para desenvolver as atividades e contemplar as famílias de um setor próximo a periferia da cidade, aumentando a capacidade de atendimentos.
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1997</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Lavanderia Pública</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          Para oportunizar uma renda para mulheres provedoras dos lares, em sua maioria, sozinhas, a lavanderia foi construída anexa ao prédio da Creche para que as mulheres lavassem roupas e colaborassem com a renda da família.
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>2010</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Falecimento do Fundador</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          Acometido por uma grave doença, o Pe. Luís Cecchin faleceu aos 26 de março de 2010 na Itália, sua terra natal.
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>2011</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Congregação assume a administração</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          As atividades passaram a ser administradas pela Congregação dos Pobres Servos da Divina Providência (PSDP), a pedido do Pe. Luís Cecchin enquanto vida. Em 2011 com a mudança, o Centro de Formação de Menores passa a ser reconhecido como Instituto Padre Luis Cecchin – IPLC, em homenagem a seu fundador.
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>2021</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Início das atividades do Serviço de Convivência e Fortalecimento de Vínculos para jovens e adultos</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          Foi inaugurado como Projeto Caridade, atualmente é um serviço tipificado que acolhe jovens, adultos e famílias promovendo ações para o fortalecimento das políticas públicas, formações, segurança alimentar, acompanhamento familiar, entre outros.
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>2021</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Início das atividades na Creche Sagrada Família</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          Inaugurou-se mais uma atividade em parceria com o poder Público Municipal, numa área afastada do centro da cidade para acolhimento de crianças com faixa etária dos 06 meses aos 4 anos e 11 meses.
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>2023</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Início das atividades do SCFV dos Idosos</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          A partir da experiência de um projeto piloto, o IPLC passou a desenvolver o Serviço de Convivência e Fortalecimento de Vínculos para idosos compreendendo a faixa etária acima os 60 anos. 
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                    </TimelineComponent>
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default Timeline;
