import React from 'react';
import {
    XMarkIcon
} from '@heroicons/react/24/solid';

const CardInput = ({ label, placeholder, value, halfWidth }) => (
    <div className={halfWidth ? 'flex-1' : 'w-full'}>
        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2 ml-4">{label}</p>
        <div className="bg-[#251605] h-14 rounded-2xl flex items-center px-6 border border-white/5 shadow-inner">
            <span className="text-white/60 text-sm font-medium">{value || placeholder}</span>
        </div>
    </div>
);

const ConsumerAddCardScreen = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-hidden p-6 pt-12">
            {/* Header */}
            <div className="flex items-center gap-4 mb-12">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center active:scale-90 transition-all"
                >
                    <XMarkIcon className="w-6 h-6" />
                </button>
                <h1 className="text-white text-lg font-bold tracking-widest uppercase">
                    Add New Card
                </h1>
            </div>

            {/* Form Container */}
            <div className="bg-[#251605]/30 rounded-[48px] p-8 border-2 border-orange-500/30 flex flex-col gap-8 shadow-2xl">
                <CardInput
                    label="Card Holder Name"
                    value="Vishal Khadok"
                />

                <div>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2 ml-4">Card Number</p>
                    <div className="bg-[#251605] h-14 rounded-2xl flex items-center px-6 border border-white/5 shadow-inner gap-4">
                        <span className="text-white/80 text-sm font-medium">2134</span>
                        <div className="flex items-center gap-1">
                            <div className="w-0.5 h-6 bg-orange-500 animate-pulse"></div>
                            <span className="text-white/20 text-sm font-medium">_ _ _ _</span>
                            <span className="text-white/20 text-sm font-medium ml-2">_ _ _ _</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <CardInput
                        label="Expire Date"
                        placeholder="mm/yyyy"
                        halfWidth
                    />
                    <CardInput
                        label="CVC"
                        placeholder="***"
                        halfWidth
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
                onClick={onBack}
                className="mt-auto w-full h-16 bg-[#BC8E5C] rounded-[32px] text-[#251605] font-black tracking-widest uppercase shadow-2xl active:scale-95 transition-all mb-8"
            >
                Add Card
            </button>

            {/* Home Indicator */}
            <div className="flex justify-center pb-4">
                <div className="w-32 h-1.5 bg-white/20 rounded-full"></div>
            </div>
        </div>
    );
};

export default ConsumerAddCardScreen;
