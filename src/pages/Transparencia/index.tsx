
import React from 'react';
import { Footer, Header } from '../../shared';
import { Table } from 'flowbite-react';
import { sendEvent } from '../../analytics';

const Transparencia: React.FunctionComponent = () => {
  React.useEffect(() => {
    sendEvent('Page View', {
      'Page Name': 'Transparência'
    })
  }, []);

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Transparência</h1>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Regulamento de compras e serviços</h2>
                    {/* <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">Regulamento de Compras e Contratação de Serviços pelo Instituto Padre Luis Cecchin. <br/>Como forma de clareza e transparência de tudo aquilo que desenvolvemos em nossa atividade.</p> */}
                    <Table striped>
                    <Table.Head>
                      <Table.HeadCell className='font-rubikBold'>Documentos</Table.HeadCell>
                      <Table.HeadCell>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
                        </svg>
                      </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                          Regulamento de Compras e Contratação de Serviços
                        </Table.Cell>
                        <Table.Cell>
                          <a href="https://drive.google.com/file/d/1p4KGngqiCc5NLzPwdkI1fHEuTnadZcNC/view?usp=sharing" className="font-rubikRegular font-medium text-cyan-600 hover:underline" target='_blank'>
                            Baixar
                          </a>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
            </div>
              {/* <!-- Row -->
              <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                  <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Parcerias</h2>
                  <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">Relatório social das atividades desenvolvidas pelo Instituto Padre Luis Cecchin. <br/>Como forma de clareza e transparência de tudo aquilo que desenvolvemos em nossa atividade.</p>
                </div>
              </div> */}
              {/* <!-- Row --> */}
              <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                  <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Relatórios sociais</h2>
                  <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">Relatório social das atividades desenvolvidas pelo Instituto Padre Luis Cecchin. <br/>Como forma de clareza e transparência de tudo aquilo que desenvolvemos em nossa atividade.</p>
                      {/* fazer uma flat list */}
                      <Table striped>
                        <Table.Head>
                          <Table.HeadCell className='font-rubikBold'>Documentos</Table.HeadCell>
                          <Table.HeadCell className='font-rubikBold'>Ano</Table.HeadCell>
                          <Table.HeadCell>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
                            </svg>
                          </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              Relatório Social
                            </Table.Cell>
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              2018
                            </Table.Cell>
                            <Table.Cell>
                              <a href="https://drive.google.com/file/d/1XuuHetXP3t69GFaIwjV25MUgEdvOW1eB/view?usp=sharing" target='_blank' className="font-rubikRegular font-medium text-cyan-600 hover:underline">
                                Baixar
                              </a>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              Relatório Social
                            </Table.Cell>
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              2020
                            </Table.Cell>
                            <Table.Cell>
                              <a href="https://drive.google.com/file/d/1Z7WNIWs1DM_OMDtkPAjsIAfrKU4poNwc/view?usp=sharing" target='_blank' className="font-rubikRegular font-medium text-cyan-600 hover:underline">
                                Baixar
                              </a>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              Relatório Social
                            </Table.Cell>
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              2021
                            </Table.Cell>
                            <Table.Cell>
                              <a href="https://drive.google.com/file/d/1ADcwhMNW9y-JZbCinDFra1DVC10XoQt6/view?usp=sharing" target='_blank' className="font-rubikRegular font-medium text-cyan-600 hover:underline">
                                Baixar
                              </a>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              Relatório Social
                            </Table.Cell>
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              2022
                            </Table.Cell>
                            <Table.Cell>
                              <a href="https://drive.google.com/file/d/1XZsOxsIMF6z6nS8KngK8XJynHUszbJXi/view?usp=sharing" target='_blank' className="font-rubikRegular font-medium text-cyan-600 hover:underline">
                                Baixar
                              </a>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              Relatório Social
                            </Table.Cell>
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              2023
                            </Table.Cell>
                            <Table.Cell>
                              <a href="https://drive.google.com/file/d/1P7afVgUWVR6aBbetwfw4kp7To_juSO7g/view?usp=sharing" target='_blank' className="font-rubikRegular font-medium text-cyan-600 hover:underline">
                                Baixar
                              </a>
                            </Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                  </div>
              </div>
              {/* <!-- Row --> */}
              <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                  <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Lei Geral de Proteção de Dados</h2>
                  <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">O INSTITUTO PADRE LUIS CECCHIN – IPLC atua em conformidade com a Lei Geral de Proteção de Dados (LGPD), Lei 13.709 de 14 de agosto de 2018.</p>
                  <Table striped>
                    <Table.Head>
                      <Table.HeadCell className='font-rubikBold'>Documentos</Table.HeadCell>
                      <Table.HeadCell>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
                        </svg>
                      </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                          Declaração de adoção a LGPD
                        </Table.Cell>
                        <Table.Cell>
                          <a href="https://drive.google.com/file/d/1vHlD-vyi0RtVowOx7tgrPqBGXndx6dWi/view?usp=sharing" className="font-rubikRegular font-medium text-cyan-600 hover:underline" target='_blank'>
                            Baixar
                          </a>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
              </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default Transparencia;
