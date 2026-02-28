import React from 'react';
import { Button } from '@/components/ui/button';

export const LoyaltyProgramSection: React.FC = () => {
    return (
        <section className="bg-[#EEEBE6] py-16 md:py-24">
            <div className="w-full mx-auto px-4 md:px-12 lg:px-[162px]">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    
                    {/* Left Content Column */}
                    <div className="flex flex-col lg:-mt-[200px] w-full lg:w-[45%] shrink-0">
                        {/* Headers */}
                        <div className="mb-10 text-center lg:text-left">
                            <h2 className="text-xl md:text-2xl font-medium uppercase tracking-widest text-[#1A1A1A] mb-2">
                                Programme de fidélité
                            </h2>
                            <p className="text-[#666666] text-sm md:text-base tracking-wide">
                                Toujours plus de récompenses
                            </p>
                        </div>

                        {/* Steps grid */}
                        <div className="flex flex-col md:flex-row gap-4 mb-10 text-[#1A1A1A]">
                            {[
                                { step: '01', title: 'Créez un compte' },
                                { step: '02', title: 'Cumulez des points', subtitle: 'à chaque achat' },
                                { step: '03', title: "1€ d'achats = 1 point" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-md shadow-sm border border-gray-100/50 flex flex-col items-start justify-center h-[137px] transition-transform hover:-translate-y-1 duration-300 md:flex-1 w-full">
                                    <span className="text-3xl font-bold mb-4">{item.step}</span>
                                    <div className="uppercase text-xs font-bold leading-relaxed tracking-wider">
                                        <p>{item.title}</p>
                                        {item.subtitle && <p>{item.subtitle}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center lg:text-left">
                            <Button 
                                variant="outline" 
                                className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white uppercase font-bold text-xs tracking-[0.1em] px-8 h-12 rounded-sm bg-transparent transition-colors"
                            >
                                J'adhère gratuitement
                            </Button>
                        </div>
                    </div>

                    {/* Right Image Column */}
                    <div className="w-full relative rounded-md overflow-hidden aspect-[3/2] shadow-lg">
                        <img 
                            src="https://loremflickr.com/1200/900/couple,home,lifestyle?lock=507" 
                            alt="Programme de fidélité" 
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};