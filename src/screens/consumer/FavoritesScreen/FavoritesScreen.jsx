import React from 'react';
import {
    ChevronLeftIcon,
    QuestionMarkCircleIcon,
    HeartIcon,
    PlusIcon
} from '@heroicons/react/24/solid';

// Dummy favorite data
const favProducts = [
    { id: 1, title: 'Tomato', price: '4.53', image: '/src/assets/consumer_home/tomato.png' },
    { id: 2, title: 'Potato', price: '3.53', image: '/src/assets/consumer_home/potato.png' },
    { id: 3, title: 'Onion', price: '4.70', image: '/src/assets/consumer_home/onion.png' },
];

const ProductCard = ({ id, image, title, price, onAdd }) => (
    <div className="bg-white rounded-[32px] p-3 shadow-sm flex flex-col relative overflow-hidden">
        {/* Heart Badge (Active) */}
        <div className="absolute top-4 right-4 bg-black/10 backdrop-blur-md px-2 py-2 rounded-full flex items-center justify-center z-10">
            <HeartIcon className="w-4 h-4 text-red-500" />
        </div>

        {/* Product Image */}
        <div className="aspect-square rounded-2xl overflow-hidden mb-3 bg-gray-50 flex items-center justify-center">
            <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <h3 className="font-bold text-[#1B1109] text-sm mb-1">{title}</h3>

        <div className="flex justify-between items-center mt-auto">
            <span className="font-bold text-[#1B1109]">₹ {price}</span>
            <button
                onClick={() => onAdd({ id, name: title, price: parseFloat(price), image })}
                className="w-8 h-8 bg-[#BC8E5C] rounded-xl flex items-center justify-center text-white shadow-lg active:scale-95 transition-transform"
            >
                <PlusIcon className="w-5 h-5" />
            </button>
        </div>
    </div>
);

const FavoritesScreen = ({ onBack, onHelpClick, onNavigate }) => {
    const handleAddToCart = (product) => {
        // In a real app, this would call a prop function to update cart state
        console.log('Added to cart:', product);
        onNavigate('cart');
    };

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col pt-12">
            <div className="max-w-6xl mx-auto w-full flex flex-col min-h-[calc(100vh-3rem)]">
                {/* Header */}
                <div className="px-6 flex justify-between items-center mb-8">
                    <button
                        onClick={onBack}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:scale-95 transition-transform"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-white text-lg font-bold tracking-widest uppercase">My Favorites</h1>
                    <button
                        onClick={onHelpClick}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:scale-95 transition-transform"
                    >
                        <QuestionMarkCircleIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                {favProducts.length > 0 ? (
                    <div className="flex-1 px-6 pb-8 overflow-y-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {favProducts.map(prod => (
                                <ProductCard key={prod.id} {...prod} onAdd={handleAddToCart} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center pb-20">
                        <HeartIcon className="w-20 h-20 text-white/10 mb-4" />
                        <p className="text-white/40 font-bold uppercase tracking-widest text-sm">No Favorites Yet</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FavoritesScreen;
