
import React from 'react';
import { Footer, Header } from '../../shared';
import PeLuisImage from "../../images/padre-luis-cecchin.jpg";
import PeLuisOracaoImage from "../../images/pe-luis-oracao.jpeg";
import Memorial1 from "../../images/memorial/IN_MEMORIAN_pe_Luis_2022_1.png";
import Memorial2 from "../../images/memorial/Memorial_PLC_1.png";
import Memorial3 from "../../images/memorial/Memorial_PLC_2.png";
import Memorial4 from "../../images/memorial/Memorial_PLC_3.png";
import Memorial5 from "../../images/memorial/Memorial_PLC_4.png";
import Memorial6 from "../../images/memorial/Memorial_PLC_5.png";
import Memorial7 from "../../images/memorial/Memorial_PLC_6.png";
import Memorial8 from "../../images/memorial/Memorial_PLC_7.png";
import { Carousel } from 'flowbite-react';

const PeLuisCecchin: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Padre Luis</h1>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="flex justify-center">
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={PeLuisImage} alt="feature image 2" />
                </div>
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Padre Luis Cecchin</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">Breve histórico sobre a vida de Padre Luís Cecchin, nasceu em 11 de dezembro de 1924 em São Martinho de Lupari (PD-Itália) e viveu a sua vida de criança na paróquia de Galliera Veneta (PD-Itália), onde foi batizado e recebeu o dom da vocação sacerdotal. Foi ordenado sacerdote na cidade de Treviso no dia26 de junho de 1949, por 20 anos desenvolveu o ministério em diversas paróquias da Diocese de Treviso e por alguns anos foi o Diretor Espiritual no Seminário. No dia 6 de janeiro de 1969 na igreja de Galliera Veneta o Bispo Mons. Antonio Mistrorigo presidiu a cerimônia de “envio” do Padre Luís como missionário “fidei donum” para a Diocese de Nazaré, Estado de Pernambuco, Brasil. Um mês depois, em 6 de fevereiro, desembarcou no Brasil, no Rio de Janeiro e, em 26 de maio, chegou de ônibus a Limoeiro, perto de Recife, diocese de Nazaré. Naquela terra, por 40 anos esteve a serviço dos pobres, dos “Últimos”, e, para ser como eles, viveu na simplicidade. Portador de uma doença grave, não aceitou privilégios para tratar-se, porque os pobres, dizia ele, não tem privilégios. Voltou à Itália em 28 de fevereiro de 2010, para tratar-se. Isto fez somente por obediência ao seu Bispo. Morreu em Mussolente – Diocese de Treviso – em 26 de março de 2010, assistido por seu Bispo Diocesano do Brasil, que propositadamente veio para a Itália para acompanhá-lo em sua “última viagem”. Foi sepultado, na segunda feira de Páscoa de 2010, na sua igreja paroquial de São Sebastião em Limoeiro, acompanhado de uma multidão, de seus “Pobres” que sempre viram nele a manifestação do amor de Deus.</p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Testamento Espiritual (09 de Julho de 2008)</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">“Eu, Luis Cecchin, agradeço com todo o coração a Deus meu Criador pelo dom da vida. A história da minha vida é um constante ato de amor de Deus Pai, de Deus Filho, de Deus Espírito Santo, no qual creio firmemente por meio do dom da fé cristã na qual fui batizado (…). Chegando o momento da minha passagem desta vida terrena a vida eterna, pedindo humildemente perdão dos meus muitos pecados, confiante no amor misericordioso de Deus que quer me salvar por meio da paixão e morte amorosa de Jesus seu Filho, meu Redentor, me entrego a Ti, meu Deus, Pai amoroso, como um filho, assim como sou; entrego-me a Ti, Jesus, Filho de Deus, feito homem no seio da Virgem Maria, que me amaste até mesmo sacrificando a tua vida humana. (…) Me entrego a Ti, Deus Espírito Santo, que desde o batismo me santificaste e me acompanhaste com infinita paciência para ser e viver como filho de Deus, que é Santo, e a todos oferece por teu meio o dom para ser santos. Entrego-me a Ti, Maria, Mãe Santíssima de Jesus e da Igreja e minha amada Mãe de misericórdia. Estiveste sempre presente com teu amor materno na minha vida e, nesta hora da minha morte, acompanha-me ao teu amado Filho. (…) Sou muito agradecido a Deus que me quis missionário no Brasil. Conheci momentos de alegria espiritual, experimentei minha fragilidade de pecador, provei a presença de Jesus… Os pobres, os oprimidos, os sofredores em tantas maneiras, me ajudaram a conhecer melhor e a seguir Jesus pobre, desprezado, sofredor por nosso amor e sempre misericordioso. O trabalho com crianças, rapazes e jovens pobres materialmente, moralmente e espiritualmente, me colocaram mais perto de Jesus, que, sem descuidar de nenhuma pessoa, dá um amor predileto a eles (…). Maria, mãe santa de Jesus e minha amorosa mãe, acompanham-me ao teu bendito Filho Jesus. Assim seja.”</p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Testamento para o seu Povo (24 de Janeiro de 2010)</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">No fim da Santa Missa da festa do padroeiro São Sebastião, para as pessoas da sua paróquia em Limoeiro deixou uma mensagem de vida, que somente por um homem santo, apaixonado por Deus, podia surgir. Eis algumas frases: “Eu estou no fim da minha vida, e pouco tempo me resta; mas, gostaria de deixar para você esta lembrança. Nós hoje, eu por primeiro, vocês pais de família, nos perguntamos: estamos transmitindo aos nossos filhos, aos nossos jovens, a riqueza da fé dos nossos pais? Se nós não transmitimos a fé, os nossos filhos ficam vazios. Nós cristãos devemos começar a assumir o compromisso de ensinar aos nossos filhos o amor a vida. Eu gostaria, saindo desta igreja, que todos nós, eu por primeiro, mais velho, pelo tempinho que o Senhor me dá ainda, pudéssemos dizer: “Quero ser cristão no mundo de hoje. Quero ser cristão hoje. Em todas as atividades, em toda parte, quero ser cristão!”.</p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="flex justify-center">
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex max-w-72" src={PeLuisOracaoImage} alt="feature image 2" />
                </div>
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Última Mensagem</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">No leito do hospital, em 09 de março de 2010, poucos dias antes de morrer, Padre Luís disse:
    “Estou aqui nas mãos do Senhor, confiante. Aquilo que Ele dispõe é a coisa mais bela. Deus nos quer bem em todos os momentos da vida. Continuem a serem unidos na oração, no amor e na solidariedade. Este meu sofrimento é um dom de Deus. Agora olho a Ressurreição! A “nossa família não deve dissolver-se nem preocupar-se em nenhum momento da vida…”.</p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Memorial Padre Luis Cecchin</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">Neste memorial dedicado ao Padre Luis Cecchin se encontram alguns de seus pertences.

Padre Luis viveu de forma muito simples e apenas com o necessário. Portanto, encontram-se alguns de seus escritos, homilias, pertences e objetos de sua vida, missão, sua vida de oração e  material usado nas celebrações.</p>
                    <div className="h-72 sm:h-96 xl:h-80 2xl:h-96" style={{ height: 500 }}>
                        <Carousel slideInterval={3000} style={{ height: 500 }}>
                            <img src={Memorial1} alt="..." />
                            <img src={Memorial2} alt="..." />
                            <img src={Memorial3} alt="..." />
                            <img src={Memorial4} alt="..." />
                            <img src={Memorial5} alt="..." />
                            <img src={Memorial6} alt="..." />
                            <img src={Memorial7} alt="..." />
                            <img src={Memorial8} alt="..." />
                        </Carousel>
                        </div>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PeLuisCecchin;
