import React from 'react';

const WelcomeScreen = ({ onStart }) => {
    return (
        <div
            onClick={onStart}
            className="relative w-full h-screen bg-[#889E58] overflow-hidden flex flex-col items-center justify-center cursor-pointer"
        >
            {/* Background Circles - keeping them for aesthetic */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[20%] w-[110vw] h-[110vw] bg-[#7E934E] rounded-full opacity-100" />
            <div className="absolute bottom-[-10%] left-[-20%] w-[90vw] h-[90vw] bg-[#7E934E] rounded-full opacity-100" />
            <div className="absolute top-[60%] right-[-20%] w-[60vw] h-[60vw] bg-[#7E934E] rounded-full opacity-100" />
            <div className="absolute top-[8%] right-[-5%] w-[20vw] h-[20vw] bg-[#7E934E] rounded-full opacity-100" />

            {/* Content Overflow Prevention */}
            <div className="relative z-10 flex flex-col items-center max-w-md mx-auto px-6 text-center">
                <h1 className="text-white text-5xl md:text-7xl font-bold tracking-wide mb-6 drop-shadow-lg">
                    Welcome !
                </h1>
                <div className="flex items-center gap-3 text-white/90 text-lg md:text-xl font-medium bg-black/5 px-6 py-3 rounded-full backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 animate-pulse">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" clipRule="evenodd" />
                    </svg>
                    <span>Tap anywhere to start</span>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
