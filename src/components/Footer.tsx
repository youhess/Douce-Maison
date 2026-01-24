import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
    Gift, 
    RotateCcw, 
    Lock, 
    MessageCircle, 
    Timer, 
    Instagram, 
    Facebook, 
    Youtube, 
    Twitter, 
    Mail, 
    ArrowRight 
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#1A1A1A] pb-8 pt-12">
        <div className="container mx-auto">
            
            {/* 1. Trust Bar (Reassurance) */}
             <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-16 justify-items-center text-center">
                 {/* Item 1 */}
                 <div className="flex flex-col items-center gap-3 group cursor-pointer">
                     <Gift strokeWidth={1} className="w-10 h-10 lg:w-[40px] lg:h-[40px]" />
                     <div className="text-xs tracking-wide">
                         <p className="font-bold uppercase mb-1">Fidélité récompensée</p>
                         <p className="text-gray-500">1€ d'achats = 1 point</p>
                     </div>
                 </div>
                  {/* Item 2 */}
                 <div className="flex flex-col items-center gap-3 group cursor-pointer">
                     <RotateCcw strokeWidth={1} className="w-10 h-10 lg:w-[40px] lg:h-[40px]" />
                     <div className="text-xs tracking-wide">
                          <p className="font-bold uppercase mb-1">Satisfait ou remboursé</p>
                          <p className="text-gray-500">15 jours pour changer d'avis</p>
                     </div>
                 </div>
                 {/* Item 3 */}
                 <div className="flex flex-col items-center gap-3 group cursor-pointer">
                     <Lock strokeWidth={1} className="w-10 h-10 lg:w-[40px] lg:h-[40px]" />
                     <div className="text-xs tracking-wide">
                          <p className="font-bold uppercase mb-1">Paiement sécurisé</p>
                          <div className="flex items-center gap-2 justify-center">
                             <div className="text-[10px] font-bold">Visa / MC / PayPal / Alma</div>
                          </div>
                     </div>
                 </div>
                 {/* Item 4 */}
                 <div className="flex flex-col items-center gap-3 group cursor-pointer">
                     <MessageCircle strokeWidth={1} className="w-10 h-10 lg:w-[40px] lg:h-[40px]" />
                     <div className="text-xs tracking-wide">
                          <p className="font-bold uppercase mb-1">Un service client à votre écoute</p>
                          <p className="text-gray-500">contacter par mail</p>
                     </div>
                 </div>
                  {/* Item 5 */}
                 <div className="flex flex-col items-center gap-3 group cursor-pointer">
                     <Timer strokeWidth={1} className="w-10 h-10 lg:w-[40px] lg:h-[40px]" />
                     <div className="text-xs tracking-wide">
                          <p className="font-bold uppercase mb-1">Livraison rapide</p>
                          <p className="text-gray-500">et offerte dès 39€ d'achats</p>
                     </div>
                 </div>
             </div>

            {/* 2. Brand & Newsletter (Light Gray Rounded Card) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-3 mb-6">
                
                {/* Left: Brand + Socials */}
                <div className="bg-[#F4F4F4] rounded-[10px] p-8 lg:p-12 lg:pr-64 flex flex-col items-center justify-center space-y-8">
                        {/* Brand Logo - Serif Text */}
                        <div className="text-6xl font-serif font-bold tracking-tight text-center">
                        isotoner
                        </div>
                        
                        {/* Social Icons */}
                        <div className="flex gap-4">
                        {[
                            { Icon: Instagram, href: "#" },
                            { Icon: Facebook, href: "#" },
                            { Icon: Twitter, href: "#" }, // Pinterest placeholder
                            { Icon: Youtube, href: "#" }
                        ].map((social, idx) => (
                            <a key={idx} href={social.href} className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                                <social.Icon size={18} strokeWidth={1.5} />
                            </a>
                        ))}
                        </div>
                </div>

                {/* Right: Newsletter Form */}
                <div className="bg-[#F4F4F4] rounded-[10px] p-8 lg:p-12 flex flex-col justify-center gap-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-white w-12 h-12 rounded-[10px] flex items-center justify-center shadow-sm shrink-0">
                            <Mail className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="uppercase font-bold text-lg tracking-wide leading-tight">Inscrivez-vous à notre Newsletter</h3>
                            <p className="text-gray-500 text-sm mt-1">Offre de bienvenue : -10% sur votre 1ère commande</p>
                        </div>
                    </div>
                        
                    <div className="relative w-full">
                        <Input 
                            placeholder="Votre e-mail" 
                            className="bg-[#EBEBEB] border-none h-14 rounded-[5px] pl-4 pr-14 text-base placeholder:text-gray-500 focus-visible:ring-0" 
                        />
                            <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 bg-transparent text-black hover:bg-black/5 rounded-sm">
                            <ArrowRight className="w-5 h-5" />
                            </Button>
                    </div>
                </div>

            </div>

            {/* 3. Main Navigation (Black Rounded Card) */}
            <div className="bg-black text-white rounded-[10px] p-8 lg:p-16 mb-12 min-h-[425px]">
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8"> 
                    
                    {/* Column 1 */}
                    <div>
                        <h4 className="font-bold uppercase text-[20px] tracking-widest mb-6">Besoin d'aide ?</h4>
                         <ul className="space-y-4 text-[18px] text-gray-400">
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">FAQ</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Nous contacter</a></li>
                         </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="font-bold uppercase text-[20px] tracking-widest mb-6">Commandes</h4>
                         <ul className="space-y-4 text-[18px] text-gray-400">
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Livraison rapide</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Paiement sécurisé</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Suivi de commande</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Retour & remboursement</a></li>
                         </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="font-bold uppercase text-[20px] tracking-widest mb-6">Services</h4>
                         <ul className="space-y-4 text-[18px] text-gray-400">
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Programme de fidélité</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">E-Carte Cadeau</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Conditions des offres</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Le CLUB Isotoner</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Cadeaux d'affaires</a></li>
                         </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="font-bold uppercase text-[20px] tracking-widest mb-6">Conseils</h4>
                         <ul className="space-y-4 text-[18px] text-gray-400">
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Guide des parapluies</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Guide des tailles</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Guide des gants</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Guide des ceintures</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Conseil produits</a></li>
                         </ul>
                    </div>
                    
                    {/* Column 5 */}
                    <div>
                        <h4 className="font-bold uppercase text-[20px] tracking-widest mb-6">Isotoner</h4>
                         <ul className="space-y-4 text-[18px] text-gray-400">
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">La maison Isotoner</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Points de vente</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Boutique officielle</a></li>
                            <li><a href="#" className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-red-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Fiches environnementales</a></li>
                         </ul>
                    </div>

                 </div>
            </div>

            {/* 4. Legal Links */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                 <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    <a href="#" className="hover:text-black transition-colors">Conditions générales de vente</a>
                    <a href="#" className="hover:text-black transition-colors">Politique de confidentialité</a>
                    <a href="#" className="hover:text-black transition-colors">Mentions légales</a>
                    <a href="#" className="hover:text-black transition-colors">Plan du site</a>
                    <a href="#" className="hover:text-black transition-colors">Ouvrir les préférences Cookies</a>
                 </div>
                 <div className="text-center lg:text-right">
                    Réalisé par <a href="#" className="hover:underline text-black">W3lead</a> pour Isotoner
                 </div>
            </div>

        </div>
    </footer>
  );
};
