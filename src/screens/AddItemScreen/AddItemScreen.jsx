import React, { useState } from 'react';
import {
    ChevronLeftIcon,
    QuestionMarkCircleIcon,
    CloudArrowUpIcon,
    PencilSquareIcon,
    PhotoIcon,
    CheckIcon,
    ArrowPathIcon
} from '@heroicons/react/24/outline';

const AddItemScreen = ({ onBack, onSave, onHelpClick }) => {
    const [pickup, setPickup] = useState(true);
    const [delivery, setDelivery] = useState(false);
    const [itemName, setItemName] = useState('Strawberry');
    const [price, setPrice] = useState('50');

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-hidden pb-12">
            {/* Background Decorative Blobs */}
            <div className="absolute top-[-5%] left-[-10%] w-[70%] h-[30%] bg-[#A8D070]/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[20%] right-[-15%] w-[60%] h-[40%] bg-[#E64A19]/5 blur-[100px] rounded-full" />

            {/* Header */}
            <div className="px-6 pt-16 pb-6 relative z-20">
                <div className="flex items-center justify-between">
                    <button
                        onClick={onBack}
                        className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center active:scale-95 transition-all backdrop-blur-md"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-white text-xs font-black tracking-[0.4em] uppercase">Add New Item</h1>
                    <button
                        onClick={onHelpClick}
                        className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center active:scale-95 transition-all backdrop-blur-md"
                    >
                        <QuestionMarkCircleIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className="flex-1 px-6 overflow-y-auto no-scrollbar relative z-10">

                {/* Item Name Input */}
                <div className="mb-8 mt-4">
                    <label className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-3 block ml-1">Item Identity</label>
                    <div className="bg-white/5 border border-white/10 rounded-[32px] p-2 flex items-center group focus-within:border-[#A8D070]/50 transition-all duration-500">
                        <div className="w-14 h-14 bg-[#A8D070]/10 rounded-[24px] flex items-center justify-center text-2xl group-focus-within:scale-110 transition-transform">
                            🍓
                        </div>
                        <input
                            type="text"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            placeholder="e.g. Organic Strawberry"
                            className="bg-transparent flex-1 px-4 text-white text-lg font-black placeholder-white/10 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Media Upload Section */}
                <div className="mb-8">
                    <label className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block ml-1">Visual Assets</label>
                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                        {/* Primary Preview */}
                        <div className="relative w-32 h-32 rounded-[32px] overflow-hidden border border-white/10 group shadow-2xl shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1464965911861-746a04b4b032?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                alt="Preview"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                            <div className="absolute top-2 right-2 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                                <PencilSquareIcon className="w-4 h-4" />
                            </div>
                        </div>

                        {/* Add Slots */}
                        <button className="w-32 h-32 rounded-[32px] bg-white/5 border border-dashed border-white/10 flex flex-col items-center justify-center gap-2 group hover:border-[#A8D070]/50 transition-all shrink-0">
                            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/20 group-hover:text-[#A8D070] group-hover:bg-[#A8D070]/10 transition-all">
                                <CloudArrowUpIcon className="w-6 h-6" />
                            </div>
                            <span className="text-white/20 text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">Add Photo</span>
                        </button>

                        <button className="w-32 h-32 rounded-[32px] bg-white/5 border border-dashed border-white/10 flex flex-col items-center justify-center gap-2 group hover:border-[#A8D070]/50 transition-all shrink-0">
                            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/20 group-hover:text-[#A8D070] group-hover:bg-[#A8D070]/10 transition-all">
                                <PhotoIcon className="w-6 h-6" />
                            </div>
                            <span className="text-white/20 text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">Add Video</span>
                        </button>
                    </div>
                </div>

                {/* Price and Fulfilment */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                        <label className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-3 block ml-1">Price / Unit</label>
                        <div className="bg-white/5 border border-white/10 rounded-[28px] p-4 flex items-center group focus-within:border-[#A8D070]/50 transition-all">
                            <span className="text-[#A8D070] font-black text-xl mr-2">₹</span>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="bg-transparent flex-1 text-white text-xl font-black focus:outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-3 block ml-1">Fulfilment</label>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setPickup(!pickup)}
                                className={`flex items-center justify-between px-4 py-3 rounded-2xl border transition-all ${pickup ? 'bg-[#A8D070] border-[#A8D070] text-[#1B1109]' : 'bg-white/5 border-white/10 text-white/40'}`}
                            >
                                <span className="text-[10px] font-black uppercase tracking-widest">Pick Up</span>
                                {pickup && <CheckIcon className="w-4 h-4 stroke-[4]" />}
                            </button>
                            <button
                                onClick={() => setDelivery(!delivery)}
                                className={`flex items-center justify-between px-4 py-3 rounded-2xl border transition-all ${delivery ? 'bg-[#A8D070] border-[#A8D070] text-[#1B1109]' : 'bg-white/5 border-white/10 text-white/40'}`}
                            >
                                <span className="text-[10px] font-black uppercase tracking-widest">Delivery</span>
                                {delivery && <CheckIcon className="w-4 h-4 stroke-[4]" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="mb-10">
                    <label className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-3 block ml-1">Product Story</label>
                    <div className="bg-white/5 border border-white/10 rounded-[40px] p-6 focus-within:border-[#A8D070]/50 transition-all">
                        <textarea
                            rows="4"
                            placeholder="Describe how this item was grown..."
                            className="bg-transparent w-full text-white/70 text-sm font-bold leading-relaxed focus:outline-none placeholder-white/5"
                            defaultValue="This Strawberry is organically produced by me in my field. Currently you can collect it from my field or from pickup point, soon will be doing home delivery. Excited to sell this :)"
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4 mb-10">
                    <button
                        onClick={onSave}
                        className="w-full bg-[#A8D070] text-[#1B1109] h-20 rounded-[32px] font-black text-sm uppercase tracking-[0.3em] shadow-2xl shadow-[#A8D070]/20 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                    >
                        Save Changes
                        <div className="w-8 h-8 bg-[#1B1109]/10 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                            <PencilSquareIcon className="w-5 h-5" />
                        </div>
                    </button>
                    <button
                        className="w-full bg-white/5 border border-white/10 text-white h-20 rounded-[32px] font-black text-sm uppercase tracking-[0.3em] active:scale-95 transition-all flex items-center justify-center gap-3 opacity-60 hover:opacity-100"
                    >
                        Reset Form
                        <ArrowPathIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddItemScreen;

