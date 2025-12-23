import React from 'react';
import {
    ChevronLeftIcon,
    CheckCircleIcon,
    PhoneIcon
} from '@heroicons/react/24/solid';

const StatusStep = ({ label, isCompleted, isCurrent, isNext, timeInfo, hasMap, className }) => (
    <div className={`flex gap-6 relative ${className}`}>
        {/* Timeline Line */}
        {!isNext && ( // Don't show line after the last item (Order Received is usually last visually or dimmed)
            <div className="absolute left-5 top-10 bottom-[-24px] w-0.5 bg-[#3E2723] z-0"></div>
        )}

        {/* Left Icon Circle */}
        <div className="relative z-10">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all 
                ${isCompleted ? 'bg-white border-white text-green-500' :
                    isCurrent ? 'bg-[#3E2723] border-white/20 text-white/40' :
                        'bg-[#251605] border-[#3E2723] text-white/20'}`}>
                {isCompleted ? <CheckCircleIcon className="w-6 h-6" /> :
                    (isCurrent || isNext) ? <span className="font-bold text-xs">{isCurrent ? '3' : '4'}</span> :
                        <CheckCircleIcon className="w-6 h-6" />}
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 pt-2">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className={`font-bold text-base ${isNext ? 'text-white/20' : 'text-white'}`}>{label}</h3>
                    {timeInfo && <p className="text-white/40 text-xs mt-1">{timeInfo}</p>}
                </div>

                {/* Right Status Icon */}
                {isCompleted && (
                    <div className="w-6 h-6 rounded-full bg-[#4CAF50] flex items-center justify-center shadow-lg shadow-green-900/50">
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                    </div>
                )}
                {isCurrent && (
                    <button className="w-10 h-10 -mt-2 rounded-full bg-[#FF7043]/10 border border-[#FF7043] flex items-center justify-center text-[#FF7043] active:scale-95 transition-transform">
                        <PhoneIcon className="w-4 h-4" />
                    </button>
                )}
            </div>

            {/* Map Integration */}
            {hasMap && (
                <div className="mt-6 mb-8 w-full h-32 rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        className="w-full h-full object-cover grayscale opacity-60 hover:opacity-80 transition-opacity"
                        alt="Tracking Map"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1109] to-transparent"></div>

                    {/* Pulsing Dot on Map */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span className="relative flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 border-2 border-white"></span>
                        </span>
                    </div>
                </div>
            )}
        </div>
    </div>
);

const DeliveryStatusScreen = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col p-6 pt-12 relative overflow-hidden">
            {/* Background elements */}
            <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-[#251605] to-transparent pointer-events-none" />

            {/* Header */}
            <div className="flex items-center gap-6 mb-12 relative z-10">
                <button onClick={onBack} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:scale-90 bg-white/5 backdrop-blur-sm">
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-white text-xl font-bold tracking-[0.2em] uppercase">Delivery Status</h1>
            </div>

            <div className="flex-1 px-2 relative z-10 flex flex-col gap-8">
                <StatusStep
                    label="Order Taken"
                    isCompleted={true}
                />
                <StatusStep
                    label="Order Is Being Prepared"
                    isCompleted={true}
                />
                <StatusStep
                    label="Order Is Being Delivered"
                    isCurrent={true}
                    timeInfo="Your delivery agent is coming"
                    hasMap={true}
                />
                <StatusStep
                    label="Order Received"
                    isNext={true}
                />
            </div>

            {/* Bottom Indicator */}
            <div className="flex justify-center pb-4 mt-auto">
                <div className="w-32 h-1.5 bg-white/10 rounded-full"></div>
            </div>
        </div>
    );
};

export default DeliveryStatusScreen;
