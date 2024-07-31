
import React from 'react';
import { Footer, Header } from '../../shared';
import { Table } from 'flowbite-react';

const Transparencia: React.FunctionComponent = () => {

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
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">Relatório social das atividades desenvolvidas pelo Instituto Padre Luis Cecchin. <br/>Como forma de clareza e transparência de tudo aquilo que desenvolvemos em nossa atividade.</p>
                </div>
            </div>
              {/* <!-- Row --> */}
              <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                  <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Parcerias</h2>
                  <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">Relatório social das atividades desenvolvidas pelo Instituto Padre Luis Cecchin. <br/>Como forma de clareza e transparência de tudo aquilo que desenvolvemos em nossa atividade.</p>
                </div>
              </div>
              {/* <!-- Row --> */}
              <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                  <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Relatórios sociais</h2>
                  <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">Relatório social das atividades desenvolvidas pelo Instituto Padre Luis Cecchin. <br/>Como forma de clareza e transparência de tudo aquilo que desenvolvemos em nossa atividade.</p>
                      {/* fazer uma flat list */}
                      <Table striped>
                        <Table.Head>
                          <Table.HeadCell className='font-rubikBold'>Relatórios</Table.HeadCell>
                          <Table.HeadCell className='font-rubikBold'>Ano</Table.HeadCell>
                          <Table.HeadCell>
                            <span className="sr-only">Baixar</span>
                          </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              Relatório Social - 2017
                            </Table.Cell>
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              2017
                            </Table.Cell>
                            <Table.Cell>
                              <a href="#" className="font-rubikRegular font-medium text-cyan-600 hover:underline">
                                Baixar
                              </a>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              Relatório Social - 2018
                            </Table.Cell>
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              2018
                            </Table.Cell>
                            <Table.Cell>
                              <a href="#" className="font-rubikRegular font-medium text-cyan-600 hover:underline">
                                Baixar
                              </a>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              Relatório Social - 2019
                            </Table.Cell>
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              2019
                            </Table.Cell>
                            <Table.Cell>
                              <a href="#" className="font-rubikRegular font-medium text-cyan-600 hover:underline">
                                Baixar
                              </a>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              Relatório Social - 2020
                            </Table.Cell>
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              2020
                            </Table.Cell>
                            <Table.Cell>
                              <a href="#" className="font-rubikRegular font-medium text-cyan-600 hover:underline">
                                Baixar
                              </a>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              Relatório Social - 2021
                            </Table.Cell>
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              2021
                            </Table.Cell>
                            <Table.Cell>
                              <a href="#" className="font-rubikRegular font-medium text-cyan-600 hover:underline">
                                Baixar
                              </a>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              Relatório Social - 2022
                            </Table.Cell>
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              2022
                            </Table.Cell>
                            <Table.Cell>
                              <a href="#" className="font-rubikRegular font-medium text-cyan-600 hover:underline">
                                Baixar
                              </a>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              Relatório Social - 2023
                            </Table.Cell>
                            <Table.Cell className="font-rubikRegular whitespace-nowrap font-medium text-gray-900">
                              2023
                            </Table.Cell>
                            <Table.Cell>
                              <a href="#" className="font-rubikRegular font-medium text-cyan-600 hover:underline">
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
