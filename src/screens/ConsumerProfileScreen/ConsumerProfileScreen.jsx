import React from 'react';
import {
    ChevronLeftIcon,
    ShoppingBagIcon as BagOutline,
    HeartIcon as HeartOutline,
    UserIcon as UserOutline,
    HomeIcon as HomeOutline
} from '@heroicons/react/24/outline';
import {
    HomeIcon,
    HeartIcon,
    ShoppingBagIcon,
    UserIcon,
    Cog8ToothIcon
} from '@heroicons/react/24/solid';

import profileBg from '../../assets/consumer_profile_bg.png';

const StatCard = ({ title, value, color, icon: Icon, onClick }) => (
    <div
        onClick={onClick}
        className={`min-w-[160px] h-[220px] ${color} rounded-[40px] p-6 flex flex-col justify-between shadow-lg cursor-pointer active:scale-95 transition-transform`}>
        <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                <Icon className="w-5 h-5 text-gray-800" />
            </div>
            <span className="text-gray-800/60 text-xs font-bold uppercase tracking-tight leading-tight">{title}</span>
        </div>
        <span className="text-white text-4xl font-bold">{value}</span>
    </div>
);

const ConsumerProfileScreen = ({ onBack, onNavigate }) => {
    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-hidden pb-32">
            {/* Header / Background */}
            <div className="h-80 w-full relative overflow-hidden rounded-b-[60px] shadow-2xl">
                <img
                    src={profileBg}
                    alt="Roses"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#1B1109]/80"></div>

                {/* Header Buttons */}
                <div className="absolute top-12 left-6 right-6 flex justify-between items-center">
                    <button
                        onClick={onBack}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all active:scale-90"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => onNavigate('consumerSettings')}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all active:scale-90"
                    >
                        <Cog8ToothIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Profile Info Overlay */}
            <div className="flex flex-col items-center -mt-20 relative z-10 px-6">
                <div className="w-32 h-32 rounded-full border-4 border-[#1B1109] overflow-hidden shadow-2xl bg-gray-200">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                        alt="Varsha Kadak"
                        className="w-full h-full object-cover"
                    />
                </div>

                <h1 className="text-[#F5E6D3] text-3xl font-bold mt-6 mb-2">Varsha Kadak</h1>

                <div className="px-6 py-2 rounded-full border border-[#F5E6D3]/30 text-[#F5E6D3] text-xs font-bold tracking-widest uppercase bg-white/5">
                    CONSUMER
                </div>
            </div>

            {/* Stats Section */}
            <div className="mt-10 overflow-x-auto no-scrollbar flex gap-4 px-6 pb-6">
                <StatCard
                    title="Total Orders"
                    value="25"
                    color="bg-[#A8B77D]"
                    icon={ShoppingBagIcon}
                    onClick={() => onNavigate('totalOrders')}
                />
                <StatCard
                    title="Average Spend"
                    value="rs.50"
                    color="bg-[#FF8A3D]"
                    icon={ShoppingBagIcon} // Wallet icon would be better if available
                    onClick={() => onNavigate('averageSpend')}
                />
                <StatCard
                    title="Loyalty Points"
                    value="120"
                    color="bg-[#B39DDB]"
                    icon={UserIcon} // Trophy icon would be better if available
                    onClick={() => onNavigate('loyaltyPoints')}
                />
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-[#A8B77D] rounded-[40px] px-8 py-4 flex justify-between items-center shadow-2xl z-50">
                <button onClick={() => onNavigate('consumerHome')} className="text-[#1B5E20] transition-all hover:scale-110">
                    <HomeOutline className="w-7 h-7" />
                </button>
                <button onClick={() => onNavigate('favorites')} className="text-[#1B5E20] transition-all hover:scale-110">
                    <HeartOutline className="w-7 h-7" />
                </button>
                <button onClick={() => onNavigate('cart')} className="text-[#1B5E20] transition-all hover:scale-110">
                    <BagOutline className="w-7 h-7" />
                </button>
                <button className="text-[#BC8E5C] scale-110 drop-shadow-md">
                    <UserIcon className="w-7 h-7" />
                    <div className="w-1.5 h-1.5 bg-[#BC8E5C] rounded-full mx-auto mt-1" />
                </button>
            </div>
            {/* Logout Button */}
            <div className="px-6 mt-8 mb-32">
                <button
                    onClick={() => onNavigate('roleSelection')}
                    className="w-full py-4 bg-[#FF7043] rounded-[32px] text-white font-bold text-lg tracking-widest uppercase shadow-lg shadow-orange-500/20 active:scale-95 transition-transform"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ConsumerProfileScreen;
