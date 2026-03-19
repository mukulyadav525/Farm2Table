import React, { useState } from 'react';
import {
    BellIcon,
    UserIcon,
    HomeIcon,
    ClockIcon,
    CheckCircleIcon,
    TruckIcon,
} from '@heroicons/react/24/solid';
import {
    HomeIcon as HomeOutline,
    ClockIcon as ClockOutline,
    UserIcon as UserOutline,
    QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

const DeliveryStatCard = ({ value, label, color, icon: Icon, onClick }) => (
    <div
        onClick={onClick}
        className={`relative overflow-hidden rounded-[40px] p-8 flex-1 flex flex-col justify-between h-48 shadow-2xl active:scale-95 transition-all cursor-pointer group ${color}`}
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-transform duration-700" />
        <div className="flex justify-between items-start relative z-10">
            <div className="w-12 h-12 bg-black/10 rounded-2xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
            </div>
        </div>
        <div className="relative z-10">
            <h2 className="text-white text-5xl font-black tracking-tighter mb-1">{value}</h2>
            <p className="text-white/60 font-black text-[10px] uppercase tracking-[0.2em]">{label}</p>
        </div>
    </div>
);

const DeliveryRunCard = ({ order }) => (
    <div className="bg-[#251605] border border-white/10 rounded-[32px] p-5 flex items-center gap-4 shadow-xl">
        <div className="w-14 h-14 bg-[#A8D070]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <TruckIcon className="w-7 h-7 text-[#A8D070]" />
        </div>
        <div className="flex-1 min-w-0">
            <p className="text-white font-black text-sm truncate">{order.customerName}</p>
            <p className="text-white/40 text-xs font-bold truncate mt-0.5">{order.address}</p>
        </div>
        <div className="flex flex-col items-end gap-1.5">
            <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${order.status === 'OUT_FOR_DELIVERY' ? 'bg-[#A8D070]/20 text-[#A8D070]' : 'bg-[#BC8E5C]/20 text-[#BC8E5C]'}`}>
                {order.status === 'OUT_FOR_DELIVERY' ? 'Active' : 'Delivered'}
            </span>
            <span className="text-white/30 text-[10px] font-bold">#{order.id}</span>
        </div>
    </div>
);

const DeliveryHome = ({ onNavigate, onBack }) => {
    const [isOnline, setIsOnline] = useState(true);
    const [activeTab, setActiveTab] = useState('home');

    const runs = [
        { id: 'D-1021', customerName: 'Amit Sharma', address: 'Flat 101, MG Road, Delhi', status: 'OUT_FOR_DELIVERY' },
        { id: 'D-1019', customerName: 'Priya Verma', address: 'Flat 202, Brigade Road, Bengaluru', status: 'DELIVERED' },
        { id: 'D-1018', customerName: 'Rahul Das', address: 'House 33, Salt Lake, Kolkata', status: 'DELIVERED' },
    ];

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative pb-32 overflow-hidden">
            {/* BG blobs */}
            <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[40%] bg-[#A8D070]/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-20%] w-[80%] h-[40%] bg-[#BC8E5C]/5 blur-[120px] rounded-full" />

            <div className="flex-1 px-6 pt-16 overflow-y-auto no-scrollbar relative z-10 max-w-6xl mx-auto w-full">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <div className="flex flex-col">
                        <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Delivery Agent</p>
                        <span className="text-white text-xl font-black uppercase tracking-tight">Delivery Hub</span>
                    </div>
                    <div className="flex gap-3">
                        {/* Online/Offline Toggle */}
                        <button
                            onClick={() => setIsOnline(!isOnline)}
                            className={`px-4 h-12 rounded-2xl font-black text-xs uppercase tracking-widest border transition-all active:scale-90 ${isOnline ? 'bg-[#A8D070] border-[#A8D070] text-[#1B1109]' : 'bg-white/5 border-white/10 text-white/40'}`}
                        >
                            {isOnline ? '🟢 Online' : '⚫ Offline'}
                        </button>
                        <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center relative active:scale-90 transition-all">
                            <BellIcon className="w-6 h-6" />
                            <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#A8D070] rounded-full border-2 border-[#1B1109]" />
                        </button>
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <DeliveryStatCard
                        value="3"
                        label="Active Runs"
                        color="bg-gradient-to-br from-[#A8D070] to-[#889E58]"
                        icon={TruckIcon}
                        onClick={() => onNavigate && onNavigate('deliveryActiveOrder')}
                    />
                    <DeliveryStatCard
                        value="₹420"
                        label="Today's Earnings"
                        color="bg-gradient-to-br from-[#BC8E5C] to-[#8D6E63]"
                        icon={CheckCircleIcon}
                        onClick={() => onNavigate && onNavigate('deliveryHistory')}
                    />
                </div>

                {/* Map Placeholder */}
                <div className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden mb-8 relative shadow-2xl h-52">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1B1109] via-[#2A1E11] to-[#1B1109]" />
                    {/* Fake map grid */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 300 200" preserveAspectRatio="none">
                        {[0,1,2,3,4,5].map(i => <line key={`h${i}`} x1="0" y1={i*40} x2="300" y2={i*40} stroke="#A8D070" strokeWidth="0.5"/>)}
                        {[0,1,2,3,4,5,6,7].map(i => <line key={`v${i}`} x1={i*50} y1="0" x2={i*50} y2="200" stroke="#A8D070" strokeWidth="0.5"/>)}
                        <circle cx="150" cy="100" r="8" fill="#A8D070" opacity="0.8"/>
                        <circle cx="150" cy="100" r="20" fill="none" stroke="#A8D070" strokeWidth="2" opacity="0.3"/>
                    </svg>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        <div className="w-12 h-12 bg-[#A8D070] rounded-full flex items-center justify-center mb-2 shadow-2xl shadow-[#A8D070]/50">
                            <TruckIcon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-white/60 text-xs font-black uppercase tracking-widest">Current Location</p>
                        <p className="text-white font-bold text-sm mt-0.5">Delhi, India</p>
                    </div>
                </div>

                {/* Recent Deliveries */}
                <h3 className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-4 ml-1">Current Runs</h3>
                <div className="flex flex-col gap-3 mb-8">
                    {runs.map(r => <DeliveryRunCard key={r.id} order={r} />)}
                </div>
            </div>

            {/* Floating Bottom Nav */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[500px] h-20 bg-[#A8D070] rounded-[40px] flex items-center justify-around px-8 shadow-[0_20px_50px_rgba(168,208,112,0.3)] z-50">
                <button onClick={() => setActiveTab('home')} className="flex flex-col items-center gap-1 text-[#1B1109]">
                    {activeTab === 'home' ? <HomeIcon className="w-7 h-7 drop-shadow-md" /> : <HomeOutline className="w-7 h-7 opacity-50" />}
                    {activeTab === 'home' && <div className="w-1.5 h-1.5 bg-[#1B1109] rounded-full" />}
                </button>
                <button onClick={() => { setActiveTab('active'); onNavigate && onNavigate('deliveryActiveOrder'); }} className="flex flex-col items-center gap-1 text-[#1B1109]">
                    {activeTab === 'active' ? <TruckIcon className="w-7 h-7 drop-shadow-md" /> : <TruckIcon className="w-7 h-7 opacity-50" />}
                </button>
                <button onClick={() => { setActiveTab('history'); onNavigate && onNavigate('deliveryHistory'); }} className="flex flex-col items-center gap-1 text-[#1B1109]">
                    {activeTab === 'history' ? <ClockIcon className="w-7 h-7 drop-shadow-md" /> : <ClockOutline className="w-7 h-7 opacity-50" />}
                </button>
                <button className="flex flex-col items-center gap-1 text-[#1B1109]">
                    <UserOutline className="w-7 h-7 opacity-50" />
                </button>
            </div>
        </div>
    );
};

export default DeliveryHome;
