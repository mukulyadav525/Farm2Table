import React, { useState } from 'react';
import { ChevronLeftIcon, CheckBadgeIcon, UserIcon, TruckIcon } from '@heroicons/react/24/solid';

const roleCfg = {
    FARMER:   { label: 'Farmer',   bg: 'bg-[#A8D070]/10', text: 'text-[#A8D070]', accent: '#A8D070' },
    CONSUMER: { label: 'Consumer', bg: 'bg-[#BC8E5C]/10', text: 'text-[#BC8E5C]', accent: '#BC8E5C' },
    DELIVERY: { label: 'Delivery', bg: 'bg-[#60A5FA]/10', text: 'text-[#60A5FA]', accent: '#60A5FA' },
    ADMIN:    { label: 'Admin',    bg: 'bg-[#A855F7]/10', text: 'text-[#A855F7]', accent: '#A855F7' },
};

const UserCard = ({ user }) => {
    const cfg = roleCfg[user.role] || roleCfg.CONSUMER;
    return (
        <div className="bg-[#251605] border border-white/5 rounded-[28px] p-5 shadow-xl flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10" style={{ background: `${cfg.accent}15` }}>
                <span className="font-black text-xl" style={{ color: cfg.accent }}>{user.name[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <p className="text-white font-black text-sm truncate">{user.name}</p>
                    {user.verified && <CheckBadgeIcon className="w-4 h-4 text-[#60A5FA] flex-shrink-0" />}
                </div>
                <p className="text-white/30 text-xs font-bold truncate mt-0.5">{user.email}</p>
            </div>
            <div className={`px-3 py-1.5 rounded-full ${cfg.bg}`}>
                <span className={`text-[10px] font-black uppercase tracking-widest ${cfg.text}`}>{cfg.label}</span>
            </div>
        </div>
    );
};

const AdminUsersScreen = ({ onBack }) => {
    const [activeFilter, setActiveFilter] = useState('All');

    const users = [
        { id: 1,  name: 'Ramesh Kumar',  email: 'ramesh@gmail.com', role: 'FARMER',   verified: true },
        { id: 2,  name: 'Suresh Patel',  email: 'suresh@gmail.com', role: 'FARMER',   verified: true },
        { id: 3,  name: 'Baldev Singh',  email: 'baldev@gmail.com', role: 'FARMER',   verified: true },
        { id: 4,  name: 'Arjun Reddy',   email: 'arjun@gmail.com',  role: 'FARMER',   verified: true },
        { id: 5,  name: 'Amit Sharma',   email: 'amit@gmail.com',   role: 'CONSUMER', verified: false },
        { id: 6,  name: 'Priya Verma',   email: 'priya@gmail.com',  role: 'CONSUMER', verified: false },
        { id: 7,  name: 'Rahul Das',     email: 'rahul@gmail.com',  role: 'CONSUMER', verified: false },
        { id: 8,  name: 'Neha Gupta',    email: 'neha@gmail.com',   role: 'CONSUMER', verified: false },
        { id: 9,  name: 'Karan Mehta',   email: 'karan@gmail.com',  role: 'CONSUMER', verified: false },
        { id: 10, name: 'Sneha Iyer',    email: 'sneha@gmail.com',  role: 'CONSUMER', verified: false },
        { id: 11, name: 'Delivery Agent 1', email: 'agent1@farm2table.com', role: 'DELIVERY', verified: true },
        { id: 12, name: 'Delivery Agent 2', email: 'agent2@farm2table.com', role: 'DELIVERY', verified: true },
    ];

    const filters = ['All', 'FARMER', 'CONSUMER', 'DELIVERY'];
    const filtered = activeFilter === 'All' ? users : users.filter(u => u.role === activeFilter);

    const countRole = (r) => users.filter(u => u.role === r).length;

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-hidden pb-10">
            <div className="max-w-6xl mx-auto w-full flex flex-col min-h-screen">
                <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[40%] bg-[#A855F7]/5 blur-[120px] rounded-full" />

                {/* Header */}
                <div className="px-6 pt-16 pb-8 bg-[#251605] rounded-b-[48px] shadow-2xl relative z-10">
                    <div className="flex items-center justify-between mb-8">
                        <button onClick={onBack} className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center active:scale-90 bg-white/5">
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>
                        <h1 className="text-white text-xs font-black tracking-[0.4em] uppercase">All Users</h1>
                        <div className="w-12 h-12" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {[{ label: 'Farmers', val: countRole('FARMER'), color: '#A8D070' },
                          { label: 'Consumers', val: countRole('CONSUMER'), color: '#BC8E5C' },
                          { label: 'Delivery', val: countRole('DELIVERY'), color: '#60A5FA' },
                        ].map(s => (
                            <div key={s.label} className="bg-white/5 rounded-[28px] p-4 text-center border border-white/10">
                                <p className="font-black text-3xl" style={{ color: s.color }}>{s.val}</p>
                                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="px-6 mt-6 relative z-10">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-5">
                        {filters.map(f => (
                            <button key={f} onClick={() => setActiveFilter(f)}
                                className={`px-4 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap border transition-all ${activeFilter === f ? 'bg-[#A855F7] border-[#A855F7] text-white' : 'bg-[#251605] border-white/10 text-white/40'}`}>
                                {f}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {filtered.map(u => <UserCard key={u.id} user={u} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminUsersScreen;
