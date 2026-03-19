import React, { useState, useEffect } from 'react';
import {
    ChevronLeftIcon,
    MapPinIcon,
    CursorArrowRaysIcon
} from '@heroicons/react/24/outline';

import mapBg from '../../../assets/dark_map_bg.png';

const InputField = ({ label, placeholder, value }) => (
    <div className="flex-1">
        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2 ml-2">{label}</p>
        <div className="bg-[#251605] h-12 rounded-2xl flex items-center px-6 border border-white/5">
            <span className="text-white/70 text-xs font-medium">{value || placeholder}</span>
        </div>
    </div>
);

const ConsumerAddAddressScreen = ({ onBack, editAddress, onSave }) => {
    const [label, setLabel] = useState('Home');

    useEffect(() => {
        if (editAddress) {
            setLabel(editAddress.type === 'HOME' ? 'Home' : editAddress.type === 'WORK' ? 'Work' : 'Other');
        }
    }, [editAddress]);

    return (
        <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
            {/* Map Background */}
            <div className="absolute inset-0 z-0">
                <img src={mapBg} alt="Map" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1B1109]/40 to-transparent"></div>
            </div>

            {/* Header Overlay */}
            <div className="relative z-20 max-w-3xl mx-auto w-full px-6 pt-12 flex justify-between items-start">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full bg-[#1B1109]/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center active:scale-90 transition-all"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>

                <div className="w-12 h-12 rounded-full bg-[#1B1109]/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center active:scale-90 transition-all">
                    <MapPinIcon className="w-6 h-6" />
                </div>
            </div>

            {/* Map Marker Simulation */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center -mt-20 max-w-3xl mx-auto w-full">
                <div className="bg-[#1B1109]/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 mb-2">
                    <span className="text-white/60 text-[10px] uppercase font-bold tracking-tighter">
                        {editAddress ? 'Move to edit location' : 'Move to set location'}
                    </span>
                </div>
                <div className="relative">
                    <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Form Sheet */}
            <div className="relative z-30 bg-[#251605] rounded-t-[50px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                <div className="max-w-3xl mx-auto w-full pt-4 pb-8 px-8">
                    {/* Handle */}
                    <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-8"></div>

                    <div className="space-y-6">
                        {/* Address Display */}
                        <div>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2 ml-2">Address</p>
                            <div className="bg-[#251605] h-14 rounded-2xl flex items-center px-6 border-2 border-white/5 gap-3 shadow-inner">
                                <MapPinIcon className="w-5 h-5 text-orange-500" />
                                <span className="text-white text-xs font-medium truncate">
                                    {editAddress ? editAddress.address : '3235 Royal Ln. Mesa, New Jersey 34567'}
                                </span>
                            </div>
                        </div>

                        {/* Street and Pincode */}
                        <div className="flex gap-4">
                            <InputField label="Street" value="Hason Nagar" />
                            <InputField label="Pincode" value="110062" />
                        </div>

                        {/* Appartment */}
                        <InputField label="Appartment" value="335" />

                        {/* Label As */}
                        <div>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3 ml-2">Label As</p>
                            <div className="flex gap-3">
                                {['Home', 'Work', 'Other'].map(l => (
                                    <button
                                        key={l}
                                        onClick={() => setLabel(l)}
                                        className={`flex-1 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${label === l
                                            ? 'bg-orange-500/20 text-orange-500 border-2 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                                            : 'bg-white/5 text-white/40 border border-white/10'
                                            }`}
                                    >
                                        {l}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={() => {
                                const newAddr = {
                                    type: label === 'Home' ? 'HOME' : label === 'Work' ? 'WORK' : 'OTHER',
                                    address: '2464 Royal Ln. Mesa, New Jersey 45463' // Placeholder, in real app would match input
                                };
                                onSave(newAddr);
                                onBack(); // Go back after save
                            }}
                            className="w-full h-16 bg-[#BC8E5C] rounded-[24px] text-[#251605] font-black tracking-widest uppercase shadow-xl active:scale-95 transition-all mt-4"
                        >
                            {editAddress ? 'Update Address' : 'Save Address'}
                        </button>
                    </div>

                    {/* Home Indicator */}
                    <div className="flex justify-center mt-6">
                        <div className="w-32 h-1 bg-white/10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsumerAddAddressScreen;
