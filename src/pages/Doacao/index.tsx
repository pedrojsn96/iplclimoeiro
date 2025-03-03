
import React from 'react';
import { Footer, Header } from '../../shared';
import { Button } from 'flowbite-react';
import PIXImage from "../../images/qr-code-pix.png";
import { sendEvent } from '../../analytics';

const Doacao: React.FunctionComponent = () => {
    React.useEffect(() => {
        sendEvent('Page View', {
          'Page Name': 'Como Doar'
        })
      }, []);
      
    const handleDoacao = () => {
        sendEvent('Click', {
            'Button Name': 'Quero ser um benfeitor',
            'Page Name': 'Como doar'
        })
        window.open('https://wa.me/+5581985304323?text=Ol%C3%A1%20IPLC%2C%20quero%20fazer%20parte%20dessa%20transforma%C3%A7%C3%A3o!')
    };

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
                        <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">O benfeitor do Instituto padre Luis Cecchin é um agente de transformação que confia e apoia as ações desenvolvidas favorecendo caminhos de oportunidades para um novo amanhã como sempre quis o tão querido fundador, o Pe. Luís Cecchin.</p>
                        <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                        Para ser um benfeitor é simples, existem alguns caminhos para você colaborar com a promoção de crianças, adolescentes, jovens, adultos, idosos e famílias em situação de vulnerabilidade social.
                        Para ajudar a manter, ampliar e qualificar essas ações, você pode:
                            <ol className="ps-0 mt-2 space-y-1 list-decimal list-inside">
                                <li className='font-rubikLight'>
                                    Realizar Contribuições Presenciais
                                    <ul className="font-rubikLight ps-4 list-disc list-inside">
                                        <li className='font-rubikLight text-base'>Voluntariado;</li>
                                        <li className='font-rubikLight text-base'>Apadrinhamento afetivo;</li>
                                        <li className='font-rubikLight text-base'>Doação de Alimentos;</li>
                                    </ul>
                                </li>
                                <li className='font-rubikLight'>
                                    Realizar Doações Financeiras
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
                            <Button color='primary' size="lg" onClick={handleDoacao}>
                                <span className="font-rubikLight text-white">Quero ser um benfeitor</span>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* <!-- Row --> */}
                <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                    <div className="text-gray-500 sm:text-lg">
                        <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Transforme seu Imposto de Renda em Esperança!</h2>
                        <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Todo contribuinte pode destinar parte do seu Imposto de Renda para ajudar quem mais precisa, sem pagar nada a mais por isso. Ao fazer sua declaração, você pode contribuir para apoiar os projetos desenvolvidos no Instituto Padre Luis Cecchin e transformar vidas. A legislação brasileira permite que pessoas físicas destinem até 6% do imposto devido e pessoas jurídicas até 1%, direcionando esses valores para fundos de assistência à criança, ao adolescente e ao idoso. 
                        <br/>Essa doação não altera o valor a pagar ou a restituir no Imposto de Renda. O que acontece é que, ao invés de todo o imposto ir para o governo, uma parte dele é direcionada para causas que fazem a diferença, como o IPLC que atua criando caminhos de oportunidades para um novo amanhã.
                        </p>
                        <p className="font-rubikRegular mb-4 font-light lg:text-xl text-justify"><b>É bem simples para declarar esperança: </b>
                            <ol className="ps-4 mt-2 space-y-1 list-decimal list-inside">
                                <li className='font-rubikLight'>No momento da declaração, acesse a opção de doação diretamente no programa da Receita Federal.</li>
                                <li className='font-rubikLight'>Escolha o fundo Municipal de Defesa dos Direitos da Criança e do Adolescente de Limoeiro – CNPJ: 08.921.479/0001-00 ou o Fundo Municipal de Direitos do Idoso de Limoeiro – CNPJ: 48.560.864/0001-94, devidamente autorizados para receber a doação.</li>
                                <li className='font-rubikLight'>Gere o DARF (Documento de Arrecadação) e efetue o pagamento até o prazo final da declaração, envie o documento para a Instituição através do contato: <b>(81) 9 8530-4323</b> ou no e-mail <b>sustentabilidade@iplclimoeiro.org.br</b>.</li>
                                <li className='font-rubikLight'>Pronto! A contribuição irá renovar a esperança de alguém!</li>
                            </ol>
                        </p>
                        <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Ao doar parte do imposto, o contribuinte exerce a cidadania e fortalece iniciativas que mudam vidas. Não deixe essa oportunidade passar! Informe-se, faça a doação e compartilhe essa ideia com amigos e familiares.</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Doacao;
