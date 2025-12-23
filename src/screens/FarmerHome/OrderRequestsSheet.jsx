import React from 'react';

const OrderItem = ({ image, tag, name, id, price, type }) => {
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
                        <button className="bg-[#9CCC65] hover:bg-[#8BC34A] text-[#1B5E20] px-4 py-1.5 rounded-xl text-sm font-bold shadow-md">
                            Accept
                        </button>
                        <button className="border border-[#D84315] text-[#FF8A65] hover:bg-[#D84315]/10 px-4 py-1.5 rounded-xl text-sm font-bold">
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const OrderRequestsSheet = ({ onClose }) => {
    return (
        <div className="absolute inset-0 z-50 flex flex-col justify-end">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

            {/* Sheet Content */}
            <div className="bg-[#3E2723] rounded-t-[40px] px-6 pt-4 pb-8 relative z-10 w-full max-h-[85vh] overflow-y-auto animate-slide-up shadow-[0_-10px_60px_rgba(0,0,0,0.8)]">

                {/* Handle Bar */}
                <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6"></div>

                <h2 className="text-white text-lg font-light mb-6">5 Order Request</h2>

                <div className="space-y-2">
                    <OrderItem
                        image="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                        type="PICKUP"
                        name="Apple"
                        id="32053"
                        price="60"
                    />
                    <OrderItem
                        image="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                        type="DELIVERY"
                        name="Wheat"
                        id="15253"
                        price="30"
                    />
                    <OrderItem
                        image="https://images.unsplash.com/photo-1618512496248-a07fe83aa829?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                        type="PICKUP"
                        name="Onion"
                        id="21200"
                        price="35"
                    />
                    <OrderItem
                        image="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                        type="PICKUP"
                        name="Carrot"
                        id="53241"
                        price="45"
                    />
                </div>
            </div>
        </div>
    );
};

export default OrderRequestsSheet;
