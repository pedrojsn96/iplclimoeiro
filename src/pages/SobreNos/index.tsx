
import React from 'react';
import { Footer, Header } from '../../shared';
import AboutImage from "../../images/iplc-about.png";
import MissaoImage from "../../images/missao-iplc.png";
import VisaoImage from "../../images/visao-iplc.png";
import ValoresImage from "../../images/valores-iplc.png";
import { Accordion } from 'flowbite-react';
import { sendEvent } from '../../analytics';

const SobreNos: React.FunctionComponent = () => {
    React.useEffect(() => {
        sendEvent('Page View', {
          'Page Name': 'Sobre Nós'
        })
      }, []);

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Sobre nós</h1>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid md:grid-cols-2 md:gap-16 items-center">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Quem Somos</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">O Instituto Padre Luis Cecchin é uma instituição filantrópica de natureza civil e caráter beneficente, que atua desde 1970 prestando assistência a crianças, adolescentes, jovens, adultos, idosos e famílias do município de Limoeiro/PE que vivem em situação de exclusão, risco e vulnerabilidade social. Desenvolve atividades, projetos e programas através de ações de inclusão social fundamentado em dois pilares: educação para o protagonismo sustentável e fortalecimento da rede de proteção social, inspirados nas diretrizes do Estatuto da Criança e do Adolescente, com vistas à convivência familiar, respeitando a territorialidade conforme o Sistema Único de Assistência Social - SUAS.</p>
                </div>
                <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={AboutImage} alt="crianças atendidas pelo IPLC" />
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="flex justify-center">
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex max-h-96 max-w-86" src={MissaoImage} alt="missao imagem" />
                </div>
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Missão</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">Promover crianças, adolescentes e famílias oferecendo-lhes assistência, formação humana e cristã, educação e profissionalização tendo em vista uma consciência crítica da realidade e do valor da pessoa, buscando interferir nas estruturas sociais para o exercício da cidadania.</p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Visão</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">Ser um agente de transformação a fim de integrar crianças, adolescentes, jovens e famílias em situação de vulnerabilidade social apostando como sujeitos da nova sociedade, economicamente desfavorecidas, apostando como sujeitos da nova sociedade.</p>
                </div>
                <div className="flex justify-center">
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex max-h-96 max-w-96" src={VisaoImage} alt="visao imagem" />
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="flex justify-center">
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex max-h-96 max-w-96" src={ValoresImage} alt="valores imagem" />
                </div>
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Valores</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">O ser humano é a nossa preocupação fundamental onde toda nossa ação deve estar pautada na busca da sua realização plena e em todos os sentidos.</p>
                </div>
            </div>
            <div className="gap-1 lg:grid lg:grid-cols-1 p-8">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <Accordion>
                        <Accordion.Panel>
                            <Accordion.Title className='font-rubikBold font-light text-gray-700'>A VIDA</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 font-rubikLight font-light text-justify">A vida é o maior presente que recebemos de Deus. Cuidar, proteger e promover a vida é e sempre será nossa grande causa. Tudo o que existe e vive, por mais simples que seja uma planta, um animal, uma criança, um jovem, um idoso, o planeta, precisa ser cuidado porque tudo é expressão de vida.</p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-rubikBold font-light text-gray-700'>A ESPIRITUALIDADE</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 font-rubikLight font-light text-justify">Deus é nosso Pai/Mãe. Diante dessa verdade somos convidados a viver a confiança do abandono em Deus, deixando-nos envolver pelo seu cuidado amoroso. É pela espiritualidade que as questões fundamentais do existir humano encontram significado mais abrangente e profundo.</p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-rubikBold font-light text-gray-700'>A HONESTIDADE</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 font-rubikLight font-light text-justify">Sem a honestidade torna-se difícil caminhar e atingir nossos objetivos. O clima de confiança é decisivo para a vivência da transparência e da honestidade na busca da verdade.</p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-rubikBold font-light text-gray-700'>O RESPEITO</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 font-rubikLight font-light text-justify">Acolher e respeitar o (a) outro (a) como pessoa, sem discriminação de qualquer ordem, pois somos todos irmãos e irmãs, é o caminho para a comunhão e a fraternidade. </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-rubikBold font-light text-gray-700'>A FORMAÇÃO INTEGRAL</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 font-rubikLight font-light text-justify">Não somos pessoas acabadas, prontas. Estamos num processo de construção humana, espiritual e profissional. O cultivo pessoal é indispensável para o crescimento integral do ser pessoa humana.</p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-rubikBold font-light text-gray-700'>A SOLIDARIEDADE</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 font-rubikLight font-light text-justify">Num mundo que facilmente nos educa para a competição e busca do primeiro lugar, nós somos chamados a assumir a solidariedade através da partilha e da fraternidade. Ser solidário é ser humano.</p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-rubikBold font-light text-gray-700'>O PROFISSIONALISMO</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 font-rubikLight font-light text-justify">Assumir o trabalho com criatividade e responsabilidade, sendo profissional na ação e na realização do nosso trabalho. O profissionalismo é uma ferramenta pedagógica fundamental para a formação pessoal dos nossos jovens.</p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-rubikBold font-light text-gray-700'>A RESPONSABILIDADE</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 font-rubikLight font-light text-justify">A participação corresponsável de todos é fundamental para o êxito na missão que nos é confiada. O pouco de muitos realiza o sonho de tantos.</p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-rubikBold font-light text-gray-700'>O ESPÍRITO DE FAMÍLIA</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 font-rubikLight font-light text-justify">Primar por relações saudáveis e transparentes, onde o zelo pelo outro é o mesmo que tenho comigo.</p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-rubikBold font-light text-gray-700'>A SIMPLICIDADE</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 font-rubikLight font-light text-justify">A simplicidade é escolher o que é essencial deliberadamente e conscientemente. É ter liberdade, mas também ter foco, não se distrair com influências externas, com a cultura do consumo. É eliminar o supérfluo para revelar nossos verdadeiros dons.</p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SobreNos;
