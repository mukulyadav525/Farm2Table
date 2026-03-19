import React from 'react';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    UserIcon,
    ShieldCheckIcon,
    CreditCardIcon,
    ClipboardDocumentListIcon,
    BellIcon,
    ChatBubbleLeftRightIcon,
    QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'; // Using outline for consistency
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const SettingsItem = ({ icon: Icon, label, value, isVerified, onClick }) => (
    <div
        onClick={onClick}
        className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 cursor-pointer active:bg-white/5 transition-colors px-4 -mx-4"
    >
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Icon className="w-5 h-5" />
            </div>
            <span className="text-white font-bold text-base tracking-wide">{label}</span>
        </div>

        <div className="flex items-center gap-2">
            {value && <span className="text-white font-bold">{value}</span>}
            {isVerified && <CheckCircleIcon className="w-6 h-6 text-[#4CAF50]" />}
            {!isVerified && !value && <ChevronRightIcon className="w-5 h-5 text-white/50" />}
        </div>
    </div>
);

const FarmerSettingsScreen = ({ onBack, onNavigate, onHelpClick }) => {
    return (
        <div className="min-h-screen bg-[#251605] px-6 pt-safe-top flex flex-col relative pb-8">
            <div className="max-w-4xl mx-auto w-full flex flex-col min-h-screen">
                {/* Header */}
                <div className="flex items-center justify-between pt-6 pb-8">
                    <button
                        onClick={onBack}
                        className="w-12 h-12 rounded-full border border-white/50 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-bold tracking-widest text-white uppercase">
                        MY SETTINGS
                    </h1>
                    <button
                        onClick={onHelpClick}
                        className="w-12 h-12 rounded-full border border-white/50 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                    >
                        <QuestionMarkCircleIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Balance Card */}
                <div className="bg-[#3E2723] rounded-[40px] p-8 mb-6 text-center shadow-lg border border-[#4E342E]">
                    <p className="text-[#D7CCC8] text-sm mb-2">Available Balance</p>
                    <h2 className="text-white text-4xl font-bold mb-6">₹50,000.00</h2>

                    <button
                        onClick={() => onNavigate && onNavigate('withdrawal')}
                        className="bg-white text-[#3E2723] px-8 py-3 rounded-full font-bold text-sm tracking-wide shadow-md active:scale-95 transition-transform border-4 border-[#3E2723] ring-1 ring-white"
                    >
                        Withdraw
                    </button>
                </div>

                {/* Settings List Container */}
                <div className="bg-[#3E2723] rounded-[40px] px-6 py-4 mb-4 shadow-lg border border-[#4E342E]">
                    <SettingsItem
                        icon={UserIcon}
                        label="Personal Information"
                        onClick={() => onNavigate && onNavigate('personalInfo')}
                    />
                    <SettingsItem icon={ShieldCheckIcon} label="Verified" isVerified={true} />
                    <SettingsItem
                        icon={ShieldCheckIcon}
                        label="Organic Certification (GoI)"
                        onClick={() => onNavigate && onNavigate('farmerCertification')}
                    />
                </div>

                <div className="bg-[#3E2723] rounded-[40px] px-6 py-4 mb-4 shadow-lg border border-[#4E342E]">
                    <SettingsItem
                        icon={CreditCardIcon}
                        label="Withdrawal History"
                        onClick={() => onNavigate && onNavigate('farmerWithdrawalHistory')}
                    />
                    <SettingsItem
                        icon={ClipboardDocumentListIcon}
                        label="Number of Orders"
                        value="29K"
                        onClick={() => onNavigate && onNavigate('farmerOrderHistory')}
                    />
                    <SettingsItem
                        icon={BellIcon}
                        label="Notifications And Updates"
                        onClick={() => onNavigate && onNavigate('notifications')}
                    />
                    <SettingsItem
                        icon={ChatBubbleLeftRightIcon}
                        label="User Reviews"
                        onClick={() => onNavigate && onNavigate('userReviews')}
                    />
                </div>

                <div className="bg-[#3E2723] rounded-[40px] px-6 py-4 shadow-lg border border-[#4E342E]">
                    <SettingsItem
                        icon={QuestionMarkCircleIcon}
                        label="Help Centre"
                        onClick={() => onNavigate && onNavigate('help')}
                    />
                </div>
            </div>
        </div>
    );
};

export default FarmerSettingsScreen;
