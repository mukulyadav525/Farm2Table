import React, { useState } from 'react';
import {
    ChevronLeftIcon,
    QuestionMarkCircleIcon,
    MapPinIcon,
    PencilSquareIcon,
    TagIcon,
    ChevronRightIcon,
    ChevronDownIcon
} from '@heroicons/react/24/solid';

const OrderConfirmationScreen = ({ onBack, onConfirm, onNavigate, onHelpClick }) => {
    const [mode, setMode] = useState('deliver');

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative p-6 pt-12">
            <div className="flex items-center justify-between mb-8">
                <button onClick={onBack} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:scale-90">
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-white text-lg font-bold tracking-widest uppercase">Order</h1>
                <button
                    onClick={onHelpClick}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:scale-90">
                    <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Toggle */}
            <div className="bg-[#251605] p-1.5 rounded-[24px] flex gap-2 mb-10">
                <button
                    onClick={() => setMode('deliver')}
                    className={`flex-1 py-3 rounded-[20px] font-bold text-xs uppercase tracking-widest transition-all ${mode === 'deliver' ? 'bg-[#BC8E5C] text-[#251605]' : 'text-white/40'}`}
                >
                    Deliver
                </button>
                <button
                    onClick={() => setMode('pickup')}
                    className={`flex-1 py-3 rounded-[20px] font-bold text-xs uppercase tracking-widest transition-all ${mode === 'pickup' ? 'bg-[#BC8E5C] text-[#251605]' : 'text-white/40'}`}
                >
                    Pick Up
                </button>
            </div>

            {/* Address */}
            <div className="mb-10">
                <h3 className="text-white text-lg font-bold mb-4">Delivery Address</h3>
                <div className="bg-[#251605]/50 border border-white/5 rounded-[32px] p-6">
                    <p className="text-white font-bold text-sm mb-1">Mukul Yadav</p>
                    <p className="text-white/40 text-xs leading-relaxed mb-4">Village Dhansa, South West Delhi, 110031</p>
                    <div className="flex gap-3">
                        <button
                            onClick={() => onNavigate('consumerAddresses')}
                            className="flex-1 py-2.5 rounded-full border border-white/20 text-white/60 text-[10px] uppercase font-bold tracking-widest flex items-center justify-center gap-2 active:bg-white/10 transition-colors">
                            <PencilSquareIcon className="w-3.5 h-3.5" /> Edit Address
                        </button>
                        <button className="flex-1 py-2.5 rounded-full border border-white/20 text-white/60 text-[10px] uppercase font-bold tracking-widest flex items-center justify-center gap-2">
                            <TagIcon className="w-3.5 h-3.5" /> Add Note
                        </button>
                    </div>
                </div>
            </div>

            {/* Discount */}
            <div
                onClick={() => onNavigate('discount')}
                className="bg-[#A8B77D]/20 rounded-2xl p-4 flex items-center justify-between mb-10 border border-[#A8B77D]/30 active:scale-95 transition-transform cursor-pointer">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#A8B77D] flex items-center justify-center text-[#251605]">
                        <TagIcon className="w-4 h-4" />
                    </div>
                    <span className="text-[#A8B77D] font-bold text-sm uppercase tracking-widest">1 Discount is Applied</span>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-[#A8B77D]" />
            </div>

            {/* Payment Summary */}
            <div className="mb-10">
                <h3 className="text-white font-bold text-base mb-4 tracking-widest uppercase">Payment Summary</h3>
                <div className="space-y-3">
                    <div className="flex justify-between text-white/40 text-sm font-bold tracking-widest">
                        <span>PRICE</span>
                        <span>₹ 95.53</span>
                    </div>
                    <div className="flex justify-between text-white/40 text-sm font-bold tracking-widest">
                        <span>DELIVERY FEE</span>
                        <div className="flex gap-2">
                            <span className="line-through">₹ 2.0</span>
                            <span className="text-white">₹ 0.0</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Button Container */}
            <div className="mt-auto bg-[#251605] rounded-[32px] p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-4" alt="MC" />
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-xs uppercase tracking-widest">Master Card</span>
                            <span className="text-white/40 text-[10px]">₹ 95.53</span>
                        </div>
                    </div>
                    <ChevronDownIcon className="w-4 h-4 text-white/40" />
                </div>
                <button
                    onClick={onConfirm}
                    className="w-full h-14 bg-[#BC8E5C] rounded-[24px] text-[#251605] font-black tracking-widest uppercase shadow-xl active:scale-95 transition-all text-sm"
                >
                    Order
                </button>
            </div>

            <div className="flex justify-center pt-6 pb-4">
                <div className="w-32 h-1.5 bg-white/20 rounded-full"></div>
            </div>
        </div>
    );
};

export default OrderConfirmationScreen;
