
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
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Centenário</h2>
                    {/* <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Ser um agente de transformação a fim de integrar crianças, adolescentes, jovens e famílias em situação de vulnerabilidade social apostando como sujeitos da nova sociedade, economicamente desfavorecidas, apostando como sujeitos da nova sociedade.</p> */}
                    <Alert color="warning" withBorderAccent>
                      <span className="font-rubikRegular">
                        <span className="font-rubikBold font-light text-gray-700">Página em construção!</span> O Institudo Padre Luis Cecchin está trabalhando no conteúdo dessa página.
                      </span>
                    </Alert>
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default Centenario;
