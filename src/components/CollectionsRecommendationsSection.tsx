import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = {
    femme: [
        { title: 'CHAUSSONS', image: '//www.isotoner.fr/cdn/shop/files/FEMME-Chaussons-chauds-AH25.jpg?crop=center&height=375&v=1765961671&width=500', link: '/collections/chaussons-femme' },
        { title: 'GANTS', image: '//www.isotoner.fr/cdn/shop/files/FEMME-Gants-nouvelle-co-jpg.jpg?crop=center&height=375&v=1762529011&width=500', link: '/collections/gants-femme' },
        { title: 'MAILLE', image: '//www.isotoner.fr/cdn/shop/files/Nouvelle-collection-MAILLE-fil-homepage_fc368fa0-b15f-4b00-aaf5-c2f04dc8680e.jpg?crop=center&height=375&v=1764669729&width=500', link: '/collections/bonnets-echarpes-femme' },
        { title: 'PARAPLUIES', image: '//www.isotoner.fr/cdn/shop/files/FEMME-Parapluie-alpha.jpg?crop=center&height=375&v=1762528491&width=500', link: '/collections/parapluies-femme' },
        { title: 'BASKETS', image: '//www.isotoner.fr/cdn/shop/files/FEMME-Baskets-nouvelle-collection-hiver-25.jpg?crop=center&height=375&v=1758113085&width=500', link: '/collections/chaussures-femme-baskets' },
        { title: 'SABOTS', image: '//www.isotoner.fr/cdn/shop/files/Nouvelle-collection-sabots-confort-fil-homepage.jpg?crop=center&height=375&v=1760954841&width=500', link: '/collections/chaussures-femme-sabots' },
        { title: 'EXTRA-LIGHT', image: '//www.isotoner.fr/cdn/shop/files/FEMME-Chaussons-extra-light-nouvelle-collection.jpg?crop=center&height=375&v=1758114340&width=500', link: '/collections/chaussons-extra-light-femme' },
    ],
    homme: [
        { title: 'PARAPLUIES', image: '//www.isotoner.fr/cdn/shop/files/HOMME-Parapluies-nouvelle-collection.jpg?crop=center&height=375&v=1756368666&width=500', link: '/collections/parapluies-homme' },
        { title: 'CHAUSSONS', image: '//www.isotoner.fr/cdn/shop/files/HOMME-Chaussons-nouvelle-collection.jpg?crop=center&height=375&v=1756368609&width=500', link: '/collections/chaussons-homme' },
        { title: 'MAILLE', image: '//www.isotoner.fr/cdn/shop/files/Nouvelle-collection-MAILLE-homme--fil-homepage.jpg?crop=center&height=375&v=1760955147&width=500', link: '/collections/bonnets-echarpes-homme' },
        { title: 'GANTS', image: '//www.isotoner.fr/cdn/shop/files/HOMME-Gants-nouvelle-co-jpg.jpg?crop=center&height=375&v=1762529182&width=500', link: '/collections/gants-homme' },
        { title: 'BASKETS', image: '//www.isotoner.fr/cdn/shop/files/baskets-2_41a378ae-a14d-42ee-bbd4-f15791966cb5.jpg?crop=center&height=375&v=1740587520&width=500', link: '/collections/chaussures-homme-baskets' },
    ],
    enfant: [
        { title: 'PARAPLUIES', image: '//www.isotoner.fr/cdn/shop/files/ENFANT-Parapluies-nouvelle-collection_c38df9ca-641f-4f5a-bcaa-ce3596e2021d.jpg?crop=center&height=375&v=1756377531&width=500', link: '/collections/parapluies-enfant' },
        { title: 'BOTTES DE PLUIE', image: '//www.isotoner.fr/cdn/shop/files/ENFANT-Bottes-de-pluie-nouvelle-collection.jpg?crop=center&height=375&v=1758115467&width=500', link: '/collections/chaussures-enfant-bottes-de-pluie' },
        { title: 'CHAUSSONS', image: '//www.isotoner.fr/cdn/shop/files/ENFANT-Chaussons-nouvelle-collection.jpg?crop=center&height=375&v=1756368744&width=500', link: '/collections/chaussons-enfant' },
    ],
};

const CustomCarouselButton = ({ direction, className, ...props }: { direction: 'left' | 'right', className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button 
            className={cn(
                "absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-100 hover:bg-white text-gray-800 transition-all shadow-sm",
                direction === 'left' ? "left-0" : "right-0",
                className
            )}
            {...props}
        >
            {direction === 'left' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
        </button>
    )
}

export const CollectionsRecommendationsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="w-full px-4 md:px-12">
        <h2 className="text-xl md:text-2xl font-medium uppercase tracking-widest mb-8 text-center text-gray-900">COLLECTIONS À NE PAS MANQUER</h2>
        
        <Tabs defaultValue="femme" className="w-full">
            <div className="flex justify-center mb-10">
                <TabsList className="bg-transparent space-x-8 p-0 h-auto">
                    {['femme', 'homme', 'enfant'].map((tab) => (
                        <TabsTrigger 
                            key={tab} 
                            value={tab} 
                            className="text-gray-400 uppercase tracking-widest text-sm rounded-none border-b-2 border-transparent px-2 pb-2 shadow-none data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:border-black data-[state=active]:shadow-none hover:text-gray-600 transition-colors"
                        >
                            {tab}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </div>

            {Object.entries(categories).map(([key, items]) => (
                <TabsContent key={key} value={key} className="mt-0">
                    <Carousel 
                        opts={{ 
                            align: "start",
                            loop: true,
                        }} 
                        className="w-full"
                    >
                        <CarouselContent className="-ml-3 md:-ml-5">
                            {items.map((item, index) => (
                                <CarouselItem key={index} className="pl-3 md:pl-5 basis-[80%] md:basis-[41.6%] lg:basis-[28%] xl:basis-[26%]">
                                    <a href={item.link} className="block group relative overflow-hidden rounded-md cursor-pointer h-full">
                                        <div className="aspect-[4/5] md:aspect-[7/6] bg-gray-100 overflow-hidden rounded-md relative">
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                            />
                                            {/* Text Overlay - Top Left */}
                                            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                                                <h3 className="text-lg md:text-xl lg:text-2xl font-medium uppercase tracking-wide text-gray-900 drop-shadow-sm">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0 w-12 h-12 rounded-none bg-white/80 border-0 hover:bg-white text-black shadow-md -translate-x-1/2 ml-4 hidden md:flex" />
                        <CarouselNext className="absolute right-0 w-12 h-12 rounded-none bg-white/80 border-0 hover:bg-white text-black shadow-md translate-x-1/2 mr-4 hidden md:flex" />
                    </Carousel>
                </TabsContent>
            ))}
        </Tabs>
      </div>
    </section>
  );
};
