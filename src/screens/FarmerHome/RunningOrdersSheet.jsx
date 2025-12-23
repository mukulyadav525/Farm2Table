import React from 'react';

const RunningOrderItem = ({ image, tag, name, id, price, type }) => {
    const isPickup = type === 'PICKUP';
    return (
        <div className="flex gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-sm shrink-0">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isPickup ? 'text-[#FF8A65]' : 'text-[#EF9A9A]'}`}>
                            #{type}
                        </span>
                        <h3 className="text-white font-bold text-lg leading-tight">{name}</h3>
                        <p className="text-white/50 text-xs">ID: {id}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <span className="text-white font-bold text-lg">₹{price}</span>
                    <div className="flex gap-3">
                        <button className="bg-[#D19B61] hover:bg-[#C08A50] text-[#3E2723] px-6 py-1.5 rounded-xl text-sm font-bold shadow-md">
                            Done
                        </button>
                        <button className="border border-[#D84315] text-[#FF8A65] hover:bg-[#D84315]/10 px-4 py-1.5 rounded-xl text-sm font-bold">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const RunningOrdersSheet = ({ onClose }) => {
    return (
        <div className="absolute inset-0 z-50 flex flex-col justify-end">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

            {/* Sheet Content */}
            <div className="bg-[#3E2723] rounded-t-[40px] px-6 pt-4 pb-8 relative z-10 w-full max-h-[85vh] overflow-y-auto animate-slide-up shadow-[0_-10px_60px_rgba(0,0,0,0.8)]">

                {/* Handle Bar */}
                <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6"></div>

                <h2 className="text-white text-lg font-light mb-6">20 Running Orders</h2>

                <div className="space-y-2">
                    <RunningOrderItem
                        image="https://images.unsplash.com/photo-1597843786411-fa05282a2b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                        type="PICKUP"
                        name="Cabbage"
                        id="3205"
                        price="60"
                    />
                    <RunningOrderItem
                        image="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                        type="DELIVERY"
                        name="Orange"
                        id="1523"
                        price="30"
                    />
                    <RunningOrderItem
                        image="https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                        type="DELIVERY"
                        name="Sweet Corn"
                        id="1200"
                        price="35"
                    />
                    <RunningOrderItem
                        image="https://images.unsplash.com/photo-1596363505729-419056147c27?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                        type="PICKUP"
                        name="Grapes"
                        id="3241"
                        price="45"
                    />
                </div>
            </div>
        </div>
    );
};

export default RunningOrdersSheet;
