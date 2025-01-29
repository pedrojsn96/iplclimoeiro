
import React from 'react';
import { Footer, Header } from '../../shared';
import { Alert } from 'flowbite-react';
import { sendEvent } from '../../analytics';

const Noticias: React.FunctionComponent = () => {
  React.useEffect(() => {
    sendEvent('Page View', {
      'Page Name': 'Notícias'
    })
  }, []);

  return (
    <>
      <Header />
        <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Notícias</h1>
            {/* <!-- Row --> */}
            <div className="gap-1 lg:grid lg:grid-cols-1">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Notícias</h2>
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

export default Noticias;
