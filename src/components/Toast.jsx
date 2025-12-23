import React, { useEffect } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Toast = ({ message, onClose, duration = 1500 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    return (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] animate-fade-in-up">
            <div className="bg-[#2D1B0F] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/10">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                <span className="font-medium text-sm">{message}</span>
            </div>
        </div>
    );
};

export default Toast;
