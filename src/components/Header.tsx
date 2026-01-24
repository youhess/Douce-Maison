import React, { useState } from 'react';
import { Menu, Search, Heart, User, ShoppingBag, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from '@/components/ui/navigation-menu';

const navLinks = [
    { name: 'Soldes', href: '#', className: 'text-[#FC2F2F] font-bold' },
    { name: 'Femme', href: '#' },
    { name: 'Homme', href: '#' },
    { name: 'Enfant', href: '#' },
    { name: 'Parapluies', href: '#' },
    { name: 'Grand Froid', href: '#', className: 'text-[#2B72B5]' },
    { name: 'Club Fidélité', href: '#' },
];

const suggestions = [
    { label: 'Parapluies', href: '/collections/parapluies' },
    { label: 'Gants femme', href: '/collections/gants-femme' },
    { label: 'Chaussons femme', href: '/collections/chaussons-femme' },
    { label: 'Chaussons homme', href: '/collections/chaussons-homme' },
    { label: 'Bonnets femme', href: '/collections/bonnets-echarpes-femme' },
    { label: 'Gants tactiles', href: '/collections/smartouch' },
];

const recommendations = [
    {
        id: 1,
        title: "Parapluie Auto Noir",
        price: "24,90€",
        variant: "noiruni / TU",
        image: "https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=black%20automatic%20umbrella%20product%20photo%20clean%20background&width=200&height=200"
    },
    {
        id: 2,
        title: "Gants Femme polaire douce Noir",
        price: "10,99€",
        variant: "noir / TU",
        image: "https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=women%20black%20gloves%20soft%20fleece%20product%20photo%20neutral%20background&width=200&height=200"
    },
    {
        id: 3,
        title: "Parasol de plage Rayure mixte",
        price: "38,99€",
        variant: "rayure mixte marine / TU",
        image: "https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=striped%20beach%20parasol%20product%20photo%20clean%20background&width=200&height=200"
    },
    {
        id: 4,
        title: "Chaussons mules Femme Noir rayures",
        price: "19,99€",
        variant: "noir / 36",
        image: "https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=women%20striped%20black%20slippers%20product%20photo%20clean%20background&width=200&height=200"
    }
];

// Mega Menu Data
const megaMenuData = {
    categories: [
        {
            title: "CHAUSSONS",
            links: [
                { label: "Voir tous les chaussons", href: "#", underline: true },
                { label: "Ballerines", href: "#", icon: "https://image.pollinations.ai/prompt/ballerines" },
                { label: "Mules", href: "#", icon: "https://image.pollinations.ai/prompt/mules" },
                { label: "Charentaises", href: "#", icon: "https://image.pollinations.ai/prompt/charentaises" },
                { label: "Bottillons", href: "#", icon: "https://image.pollinations.ai/prompt/bottillons" },
            ],
            extra: [
                { label: "CHAUSSONS EXTRA-LIGHT", href: "#" },
                { label: "CHAUSSETTES D'INTÉRIEUR", href: "#" },
                { label: "VÊTEMENTS D'INTÉRIEUR", href: "#" },
                { label: "Hauts", href: "#", icon: "https://image.pollinations.ai/prompt/woman_shirt" },
                { label: "Bas", href: "#", icon: "https://image.pollinations.ai/prompt/woman_pants" },
            ]
        },
        {
            title: "CHAUSSURES",
            links: [
                { label: "Voir toutes les chaussures", href: "#", underline: true },
                { label: "Baskets", href: "#", icon: "https://image.pollinations.ai/prompt/sneakers" },
                { label: "Sabots", href: "#", icon: "https://image.pollinations.ai/prompt/clogs" },
                { label: "Ballerines", href: "#", icon: "https://image.pollinations.ai/prompt/ballerinas" },
                { label: "Bottes de pluie", href: "#", icon: "https://image.pollinations.ai/prompt/rainboots" },
                { label: "Bottines", href: "#", icon: "https://image.pollinations.ai/prompt/ankleboots" },
                { label: "Sandales et espadrilles", href: "#", icon: "https://image.pollinations.ai/prompt/sandals" },
                { label: "Mules claquettes", href: "#", icon: "https://image.pollinations.ai/prompt/slides" },
                { label: "Tongs", href: "#", icon: "https://image.pollinations.ai/prompt/flipflops" },
            ]
        },
        {
            title: "PARAPLUIES",
            links: [
                { label: "Voir tous les parapluies", href: "#", underline: true },
                { label: "Ligne XTRA SOLIDE", href: "#", badge: "X-TRA SOLIDE" },
                { label: "Parapluies pliants", href: "#", icon: "https://image.pollinations.ai/prompt/folded_umbrella" },
                { label: "Parapluies canne", href: "#", icon: "https://image.pollinations.ai/prompt/cane_umbrella" },
                { label: "Cloches transparents", href: "#", icon: "https://image.pollinations.ai/prompt/transparent_umbrella" },
                { label: "Parapluies Anti-UV", href: "#", icon: "https://image.pollinations.ai/prompt/uv_umbrella" },
            ],
            extraTitle: "PARASOLS",
            extra: [
                { label: "Parasols de plage", href: "#", icon: "https://image.pollinations.ai/prompt/beach_parasol" },
            ]
        },
        {
            title: "ACCESSOIRES",
            links: [
                { label: "Gants et Mitaines", href: "#", icon: "https://image.pollinations.ai/prompt/gloves" },
                { label: "Bonnets et Écharpes", href: "#", icon: "https://image.pollinations.ai/prompt/scarf" },
                { label: "Loupes de lecture", href: "#", icon: "https://image.pollinations.ai/prompt/reading_glasses" },
                { label: "Ceintures", href: "#", icon: "https://image.pollinations.ai/prompt/belt" },
                { label: "Petite maroquinerie", href: "#", icon: "https://image.pollinations.ai/prompt/wallet" },
                { label: "Lunettes de soleil", href: "#", icon: "https://image.pollinations.ai/prompt/sunglasses" },
                { label: "Chapeaux", href: "#", icon: "https://image.pollinations.ai/prompt/hat" },
            ]
        }
    ],
    featuredImages: [
        { label: "CHAUSSONS", image: "https://image.pollinations.ai/prompt/cozy_slippers" },
        { label: "GANTS", image: "https://image.pollinations.ai/prompt/leather_gloves" },
    ]
};

export const Header: React.FC = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    return (
        <header className="sticky top-0 z-[100] w-full bg-white border-b border-gray-100 shadow-sm transition-all duration-300" onMouseLeave={() => setHoveredLink(null)}>
            <div className="container mx-auto px-4 h-16 md:h-[var(--header-height,80px)] grid grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_1fr_auto] xl:grid-cols-[149px_1fr_auto] gap-4 items-center max-w-[1500px]">
                


                {/* Logo Section */}
                <div className="flex justify-start items-center transition-transform hover:scale-105 duration-200 relative z-[101]">
                    <a href="/" className="header-logo block w-[120px] lg:w-[149px]">
                        <svg className="fill-primary w-[149px] h-auto transition-header" width="99" height="23" viewBox="0 0 99 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 6.71981C1.94343 6.73698 3.91157 7.12327 5.92089 6.26484V19.1412C5.88881 19.5069 5.91666 19.8755 6.00323 20.2314C6.11852 20.5405 6.36557 20.9697 6.59615 21.0212C6.95967 21.0374 7.31177 20.8868 7.55963 20.6092C7.78343 20.2889 7.94052 19.9234 8.02078 19.5361C8.30077 18.4717 8.8031 17.9309 9.62659 17.8193C10.3812 17.7531 11.0939 18.1899 11.4053 18.9095C11.7321 19.7226 11.4758 20.6632 10.7877 21.1757C10.7511 21.2148 10.723 21.2616 10.7054 21.3131C12.5329 22.1358 14.6437 21.8702 16.231 20.6177C17.5238 19.3988 17.2933 17.536 15.6463 16.875C14.6169 16.4458 13.5052 16.2569 12.4182 15.9307C11.7512 15.7247 11.0595 15.5273 10.4089 15.2526C8.83214 14.605 7.83475 12.9727 7.93843 11.2094C7.86217 9.50929 8.79854 7.93593 10.2936 7.25204C12.4272 6.23927 14.8596 6.1528 17.0545 7.01168C17.9124 7.24472 18.49 8.08112 18.4297 9.00323C18.3729 9.85415 17.7983 10.5708 17.005 10.7802C16.2361 10.9585 15.4424 10.6152 15.0204 9.92174C14.5391 9.11663 14.7086 8.06382 15.4157 7.46664C15.4651 7.39797 15.5145 7.32929 15.6298 7.14044C13.8593 6.84858 12.2288 6.72839 10.7877 7.93878C10.1376 8.3335 9.79604 9.11189 9.93468 9.88272C10.0733 10.6535 10.6622 11.2501 11.4053 11.3725C12.4581 11.6619 13.5246 11.8939 14.6005 12.0678C15.0204 12.1537 15.4239 12.2567 15.8769 12.3768C17.4852 12.666 18.7649 13.9424 19.1132 15.6045C19.6016 17.4763 18.9136 19.4666 17.3921 20.5834C15.0476 22.4749 11.874 22.808 9.21484 21.4418C9.01662 21.3485 8.83331 21.224 8.67134 21.0727C8.52873 20.9295 8.4042 20.768 8.30077 20.592C7.11494 22.0771 5.64913 22.1114 4.18332 21.665C3.05477 21.2786 2.27192 20.2064 2.21519 18.9696C2.12462 18.3818 2.07508 17.7879 2.06696 17.1926C2.06696 14.2654 2.06696 11.3467 2.06696 8.41091V7.40655H0C0 7.18336 0 6.943 0 6.71981Z"></path>
                            <path d="M86.4836 13.7708H77.5726C77.5065 15.7748 77.3248 17.7017 78.1507 19.5258C78.9765 21.35 80.5456 21.958 82.5772 21.5812C85.5684 20.8375 87.7442 18.1612 87.9453 14.9783C87.9453 12.8545 87.9453 10.6963 87.9453 8.59816C87.9453 7.87879 87.7967 7.51054 87.0451 7.64756C86.9364 7.67326 86.8235 7.67326 86.7148 7.64756C86.5394 7.5723 86.3685 7.48651 86.2028 7.39064C86.3679 7.28787 86.5331 7.11659 86.6983 7.11659C87.2764 7.11659 87.8462 7.11659 88.4243 7.11659C89.4731 7.03095 90.5055 6.8768 91.5873 6.7569V10.1311L91.7855 10.1996C91.9012 9.94271 92.0003 9.68579 92.1159 9.42887C92.6493 7.82139 93.9793 6.63873 95.5927 6.33727C97.4839 6.03753 98.9622 7.12515 98.9953 8.82939C99.057 9.82109 98.5118 10.7462 97.6326 11.1417C96.8007 11.5432 95.8164 11.3731 95.155 10.7135C94.4502 10.0032 94.2169 8.92793 94.5604 7.97299C94.6968 7.70937 94.7705 7.41573 94.7751 7.11659C94.3206 7.47414 93.8876 7.86025 93.4785 8.27273C92.245 9.85203 91.608 11.8429 91.6864 13.8736C91.6369 15.9118 91.6864 17.9586 91.6864 19.9969C91.7482 20.5882 91.8475 21.1747 91.9837 21.7525H87.7967C87.8792 20.545 87.9453 19.3032 88.0444 17.873C87.3953 18.772 86.6948 19.63 85.9467 20.4422C83.5683 22.686 80.8099 22.6089 77.9855 21.5983C75.3262 20.6477 74.1453 18.4639 73.8562 15.6977C73.5543 13.6048 73.9105 11.4667 74.872 9.60015C76.5213 6.55536 80.1879 5.39359 83.1966 6.96244C85.1457 7.96443 85.955 9.77143 86.2771 11.8782C86.3783 12.5048 86.4472 13.1366 86.4836 13.7708ZM77.5726 13.257C79.2243 13.257 80.7273 13.257 82.2552 13.257C82.4286 13.257 82.7424 12.9401 82.7259 12.786C82.6641 11.4054 82.5234 10.0299 82.3047 8.66668C82.154 7.66817 81.3382 6.92301 80.364 6.89393C79.348 6.81921 78.414 7.47314 78.1011 8.47827C77.5629 10.0054 77.3817 11.6431 77.5726 13.257Z"></path>
                            <path d="M44.6723 19.613C43.0543 21.649 40.2192 22.1758 37.9999 20.8528C36.7318 20.1214 36.0075 18.696 36.1534 17.2189C36.1534 14.1579 36.1534 11.0969 36.1534 8.04438V7.02689L34.6007 6.90718L34.5503 6.63357C35.3855 6.46336 36.1934 6.17559 36.9507 5.77853C37.6449 5.26451 38.2301 4.61308 38.6713 3.86325C39.0791 3.0709 39.4188 2.24414 39.6869 1.39219L39.989 1.44349C39.989 2.18737 39.989 2.92271 39.989 3.66659C39.989 4.52163 39.754 5.78708 40.2072 6.2317C40.6604 6.67632 41.8858 6.38561 42.7251 6.43691C43.0817 6.44643 43.4374 6.47498 43.791 6.52241V6.86443H40.0394C40.0394 7.3689 39.989 7.71947 39.989 8.03583C39.989 11.456 39.989 14.9531 39.989 18.3989C39.989 19.348 39.8379 20.4168 41.0046 20.8443C42.2022 21.1904 43.4745 20.6384 44.0596 19.519C44.133 19.4031 44.2003 19.2832 44.261 19.1599C42.8277 17.4409 42.1271 15.2102 42.3146 12.9628C42.5021 10.7154 43.5623 8.63725 45.2598 7.18934C48.2215 4.90421 52.3891 5.21925 54.9873 7.92468C57.7094 11.0069 57.8686 15.6345 55.365 18.9034C54.0428 20.4476 52.1707 21.3909 50.1636 21.5241C48.1564 21.6573 46.18 20.9695 44.6723 19.613ZM53.2835 13.5337C53.2835 12.2597 53.2835 10.9686 53.2835 9.71171C53.1996 7.32615 52.3183 6.41126 49.9935 6.20605C47.6686 6.00084 46.2082 7.12094 46.0739 9.6262C45.99 10.9857 46.0236 12.3452 46.0739 13.7047C46.0347 15.1996 46.0795 16.6955 46.2082 18.1851C46.4768 20.2971 47.677 21.0923 50.027 20.9726C52.1505 20.8699 53.1828 19.9209 53.2835 17.8089C53.3507 16.3724 53.2835 14.9445 53.2835 13.5337Z"></path>
                            <path d="M73.0872 21.5789H68.9415C69.0085 20.5338 69.109 19.5056 69.109 18.4519C69.109 15.4524 69.109 12.4274 69.109 9.41938C69.109 6.41136 67.2749 6.2839 65.5496 7.31207C63.7258 8.25104 62.5837 10.1571 62.6015 12.232C62.6015 14.7132 62.6015 17.1773 62.6015 19.6585C62.64 20.2777 62.7184 20.8936 62.836 21.5024H58.5898C58.7029 20.822 58.7756 20.1353 58.8076 19.4461C58.8076 15.8093 58.8076 12.1781 58.8076 8.55266V7.56698C58.3386 7.56698 57.9701 7.56698 57.5765 7.56698C57.4257 7.56698 57.2917 7.39704 57.1409 7.31207C57.2917 7.22709 57.4257 7.05715 57.5765 7.04016C58.4558 7.04016 59.352 7.04016 60.2397 7.04016C61.0334 6.95358 61.8219 6.8231 62.6015 6.64928V9.77626C63.1235 9.06926 63.6827 8.39133 64.2766 7.74542C66.3125 5.9178 69.3251 5.76604 71.5295 7.38004C72.4275 8.16533 72.9111 9.3321 72.836 10.5325C72.836 13.3706 72.836 16.2257 72.836 19.0297C72.8487 19.8851 72.9327 20.7379 73.0872 21.5789Z"></path>
                            <path d="M19.9329 13.1252C19.9509 10.2904 21.504 7.70897 23.946 6.45521C26.3564 5.06648 29.333 5.32671 31.4872 7.11451C33.9832 9.01937 35.0974 12.3261 34.2914 15.4371C33.8416 18.3582 31.7271 20.6988 28.9543 21.345C24.2585 22.5695 19.9493 18.862 19.9329 13.1252ZM23.7076 13.6219C23.7076 15.0346 23.7076 16.456 23.7076 17.903C23.6658 18.9214 24.1283 19.891 24.9329 20.4717C26.0112 21.2958 27.4383 21.4333 28.6436 20.8291C29.8488 20.225 30.6356 18.9778 30.6895 17.5862C30.7881 14.949 30.7717 12.3118 30.6895 9.69176C30.6072 7.32 29.4806 6.26684 27.2108 6.26684C24.9411 6.26684 23.7651 7.30288 23.6664 9.69176C23.6582 10.9504 23.7076 12.2947 23.7076 13.6219Z"></path>
                            <path d="M5.97764 2.46151C6.00538 3.10021 5.77292 3.72208 5.33564 4.17895C4.89835 4.63583 4.2954 4.8868 3.67044 4.87206C3.04769 4.87895 2.44848 4.62898 2.00811 4.1786C1.56773 3.72821 1.32332 3.11539 1.33005 2.47849C1.30977 1.82682 1.54938 1.19471 1.99387 0.727319C2.43836 0.259925 3.04953 -0.00259489 3.68704 1.93394e-05C4.31222 0.00876385 4.90759 0.274776 5.33863 0.737975C5.76968 1.20117 6.00003 1.82248 5.97764 2.46151Z"></path>
                        </svg>
                    </a>
                </div>

                {/* Nav (Desktop) */}
                <div className="hidden xl:flex justify-start px-8">
                     <NavigationMenu className="static" viewportClassName="!w-full !max-w-none mt-0 rounded-none border-t border-x-0 border-b-0 shadow-lg !origin-top">
                        <NavigationMenuList className="gap-2 xl:gap-4 text-[15px]">
                            {navLinks.map((link) => {
                                const isMegaMenu = ['Femme', 'Homme', 'Enfant'].includes(link.name);
                                
                                if (isMegaMenu) {
                                    return (
                                        <NavigationMenuItem key={link.name}>
                                            <NavigationMenuTrigger 
                                                className={`bg-transparent uppercase font-normal tracking-wide hover:text-black/80 transition-colors duration-200 text-gray-900 bg-none hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent pl-0 pr-0 [&>svg]:hidden ${link.className || ''}`}
                                            >
                                                {link.name}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <div className="w-[100vw] lg:w-[940px] xl:w-[1240px] p-6 lg:p-8 bg-white mx-auto grid grid-cols-5 gap-8">
                                                    {megaMenuData.categories.map((category, idx) => (
                                                        <div key={idx} className="flex flex-col gap-4">
                                                            <h3 className="font-bold text-sm tracking-wider uppercase mb-1">{category.title}</h3>
                                                            
                                                            <ul className="flex flex-col gap-2">
                                                                {category.links.map((sublink, subidx) => (
                                                                    <li key={subidx}>
                                                                        <NavigationMenuLink asChild>
                                                                            <a 
                                                                                href={sublink.href} 
                                                                                className={`text-[13px] text-gray-600 hover:text-brand flex items-center gap-2 ${sublink.underline ? 'underline font-medium text-black' : ''}`}
                                                                            >
                                                                                 {/* Icons - simplified matching logic just for demo */}
                                                                                {sublink.label}
                                                                                {sublink.badge && <Badge variant="secondary" className="bg-[#FC2F2F] text-white hover:bg-[#FC2F2F] h-4 px-1 text-[9px]">{sublink.badge}</Badge>}
                                                                            </a>
                                                                        </NavigationMenuLink>
                                                                    </li>
                                                                ))}
                                                            </ul>

                                                            {category.extraTitle && (
                                                                 <h3 className="font-bold text-sm tracking-wider uppercase mt-4 mb-1">{category.extraTitle}</h3>
                                                            )}

                                                            {category.extra && (
                                                                <ul className="flex flex-col gap-2 mt-1">
                                                                     {category.extra.map((extraLink, extraIdx) => (
                                                                        <li key={extraIdx}>
                                                                            <NavigationMenuLink asChild>
                                                                                <a href={extraLink.href} className="text-[13px] text-gray-600 hover:text-brand flex items-center gap-2 uppercase font-semibold">
                                                                                    {extraLink.label}
                                                                                </a>
                                                                            </NavigationMenuLink>
                                                                        </li>
                                                                     ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    ))}

                                                    <div className="flex flex-col gap-4">
                                                        {megaMenuData.featuredImages.map((feat, idx) => (
                                                            <a key={idx} href="#" className="group relative overflow-hidden rounded-md h-[180px]">
                                                                <img src={feat.image} alt={feat.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                                                                    <span className="text-white font-bold text-sm tracking-wider uppercase">{feat.label}</span>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    );
                                }

                                return (
                                    <NavigationMenuItem key={link.name}>
                                        <NavigationMenuLink 
                                            className={`navigation-link bg-transparent uppercase font-normal tracking-wide hover:text-black/80 transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left block py-2 ${link.className || 'text-gray-900'}`}
                                            href={link.href}
                                        >
                                            {link.name}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                );
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Icons Right */}
                <div className="flex justify-end items-center gap-1 md:gap-2">
                     <Button variant="ghost" className="hidden xl:flex bg-[#F9F9F9] hover:bg-gray-100 text-xs font-semibold px-4 py-2 h-auto normal-case rounded-sm border-0 mr-2 text-gray-700 transition-colors">
                        La marque
                    </Button>
                    
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-gray-900 w-10 h-10 hover:bg-gray-100 hover:text-black transition-all rounded-full"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                         {isSearchOpen ? <X className="h-[18px] w-[18px]" strokeWidth={1.5} /> : <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />}
                    </Button>
                    
                    <Button variant="ghost" size="icon" className="text-gray-900 w-10 h-10 hidden xl:flex hover:bg-gray-100 hover:text-black transition-all rounded-full">
                        <Heart className="h-[18px] w-[18px]" strokeWidth={1.5} />
                    </Button>
                     
                    <Button variant="ghost" size="icon" className="text-gray-900 w-10 h-10 hidden xl:flex hover:bg-gray-100 hover:text-black transition-all rounded-full">
                         <User className="h-[19px] w-[19px]" strokeWidth={1.5} />
                    </Button>
                    
                    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                        <SheetTrigger asChild>
                             <Button variant="ghost" size="icon" className="relative text-gray-900 w-10 h-10 hover:bg-transparent group transition-all rounded-full">
                                <svg className="h-[18px] w-[18px] stroke-2 stroke-gray-900 group-hover:stroke-brand transition-colors" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.307 6.33333C14.307 5.04467 13.2742 4 12 4C10.7258 4 9.69299 5.04467 9.69299 6.33333M19.3755 12.8119L21.9727 22.3119C22.1877 23.7253 21.1064 25 19.6925 25H4.30751C2.89357 25 1.81232 23.7253 2.02732 22.3119L4.62448 12.8119C4.79764 11.6736 5.76601 10.8333 6.90468 10.8333H17.0954C18.234 10.8333 19.2024 11.6736 19.3755 12.8119Z" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <Badge className="absolute top-0 right-0 h-[18px] w-[18px] p-0 flex items-center justify-center bg-black text-white text-[10px] rounded-full -mt-1 -mr-1 group-hover:bg-[#E30613] transition-colors border-2 border-white">
                                    0
                                </Badge>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="!max-w-none w-[90vw] md:w-[900px] p-0 flex flex-row">
                             {/* Cross-sell Sidebar */}
                            <div className="hidden lg:flex w-[40%] flex-col border-r border-gray-100 bg-white h-full overflow-y-auto">
                                <div className="p-6">
                                    <p className="w-full text-center mb-6 uppercase text-sm font-bold tracking-wider">
                                        Vous aimeriez aussi
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        {recommendations.map((item) => (
                                            <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4 last:border-0">
                                                <a href="#" className="w-[90px] shrink-0">
                                                    <img src={item.image} alt={item.title} className="w-full h-auto rounded-md object-cover aspect-square" />
                                                </a>
                                                <div className="flex flex-col flex-grow">
                                                    <p className="text-sm font-medium line-clamp-2 mb-1 leading-snug">{item.title}</p>
                                                    <p className="text-sm font-bold mb-1">{item.price}</p>
                                                    <p className="text-xs text-gray-500 mb-2">{item.variant}</p>
                                                    <Button variant="outline" size="sm" className="w-full mt-auto h-8 text-xs uppercase tracking-wide border-gray-300 hover:border-black hover:bg-white hover:text-black">
                                                        Ajouter
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Main Cart Area */}
                            <div className="flex-1 flex flex-col h-full bg-white relative">
                                <SheetHeader className="p-6 border-b border-gray-100 flex-shrink-0 flex flex-row items-center justify-center relative">
                                    <SheetTitle className="text-center font-bold text-lg uppercase tracking-wide">Panier</SheetTitle>
                                </SheetHeader>
                                
                                <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center text-center">
                                    <div className="mb-8">
                                        <p className="text-lg font-bold uppercase mb-8">Votre panier est vide !</p>
                                        <div className="flex flex-col gap-4 w-full items-center">
                                            <a href="#" className="w-full max-w-[200px] border border-black py-3 px-6 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                                                Collections Femme
                                            </a>
                                            <a href="#" className="w-full max-w-[200px] border border-black py-3 px-6 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                                                Collections Homme
                                            </a>
                                            <a href="#" className="w-full max-w-[200px] border border-black py-3 px-6 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                                                Collections Enfant
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>

                     <div className="flex xl:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="ml-0 hover:bg-gray-100 rounded-full">
                                    <Menu className="h-6 w-6" strokeWidth={1.5} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] p-0 z-[110]">
                                <SheetHeader className="p-4 border-b text-left bg-gray-50">
                                    <SheetTitle className="font-bold text-xl tracking-tight">MENU</SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col">
                                    {navLinks.map((link) => (
                                        <a 
                                            key={link.name} 
                                            href={link.href}
                                            className={`flex items-center justify-between p-4 border-b text-sm font-medium hover:bg-gray-100 transition-colors ${link.className || ''}`}
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

            <div 
                className={`absolute top-full left-0 w-full bg-white z-[99] border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
                    isSearchOpen ? 'h-[calc(100vh-100%)] opacity-100 visible' : 'h-0 opacity-0 invisible'
                }`}
            >
                <div className="container mx-auto px-4 !max-w-[50rem] pt-8 md:pt-12 h-full overflow-y-auto">
                     <div className="flex gap-4 h-[3.125rem] mb-12 md:mb-8">
                        <div className="relative w-full">
                            <label className="sr-only" htmlFor="Search-In-Template">Rechercher un produit</label>
                            <Input 
                                className="flex-grow w-full h-full bg-[#f4f4f4] border-none rounded-md px-4 placeholder:text-gray-500 focus-visible:ring-0 text-base" 
                                id="Search-In-Template" 
                                type="search" 
                                name="q" 
                                autoComplete="off" 
                                placeholder="Rechercher un produit" 
                            />
                        </div>
                        
                        <Button 
                            type="button" 
                            variant="outline"
                            className="shrink-0 h-full aspect-square p-0 border-gray-200"
                            onClick={() => setIsSearchOpen(false)}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center md:items-baseline gap-4 md:gap-8 pb-10">
                         <p className="font-bold">Suggestions</p>
                         <ul className="flex flex-wrap justify-center gap-2">
                            {suggestions.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.href} className="inline-block border border-gray-200 rounded-sm px-4 py-2 text-xs font-medium hover:border-black transition-colors">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                         </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};
