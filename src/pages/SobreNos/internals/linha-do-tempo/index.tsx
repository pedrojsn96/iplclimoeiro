
import React from 'react';
import { Button, Timeline as TimelineComponent } from 'flowbite-react';
import { Footer, Header } from '../../../../shared';

const Timeline: React.FunctionComponent = () => {
  const CalendarIcon = () => {
    return (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clip-rule="evenodd"/>
    </svg>
    );
  };

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
                          Com o apoio das Irmãs Franciscanas de Maristela, fundo o Centro de Formação de Menores em 1970.
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1974</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Inauguração do Prédio da Sede</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                            Após sua ordenação sacerdotal, o Pe. Luís chegou no Brasil em 26 de maio de 1969, na cidade de Limoeiro, Pernambuco
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1980</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Lares Substitutos</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                            Após sua ordenação sacerdotal, o Pe. Luís chegou no Brasil em 26 de maio de 1969, na cidade de Limoeiro, Pernambuco
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1980</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Início das atividades na Creche Menino Jesus</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                            Após sua ordenação sacerdotal, o Pe. Luís chegou no Brasil em 26 de maio de 1969, na cidade de Limoeiro, Pernambuco
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1981</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Cursos</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                            Após sua ordenação sacerdotal, o Pe. Luís chegou no Brasil em 26 de maio de 1969, na cidade de Limoeiro, Pernambuco
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1981</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Moradia Social</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                            Após sua ordenação sacerdotal, o Pe. Luís chegou no Brasil em 26 de maio de 1969, na cidade de Limoeiro, Pernambuco
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1997</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Mudança de Prédio da Creche</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                            Após sua ordenação sacerdotal, o Pe. Luís chegou no Brasil em 26 de maio de 1969, na cidade de Limoeiro, Pernambuco
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>1997</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Lavanderia Pública</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                            Após sua ordenação sacerdotal, o Pe. Luís chegou no Brasil em 26 de maio de 1969, na cidade de Limoeiro, Pernambuco
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>2010</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Falecimento do Fundador</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                            Após sua ordenação sacerdotal, o Pe. Luís chegou no Brasil em 26 de maio de 1969, na cidade de Limoeiro, Pernambuco
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>2011</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Congregação assume a administração</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                          Ao findar de sua vida, o Pe. Luís tendo dedicado à missão entre os mais pobres, confiou a administração da entidade à Congregação dos Pobres Servos da Divina Providência, assumindo em 2011, passando a ser reconhecido como Instituto Padre Luís Cecchin – IPLC, em homenagem a seu fundador.
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>2021</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Início das atividades do Projeto Caridade</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                            Após sua ordenação sacerdotal, o Pe. Luís chegou no Brasil em 26 de maio de 1969, na cidade de Limoeiro, Pernambuco
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>2021</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Início das atividades na Creche Sagrada Família</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                            Após sua ordenação sacerdotal, o Pe. Luís chegou no Brasil em 26 de maio de 1969, na cidade de Limoeiro, Pernambuco
                          </TimelineComponent.Body>
                        </TimelineComponent.Content>
                      </TimelineComponent.Item>
                      <TimelineComponent.Item>
                        <TimelineComponent.Point />
                        <TimelineComponent.Content>
                          <TimelineComponent.Time className='font-rubikLight mb-4 font-light lg:text-base text-justify'>2023</TimelineComponent.Time>
                          <TimelineComponent.Title className='font-rubikBold font-li text-gray-700'>Início das atividades do SCFV dos Idosos</TimelineComponent.Title>
                          <TimelineComponent.Body className='font-rubikLight mb-4 font-light lg:text-xl text-justify'>
                            Após sua ordenação sacerdotal, o Pe. Luís chegou no Brasil em 26 de maio de 1969, na cidade de Limoeiro, Pernambuco
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
