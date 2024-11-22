
import React from 'react';
import { Footer, Header } from '../../shared';
import PeLuisImage from "../../images/padre-luis-cecchin.jpg";

const PeLuisCecchin: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Padre Luís</h1>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="flex justify-center">
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={PeLuisImage} alt="feature image 2" />
                </div>
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Padre Luís Cecchin</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">Breve histórico sobre a vida de Padre Luís Cecchin, nasceu em 11 de dezembro de 1924 em São Martinho de Lupari (PD-Itália) e viveu a sua vida de criança na paróquia de Galliera Veneta (PD-Itália), onde foi batizado e recebeu o dom da vocação sacerdotal. Foi ordenado sacerdote na cidade de Treviso no dia26 de junho de 1949, por 20 anos desenvolveu o ministério em diversas paróquias da Diocese de Treviso e por alguns anos foi o Diretor Espiritual no Seminário. No dia 6 de janeiro de 1969 na igreja de Galliera Veneta o Bispo Mons. Antonio Mistrorigo presidiu a cerimônia de “envio” do Padre Luís como missionário “fidei donum” para a Diocese de Nazaré, Estado de Pernambuco, Brasil. Um mês depois, em 6 de fevereiro, desembarcou no Brasil, no Rio de Janeiro e, em 26 de maio, chegou de ônibus a Limoeiro, perto de Recife, diocese de Nazaré. Naquela terra, por 40 anos esteve a serviço dos pobres, dos “Últimos”, e, para ser como eles, viveu na simplicidade. Portador de uma doença grave, não aceitou privilégios para tratar-se, porque os pobres, dizia ele, não tem privilégios. Voltou à Itália em 28 de fevereiro de 2010, para tratar-se. Isto fez somente por obediência ao seu Bispo. Morreu em Mussolente – Diocese de Treviso – em 26 de março de 2010, assistido por seu Bispo Diocesano do Brasil, que propositadamente veio para a Itália para acompanhá-lo em sua “última viagem”. Foi sepultado, na segunda feira de Páscoa de 2010, na sua igreja paroquial de São Sebastião em Limoeiro, acompanhado de uma multidão, de seus “Pobres” que sempre viram nele a manifestação do amor de Deus.</p>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PeLuisCecchin;
