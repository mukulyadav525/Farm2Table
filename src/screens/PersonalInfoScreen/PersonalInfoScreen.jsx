import React from 'react';
import { ChevronLeftIcon, PencilIcon, UserIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

const PersonalInfoScreen = ({ onBack, onHelpClick }) => {
    return (
        <div className="min-h-screen bg-[#251605] px-6 pt-safe-top flex flex-col relative pb-8">

            {/* Header */}
            <div className="flex items-center justify-between pt-6 pb-8">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="w-12 h-12 rounded-full border border-white/50 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-bold tracking-widest text-white uppercase">
                        PERSONAL INFO
                    </h1>
                </div>

                <div className="flex gap-4 items-center">
                    <button
                        onClick={onHelpClick}
                        className="w-12 h-12 rounded-full border border-white/50 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                    >
                        <QuestionMarkCircleIcon className="w-6 h-6" />
                    </button>
                    <button className="text-[#FF6F00] hover:text-[#FF8A65] transition-colors">
                        <PencilIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col items-center mb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#FF6F00] shadow-xl">
                    <img
                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=400&fit=crop"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h2 className="text-white text-2xl font-bold mb-1">Mahendar Kumar</h2>
                <p className="text-[#D7CCC8] text-sm">Prefers Organic Food</p>
            </div>

            {/* Info Card */}
            <div className="bg-[#3E2723] rounded-[40px] p-6 border-2 border-[#FF6F00] shadow-lg">

                {/* Full Name */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <UserIcon className="w-6 h-6 text-[#251605]" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[#D7CCC8] text-xs mb-1 uppercase tracking-wide">Full Name</p>
                        <p className="text-white text-base font-medium">Mahendar Kumar</p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <EnvelopeIcon className="w-6 h-6 text-[#251605]" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[#D7CCC8] text-xs mb-1 uppercase tracking-wide">Email</p>
                        <p className="text-white text-base font-medium">mah@gmail.com</p>
                    </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <PhoneIcon className="w-6 h-6 text-[#251605]" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[#D7CCC8] text-xs mb-1 uppercase tracking-wide">Phone Number</p>
                        <p className="text-white text-base font-medium">9999000088</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PersonalInfoScreen;
