import React, { useState } from 'react';
import {
    ChevronLeftIcon,
    PlusIcon,
    ChevronDownIcon,
    CheckCircleIcon
} from '@heroicons/react/24/solid';
import {
    CreditCardIcon,
    BanknotesIcon
} from '@heroicons/react/24/outline'; // Adjusting to best match icons

const PaymentOption = ({ label, icon: Icon, isSelected, onSelect, image }) => (
    <button
        onClick={onSelect}
        className={`flex-shrink-0 w-24 flex flex-col items-center gap-2 group transition-all`}
    >
        <div className={`w-24 h-20 rounded-2xl flex items-center justify-center relative border-2 transition-all ${isSelected ? 'bg-orange-900/40 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]' : 'bg-white/10 border-transparent'}`}>
            {image ? (
                <img src={image} alt={label} className="h-6 object-contain" />
            ) : (
                <div className="flex flex-col items-center">
                    <Icon className={`w-6 h-6 ${isSelected ? 'text-orange-500' : 'text-orange-500/80'}`} />
                </div>
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

const ConsumerPaymentMethodsScreen = ({ onBack, onNavigate }) => {
    const [selectedId, setSelectedId] = useState('mastercard');

    const options = [
        { id: 'cash', label: 'Cash', icon: BanknotesIcon },
        { id: 'mastercard', label: 'Mastercard', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png' },
        { id: 'upi', label: 'UPI', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png' },
        { id: 'visa', label: 'Visa', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png' }
    ];

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-x-hidden p-6 pt-12">
            {/* Header */}
            <div className="flex items-center gap-4 mb-10">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center active:scale-90 transition-all"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-white text-lg font-bold tracking-widest uppercase">
                    Payment Methods
                </h1>
            </div>

            {/* Horizontal Options */}
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

            {/* Selected Method Details */}
            <div className="bg-[#BC8E5C]/10 rounded-[32px] p-6 border border-[#BC8E5C]/20 flex items-center justify-between shadow-2xl mb-8">
                <div className="flex flex-col gap-2">
                    <span className="text-white font-bold tracking-widest uppercase text-sm">Master Card</span>
                    <div className="flex items-center gap-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-4" alt="MC" />
                        <span className="text-white/50 text-xs tracking-widest">
                            ************ 436
                        </span>
                    </div>
                </div>
                <ChevronDownIcon className="w-5 h-5 text-white/50" />
            </div>

            {/* Add New Button */}
            <button
                onClick={() => onNavigate('consumerAddCard')}
                className="w-full h-16 bg-[#A8B77D]/80 rounded-[24px] flex items-center justify-center gap-3 text-[#251605] font-black tracking-widest uppercase shadow-xl active:scale-95 transition-all text-sm"
            >
                <PlusIcon className="w-6 h-6" />
                Add New
            </button>

            {/* Home Indicator */}
            <div className="mt-auto flex justify-center pb-4">
                <div className="w-32 h-1.5 bg-white/20 rounded-full"></div>
            </div>
        </div>
    );
};

export default ConsumerPaymentMethodsScreen;
