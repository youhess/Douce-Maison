import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-16 pb-8 text-sm">
      <div className="container mx-auto px-4">
        
        {/* Footer Top: Brand + Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 border-b border-gray-800 pb-12">
            
            {/* Brand Block */}
            <div className="space-y-6 lg:w-1/3">
                 <div className="text-3xl font-black tracking-tighter uppercase font-serif">isotoner</div>
                 <div className="flex gap-4">
                    <Button variant="ghost" size="icon" className="hover:text-gray-300 hover:bg-transparent"><Facebook className="h-5 w-5" /></Button>
                    <Button variant="ghost" size="icon" className="hover:text-gray-300 hover:bg-transparent"><Instagram className="h-5 w-5" /></Button>
                    <Button variant="ghost" size="icon" className="hover:text-gray-300 hover:bg-transparent"><Youtube className="h-5 w-5" /></Button>
                    <Button variant="ghost" size="icon" className="hover:text-gray-300 hover:bg-transparent"><Twitter className="h-5 w-5" /></Button>
                 </div>
            </div>

            {/* Newsletter Block */}
            <div className="lg:w-1/3 bg-gray-100/5 p-6 rounded-sm">
                <h3 className="font-bold mb-2 uppercase tracking-wide">Inscrivez-vous à notre newsletter</h3>
                <p className="text-gray-400 text-xs mb-4">Offre de bienvenue -10% sur votre 1ère commande</p>
                <div className="flex gap-2">
                    <Input placeholder="Votre e-mail" className="bg-white/10 border-none text-white placeholder:text-gray-500 rounded-none focus-visible:ring-1 focus-visible:ring-white" />
                    <Button variant="secondary" className="rounded-none bg-white text-black hover:bg-gray-200">→</Button>
                </div>
            </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
                <h4 className="font-bold uppercase mb-6 tracking-wider text-xs">Besoin d'aide ?</h4>
                <ul className="space-y-3 text-gray-400 text-xs">
                    <li><a href="#" className="hover:text-white">FAQ</a></li>
                    <li><a href="#" className="hover:text-white">Nous contacter</a></li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold uppercase mb-6 tracking-wider text-xs">Commandes</h4>
                <ul className="space-y-3 text-gray-400 text-xs">
                    <li><a href="#" className="hover:text-white">Livraison rapide</a></li>
                    <li><a href="#" className="hover:text-white">Paiement sécurisé</a></li>
                    <li><a href="#" className="hover:text-white">Suivi de commande</a></li>
                    <li><a href="#" className="hover:text-white">Retour & remboursement</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold uppercase mb-6 tracking-wider text-xs">Services</h4>
                <ul className="space-y-3 text-gray-400 text-xs">
                     <li><a href="#" className="hover:text-white">Programme de fidélité</a></li>
                     <li><a href="#" className="hover:text-white">E-Carte Cadeau</a></li>
                     <li><a href="#" className="hover:text-white">Conditions des offres en cours</a></li>
                     <li><a href="#" className="hover:text-white">Le CLUB Isotoner (achat en magasin)</a></li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold uppercase mb-6 tracking-wider text-xs">Conseils</h4>
                <ul className="space-y-3 text-gray-400 text-xs">
                    <li><a href="#" className="hover:text-white">Guide des parapluies</a></li>
                    <li><a href="#" className="hover:text-white">Guide des tailles chaussons</a></li>
                    <li><a href="#" className="hover:text-white">Guide des gants</a></li>
                    <li><a href="#" className="hover:text-white">Conseil produits</a></li>
                </ul>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 border-t border-gray-800 pt-8">
            <div className="flex gap-4 mb-4 md:mb-0">
                <a href="#" className="hover:text-white">Conditions générales de vente</a>
                <a href="#" className="hover:text-white">Politique de confidentialité</a>
                <a href="#" className="hover:text-white">Mentions légales</a>
                <a href="#" className="hover:text-white">Plan du site</a>
                <a href="#" className="hover:text-white">Ouvrir les préférences Cookies</a>
            </div>
            <div>
                Réalisé par W3lead pour Isotoner
            </div>
        </div>
      </div>
    </footer>
  );
};
