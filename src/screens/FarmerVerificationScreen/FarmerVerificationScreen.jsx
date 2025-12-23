import React from 'react';
import { ChevronLeftIcon, QuestionMarkCircleIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { IdentificationIcon } from '@heroicons/react/24/outline'; // Using generic icon for Aadhaar representation

const InputField = ({ label, icon, placeholder, type = "text" }) => (
    <div className="space-y-2 mb-6">
        <label className="text-white font-bold text-sm tracking-wide ml-1 uppercase">{label}</label>
        <div className="relative flex items-center bg-[#2A1E11] rounded-[32px] border border-[#8D6E63] px-5 py-4">
            <div className="text-white/70 mr-3">
                {icon}
            </div>
            <input
                type={type}
                placeholder={placeholder}
                className="bg-transparent flex-1 text-white placeholder-white/30 focus:outline-none tracking-wider"
            />
        </div>
    </div>
);

const FarmerVerificationScreen = ({ onBack, onSendOtp, onHelpClick }) => {
    return (
        <div className="min-h-screen bg-[#120B05] px-6 pt-safe-top flex flex-col relative">
            {/* Header */}
            <div className="flex items-center justify-between pt-6 pb-12">
                <button
                    onClick={onBack}
                    className="p-3 rounded-full border border-white/50 text-white hover:bg-white/10"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>

                <h1 className="text-lg font-bold tracking-widest text-white uppercase flex-1 text-center">
                    VERIFICATION
                </h1>

                <button
                    onClick={onHelpClick}
                    className="p-3 rounded-full border border-white/50 text-white hover:bg-white/10 transition-all active:scale-95"
                >
                    <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
            </div>

            <div className="flex-1">

                {/* Aadhaar Number */}
                <InputField
                    label="ADHAAR NUMBER"
                    placeholder="XXXX XXXX XXXX XXXX"
                    icon={<IdentificationIcon className="w-6 h-6" />}
                />

                {/* Mobile Number */}
                <InputField
                    label="MOBILE NUMBER (LINKED WITH ADHAAR NUMBER)"
                    placeholder="982773XXXX"
                    type="tel"
                    icon={<LockClosedIcon className="w-6 h-6" />}
                />

                {/* Verify CSC */}
                <InputField
                    label="VERIFY THROUGH CSC CENTRE"
                    placeholder="Search for nearest CSC Centre"
                    icon={<LockClosedIcon className="w-6 h-6" />}
                />

            </div>

            {/* Button */}
            <div className="pb-8">
                <button
                    onClick={onSendOtp}
                    className="w-full py-5 bg-[#EA7C24] hover:bg-[#D86C1F] text-white rounded-[32px] font-bold text-sm tracking-widest uppercase shadow-lg shadow-black/30 transition-transform active:scale-95"
                >
                    SEND OTP
                </button>
            </div>

        </div>
    );
};

export default FarmerVerificationScreen;
