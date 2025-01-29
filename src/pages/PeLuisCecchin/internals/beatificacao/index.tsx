
import React from 'react';
import { Footer, Header } from '../../../../shared';
import { sendEvent } from '../../../../analytics';

const Beatificacao: React.FunctionComponent = () => {
  React.useEffect(() => {
    sendEvent('Page View', {
      'Page Name': 'Abertura da Causa de Beatificação'
    })
  }, []);

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Servo de Deus Luís Cecchin</h1>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Abertura da Causa de Beatificação e Canonização do Servo de Deus Luís Cecchin</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">IPLC sedia sessão pública de abertura da Causa de Beatificação e Canonização do Servo de Deus e fundador Padre Luís Cecchin.<br/>
                      Dia 06 de fevereiro, data que marcava a chegada do Padre Luís Cecchin no Brasil, hoje, a data é marcada pela abertura da Causa de Beatificação e Canonização do Servo de Deus Padre Luís Cecchin, momento de fé e gratidão a Deus por tanto amor expresso através de seu testemunho de vida e missão.<br/>
                      Com a presença do Postulador da causa o Sr. Paolo Vilotta e o notário o Sr. Ronaldo Frigini e a autora da Causa, a Diocese de Nazaré junto a todo o povo de Deus de Limoeiro e demais regiões, além da representação dos amigos da Itália e dos padres da paróquia de origem é dada em abertura oficial a Causa de Beatificação e Canonização do Servo de Deus Padre Luís Cecchin.<br/>
                      A programação se deu inicialmente com a celebração eucarística presidida pelo Bispo Diocesano Dom Francisco de Assis Dantas de Lucena na Igreja de São Sebastião onde está sepultado o corpo do Pe. Luís e uma assembleia repleta do povo de Deus das comunidades, demais representantes do Clero diocesano. Após o momento de celebração todos dirigiram-se a sede do IPLC onde ocorreu o momento de sessão pública da abertura oficial da causa com a presença de autoridades constituídas.
                      Após o momento de celebração eucarística todos dirigiram-se a sede do Instituto Padre Luis Cecchin onde aconteceu a cerimônia solene e sessão pública de abertura da Causa na presença das autoridades municipais, estaduais e religiosas.<br/>Uma multidão preencheu o pátio do IPLC para prestigiar tamanho acontecimento. Os meios de comunicação em massa acompanharam, registraram e enfatizaram a importância do acontecimento para a Igreja e para todo o povo de Deus.
                      Duas belíssimas mensagens foram lidas aos presentes enviadas dos amigos e familiares do Padre Luís da Itália, externando a alegria em viver tal momento, principalmente porque tantas pessoas que conheceram e conviveram com ele estavam prestigiando, eles de longe acompanhando tudo no coração.
                      O Processo segue seu curso com as comissões constituídas e a todos a missão de rezar a Deus e pedir a intercessão do Servo de Deus Padre Luís Cecchin para que a jornada seja de bênçãos e graças.<br/>
                      <br/>Servo de Deus Padre Luís Cecchin, rogai por nós!
                    </p>
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default Beatificacao;
