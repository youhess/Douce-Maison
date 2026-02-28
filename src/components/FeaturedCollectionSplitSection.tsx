import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const products = [
    { 
        id: 1, 
        title: 'Chaussons mules fourrées Femme Camel', 
        price: '42,90€', 
        image1: 'https://loremflickr.com/800/800/slippers,women,camel?lock=201',
        image2: 'https://loremflickr.com/800/800/slippers,women,camel,side?lock=202',
        sizes: ['36', '37', '38', '39', '40']
    },
    { 
        id: 2, 
        title: 'Chaussons mules Homme Cuir Camel', 
        price: '47,90€', 
        image1: 'https://loremflickr.com/800/800/slippers,men,leather?lock=203',
        image2: 'https://loremflickr.com/800/800/slippers,men,leather,side?lock=204',
        sizes: ['40', '41', '42', '43', '44', '45']
    },
    { 
        id: 3, 
        title: 'Chaussons ballerines Femme Camel Brillants', 
        price: '21,99€', 
        image1: 'https://loremflickr.com/800/800/ballerina,slippers,women?lock=205',
        image2: 'https://loremflickr.com/800/800/ballerina,slippers,women,top?lock=206',
        sizes: ['36', '37', '38', '39', '40']
    },
    { 
        id: 4, 
        title: 'Chaussons bottillons bas Femme Camel', 
        price: '34,90€', 
        image1: 'https://loremflickr.com/800/800/ankle,slippers,women?lock=207',
        image2: 'https://loremflickr.com/800/800/ankle,slippers,women,side?lock=208',
        sizes: ['36', '37', '38', '39', '40']
    },
    { 
        id: 5, 
        title: 'Chaussons mules fourrées Femme Noir', 
        price: '42,90€', 
        image1: 'https://loremflickr.com/800/800/black,slippers,women?lock=209',
        image2: 'https://loremflickr.com/800/800/black,slippers,women,side?lock=210',
        sizes: ['36', '37', '38', '39', '40']
    },
];

// Duplicate products to create a long list for scrolling demonstration
const allProducts = [
    ...products.map(p => ({ ...p, id: `a-${p.id}` }))
];

export const FeaturedCollectionSplitSection: React.FC = () => {
  return (
    <section className="py-12 w-full px-4 bg-white flex justify-center">
      <div className="flex flex-col lg:flex-row gap-8 relative items-start justify-center max-w-full">
        
        {/* Left Column: Sticky Banner */}
        <div className="hidden lg:block lg:sticky lg:top-[100px] relative w-[1200px] h-[900px] rounded-md overflow-hidden group">
                 <img 
                     src="https://loremflickr.com/1200/900/cozy,home,slippers?lock=211" 
                alt="Douceur Confort" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/20" />
             <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-start items-start text-white">
                <p className="uppercase tracking-widest text-xs md:text-sm font-medium mb-3">Douceur, Confort et Chaleur</p>
                <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6 leading-tight">Chaussons<br/>Chauds</h2>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black uppercase tracking-widest text-xs h-10 px-6 rounded-none transition-colors">
                    Découvrir
                </Button>
             </div>
        </div>

        {/* Mobile Banner Alternative - to prevent layout breaking on small screens if standard banner is fixed 1200px */}
        <div className="lg:hidden relative w-full aspect-square rounded-md overflow-hidden group">
                 <img 
                     src="https://loremflickr.com/800/800/cozy,home,slippers?lock=212" 
                alt="Douceur Confort" 
                className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/20" />
             <div className="absolute inset-0 p-8 flex flex-col justify-start items-start text-white">
                <p className="uppercase tracking-widest text-xs font-medium mb-2">Douceur, Confort et Chaleur</p>
                <h2 className="text-2xl font-bold uppercase mb-4 leading-tight">Chaussons<br/>Chauds</h2>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black uppercase tracking-widest text-xs h-8 px-4 rounded-none transition-colors">
                    Découvrir
                </Button>
             </div>
        </div>

        {/* Right Column: Natural Scrolling Product List */}
        <div className="w-full flex flex-col gap-6 lg:w-[340px] shrink-0">
             {allProducts.map((product) => (
                <div key={product.id} className="group relative bg-white rounded-md flex flex-col overflow-hidden w-full border border-gray-100/50 hover:border-gray-200 transition-all hover:shadow-sm">
                    
                    {/* Image Container with Hover Swap */}
                    <div className="relative aspect-square bg-gray-50 overflow-hidden">
                        <img 
                            src={product.image1} 
                            alt={product.title} 
                            className="absolute inset-0 w-full h-full object-contain mix-blend-multiply p-6 transition-opacity duration-500 group-hover:opacity-0" 
                        />
                        <img 
                            src={product.image2} 
                            alt={product.title} 
                            className="absolute inset-0 w-full h-full object-contain mix-blend-multiply p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
                        />
                        
             
                        <Button size="icon" variant="ghost" className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Heart className="w-4 h-4" />
                        </Button>
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
            ))}
        </div>

      </div>
    </section>
  );
};