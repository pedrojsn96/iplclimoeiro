
import React from 'react';
import { Footer, Header } from '../../shared';

const OndeAtuamos: React.FunctionComponent = () => {

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-8 lg:py-24 lg:px-6">
            <h1 className="font-rubikBold text-neutral-700 mb-4 text-4xl tracking-tight">Fale conosco</h1>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Entre em contato</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">
                      Agradecemos seu interesse em se conectar conosco no Instituto Padre Luis Cecchin. Estamos aqui para ouvir suas dúvidas. <br/>
                      Por favor, utilize as informações abaixo para entrar em contato conosco ou visite-nos pessoalmente.<br/>
                      Estamos localizados no endereço Rua Professor Rivadávia Bernardes de Paula, 155, Bairro José Fernandes Salsa, na cidade de Limoeiro, Pernambuco.
                    </p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Redes sociais</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">Mantenha-se atualizado sobre nossas atividades e eventos através de nossas redes sociais:
                    </p>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">
                    <ul className="grid grid-cols-1">
                      <div>
                        <li className='font-rubikRegular flex gap-1 hover:text-iplc'>
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
                            <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                          </svg> 
                            <a style={{ cursor: 'pointer' }}  className='font-rubikRegular' href='https://wa.me/558185304323' target='_blank'> 81 98530-4323</a>
                        </li>
                        <li className='font-rubikRegular flex gap-1 hover:text-iplc'>
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                          </svg>
                          <a style={{ cursor: 'pointer' }} className='font-rubikRegular hover:text-iplc' href='https://www.instagram.com/' target='_blank'>@iplclimoeiro</a>
                        </li>
                        <li className='font-rubikRegular flex gap-1 hover:text-iplc'>
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                          </svg>
                          <a style={{ cursor: 'pointer' }} className='font-rubikRegular hover:text-iplc' href='https://www.facebook.com/IPLCLimoeiro.pe/' target='_blank'>IPLC LIMOEIRO</a>
                        </li>
                        <li className='font-rubikRegular flex gap-1 hover:text-iplc'>
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                          </svg>
                          <a style={{ cursor: 'pointer' }} className='font-rubikRegular hover:text-iplc' href='' target='_blank'>iplc@iplclimoeiro.org.br</a>
                        </li>
                      </div>
                    </ul>
                    </p>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Localização</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.113582144707!2d-35.45646392376444!3d-7.883183658112878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7abbc78d2aad075%3A0xf4cef35b84c86f2d!2sInstituto%20Padre%20Luis%20Cecchin%20-%20IPLC!5e0!3m2!1spt-BR!2sbr!4v1732279991248!5m2!1spt-BR!2sbr" width="800" height="450" style={{ border:0 }} allowFullScreen loading="lazy" referrerPolicy='no-referrer-when-downgrade'></iframe>
                </div>
            </div>
            {/* <!-- Row --> */}
            <div className="gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Seja um benfeitor</h2>
                    <p className="font-rubikLight mb-8 font-light lg:text-xl text-justify">
                      Junte-se a nós na missão de transformar vidas. Saiba como contribuir com essa obra. 
                      Agradecemos seu contato e esperamos em breve compartilhar mais sobre nosso trabalho e como você pode fazer parte dele. Que sua experiência conosco seja repleta de paz e inspiração.
                      <br/>
                      ADD CTA P/ DOACAO
                    </p>
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default OndeAtuamos;
