
import React from 'react';
import { Footer, Header } from '../../shared';
import { Button, Card } from 'flowbite-react';
import AVATeM from "../../images/parceiros/avatem-logo.png";
import HiperAtacarejo from "../../images/parceiros/hiper-atacarejo.png";
import HiperCordeiro from "../../images/parceiros/hiper-cordeiro.png";
import HiperCordeiroMercado from "../../images/parceiros/hiper-cordeiro-mercado.png";
import Medigral from "../../images/parceiros/medigral-logo.png";
import PrefeituraLimoeiro from "../../images/parceiros/prefeitura-limoeiro.png";
import { sendEvent } from '../../analytics';

const Parceiros: React.FunctionComponent = () => {
    React.useEffect(() => {
        sendEvent('Page View', {
          'Page Name': 'Parceiros'
        })
      }, []);

      const handleParceiro = () => {
        sendEvent('Click', {
          'Button Name': 'Quero ser um Parceiro',
          'Page Name': 'Parceios'
        })
        window.open('https://wa.me/+5581985304323?text=Ol%C3%A1%20IPLC%2C%20quero%20fazer%20parte%20dessa%20transforma%C3%A7%C3%A3o!');
      };

  return (
    <>
        <Header />
        <section className="bg-gray-50">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
                <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Parceiros</h1>
                {/* <!-- Row --> */}
                <div className="gap-1 lg:grid lg:grid-cols-1">
                    <div className="text-gray-500 sm:text-lg">
                        <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Seja um Parceiro</h2>
                        <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Uma empresa pode ser uma grande benfeitora através da <b className='text-gray-800'>PARCERIA</b> que fortalece as atividades desenvolvidas.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            <Card className="max-w-xs" imgAlt="AVATeM" imgSrc={AVATeM}>
                                <h5 className="font-rubikBold text-gray-800 mb-1 text-base tracking-tight">AVATeM</h5>
                                <p className="font-rubikLight mb-1 font-light text-base text-justify">Organização sem fins lucrativos situada na Itália, com o objetivo de promover adoções à distância e apoiar projetos do Instituto Padre Luis Cecchin (IPLC).</p>
                            </Card>
                            <Card className="max-w-xs" imgAlt="Prefeitura Municipal de Limoeiro" imgSrc={PrefeituraLimoeiro}>
                                <h5 className="font-rubikBold text-gray-800 mb-1 text-base tracking-tight">Prefeitura Municipal de Limoeiro</h5>
                                <p className="font-rubikLight mb-1 font-light text-base text-justify">Através de um acordo de Cooperação entre o município e o Instituto Padre Luis Cechin (IPLC), viabiliza o atendimento na modalidade de Educação Infantil.</p>
                            </Card>
                            <Card className="max-w-xs" imgAlt="Hiper Cordeiro Home Center" imgSrc={HiperCordeiro}>
                                <h5 className="font-rubikBold text-gray-800 mb-1 text-base tracking-tight">Hiper Cordeiro - Home Center</h5>
                                <p className="font-rubikLight mb-1 font-light text-base text-justify">Através do Projeto Troco Solidário: centavos que transformam vidas, o Hiper Cordeiro Home Center apoia e colabora com as atividades desenvolvidas pelo Instituto Padre Luis Cecchin (IPLC).</p>
                            </Card>
                            <Card className="max-w-xs" imgAlt="Hiper Cordeiro Atacarejo" imgSrc={HiperAtacarejo}>
                                <h5 className="font-rubikBold text-gray-800 mb-1 text-base tracking-tight">Hiper Cordeiro - Atacarejo</h5>
                                <p className="font-rubikLight mb-1 font-light text-base text-justify">Através do Projeto Troco Solidário: centavos que transformam vidas, o Hiper Cordeiro Atacarejo apoia e colabora com as atividades desenvolvidas pelo Instituto Padre Luis Cecchin (IPLC).</p>
                            </Card>
                            <Card className="max-w-xs" imgAlt="Hiper Cordeiro Mercado" imgSrc={HiperCordeiroMercado}>
                                <h5 className="font-rubikBold text-gray-800 mb-1 text-base tracking-tight">Hiper Cordeiro - Supermercado</h5>
                                <p className="font-rubikLight mb-1 font-light text-base text-justify">Através do Projeto Troco Solidário: centavos que transformam vidas, o Hiper Cordeiro Supermercado apoia e colabora com as atividades desenvolvidas pelo Instituto Padre Luis Cecchin (IPLC).</p>
                            </Card>
                            <Card className="max-w-xs" imgAlt="Medigral" imgSrc={Medigral}>
                                <h5 className="font-rubikBold text-gray-800 mb-1 text-base tracking-tight">Medigral Farmácia de Manipulação</h5>
                                <p className="font-rubikLight mb-1 font-light text-base text-justify">Através do Projeto Troco Solidário: centavos que transformam vidas, a Medigral Farmácia de Manipulação apoia e colabora com as atividades desenvolvidas pelo Instituto Padre Luis Cecchin (IPLC).</p>
                            </Card>
                        </div>
                        <div className="flex justify-center mt-4">
                            <Button color='primary' size="lg" onClick={handleParceiro}>
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

export default Parceiros;
