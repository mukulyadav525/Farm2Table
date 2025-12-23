import React, { useState } from 'react';
import {
    ChevronLeftIcon,
    QuestionMarkCircleIcon,
    CheckCircleIcon
} from '@heroicons/react/24/solid';
import {
    BanknotesIcon
} from '@heroicons/react/24/outline';

const PaymentOption = ({ label, isSelected, onSelect, image, icon: Icon }) => (
    <button
        onClick={onSelect}
        className={`flex-shrink-0 w-24 flex flex-col items-center gap-2 transition-all p-1`}
    >
        <div className={`w-full h-20 rounded-2xl flex items-center justify-center relative border-2 transition-all ${isSelected ? 'bg-orange-900/40 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]' : 'bg-white/10 border-transparent'}`}>
            {image ? (
                <img src={image} alt={label} className="h-6 object-contain" />
            ) : (
                <Icon className={`w-6 h-6 ${isSelected ? 'text-orange-500' : 'text-orange-500/80'}`} />
            )}
            {isSelected && (
                <div className="absolute -top-2 -right-2 bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center border-2 border-[#1B1109]">
                    <CheckCircleIcon className="w-4 h-4 text-white" />
                </div>
            )}
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-widest ${isSelected ? 'text-orange-500' : 'text-white/40'}`}>
            {label}
        </span>
    </button>
);

const CheckoutPaymentScreen = ({ onBack, onConfirm, total = 96 }) => {
    const [selectedId, setSelectedId] = useState('mastercard');

    const options = [
        { id: 'cash', label: 'Cash', icon: BanknotesIcon },
        { id: 'mastercard', label: 'Mastercard', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png' },
        { id: 'upi', label: 'UPI', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png' },
        { id: 'visa', label: 'Visa', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png' }
    ];

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative p-6 pt-12">
            <div className="flex items-center justify-between mb-10">
                <button onClick={onBack} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:scale-90">
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-white text-lg font-bold tracking-widest uppercase">Payment</h1>
                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:scale-90">
                    <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
            </div>

            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-8 -mx-6 px-6">
                {options.map(opt => (
                    <PaymentOption
                        key={opt.id}
                        {...opt}
                        isSelected={selectedId === opt.id}
                        onSelect={() => setSelectedId(opt.id)}
                    />
                ))}
            </div>

            <div className="bg-[#BC8E5C]/10 rounded-[32px] p-6 border border-[#BC8E5C]/20 flex items-center justify-between mb-auto">
                <div className="flex flex-col gap-2">
                    <span className="text-white font-bold tracking-widest uppercase text-sm">Master Card</span>
                    <div className="flex items-center gap-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-4" alt="MC" />
                        <span className="text-white/50 text-xs tracking-widest">************ 436</span>
                    </div>
                </div>
                <div className="w-10 h-10 flex items-center justify-center text-white/50">
                    <ChevronLeftIcon className="w-5 h-5 -rotate-90" />
                </div>
            </div>

            <div className="mt-8 flex flex-col gap-6">
                <div className="flex items-baseline gap-2">
                    <span className="text-white/40 text-sm font-bold uppercase tracking-widest">Total:</span>
                    <span className="text-white text-4xl font-bold">₹{total}</span>
                </div>

                <button
                    onClick={onConfirm}
                    className="w-full h-16 bg-[#BC8E5C] rounded-[24px] text-[#251605] font-black tracking-widest uppercase shadow-2xl active:scale-95 transition-all text-sm mb-8"
                >
                    Pay and Confirm
                </button>
            </div>

            <div className="flex justify-center pb-4">
                <div className="w-32 h-1.5 bg-white/20 rounded-full"></div>
            </div>
        </div>
    );
};

export default CheckoutPaymentScreen;
