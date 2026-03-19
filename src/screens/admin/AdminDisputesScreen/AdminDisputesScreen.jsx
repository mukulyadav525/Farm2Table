import React, { useState } from 'react';
import { ChevronLeftIcon, ExclamationTriangleIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';

const DisputeCard = ({ dispute, onResolve, onDismiss }) => {
    const statusCfg = {
        OPEN:     { label: 'Open',     bg: 'bg-red-500/10',      text: 'text-red-400' },
        RESOLVED: { label: 'Resolved', bg: 'bg-[#A8D070]/10',    text: 'text-[#A8D070]' },
    };
    const cfg = statusCfg[dispute.status] || statusCfg.OPEN;

    return (
        <div className="bg-[#251605] border border-white/5 rounded-[32px] p-6 shadow-xl">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <ExclamationTriangleIcon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                        <p className="text-white font-black text-sm">Order #{dispute.orderId}</p>
                        <p className="text-white/30 text-[10px] font-bold mt-0.5">{dispute.date}</p>
                    </div>
                </div>
                <span className={`text-[10px] font-black uppercase px-3 py-1.5 rounded-full ${cfg.bg} ${cfg.text}`}>{cfg.label}</span>
            </div>

            <div className="bg-white/5 rounded-[20px] p-4 mb-4">
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Reason</p>
                <p className="text-white text-sm font-bold">{dispute.reason}</p>
            </div>

            <div className="flex justify-between mb-4">
                <div>
                    <p className="text-white/30 text-[10px] font-bold uppercase">Raised By</p>
                    <p className="text-[#BC8E5C] text-xs font-black mt-0.5">{dispute.raisedBy}</p>
                </div>
                <div className="text-right">
                    <p className="text-white/30 text-[10px] font-bold uppercase">Role</p>
                    <p className="text-white/60 text-xs font-bold mt-0.5">{dispute.role}</p>
                </div>
            </div>

            {dispute.status === 'OPEN' && (
                <div className="flex gap-3">
                    <button
                        onClick={() => onResolve(dispute.id)}
                        className="flex-1 bg-[#A8D070] text-[#1B1109] py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"
                    >
                        <CheckCircleIcon className="w-4 h-4" />
                        Resolve
                    </button>
                    <button
                        onClick={() => onDismiss(dispute.id)}
                        className="flex-1 bg-white/5 border border-white/10 text-white/50 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"
                    >
                        <XMarkIcon className="w-4 h-4" />
                        Dismiss
                    </button>
                </div>
            )}
        </div>
    );
};

const AdminDisputesScreen = ({ onBack }) => {
    const [disputes, setDisputes] = useState([
        { id: 1, orderId: 1, reason: 'Damaged product',   status: 'OPEN',     raisedBy: 'Amit Sharma',  role: 'CONSUMER', date: '18 Dec, 2:00 PM' },
        { id: 2, orderId: 2, reason: 'Late delivery',     status: 'OPEN',     raisedBy: 'Priya Verma',  role: 'CONSUMER', date: '18 Dec, 11:00 AM' },
        { id: 3, orderId: 3, reason: 'Wrong item',        status: 'RESOLVED',  raisedBy: 'Rahul Das',    role: 'CONSUMER', date: '17 Dec, 4:00 PM' },
        { id: 4, orderId: 4, reason: 'Missing item',      status: 'OPEN',     raisedBy: 'Neha Gupta',   role: 'CONSUMER', date: '17 Dec, 9:00 AM' },
        { id: 5, orderId: 5, reason: 'Poor quality',      status: 'OPEN',     raisedBy: 'Karan Mehta',  role: 'CONSUMER', date: '16 Dec, 3:00 PM' },
        { id: 6, orderId: 6, reason: 'Refund delay',      status: 'OPEN',     raisedBy: 'Sneha Iyer',   role: 'CONSUMER', date: '16 Dec, 1:00 PM' },
        { id: 7, orderId: 7, reason: 'Quantity issue',    status: 'RESOLVED',  raisedBy: 'Amit Sharma',  role: 'CONSUMER', date: '15 Dec, 5:00 PM' },
        { id: 8, orderId: 8, reason: 'Packaging issue',   status: 'OPEN',     raisedBy: 'Priya Verma',  role: 'CONSUMER', date: '15 Dec, 10:00 AM' },
    ]);

    const [activeFilter, setActiveFilter] = useState('All');

    const handleResolve = (id) => setDisputes(prev => prev.map(d => d.id === id ? { ...d, status: 'RESOLVED' } : d));
    const handleDismiss = (id) => setDisputes(prev => prev.filter(d => d.id !== id));

    const filtered = activeFilter === 'All' ? disputes : disputes.filter(d => d.status === activeFilter);

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-hidden pb-10">
            <div className="max-w-6xl mx-auto w-full flex flex-col min-h-screen">
                <div className="absolute top-[-10%] right-[-20%] w-[80%] h-[40%] bg-[#A855F7]/5 blur-[120px] rounded-full" />

                {/* Header */}
                <div className="px-6 pt-16 pb-8 bg-[#251605] rounded-b-[48px] shadow-2xl relative z-10">
                    <div className="flex items-center justify-between mb-8">
                        <button onClick={onBack} className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center active:scale-90 bg-white/5">
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>
                        <h1 className="text-white text-xs font-black tracking-[0.4em] uppercase">Dispute Tickets</h1>
                        <div className="w-12 h-12" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto w-full">
                        <div className="bg-red-500/10 border border-red-500/10 rounded-[28px] p-5 text-center">
                            <p className="text-red-400 text-4xl font-black">{disputes.filter(d => d.status === 'OPEN').length}</p>
                            <p className="text-red-400/60 text-[10px] font-black uppercase tracking-widest mt-1">Open</p>
                        </div>
                        <div className="bg-[#A8D070]/10 border border-[#A8D070]/10 rounded-[28px] p-5 text-center">
                            <p className="text-[#A8D070] text-4xl font-black">{disputes.filter(d => d.status === 'RESOLVED').length}</p>
                            <p className="text-[#A8D070]/60 text-[10px] font-black uppercase tracking-widest mt-1">Resolved</p>
                        </div>
                    </div>
                </div>

                <div className="px-6 mt-6 relative z-10">
                    <div className="flex gap-3 mb-6 overflow-x-auto no-scrollbar">
                        {['All', 'OPEN', 'RESOLVED'].map(f => (
                            <button key={f} onClick={() => setActiveFilter(f)}
                                className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all ${activeFilter === f ? 'bg-[#A855F7] border-[#A855F7] text-white' : 'bg-[#251605] border-white/10 text-white/40'}`}>
                                {f}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filtered.map(d => (
                            <DisputeCard key={d.id} dispute={d} onResolve={handleResolve} onDismiss={handleDismiss} />
                        ))}
                    </div>
                    {filtered.length === 0 && (
                        <div className="text-center py-20">
                            <CheckCircleIcon className="w-16 h-16 text-[#A8D070]/20 mx-auto mb-4" />
                            <p className="text-white/20 font-black uppercase tracking-widest text-sm">All Clear!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDisputesScreen;
