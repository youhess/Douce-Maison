import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils";

export const HeroSliderSection: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const onDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="w-full relative bg-gray-50 mb-8 md:mb-12 group">
      <Carousel 
        setApi={setApi} 
        plugins={[plugin.current]}
        className="w-full"
        opts={{
            loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {/* Slide 1: SOLDES */}
          <CarouselItem>
            <div className="relative w-full aspect-[375/500] md:aspect-[1920/860] max-h-[860px] bg-[#F5F5F5] flex items-center justify-center overflow-hidden">
                <a href="#" className='block w-full h-full relative'>
                     <picture className="w-full h-full object-cover">
                        <source media="(min-width: 1024px)" srcSet="https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=large%20fashion%20sale%20banner%20winter%20collection%20clean%20minimal%20layout&width=1920&height=860" />
                        <img 
                            className="w-full h-full object-cover" 
                            src="https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=mobile%20fashion%20sale%20banner%20winter%20collection%20clean%20minimal%20layout&width=375&height=500" 
                            alt="SOLDES" 
                        />
                    </picture>
                </a>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
                    <div className="container px-4 text-center space-y-6">
  
                    </div>
                </div>
            </div>
          </CarouselItem>

           {/* Slide 2: COLLECTION GANTS */}
           <CarouselItem>
            <div className="relative w-full aspect-[375/500] md:aspect-[1920/860] max-h-[860px] bg-slate-100 flex items-center justify-center overflow-hidden">
                 <a href="#" className='block w-full h-full relative'>
                    <picture className="w-full h-full object-cover block">
                        <source media="(min-width: 1024px)" srcSet="https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=elegant%20gloves%20collection%20hero%20banner%20studio%20lighting%20dark%20background&width=1920&height=860" />
                        <img 
                            className="w-full h-full object-cover" 
                            src="https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=gloves%20collection%20hero%20banner%20studio%20lighting%20dark%20background%20mobile&width=375&height=500" 
                            alt="COLLECTION GANTS" 
                        />
                    </picture>
                 </a>

                 <div className="absolute inset-0 flex flex-col justify-end pb-16 md:justify-center md:pb-0 items-end pointer-events-none">
                     <div className="container px-4 text-center space-y-6 md:space-y-8">
                        <h2 className="text-white font-black tracking-wide text-4xl md:text-5xl lg:text-[4rem] uppercase drop-shadow-md">
                            COLLECTION GANTS
                        </h2>
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                             <Button 
                                variant="outline" 
                                asChild
                                className="pointer-events-auto min-w-[160px] bg-transparent border-white text-white hover:bg-white hover:text-black rounded-[2px] px-8 py-6 text-sm font-semibold tracking-widest transition-colors duration-300 uppercase h-auto"
                            >
                                <a href="#">FEMME</a>
                            </Button>
                             <Button 
                                variant="outline" 
                                asChild
                                className="pointer-events-auto min-w-[160px] bg-transparent border-white text-white hover:bg-white hover:text-black rounded-[2px] px-8 py-6 text-sm font-semibold tracking-widest transition-colors duration-300 uppercase h-auto"
                            >
                                <a href="#">HOMME</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 right-6 md:bottom-10 w-full flex justify-end pr-6 md:pr-0 gap-3 z-20 pointer-events-none">
        {Array.from({ length: count }).map((_, index) => (
            <button
                key={index}
                className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300 pointer-events-auto shadow-sm",
                    current === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"
                )}
                onClick={() => onDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
            />
        ))}
      </div>
    </section>
  );
};
