import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const instaImages = [
    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1620799140408-ed53d81d63bf?q=80&w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1549520037-33a5ae314c45?q=80&w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522209939525-4560411be43e?q=80&w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1512909481869-0eaa1e9817ba?q=80&w=300&h=300&fit=crop',
];

export const InstagramFeedSection: React.FC = () => {
    return (
        <section className="py-16 bg-white overflow-hidden text-center">
            <h3 className="font-bold text-lg uppercase tracking-wider mb-2">@ISOTONER.FR</h3>
            <p className="text-gray-500 text-xs mb-8 flex items-center justify-center gap-2">
                <Instagram className="h-4 w-4" /> Partagez vos photos sur Instagram avec le #isotoner
            </p>

             <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-[1400px] mx-auto px-4">
                <CarouselContent className="">
                    {instaImages.map((src, i) => (
                        <CarouselItem key={i} className="basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-2 pr-2">
                            <div className="aspect-square bg-gray-100 overflow-hidden relative group cursor-pointer">
                                <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Instagram Post" />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                    <Instagram className="h-8 w-8 drop-shadow-lg" />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
             </Carousel>
             
             <div className="mt-8">
                 <Button variant="outline" className="rounded-none uppercase text-xs px-8 py-5 border-black text-black hover:bg-black hover:text-white transition-colors">
                     Rejoignez-nous
                 </Button>
             </div>
        </section>
    );
};
