import React from 'react';
import { Instagram } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const instaImages = [
    '/images/instagram-post.svg',
    '/images/instagram-post.svg',
    '/images/instagram-post.svg',
    '/images/instagram-post.svg',
    '/images/instagram-post.svg',
    '/images/instagram-post.svg',
];

export const InstagramFeedSection: React.FC = () => {
    return (
        <section className="py-16 bg-white overflow-hidden text-center">
            <h3 className=" text-3xl uppercase tracking-wider mb-2">@ISOTONER.FR</h3>
            <p className="text-gray-500 text-xs mb-8 flex items-center justify-center gap-2">
                <Instagram className="h-4 w-4" /> Partagez vos photos sur Instagram avec le #isotoner
            </p>

            <Carousel className="w-full max-w-[95%] mx-auto px-1 relative group/carousel" opts={{ align: "start", loop: true }}>
                <CarouselContent>
                    {instaImages.map((src, i) => (
                        <CarouselItem key={i} className="basis-[75%] sm:basis-[50%] md:basis-[40%] lg:basis-[30%] xl:basis-[370px] pl-4">
                            <div className="aspect-square bg-gray-100 overflow-hidden relative group cursor-pointer">
                                <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Instagram Post" />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                    <Instagram className="h-8 w-8 drop-shadow-lg" />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="bg-white/80 border-gray-200 text-black hover:bg-white -left-12 lg:-left-4 h-12 w-12 rounded-none opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:flex" />
                <CarouselNext className="bg-white/80 border-gray-200 text-black hover:bg-white -right-12 lg:-right-4 h-12 w-12 rounded-none opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:flex" />
            </Carousel>
             
             <div className="mt-16 flex flex-col justify-center items-center">
                 <h3 className=" text-3xl uppercase tracking-wider mb-2">Isotoner</h3>
                <p className="text-gray-500 text-xs mb-8 flex items-center justify-center gap-2 mt-2">
                Confort, qualité et Style pour Chaussons, Parapluies, Sandales, Gants
                </p>
             </div>
         
        </section>
    );
};