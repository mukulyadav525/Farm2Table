import React, { useState } from 'react';
import {
    ShoppingBagIcon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    AdjustmentsHorizontalIcon,
    ChevronDownIcon,
    StarIcon,
    PlusIcon,
    HeartIcon,
    UserIcon,
    HomeIcon,
    BellIcon
} from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline, UserIcon as UserOutline } from '@heroicons/react/24/outline';

import bannerImg from '../../assets/consumer_home/banner.png';
import tomatoImg from '../../assets/consumer_home/tomato.png';
import potatoImg from '../../assets/consumer_home/potato.png';
import onionImg from '../../assets/consumer_home/onion.png';
import okraImg from '../../assets/consumer_home/okra.png';
import FilterOverlay from './FilterOverlay';
import Toast from '../../components/Toast';

const ProductCard = ({ id, image, title, price, rating, onAdd, onClick }) => (
    <div
        onClick={onClick}
        className="bg-white rounded-[32px] p-3 shadow-sm flex flex-col relative overflow-hidden active:scale-[0.98] transition-all cursor-pointer">
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-black/10 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 z-10">
            <StarIcon className="w-3 h-3 text-yellow-500" />
            <span className="text-[10px] font-bold text-gray-800">{rating}</span>
        </div>

        {/* Product Image */}
        <div className="aspect-square rounded-2xl overflow-hidden mb-3 bg-gray-50 flex items-center justify-center">
            <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <h3 className="font-bold text-[#1B1109] text-sm mb-1">{title}</h3>

        <div className="flex justify-between items-center mt-auto">
            <span className="font-bold text-[#1B1109]">₹ {price}</span>
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Prevent opening details when clicking add
                    onAdd({ id, name: title, price: parseFloat(price), image });
                }}
                className="w-8 h-8 bg-[#BC8E5C] rounded-xl flex items-center justify-center text-white shadow-lg active:scale-95 transition-transform"
            >
                <PlusIcon className="w-5 h-5" />
            </button>
        </div>
    </div>
);

const ConsumerHome = ({ onNavigate, onHelpClick, onAddToCart }) => {
    const [activeCategory, setActiveCategory] = useState('Vegetables');
    const [activeTab, setActiveTab] = useState('home');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState(null);

    const handleAddToCart = (item) => {
        onAddToCart(item);
        setToastMessage(`Added 1 ${item.name} to Cart`);
    };

    const categories = ['Vegetables', 'Fruits', 'Millets', 'Pulses', 'Grains'];
    const products = Array.from({ length: 20 }).map((_, i) => {
        const baseProducts = [
            { title: 'Tomato', price: '4.53', image: tomatoImg },
            { title: 'Potato', price: '3.53', image: potatoImg },
            { title: 'Onion', price: '4.70', image: onionImg },
            { title: 'Okra', price: '4.80', image: okraImg },
            { title: 'Spinach', price: '2.50', image: tomatoImg },
        ];
        const base = baseProducts[i % 5];
        return {
            id: i + 1,
            title: base.title,
            price: base.price,
            rating: (4 + Math.random()).toFixed(1),
            image: base.image
        };
    });

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col pb-24 relative overflow-x-hidden">
            {/* Top Status Bar UI Simulation */}
            <div className="px-6 pt-12 flex justify-between items-start mb-6">
                <div className="flex flex-col">
                    <span className="text-white/50 text-xs font-medium uppercase tracking-widest mb-1">Location</span>
                    <button
                        onClick={() => onNavigate('consumerAddresses')}
                        className="flex items-center gap-1 active:opacity-70 transition-opacity">
                        <span className="text-white font-bold text-sm">Delhi, India</span>
                        <ChevronDownIcon className="w-4 h-4 text-white/70" />
                    </button>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => onNavigate('consumerNotifications')}
                        className="w-12 h-12 bg-[#251605] rounded-full flex items-center justify-center text-[#BC8E5C] shadow-lg border border-white/10 active:scale-95 transition-transform"
                    >
                        <BellIcon className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => onNavigate('consumerProfile')}
                        className="w-12 h-12 bg-[#BC8E5C] rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white/10 group active:scale-95 transition-transform overflow-hidden cursor-pointer"
                    >
                        <UserIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="px-6 flex gap-3 mb-8">
                <div className="flex-1 bg-[#251605] rounded-2xl flex items-center px-4 h-14 border border-white/5">
                    <MagnifyingGlassIcon className="w-5 h-5 text-white/40 mr-3" />
                    <input
                        type="text"
                        placeholder="Buy Whatever You Want !"
                        className="bg-transparent border-none focus:outline-none text-white text-sm placeholder-white/30 flex-1"
                    />
                </div>
                <button
                    onClick={() => setIsFilterOpen(true)}
                    className="w-14 h-14 bg-[#BC8E5C] rounded-2xl flex items-center justify-center text-white shadow-lg active:scale-95 transition-transform"
                >
                    <AdjustmentsHorizontalIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Promotional Banner */}
            <div className="px-6 mb-8">
                <div className="w-full aspect-[2/1] rounded-[40px] overflow-hidden relative shadow-2xl group">
                    <img
                        src={bannerImg}
                        alt="Mega Sale"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <button
                        onClick={onHelpClick}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-all z-20"
                    >
                        <QuestionMarkCircleIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Category Scrolling */}
            <div className="flex overflow-x-auto no-scrollbar gap-3 px-6 mb-8">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`whitespace-nowrap px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeCategory === cat
                            ? 'bg-[#BC8E5C] text-white shadow-lg shadow-[#BC8E5C]/20'
                            : 'bg-[#2A1E11] text-white/50 border border-white/5'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-4 px-6 mb-8">
                {products.map(prod => (
                    <ProductCard
                        key={prod.id}
                        {...prod}
                        onAdd={handleAddToCart}
                        onClick={() => onNavigate('itemDetails', prod)}
                    />
                ))}
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-[#A8B77D] rounded-[40px] px-8 py-4 flex justify-between items-center shadow-2xl z-50">
                <button onClick={() => setActiveTab('home')} className={`transition-all ${activeTab === 'home' ? 'text-[#BC8E5C] scale-110 drop-shadow-md' : 'text-[#1B5E20]'}`}>
                    <HomeIcon className="w-7 h-7" />
                    {activeTab === 'home' && <div className="w-1.5 h-1.5 bg-[#BC8E5C] rounded-full mx-auto mt-1" />}
                </button>
                <button onClick={() => { setActiveTab('fav'); onNavigate('favorites'); }} className={`transition-all ${activeTab === 'fav' ? 'text-[#BC8E5C] scale-110' : 'text-[#1B5E20]'}`}>
                    {activeTab === 'fav' ? <HeartIcon className="w-7 h-7" /> : <HeartOutline className="w-7 h-7" />}
                </button>
                <button onClick={() => { setActiveTab('bag'); onNavigate('cart'); }} className={`transition-all ${activeTab === 'bag' ? 'text-[#BC8E5C] scale-110' : 'text-[#1B5E20]'}`}>
                    {activeTab === 'bag' ? <ShoppingBagIcon className="w-7 h-7" /> : <BagOutline className="w-7 h-7" />}
                </button>
                <button onClick={() => { setActiveTab('profile'); onNavigate('consumerProfile'); }} className={`transition-all ${activeTab === 'profile' ? 'text-[#BC8E5C] scale-110' : 'text-[#1B5E20]'}`}>
                    {activeTab === 'profile' ? <UserIcon className="w-7 h-7" /> : <UserOutline className="w-7 h-7" />}
                </button>
            </div>

            {/* Filter Overlay */}
            <FilterOverlay
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                onApply={(filters) => console.log('Filters applied:', filters)}
            />

            {/* Toast Notification */}
            {toastMessage && (
                <Toast
                    message={toastMessage}
                    onClose={() => setToastMessage(null)}
                />
            )}
        </div>
    );
};

export default ConsumerHome;
