
import React from 'react';
import { Footer, Header } from '../../shared';
import AboutImage from "../../images/iplc-about.png";
import { Accordion } from 'flowbite-react';

const SobreNos: React.FunctionComponent = () => {

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
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">O Instituto Padre Luis Cecchin é uma instituição filantrópica de natureza civil e caráter beneficente, que atua desde 1970 prestando assistência a crianças, adolescentes, jovens de suas famílias em situação de risco e vulnerabilidade social. Oferecendo assistência, formação humana e cristã, educação e profissionalização, buscando interferir nas estruturas sociais para o exercício da cidadania, podendo ser um agente de transformação a fim de integrar e apostar como sujeitos da nova sociedade, pautados na dimensão dos valores da vida, ética, espiritualidade, respeito, qualidade, honestidade, espírito de família, formação integral, profissionalismo, responsabilidade, simplicidade e solidariedade.</p>
                </div>
                <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={AboutImage} alt="dashboard feature image" />
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Missão</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Promover crianças, adolescentes, jovens, adultos e famílias em situação de vulnerabilidade social, oferecendo-lhes assistência, formação humana/cristã, educação e profissionalização, tendo em vista uma consciência crítica da realidade e do valor de sua pessoa, buscando interferir nas estruturas sociais para o exercício da cidadania.</p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Visão</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Ser um agente de transformação a fim de integrar crianças, adolescentes, jovens e famílias em situação de vulnerabilidade social apostando como sujeitos da nova sociedade, economicamente desfavorecidas, apostando como sujeitos da nova sociedade.
                    </p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Valores</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                    O ser humano é a nossa preocupação fundamental onde toda nossa ação deve estar pautada na busca da sua realização plena e em todos os sentidos. Sendo eles:
                    </p>
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
