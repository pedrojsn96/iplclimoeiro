
import React from 'react';
import { Footer, Header } from '../../../../shared';
import { sendEvent } from '../../../../analytics';

const ServicoConvivencia: React.FunctionComponent = () => {
  React.useEffect(() => {
    sendEvent('Page View', {
      'Page Name': 'Serviço de Convivência'
    })
  }, []);

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Serviço de Convivência e Fortalecimento de Vínculos</h1>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Serviço de Convivência e Fortalecimento de Vínculos para Crianças e Adolescentes</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                    O Serviço de Convivência e Fortalecimento de Vínculos para crianças e adolescentes é uma modalidade de atendimento que oferece formação para a participação cidadã e o desenvolvimento do protagonismo e da autonomia de crianças e adolescentes entre 6 e 15 anos, garantindo segurança nutricional e alimentar.
                    <br/>O Serviço de Convivência e Fortalecimento de Vínculos (SCFV) é a atividade pioneira do Instituto Padre Luis Cecchin. Iniciado na década de 1970 com o atendimento de 50 crianças, o serviço expandiu-se e, atualmente, tem capacidade para acolher 250 crianças e adolescentes no contraturno escolar. Além de oferecer segurança alimentar e nutricional, proporciona duas refeições balanceadas por turno e reforça as noções de higiene.
                    <br/>As atividades são organizadas em oficinas que atendem aos interesses, demandas e potencialidades dessa faixa etária. Planejadas com base em experiências lúdicas, culturais e esportivas, essas oficinas promovem a expressão, a interação, a aprendizagem, a sociabilidade e a proteção social. Entre as atividades ofertadas, destacam-se inclusão digital, artesanato, horticultura, esportes, recreação, música, capoeira e formação humano-cristã tendo como foco o estímulo à leitura e escrita, diferentes formas de expressão e comunicação, autoliderança e organização do tempo.
                    <br/>As vivências proporcionadas favorecem o desenvolvimento da sociabilidade e atuam na prevenção de situações de risco social. A articulação com a rede socioassistencial, incluindo órgãos municipais e outros setores, fortalece a garantia dos direitos das crianças e adolescentes. O acompanhamento familiar também é uma ação essencial para o desenvolvimento dos participantes.
                    <br/>Além disso, o SCFV tem como objetivo combater a exploração e o trabalho infantil, bem como outras violações de direitos, seguindo as diretrizes do Estatuto da Criança e do Adolescente, da Política de Proteção Infantil e da Lei Geral de Proteção de Dados.
                    <br/>Por fim, o Serviço de Convivência e Fortalecimento de Vínculos se consolida como um espaço de transformação social, refletido em iniciativas como o Coral Padre Luís Cecchin e o Grupo de Capoeira, ambos formados pelos beneficiários do programa.
                    </p>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                    
                    </p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Serviço de Convivência e Fortalecimento de Vínculos para Jovens e Adultos</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                    Esta atividade é desenvolvida em articulação com a rede socioassistencial, e sua execução acontece
de maneira estruturada e coordenada, a fim de garantir a proteção social e a integralidade dos
direitos dos beneficiários sendo estas integradas e que vão além da assistência imediata, visando a
promoção de direitos e a emancipação dos beneficiários. Para tal, é um serviço realizado em
grupos, organizado a partir de percursos, de modo a garantir aquisições progressivas, direcionado a
jovens e adultos na faixa etária de 18 a 59 anos. A cada encontro, são realizados momentos
formativos, abordando temas transversais como: cidadania, direitos sociais e protagonismo social,
com o objetivo de promover a conscientização e o empoderamento dos beneficiários a fim de
complementar o trabalho social com famílias e prevenir a ocorrência de situações de risco social.
                    </p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Serviço de Convivência e Fortalecimento de Vínculos para Idosos </h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">
                    O Serviço de Convivência e Fortalecimento de Vínculos para idosos, direcionado a faixa etária a
partir de 60 anos, tem por foco o desenvolvimento de atividades que contribuam no processo de
envelhecimento saudável, no desenvolvimento da autonomia e de sociabilidades, no fortalecimento
dos vínculos familiares e do convívio comunitário e na prevenção de situações de risco social. A
intervenção é pautada nas características, interesses e demandas dessa faixa etária considerando a
vivência em grupo, as experimentações artísticas, culturais, esportivas e de lazer e a valorização das
experiências vividas constituindo formas privilegiadas de expressão, interação e proteção social.
Com a inclusão de vivências que valorizam suas experiências e que estimulem e potencialize a
condição de escolher e decidir. Este serviço é direcionado aos idosos, com encontros duas vezes por
semana (quartas e sextas-feiras), no turno da manhã. Durante os encontros, são oferecidas duas
refeições balanceadas (lanche da manhã e almoço), em consonância com as necessidades
nutricionais dos idosos
                    </p>
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default ServicoConvivencia;
