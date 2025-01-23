
import React from 'react';
import { Footer, Header } from '../../shared';
import { Button } from 'flowbite-react';
import PIXImage from "../../images/qr-code-pix.png";

const Doacao: React.FunctionComponent = () => {

  return (
    <>
        <Header />
        <section className="bg-gray-50">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
                <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Como doar</h1>
                {/* <!-- Row --> */}
                <div className="gap-1 lg:grid lg:grid-cols-1">
                    <div className="text-gray-500 sm:text-lg">
                        <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Como ser um benfeitor?</h2>
                        <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Ser um benfeitor do Instituto Padre Luis Ceccin é unir-se a nós na missão de promover a crianças, adolescentes e famílias oferecendo-lhes assistência, formação humana e cristã, educação e profissionalização tendo em vista uma consciência crítica da realidade e do valor da pessoa e apoiar as diversas atividades que realizamos.</p>
                        <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                            Existem várias formas de contribuir e fazer a diferença na vida daqueles que mais precisam:
                            <ol className="ps-0 mt-2 space-y-1 list-decimal list-inside">
                                <li className='font-rubikLight'>
                                    Contribuição Presencial
                                    <ul className="font-rubikLight ps-4 list-disc list-inside">
                                        <li className='font-rubikLight text-base'>Voluntariado;</li>
                                        <li className='font-rubikLight text-base'>Doação de Alimentos;</li>
                                    </ul>
                                </li>
                                <li className='font-rubikLight'>
                                    Doações Financeiras
                                    <ul className="font-rubikLight ps-4 list-disc list-inside">
                                        <li className='font-rubikLight text-base'><b className='font-rubikRegular'>Depósito e/ou Transferência Bancária:</b> Utilize nossas contas bancárias para realizar sua doação;</li>
                                        <li className='font-rubikLight text-base'><b className='font-rubikRegular'>Chave PIX:</b> Utilize nosso PIX para realizar sua doação;</li>
                                        <li className='font-rubikLight text-base'><b className='font-rubikRegular'>Imposto de Renda:</b> Utilize a declaração do Imposto de Renda (PF, PJ) para realizar sua doação;</li>
                                    </ul>
                                </li>
                            </ol>
                        </p>
                        {/* <!-- Row --> */}
                        <div className="gap-1 grid md:grid-cols-2 md:gap-8 items-center">
                            <div className="text-gray-500 mb-2">
                                <h3 className="font-rubikRegular text-neutral-700 text-center mb-4 text-xl tracking-tight">Conta Banco do Brasil</h3>
                                <p className="font-rubikLight font-light text-base text-center">Agência: 0232-1</p>
                                <p className="font-rubikLight font-light text-base text-center">Conta Corrente: 2449-X</p>
                                <p className="font-rubikLight font-light text-base text-center">Instituto Padre Luis Cecchin</p>
                                <p className="font-rubikLight font-light text-base text-center">CNPJ: 10.506.731/0001-67</p>
                            </div>
                            <div className="text-gray-500 flex justify-center">
                                <img className="w-full rounded-lg lg:flex sm:w-56 lg:w-56" src={PIXImage} alt="qr code pix" />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Button color='primary' size="lg" onClick={() => window.open('https://wa.me/+5581985304323?text=Ol%C3%A1%20IPLC%2C%20quero%20fazer%20parte%20dessa%20transforma%C3%A7%C3%A3o!')}>
                                <span className="font-rubikLight text-white">Quero ser um benfeitor</span>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* <!-- Row --> */}
                <div className="gap-1 lg:grid lg:grid-cols-1">
                    <div className="text-gray-500 sm:text-lg">
                        <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Seja um Parceiro</h2>
                        <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">TODO: Ser um benfeitor do Instituto Padre Luis Ceccin é unir-se a nós na missão de promover a crianças, adolescentes e famílias oferecendo-lhes assistência, formação humana e cristã, educação e profissionalização tendo em vista uma consciência crítica da realidade e do valor da pessoa e apoiar as diversas atividades que realizamos.</p>
                        <div className="flex justify-center">
                        <Button color='primary' size="lg" onClick={() => window.open('https://wa.me/+5581985304323?text=Ol%C3%A1%20IPLC%2C%20quero%20fazer%20parte%20dessa%20transforma%C3%A7%C3%A3o!')}>
                            <span className="font-rubikLight text-white">Quero ser um Parceiro</span>
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Doacao;
