import React from 'react';

const WelcomeScreen = ({ onStart }) => {
    return (
        <div
            onClick={onStart}
            className="relative w-full h-screen bg-[#889E58] overflow-hidden flex flex-col items-center justify-center cursor-pointer"
        >
            {/* Top Large Circle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[20%] w-[110vw] h-[110vw] bg-[#7E934E] rounded-full opacity-100" />

            {/* Bottom Left Circle */}
            <div className="absolute bottom-[-10%] left-[-20%] w-[90vw] h-[90vw] bg-[#7E934E] rounded-full opacity-100" />

            {/* Middle Right Circle */}
            <div className="absolute top-[60%] right-[-20%] w-[60vw] h-[60vw] bg-[#7E934E] rounded-full opacity-100" />

            {/* Top Right Small Circle */}
            <div className="absolute top-[8%] right-[-5%] w-[20vw] h-[20vw] bg-[#7E934E] rounded-full opacity-100" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-white text-5xl font-bold tracking-wide mb-4">
                    Welcome !
                </h1>
                <div className="flex items-center gap-2 text-white/90 text-lg font-medium">
                    {/* Hand/Tap Icon simulation */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M9.965 11.026a5 5 0 1 1 1.07-1.07l2.128 2.129a2.75 2.75 0 0 1 0 3.89l-5.694 5.694a2.768 2.768 0 0 1-3.916 0l-1.066-1.067a2.748 2.748 0 0 1 0-3.889l5.694-5.694a2.75 2.75 0 0 1 1.784-.805ZM5.5 13a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z" />
                        {/* Simple tap icon replacement */}
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" clipRule="evenodd" />
                    </svg>
                    <span>Tap anywhere to start!</span>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
