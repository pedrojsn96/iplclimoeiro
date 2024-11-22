
import React from 'react';
import { Footer, Header } from '../../../../shared';
import { Blockquote } from 'flowbite-react';

const Testamentos: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Servo de Deus Luís Cecchin</h1>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Testamento Espiritual (09 de Julho de 2008)</h2>
                  <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify"></p>
                  <Blockquote className="font-rubikLight mb-4 font-light lg:text-xl text-justify text-gray-500 sm:text-lg dark:text-gray-400">“Eu, Luis Cecchin, agradeço com todo o coração a Deus meu Criador pelo dom da vida. A história da minha vida é um constante ato de amor de Deus Pai, de Deus Filho, de Deus Espírito Santo, no qual creio firmemente por meio do dom da fé cristã na qual fui batizado (…). Chegando o momento da minha passagem desta vida terrena a vida eterna, pedindo humildemente perdão dos meus muitos pecados, confiante no amor misericordioso de Deus que quer me salvar por meio da paixão e morte amorosa de Jesus seu Filho, meu Redentor, me entrego a Ti, meu Deus, Pai amoroso, como um filho, assim como sou; entrego-me a Ti, Jesus, Filho de Deus, feito homem no seio da Virgem Maria, que me amaste até mesmo sacrificando a tua vida humana. (…) Me entrego a Ti, Deus Espírito Santo, que desde o batismo me santificaste e me acompanhaste com infinita paciência para ser e viver como filho de Deus, que é Santo, e a todos oferece por teu meio o dom para ser santos. Entrego-me a Ti, Maria, Mãe Santíssima de Jesus e da Igreja e minha amada Mãe de misericórdia. Estiveste sempre presente com teu amor materno na minha vida e, nesta hora da minha morte, acompanha-me ao teu amado Filho. (…) Sou muito agradecido a Deus que me quis missionário no Brasil. Conheci momentos de alegria espiritual, experimentei minha fragilidade de pecador, provei a presença de Jesus… Os pobres, os oprimidos, os sofredores em tantas maneiras, me ajudaram a conhecer melhor e a seguir Jesus pobre, desprezado, sofredor por nosso amor e sempre misericordioso. O trabalho com crianças, rapazes e jovens pobres materialmente, moralmente e espiritualmente, me colocaram mais perto de Jesus, que, sem descuidar de nenhuma pessoa, dá um amor predileto a eles (…). Maria, mãe santa de Jesus e minha amorosa mãe, acompanham-me ao teu bendito Filho Jesus. Assim seja.”</Blockquote>
              </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Testamento para o seu Povo (24 de Janeiro de 2010)</h2>
                  <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify"></p>
                  <Blockquote className="font-rubikLight mb-4 font-light lg:text-xl text-justify text-gray-500 sm:text-lg dark:text-gray-400">No fim da Santa Missa da festa do padroeiro São Sebastião, para as pessoas da sua paróquia em Limoeiro deixou uma mensagem de vida, que somente por um homem santo, apaixonado por Deus, podia surgir. Eis algumas frases: “Eu estou no fim da minha vida, e pouco tempo me resta; mas, gostaria de deixar para você esta lembrança. Nós hoje, eu por primeiro, vocês pais de família, nos perguntamos: estamos transmitindo aos nossos filhos, aos nossos jovens, a riqueza da fé dos nossos pais? Se nós não transmitimos a fé, os nossos filhos ficam vazios. Nós cristãos devemos começar a assumir o compromisso de ensinar aos nossos filhos o amor a vida. Eu gostaria, saindo desta igreja, que todos nós, eu por primeiro, mais velho, pelo tempinho que o Senhor me dá ainda, pudéssemos dizer: “Quero ser cristão no mundo de hoje. Quero ser cristão hoje. Em todas as atividades, em toda parte, quero ser cristão!”.</Blockquote>
              </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Última Mensagem</h2>
                  <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify"></p>
                  <Blockquote className="font-rubikLight mb-4 font-light lg:text-xl text-justify text-gray-500 sm:text-lg dark:text-gray-400">No leito do hospital, em 09 de março de 2010, poucos dias antes de morrer, Padre Luís disse:
                  “Estou aqui nas mãos do Senhor, confiante. Aquilo que Ele dispõe é a coisa mais bela. Deus nos quer bem em todos os momentos da vida. Continuem a serem unidos na oração, no amor e na solidariedade. Este meu sofrimento é um dom de Deus. Agora olho a Ressurreição! A “nossa família não deve dissolver-se nem preocupar-se em nenhum momento da vida…”</Blockquote>
              </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default Testamentos;


