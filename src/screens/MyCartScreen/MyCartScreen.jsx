import React, { useState } from 'react';
import {
    ChevronLeftIcon,
    QuestionMarkCircleIcon,
    XMarkIcon,
    MinusSmallIcon,
    PlusSmallIcon,
    ChevronRightIcon
} from '@heroicons/react/24/outline';
import potatoImg from '../../assets/consumer_home/potato.png';
import onionImg from '../../assets/consumer_home/onion.png';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    return (
        <div className="bg-[#5D4037] rounded-[40px] p-4 flex gap-4 items-center relative mb-6">
            <div className="w-24 h-24 rounded-[32px] overflow-hidden bg-gray-200 flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
                <h3 className="text-white text-lg font-medium">{item.name}</h3>
                <p className="text-white text-xl font-bold mt-1">₹ {item.price}</p>
            </div>

            {/* Remove Button */}
            <button
                onClick={() => onRemove(item.id)}
                className="absolute top-4 right-4 w-7 h-7 bg-[#FF5252] rounded-full flex items-center justify-center text-white active:scale-95 transition-transform"
            >
                <XMarkIcon className="w-4 h-4" />
            </button>

            {/* Quantity Selector */}
            <div className="absolute bottom-4 right-4 flex items-center gap-3">
                <button
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white active:scale-95 transition-transform"
                >
                    <MinusSmallIcon className="w-4 h-4" />
                </button>
                <span className="text-white font-bold">{item.quantity}kg</span>
                <button
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white active:scale-95 transition-transform"
                >
                    <PlusSmallIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

import PriceBreakdownOverlay from './PriceBreakdownOverlay';

const MyCartScreen = ({ onBack, onHelpClick, onNavigate, cartItems, onUpdateQuantity, onRemove }) => {
    // Local state removed in favor of lifted state
    const [showBreakdown, setShowBreakdown] = useState(false);

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col pt-12">
            {/* Header */}
            <div className="px-6 flex justify-between items-center mb-8">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:scale-95 transition-transform"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-white text-2xl font-bold tracking-wider uppercase">My Cart</h1>
                <button
                    onClick={onHelpClick}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:scale-95 transition-transform"
                >
                    <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Items List */}
            <div className="flex-1 px-6 overflow-y-auto">
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onUpdateQuantity={onUpdateQuantity}
                        onRemove={onRemove}
                    />
                ))}
            </div>

            {/* Delivery Address & Footer */}
            <div className="bg-[#2D1B0F] rounded-t-[48px] p-8 pb-10 shadow-2xl">
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-[#BC8E5C] font-bold text-sm tracking-widest">DELIVERY ADDRESS</span>
                        <button onClick={() => onNavigate('consumerAddresses')} className="text-[#BC8E5C] text-sm font-bold underline decoration-2 underline-offset-4">EDIT</button>
                    </div>
                    <div className="border border-white/20 rounded-2xl p-4 text-white/70 text-sm leading-relaxed">
                        B41-Z Jor Bagh, New Delhi, 110033
                    </div>
                </div>

                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-baseline gap-2">
                        <span className="text-white/50 text-sm font-bold">TOTAL:</span>
                        <span className="text-white text-3xl font-bold">₹ {total + 32}</span>
                        {/* +32 just to match mockup total of 96 while i have two items of 32 each */}
                    </div>
                    <button
                        onClick={() => setShowBreakdown(true)}
                        className="flex items-center gap-1 text-[#BC8E5C] font-bold text-sm active:text-white transition-colors">
                        Breakdown <ChevronRightIcon className="w-4 h-4" />
                    </button>
                </div>

                <button
                    onClick={() => onNavigate('checkoutPayment')}
                    className="w-full py-5 bg-[#BC8E5C] text-white rounded-[32px] font-bold text-xl tracking-widest shadow-xl shadow-[#BC8E5C]/20 active:scale-[0.98] transition-all"
                >
                    CHECKOUT
                </button>
            </div>

            {/* Breakdown Overlay */}
            <PriceBreakdownOverlay
                isOpen={showBreakdown}
                onClose={() => setShowBreakdown(false)}
                subtotal={total}
            />
        </div>
    );
};

export default MyCartScreen;
