import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const categories = {
    femme: [
        { title: 'CHAUSSONS', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=cozy%20women%20slippers%20on%20soft%20rug%20warm%20neutral%20tones%20lifestyle%20photo&width=500&height=375', link: '/collections/chaussons-femme' },
        { title: 'GANTS', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=women%20leather%20gloves%20elegant%20fashion%20flatlay%20warm%20light&width=500&height=375', link: '/collections/gants-femme' },
        { title: 'MAILLE', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=knit%20scarf%20and%20beanie%20set%20soft%20wool%20texture%20neutral%20palette&width=500&height=375', link: '/collections/bonnets-echarpes-femme' },
        { title: 'PARAPLUIES', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=stylish%20umbrella%20in%20rain%20city%20street%20fashion%20photo&width=500&height=375', link: '/collections/parapluies-femme' },
        { title: 'BASKETS', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=women%20sneakers%20clean%20white%20background%20product%20photo&width=500&height=375', link: '/collections/chaussures-femme-baskets' },
        { title: 'SABOTS', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=women%20clogs%20comfy%20footwear%20lifestyle%20photo&width=500&height=375', link: '/collections/chaussures-femme-sabots' },
        { title: 'EXTRA-LIGHT', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=lightweight%20slippers%20airy%20fabric%20minimal%20background&width=500&height=375', link: '/collections/chaussons-extra-light-femme' },
    ],
    homme: [
        { title: 'PARAPLUIES', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=men%20umbrella%20in%20rain%20urban%20street%20moody%20light&width=500&height=375', link: '/collections/parapluies-homme' },
        { title: 'CHAUSSONS', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=men%20slippers%20cozy%20home%20lifestyle%20photo&width=500&height=375', link: '/collections/chaussons-homme' },
        { title: 'MAILLE', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=men%20knit%20scarf%20and%20beanie%20wool%20texture&width=500&height=375', link: '/collections/bonnets-echarpes-homme' },
        { title: 'GANTS', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=men%20leather%20gloves%20classic%20style%20product%20photo&width=500&height=375', link: '/collections/gants-homme' },
        { title: 'BASKETS', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=men%20sneakers%20modern%20sport%20minimal%20studio&width=500&height=375', link: '/collections/chaussures-homme-baskets' },
    ],
    enfant: [
        { title: 'PARAPLUIES', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=kids%20umbrella%20colorful%20rainy%20day%20playful&width=500&height=375', link: '/collections/parapluies-enfant' },
        { title: 'BOTTES DE PLUIE', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=kids%20rain%20boots%20splashing%20puddle%20bright%20colors&width=500&height=375', link: '/collections/chaussures-enfant-bottes-de-pluie' },
        { title: 'CHAUSSONS', image: 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=kids%20slippers%20cozy%20home%20soft%20light&width=500&height=375', link: '/collections/chaussons-enfant' },
    ],
};



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