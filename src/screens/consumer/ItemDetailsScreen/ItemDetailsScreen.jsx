import React, { useState } from 'react';
import {
    ChevronLeftIcon,
    HeartIcon,
    MinusSmallIcon,
    PlusSmallIcon
} from '@heroicons/react/24/outline';
import { StarIcon, UserCircleIcon, ClockIcon, TruckIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import Toast from '../../../components/Toast';

const ItemDetailsScreen = ({ item, onBack, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [showToast, setShowToast] = useState(false);

    if (!item) {
        return (
            <div className="min-h-screen bg-[#1B1109] flex items-center justify-center text-white">
                <p>Loading details...</p>
                <button
                    onClick={onBack}
                    className="mt-4 px-6 py-2 bg-[#BC8E5C] text-sm font-bold rounded-full"
                >
                    Go Back
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        // Call parent handler to update state
        onAddToCart({ ...item, quantity });

        // Show success popup
        setShowToast(true);

        // Navigate back after delay
        setTimeout(() => {
            onBack();
        }, 1000); // Slightly shorter delay for snappier feel
    };

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative text-white overflow-x-hidden">
            <div className="flex-1 flex flex-col md:flex-row max-w-6xl mx-auto w-full">
                {/* Header / Image Area */}
                <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-square md:rounded-[40px] md:m-6 overflow-hidden shadow-2xl rounded-b-[40px]">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 top-0 pt-12 px-6 flex justify-between items-start z-10 md:pt-6 md:px-6">
                        <button
                            onClick={onBack}
                            className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white active:scale-95 transition-transform"
                        >
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-red-500 shadow-lg active:scale-95 transition-transform">
                            <HeartIcon className="w-6 h-6 fill-current" />
                        </button>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1109] via-transparent to-transparent opacity-80 md:hidden"></div>
                </div>

                {/* Content */}
                <div className="flex-1 px-6 md:px-12 -mt-8 md:mt-0 flex flex-col justify-center relative z-20 pt-12 md:pt-0">
                    <div className="flex justify-between items-start mb-2">
                        <h1 className="text-3xl lg:text-5xl font-bold">{item.title}</h1>
                    </div>

                    {/* Farmer Info */}
                    <div className="flex items-center gap-2 mb-4">
                        <UserCircleIcon className="w-5 h-5 text-[#BC8E5C]" />
                        <span className="text-white/70 text-sm font-medium">Bahadur Singh</span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6 mb-6">
                        <div className="flex items-center gap-1">
                            <StarIcon className="w-4 h-4 text-orange-500" />
                            <span className="text-white font-bold text-sm">{item.rating || '4.8'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <TruckIcon className="w-4 h-4 text-[#BC8E5C]" />
                            <span className="text-white/70 text-xs text-[#BC8E5C]">Free</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <ClockIcon className="w-4 h-4 text-[#BC8E5C]" />
                            <span className="text-white/70 text-xs text-[#BC8E5C]">20 min</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/60 text-sm lg:text-base leading-relaxed mb-8 max-w-prose">
                        Organic {item.title ? item.title.toLowerCase() : 'product'} online, offering fresh, chemical-free produce grown through sustainable farming practices and delivered directly to customers' homes.
                    </p>

                    {/* Price & Cart Actions */}
                    <div className="bg-[#2D1B0F] rounded-[32px] p-6 border border-white/5 shadow-xl md:max-w-md">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-3xl font-bold">₹{item.price}</span>

                            <div className="px-4 py-2 bg-[#BC8E5C]/20 rounded-full flex items-center gap-4 border border-[#BC8E5C]/30">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="text-white/70 hover:text-white active:scale-95"
                                >
                                    <MinusSmallIcon className="w-5 h-5" />
                                </button>
                                <span className="text-[#BC8E5C] font-bold text-sm min-w-[30px] text-center">{quantity} Kg</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="text-white/70 hover:text-white active:scale-95"
                                >
                                    <PlusSmallIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="w-full py-4 bg-[#BC8E5C] rounded-[24px] text-white font-bold tracking-widest uppercase shadow-lg shadow-orange-500/20 active:scale-95 transition-transform"
                        >
                            Add to Cart
                        </button>

                        {/* Home Indicator line (mobile only) */}
                        <div className="w-32 h-1 bg-white/20 rounded-full mx-auto mt-6 md:hidden"></div>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            {showToast && (
                <Toast
                    message={`Added ${item.title} to Cart`}
                    onClose={() => setShowToast(false)}
                />
            )}
        </div>
    );
};

export default ItemDetailsScreen;
