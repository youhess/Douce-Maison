import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const products = [
    { 
        id: 1, 
        title: 'Chaussons ballerines Femme Nœud semelle ergonomique', 
        price: '39,90€', 
        image1: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=product%20photography%20of%20cozy%20beige%20ballerina%20slippers%20for%20women%20with%20small%20bow%20on%20white%20background%20studio%20lighting',
        image2: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=product%20photography%20of%20cozy%20beige%20ballerina%20slippers%20for%20women%20with%20small%20bow%20side%20view%20on%20white%20background',
        sizes: ['36', '37', '38', '39', '40', '41']
    },
    { 
        id: 2, 
        title: 'Chaussons ballerines Femme Grand Nœud', 
        price: '33,90€', 
        image1: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=product%20photography%20of%20black%20velvet%20ballerina%20slippers%20for%20women%20with%20large%20ribbon%20bow%20on%20white%20background',
        image2: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=product%20photography%20of%20black%20velvet%20ballerina%20slippers%20for%20women%20with%20large%20ribbon%20bow%20top%20view%20on%20white%20background',
        sizes: ['36', '37', '38', '39', '40']
    },
    { 
        id: 3, 
        title: 'Chaussons mules Femme talon plateforme 2,5 cm', 
        price: '34,90€', 
        image1: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=product%20photography%20of%20striped%20colorful%20mule%20slippers%20for%20women%20with%20platform%20heel%20on%20white%20background',
        image2: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=product%20photography%20of%20striped%20colorful%20mule%20slippers%20for%20women%20with%20platform%20heel%20side%20view%20on%20white%20background',
        sizes: ['35/36', '37/38', '39/40', '41/42']
    },
    { 
        id: 4, 
        title: 'Chaussons mocassins Homme', 
        price: '45,90€', 
        image1: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=product%20photography%20of%20grey%20suede%20moccasin%20slippers%20for%20men%20on%20white%20background',
        image2: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=product%20photography%20of%20grey%20suede%20moccasin%20slippers%20for%20men%20angled%20view%20on%20white%20background',
        sizes: ['40', '41', '42', '43', '44', '45']
    },
     { 
        id: 5, 
        title: 'Chaussons mules Femme talon plateforme 2,5 cm', 
        price: '34,90€', 
        image1: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=product%20photography%20of%20leopard%20print%20mule%20slippers%20for%20women%20with%20platform%20heel%20on%20white%20background',
        image2: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=product%20photography%20of%20leopard%20print%20mule%20slippers%20for%20women%20with%20platform%20heel%20side%20view%20on%20white%20background',
        sizes: ['35/36', '37/38', '39/40']
    },
];

export const WeeklyPicksProductSliderSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#eeebe5]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl md:text-2xl font-medium uppercase tracking-widest text-center w-full relative">
                <span className="relative z-10 px-4 bg-[#eeebe5] text-gray-900">COUPS DE COEUR DE LA SEMAINE</span>
            </h2>
        </div>

        <Carousel opts={{ align: "start" }} className="w-full group/carousel">
            <CarouselContent className="-ml-6">
                {products.map((product) => (
                    <CarouselItem key={product.id} className="pl-6 basis-[60%] md:basis-[40%] lg:basis-1/4">
                        <div className="group relative bg-white rounded-md h-full flex flex-col overflow-hidden">
                            {/* Image Container */}
                            <div className="relative aspect-square bg-gray-100 overflow-hidden rounded-md">
                                {/* Default Image */}
                                <img 
                                    src={product.image1} 
                                    alt={product.title} 
                                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-700 ease-in-out group-hover:opacity-0" 
                                />
                                {/* Hover Image */}
                                <img 
                                    src={product.image2} 
                                    alt={product.title} 
                                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100" 
                                />
                            </div>

                            {/* Info Container */}
                            <div className="relative flex-1 p-4 bg-white">
                                {/* Default Content */}
                                <div className="flex flex-col gap-1 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-2 group-hover:pointer-events-none">
                                    <h3 className="text-[14px] font-medium leading-tight line-clamp-2 text-gray-800 h-10">{product.title}</h3>
                                    <div className="text-gray-500 text-[11px] truncate">
                                      Velours - Semelle ergonomique
                                    </div>
                                    <div className="flex gap-2 items-baseline mt-1">
                                        <span className="font-semibold text-[14px] text-gray-900">{product.price}</span>
                                    </div>
                                </div>

                                {/* Hover Content (Quick Buy) */}
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-white opacity-0 translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto z-10">
                                    <p className="uppercase text-[11px] font-bold mb-2 text-gray-900">Achat rapide</p>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {product.sizes.map((size) => (
                                            <button 
                                                key={size} 
                                                className="px-2 py-1 text-[10px] bg-gray-100 hover:bg-black hover:text-white rounded-sm transition-colors uppercase"
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="font-semibold text-[14px] mt-auto">{product.price}</div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/80 border-gray-200 text-black hover:bg-white -left-12 lg:-left-4 h-12 w-12 rounded-none opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:flex" />
            <CarouselNext className="bg-white/80 border-gray-200 text-black hover:bg-white -right-12 lg:-right-4 h-12 w-12 rounded-none opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};