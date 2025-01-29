
import React from 'react';
import { Footer, Header } from '../../../../shared';
import Memorial1 from "../../../../images/memorial/IN_MEMORIAN_pe_Luis_2022_1.png";
import Memorial2 from "../../../../images/memorial/Memorial_PLC_1.png";
import Memorial3 from "../../../../images/memorial/Memorial_PLC_2.png";
import Memorial4 from "../../../../images/memorial/Memorial_PLC_3.png";
import Memorial5 from "../../../../images/memorial/Memorial_PLC_4.png";
import Memorial6 from "../../../../images/memorial/Memorial_PLC_5.png";
import Memorial7 from "../../../../images/memorial/Memorial_PLC_6.png";
import Memorial8 from "../../../../images/memorial/Memorial_PLC_7.png";
import { Carousel } from 'flowbite-react';
import { sendEvent } from '../../../../analytics';

const Memorial: React.FunctionComponent = () => {
  React.useEffect(() => {
    sendEvent('Page View', {
      'Page Name': 'Memorial'
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
                    <h2 className="font-rubikRegular text-neutral-700 mb-4 text-3xl tracking-tight">Memorial</h2>
                    <p className="font-rubikLight mb-4 font-light lg:text-xl text-justify">Neste memorial dedicado ao Padre Luis Cecchin se encontram alguns de seus pertences. Padre Luis viveu de forma muito simples e apenas com o necessário. Portanto, encontram-se alguns de seus escritos, homilias, pertences e objetos de sua vida, missão, sua vida de oração e  material usado nas celebrações.</p>
                    <div style={ { maxHeight: 750} } className="h-96 sm:h-screen xl:h-screen 2xl:h-screen">
                        <Carousel slideInterval={3000}> 
                            <img src={Memorial2} alt="..." className="object-scale-down" />
                            <img src={Memorial1} alt="..." className="object-scale-down" />
                            <img src={Memorial3} alt="..." className="object-scale-down" />
                            <img src={Memorial4} alt="..." className="object-scale-down" />
                            <img src={Memorial5} alt="..." className="object-scale-down" />
                            <img src={Memorial6} alt="..." className="object-scale-down" />
                            <img src={Memorial7} alt="..." className="object-scale-down" />
                            <img src={Memorial8} alt="..." className="object-scale-down" />
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

export default Memorial;
