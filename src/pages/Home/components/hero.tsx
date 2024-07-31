import React from 'react';
import HeroImage from '../../../images/hero-iplc-3.png';
import { Button } from 'flowbite-react';

const Hero: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <section className="bg-white">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="font-rubikMedium max-w-2xl mb-4 text-4xl leading-none tracking-tight md:text-5xl xl:text-6xl text-neutral-700">Transformando vidas desde 1970</h1>
                        <p className="font-rubikLight max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-justify">No Instituto Padre Luis Cecchin, nos dedicamos a oferecer um futuro melhor para crianças, adolescentes e suas famílias em situações de risco e vulnerabilidade social. Desde 1970, nossa missão é promover a educação, formação humana e profissionalização, cultivando valores de ética, respeito e solidariedade. Junte-se a nós para fazer a diferença!</p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <Button color='primary' size="xl" onClick={() => alert('hel')}>
                                <span className="font-rubikLight text-white">Faça parte dessa transformação</span>
                            </Button>
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={HeroImage} alt="hero image" height="300"/>
                    </div>                
                </div>
            </section>
        </React.Fragment>
  );
};
export default Hero;
