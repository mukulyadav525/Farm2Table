import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

const Header = ({ title, onBack, className = "" }) => {
    return (
        <div className={`flex items-center p-6 ${className}`}>
            <button
                onClick={onBack}
                className="p-2 rounded-full border border-farm-muted/30 text-farm-text hover:bg-farm-card transition-colors"
            >
                <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <h1 className="ml-4 text-xl font-semibold tracking-wide text-farm-text">
                {title}
            </h1>
        </div>
    );
};

export default Header;
