import React from 'react';
import {
    ChevronLeftIcon,
    QuestionMarkCircleIcon,
    HomeIcon,
    BriefcaseIcon,
    PencilSquareIcon,
    TrashIcon
} from '@heroicons/react/24/outline';

const AddressCard = ({ type, address, onEdit, onDelete }) => {
    const Icon = type === 'HOME' ? HomeIcon : BriefcaseIcon;
    return (
        <div className="bg-[#BC8E5C]/10 rounded-[32px] p-6 border border-[#BC8E5C]/20 flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-[#251605] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-[#BC8E5C]" />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-white font-bold tracking-widest uppercase text-sm">{type}</h3>
                    <div className="flex gap-4">
                        <button onClick={onEdit} className="text-[#BC8E5C]">
                            <PencilSquareIcon className="w-5 h-5" />
                        </button>
                        <button onClick={onDelete} className="text-[#BC8E5C]">
                            <TrashIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <p className="text-white/50 text-xs leading-relaxed max-w-[180px]">
                    {address}
                </p>
            </div>
        </div>
    );
};

const ConsumerAddressListScreen = ({ onBack, onNavigate, onEditAddress, onDeleteAddress, addresses }) => {

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-x-hidden p-6 pt-12">
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center active:scale-90 transition-all"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-white text-lg font-bold tracking-widest uppercase">
                    My Address
                </h1>
                <button className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center active:scale-90 transition-all">
                    <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Address List */}
            <div className="flex-1">
                {addresses.map(addr => (
                    <AddressCard
                        key={addr.id}
                        {...addr}
                        onEdit={() => onEditAddress(addr)}
                        onDelete={() => onDeleteAddress(addr.id)}
                    />
                ))}
            </div>

            {/* Add New Button */}
            <button
                onClick={() => onNavigate('consumerAddAddress')}
                className="w-full h-16 bg-[#BC8E5C] rounded-[32px] text-[#251605] font-black tracking-widest uppercase shadow-2xl active:scale-95 transition-all mb-8"
            >
                Add New Address
            </button>

            {/* Home Indicator */}
            <div className="flex justify-center pb-4">
                <div className="w-32 h-1.5 bg-white/20 rounded-full"></div>
            </div>
        </div>
    );
};

export default ConsumerAddressListScreen;
