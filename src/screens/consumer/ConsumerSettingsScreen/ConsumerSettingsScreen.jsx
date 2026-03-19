import React from 'react';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    UserIcon,
    MapPinIcon,
    ShoppingBagIcon,
    HeartIcon,
    BellIcon,
    CreditCardIcon,
    QuestionMarkCircleIcon,
    Cog8ToothIcon
} from '@heroicons/react/24/outline';

const SettingItem = ({ icon: Icon, label, onClick, color = "text-orange-500" }) => (
    <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 bg-[#251605]/50 border border-white/5 rounded-2xl active:scale-[0.98] transition-all group"
    >
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Icon className={`w-6 h-6 ${color}`} />
            </div>
            <span className="text-white text-lg font-medium">{label}</span>
        </div>
        <ChevronRightIcon className="w-6 h-6 text-white/30 group-hover:text-white" />
    </button>
);

const ConsumerSettingsScreen = ({ onBack, onNavigate }) => {
    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-x-hidden pb-12">
            <div className="max-w-3xl mx-auto w-full flex flex-col min-h-screen">
                {/* Header */}
                <div className="px-6 pt-12 pb-8 bg-[#251605] rounded-b-[40px] shadow-2xl mb-6">
                    <button
                        onClick={onBack}
                        className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center mb-6 active:scale-90 transition-all"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-white text-4xl font-black tracking-tight leading-none uppercase">
                        Account Settings
                    </h1>
                </div>

                {/* Settings Groups */}
                <div className="px-4 flex flex-col gap-6">
                    {/* Group 1: Account */}
                    <div className="flex flex-col gap-3">
                        <SettingItem icon={UserIcon} label="Personal Information" color="text-orange-400" onClick={() => onNavigate('consumerPersonalInfo')} />
                        <SettingItem icon={MapPinIcon} label="Addresses" color="text-blue-500" onClick={() => onNavigate('consumerAddresses')} />
                    </div>

                    {/* Group 2: Shopping */}
                    <div className="flex flex-col gap-3">
                        <SettingItem icon={ShoppingBagIcon} label="My Cart" color="text-blue-400" onClick={() => onNavigate('cart')} />
                        <SettingItem icon={HeartIcon} label="My Favourites" color="text-purple-400" onClick={() => onNavigate('favorites')} />
                        <SettingItem icon={BellIcon} label="Notifications" color="text-orange-400" onClick={() => onNavigate('consumerNotifications')} />
                        <SettingItem icon={CreditCardIcon} label="Payment Method" color="text-blue-400" onClick={() => onNavigate('consumerPaymentMethods')} />
                    </div>

                    {/* Group 3 */}
                    <div className="flex flex-col gap-3">
                        <SettingItem icon={QuestionMarkCircleIcon} label="FAQs" color="text-orange-400" onClick={() => onNavigate('help')} />
                    </div>
                </div>

                {/* Home Indicator Simulation */}
                <div className="mt-auto pt-8 flex justify-center pb-4">
                    <div className="w-32 h-1.5 bg-white/20 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default ConsumerSettingsScreen;
