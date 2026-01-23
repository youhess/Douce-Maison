import React from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

export const AnnouncementBar: React.FC = () => {
    const [api, setApi] = React.useState<CarouselApi>();

    // Manual autoplay implementation to avoid external plugins
    React.useEffect(() => {
        if (!api) {
            return;
        }

        const intervalId = setInterval(() => {
            if (api.canScrollNext()) {
                api.scrollNext();
            } else {
                api.scrollTo(0);
            }
        }, 4000);

        return () => clearInterval(intervalId);
    }, [api]);

    return (
        <div className="w-full bg-[#E30613] text-white text-[13px] font-medium py-1 relative z-50 overflow-hidden shadow-sm">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                        axis: "y",
                        watchDrag: false,
                    }}
                    orientation="vertical"
                    className="w-full h-[30px] flex items-center justify-center"
                >
                    <CarouselContent className="-mt-0 h-[30px] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                        <CarouselItem className="pt-0 h-[30px] flex items-center justify-center">
                           <p className="text-center tracking-wide animate-in fade-in slide-in-from-bottom-2 duration-700">
                                <span className="md:hidden">Livraison offerte dès 39€ d’achats</span>
                                <span className="hidden md:inline">Livraison offerte dès 39€ d’achats</span>
                           </p>
                        </CarouselItem>
                        <CarouselItem className="pt-0 h-[30px] flex items-center justify-center">
                            <p className="text-center tracking-wide animate-in fade-in slide-in-from-bottom-2 duration-700">
                                <span className="md:hidden">Gagnez des points de fidélité en créant un <a href="#" className="underline hover:text-gray-200 transition-colors">compte</a></span>
                                <span className="hidden md:inline">Points de fidélité : créer un <a href="#" className="underline hover:text-gray-200 transition-colors">compte</a></span>
                            </p>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};
