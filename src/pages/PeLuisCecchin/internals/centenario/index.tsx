
import React from 'react';
import { Footer, Header } from '../../../../shared';
import { Alert } from 'flowbite-react';
import { sendEvent } from '../../../../analytics';

const Centenario: React.FunctionComponent = () => {
  React.useEffect(() => {
    sendEvent('Page View', {
      'Page Name': 'Centenário'
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
                  <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Centenário Natalício</h2>
                  <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Nascido aos 11 de dezembro de 1924, toda a comunidade do Povo de Deus de Limoeiro/PE celebra seu centenário de sua vida, inspirado na sua vida de amor e serviço a Deus e aos irmãos.
                  <br/>A Diocese de Nazaré unida as Paróquias de Nossa Senhora da Apresentação, São Sebastião e Nossa Senhora do Carmo realizaram uma grande celebração de abertura do Centenário Natalício do Servo de Deus Luís Cecchin.
                  <br/>A celebração que ocorreu na sede do Instituto Padre Luís Cecchin, foi presidida pelo Bispo Emérito da Diocese de Nazaré, Dom Severino Batista de França e concelebrantes, o Pe. Osmair (Pároco da Paróquia Nossa Senhora do Carmo), o Pe. Adelmo (Diretor do Instituto Padre Luis Cecchin), Pe. Ícaro (Pároco da Paróquia de São Sebastião) na noite do dia 11 de dezembro de 2023 com a presença e participação de toda comunidade limoeirense da zona rural e urbana, grupos, movimentos, pastorais e serviços em unidade com os familiares e amigos do Servo de Deus que acompanharam toda celebração via transmissão on-line.
                  <br/>O Servo de Deus Luís Cecchin foi lembrado em vários momentos durante a celebração: sua vida, vocação, missão e testemunho que permanece até os dias atuais.
                  <br/>Cada representação das comunidades receberam no momento especial de bênção e envio, um banner comemorativo do centenário para que vivenciem durante todo o ano momentos celebrativos em ação de graças.
                  <br/>Com a presença do Pe. Osmair, Pe. Adelmo, o Pe. Ícaro e o seminarista Edjon e toda equipe de liturgia convidados a receber um banner comemorativo do centenário e uma bênção especial de envio para vivenciarem durante todo o ano em unidade, de celebrações em ação de graças por esse momento especial, pelo testemunho do Padre Luis Cecchin.
                  <br/>A abertura do Centenário de nascimento do Padre Luis Cecchin marca um momento muito importante, histórico e significativo para todo o povo de Deus, Pe. Luis continua vivo em sua obra e junto aos mais vulneráveis, sua luz continua a iluminar e transformar vidas, seus apelos continuam a ecoar nos corações mais generosos para que nunca esqueçam de ajudar as pessoas que mais precisam, os preferidos de Deus.
                  <br/>Ao celebrar a conclusão desse ano centenário foi realizado também uma uma celebração na qual estiveram presentes seus amigos representando sua terra Natal, sua origem, sua família da Itália e o povo de Deus reunidos em ação de graças pelo testemunho do Servo de Deus.
                  <br/>Padre Luis Cecchin é uma lâmpada de Esperança para tempos tão desafiadores. Que Deus em sua infinita bondade, o conceda a Glória dos Santos e que todas as pessoas seguindo seu exemplo possa irradiar o amor do pai e testemunhar a sua misericórdia.
                  </p>
              </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default Centenario;
