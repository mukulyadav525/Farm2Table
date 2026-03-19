import React, { useState } from 'react';
import { ChevronLeftIcon, QuestionMarkCircleIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const RoleButton = ({ label, isSelected, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full py-5 rounded-[32px] font-bold text-lg tracking-wider uppercase transition-all mb-4 ${isSelected
                ? 'bg-[#8D6E63] text-white border-2 border-[#D7CCC8]'
                : 'bg-[#2A1E11] text-white border-2 border-transparent hover:bg-[#3E2723]'
                }`}
        >
            {label}
        </button>
    );
};

const RoleSelectionScreen = ({ onBack, onContinue, onHelpClick }) => {
    const [selectedRole, setSelectedRole] = useState('FARMER');

    return (
        <div className="min-h-screen bg-[#120B05] px-6 pt-safe-top flex flex-col relative w-full h-full overflow-y-auto no-scrollbar">
            <div className="max-w-2xl mx-auto w-full flex flex-col min-h-screen pb-12">
                {/* Header */}
                <div className="flex items-center justify-between pt-6 pb-8">
                    <button
                        onClick={onBack}
                        className="p-3 rounded-full border border-white/50 text-white hover:bg-white/10"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>

                    <h1 className="text-lg font-bold tracking-widest text-white uppercase text-center flex-1">
                        Select Your Role
                    </h1>

                    <button
                        onClick={onHelpClick}
                        className="p-3 rounded-full border border-white/50 text-white hover:bg-white/10 transition-all active:scale-95"
                    >
                        <QuestionMarkCircleIcon className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-1 flex flex-col pt-4">

                    {/* Role Options */}
                    <RoleButton
                        label="CONSUMER"
                        isSelected={selectedRole === 'CONSUMER'}
                        onClick={() => setSelectedRole('CONSUMER')}
                    />
                    <RoleButton
                        label="FARMER"
                        isSelected={selectedRole === 'FARMER'}
                        onClick={() => setSelectedRole('FARMER')}
                    />
                    <RoleButton
                        label="DELIVERY MAN"
                        isSelected={selectedRole === 'DELIVERY'}
                        onClick={() => setSelectedRole('DELIVERY')}
                    />
                    <RoleButton
                        label="ADMIN"
                        isSelected={selectedRole === 'ADMIN'}
                        onClick={() => setSelectedRole('ADMIN')}
                    />

                    {/* Terms and Conditions Card */}
                    <div className="mt-8 bg-[#8D6E63] rounded-[32px] p-6 relative flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-[#251605] font-bold text-lg">Terms and Conditions</h3>
                            <button className="p-2 rounded-full border border-[#251605]/20 hover:bg-white/10">
                                <ChevronUpIcon className="w-5 h-5 text-[#251605]" />
                            </button>
                        </div>

                        <div className="text-[#251605]/80 text-sm leading-relaxed space-y-2">
                            <p>
                                1. Acceptance of Terms<br />
                                By using this platform, you agree to comply with these Terms and Conditions.
                            </p>
                            <p>
                                2. User Accounts<br />
                                Users must provide accurate...
                            </p>
                        </div>
                    </div>

                </div>

                {/* Continue Button */}
                <div className="pb-8 pt-4">
                    <button
                        onClick={() => onContinue(selectedRole)}
                        className="w-full py-4 text-[#889E58] border border-[#889E58] rounded-3xl font-bold text-lg tracking-wide hover:bg-[#889E58] hover:text-white transition-colors"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoleSelectionScreen;
