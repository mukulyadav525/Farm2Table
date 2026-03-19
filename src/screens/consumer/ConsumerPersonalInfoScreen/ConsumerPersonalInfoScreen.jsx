import React from 'react';
import {
    ChevronLeftIcon,
    PencilSquareIcon,
    UserIcon,
    EnvelopeIcon,
    PhoneIcon
} from '@heroicons/react/24/outline';

const InfoField = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
            <Icon className="w-6 h-6 text-orange-500" />
        </div>
        <div className="flex-1">
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1 ml-4">{label}</p>
            <div className="bg-[#251605] h-14 rounded-3xl flex items-center px-6 border border-white/5">
                <span className="text-white text-base font-medium">{value}</span>
            </div>
        </div>
    </div>
);

const ConsumerPersonalInfoScreen = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-x-hidden">
            {/* Header */}
            <div className="max-w-2xl mx-auto w-full px-6 pt-12 pb-8 flex items-center justify-between">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center active:scale-90 transition-all"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-white text-xl font-bold tracking-widest uppercase">
                    Personal Info
                </h1>
                <button className="text-orange-500 active:scale-90 transition-all">
                    <PencilSquareIcon className="w-8 h-8" />
                </button>
            </div>

            <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
                {/* Profile Section */}
                <div className="flex flex-col items-center mb-10">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white/10 shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                            alt="Varsha Khadok"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="text-white text-2xl font-bold mb-1">Varsha Khadok</h2>
                    <p className="text-white/40 text-sm">Prefers Organic Food</p>
                </div>

                {/* Info Container */}
                <div className="mx-4 flex-1">
                    <div className="bg-[#251605]/30 rounded-[48px] p-8 border-2 border-orange-500/50 flex flex-col gap-8 shadow-2xl">
                        <InfoField
                            icon={UserIcon}
                            label="Full Name"
                            value="Varsha Khadok"
                        />
                        <InfoField
                            icon={EnvelopeIcon}
                            label="Email"
                            value="hello@halallab.co"
                        />
                        <InfoField
                            icon={PhoneIcon}
                            label="Phone Number"
                            value="9828299310"
                        />
                    </div>
                </div>

                {/* Bottom Indicator */}
                <div className="py-8 flex justify-center">
                    <div className="w-32 h-1.5 bg-white/20 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default ConsumerPersonalInfoScreen;
