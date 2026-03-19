import React, { useState } from 'react';
import {
    ChevronLeftIcon,
    CheckCircleIcon,
    PhoneIcon,
    ChatBubbleLeftEllipsisIcon,
    MapPinIcon,
} from '@heroicons/react/24/solid';
import { TruckIcon, ClockIcon } from '@heroicons/react/24/outline';

const Step = ({ label, done, active }) => (
    <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all ${done ? 'bg-[#60A5FA] border-[#60A5FA]' : active ? 'border-[#60A5FA] bg-transparent' : 'border-white/10 bg-transparent'}`}>
            {done && <CheckCircleIcon className="w-5 h-5 text-white" />}
            {!done && active && <div className="w-2.5 h-2.5 bg-[#60A5FA] rounded-full animate-pulse" />}
            {!done && !active && <div className="w-2.5 h-2.5 bg-white/10 rounded-full" />}
        </div>
        <span className={`text-sm font-bold uppercase tracking-widest ${done ? 'text-[#60A5FA]' : active ? 'text-white' : 'text-white/30'}`}>{label}</span>
    </div>
);

const DeliveryActiveOrderScreen = ({ onBack, onNavigate }) => {
    const [step, setStep] = useState(1); // 0=Picked Up, 1=En Route, 2=Delivered

    const steps = ['Picked Up', 'En Route', 'Delivered'];

    const handleAdvance = () => {
        if (step < 2) setStep(s => s + 1);
        else onNavigate && onNavigate('deliveryHome');
    };

    const order = {
        id: 'D-1021',
        customerName: 'Amit Sharma',
        phone: '+91 9876543214',
        address: 'Flat 101, MG Road, Delhi - 110001',
        items: [
            { name: 'Organic Wheat', qty: '10 kg', farmer: 'Ramesh Farms' },
            { name: 'Fresh Mangoes', qty: '2 kg', farmer: 'Reddy Farms' },
        ],
        distance: '3.2 km',
        eta: '12 mins',
        earnings: '₹85',
    };

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-hidden pb-10">
            <div className="max-w-4xl mx-auto w-full flex flex-col min-h-screen">
                <div className="absolute top-[-10%] right-[-20%] w-[80%] h-[50%] bg-[#60A5FA]/5 blur-[120px] rounded-full" />

                {/* Header */}
                <div className="px-6 pt-16 pb-6 relative z-10 flex items-center justify-between">
                    <button onClick={onBack} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center active:scale-95 transition-all">
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-white text-xs font-black tracking-[0.4em] uppercase">Active Delivery</h1>
                    <div className="w-12 h-12 rounded-2xl bg-[#60A5FA]/10 border border-[#60A5FA]/20 flex items-center justify-center">
                        <TruckIcon className="w-6 h-6 text-[#60A5FA]" />
                    </div>
                </div>

                <div className="flex-1 px-6 overflow-y-auto no-scrollbar relative z-10">

                    {/* Order Card */}
                    <div className="bg-[#251605] border border-white/10 rounded-[40px] p-6 mb-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Order ID</p>
                                <p className="text-white font-black text-lg tracking-tight">#{order.id}</p>
                            </div>
                            <div className="bg-[#60A5FA]/10 border border-[#60A5FA]/20 rounded-2xl px-4 py-2">
                                <span className="text-[#60A5FA] text-[10px] font-black uppercase tracking-widest">Out for Delivery</span>
                            </div>
                        </div>

                        {/* Customer */}
                        <div className="flex items-center gap-4 mb-5 p-4 bg-white/5 rounded-[24px]">
                            <div className="w-12 h-12 bg-[#60A5FA]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <span className="text-[#60A5FA] text-xl font-black">{order.customerName[0]}</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-white font-black text-sm">{order.customerName}</p>
                                <p className="text-white/40 text-xs font-bold mt-0.5">{order.phone}</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="w-10 h-10 bg-[#60A5FA] rounded-xl flex items-center justify-center active:scale-90 transition-all">
                                    <PhoneIcon className="w-5 h-5 text-white" />
                                </button>
                                <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center active:scale-90 transition-all">
                                    <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-3 mb-5 p-4 bg-white/5 rounded-[24px]">
                            <MapPinIcon className="w-5 h-5 text-[#60A5FA] mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Deliver To</p>
                                <p className="text-white text-sm font-bold leading-snug">{order.address}</p>
                            </div>
                        </div>

                        {/* Items */}
                        <div className="mb-2">
                            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-3">Items ({order.items.length})</p>
                            {order.items.map((item, i) => (
                                <div key={i} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
                                    <div>
                                        <p className="text-white text-sm font-bold">{item.name}</p>
                                        <p className="text-white/30 text-[10px] font-bold">{item.farmer}</p>
                                    </div>
                                    <span className="text-[#60A5FA] text-xs font-black">{item.qty}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trip Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {[{ label: 'Distance', val: order.distance, icon: MapPinIcon },
                          { label: 'ETA', val: order.eta, icon: ClockIcon },
                          { label: 'Earning', val: order.earnings, icon: CheckCircleIcon }].map(s => (
                            <div key={s.label} className="bg-[#251605] border border-white/10 rounded-[28px] p-4 flex flex-col items-center gap-2">
                                <s.icon className="w-5 h-5 text-[#60A5FA]" />
                                <p className="text-white font-black text-base">{s.val}</p>
                                <p className="text-white/30 text-[9px] font-black uppercase tracking-widest">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Progress Steps */}
                    <div className="bg-[#251605] border border-white/10 rounded-[40px] p-6 mb-8">
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-6">Delivery Progress</p>
                        <div className="flex flex-col gap-5">
                            {steps.map((s, i) => (
                                <Step key={s} label={s} done={i < step} active={i === step} />
                            ))}
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={handleAdvance}
                        className={`w-full h-20 rounded-[32px] font-black text-sm uppercase tracking-[0.3em] shadow-2xl active:scale-95 transition-all ${step === 2 ? 'bg-[#A8D070] text-[#1B1109] shadow-[#A8D070]/20' : 'bg-[#60A5FA] text-white shadow-[#60A5FA]/20'}`}
                    >
                        {step === 0 ? 'Mark as Picked Up' : step === 1 ? 'Mark as En Route' : '✓ Mark as Delivered'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeliveryActiveOrderScreen;
