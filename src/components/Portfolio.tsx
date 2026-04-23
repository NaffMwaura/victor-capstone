import React from 'react';
import useTypewriter from '../hooks/useTypewriter'; // For the dynamic title effect
import ResumeSection from './ResumeSection'; // Req 1
import AutobiographySection from './AutobiographySection'; // Req 2
import AutobiographyPresentation from './AutobiographyPresentation'; // Req 3
import InnovationVideo from './InnovationVideo'; // Req 4
import InnovationPresentation from './InnovationPresentation'; // Req 5
import AfricanCultureVideo from './AfricanCultureVideo'; // Req 6
import AfricanCulturePresentation from './AfricanCulturePresentation'; // Req 7
import ModernChallengeVideo from './ModernChallengeVideo'; // Req 8
import PhotographicEssay from './PhotographicEssay'; // Req 9
import OnlinePresence from './OnlinePresence'; // Req 10

// KUINGIZA PICHA KUTOKA KWENYE ASSETS
import profileImg from '../assets/Fadhili.jpg';

/**
 * Portfolio.tsx
 * The main wrapper component for the IGS Capstone Project.
 * Integrates all 10 requirements into a single scrollable view.
 */
const Portfolio: React.FC = () => {
    
    // Identity Details kwa Victor Mwendia Macharia
    const nameAndReg = `Victor Mwendia Macharia (F061-01-1762/2022)`;
    const projectTitle = `IGS Capstone Project Portfolio`;
    const animatedTitle = useTypewriter(projectTitle, 80);

    /**
     * Inashughulikia tukio la kubofya urambazaji kwa kuchelewa kidogo na kusogeza vizuri.
     */
    const handleNavClick = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        targetElement.classList.add('highlight-pulse');

        setTimeout(() => {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            
            setTimeout(() => {
                 targetElement.classList.remove('highlight-pulse');
            }, 1000); 
        }, 300);
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500 selection:text-black">
            
            {/* 1. HEADER SECTION */}
            <header className="border-b border-amber-900/30 relative overflow-hidden"> 
                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-amber-600/5 blur-[100px] -z-10"></div>

                <div className="pt-20 pb-16 bg-zinc-950/50 text-center px-4 flex flex-col items-center">
                    
                    {/* FREMU YA PICHA YA DUARA ILIYOONGEZWA UKUBWA (ENLARGED ROUND IMAGE FRAME) */}
                    <div className="mb-10 relative group">
                        {/* Golden Glow Effect */}
                        <div className="absolute -inset-2 bg-linear-to-tr from-amber-600 to-yellow-400 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                        
                        {/* Image Container - Increased Size to w-48/h-48 (12rem) and sm:w-64/sm:h-64 (16rem) */}
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-zinc-900 overflow-hidden shadow-[0_0_50px_rgba(217,119,6,0.2)] bg-zinc-800">
                            <img 
                                src={profileImg} 
                                alt="Victor Mwendia Macharia" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Victor+Mwendia&background=D4AF37&color=fff&size=512";
                                }}
                            />
                        </div>
                    </div>

                    <h1 className="text-2xl sm:text-4xl font-black text-amber-500 tracking-tighter uppercase">
                        {nameAndReg}
                    </h1>
                    <p className="text-zinc-500 mt-2 text-sm sm:text-lg">
                        Bachelor of Science in Nutrition and Dietetics, DeKUT
                    </p>
                    
                    <div className="mt-8 inline-block px-6 py-2 border border-amber-600/20 bg-amber-600/5 rounded backdrop-blur-sm">
                        <h2 className="text-xl sm:text-3xl font-bold text-white min-h-40px]">
                            {animatedTitle}
                            <span className="animate-pulse inline-block w-1 h-6 sm:h-8 ml-1 bg-amber-500">|</span>
                        </h2>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto mt-6 italic">
                        A comprehensive digital showcase fulfilling all requirements for the IGS Capstone.
                    </p>
                </div>
            </header>

            {/* 2. STICKY NAVIGATION */}
            <nav className="bg-amber-700/95 backdrop-blur-md border-t border-b border-black sticky top-0 z-50"> 
                <div className="max-w-7xl mx-auto flex overflow-x-auto whitespace-nowrap justify-start md:justify-center p-3 gap-3 no-scrollbar">
                    {[
                        { id: 'resumes', label: '1. Resumes' },
                        { id: 'autobiography', label: '2. Personal Journey' },
                        { id: 'innovation', label: '3. Innovation' },
                        { id: 'culture', label: '4. African Culture' },
                        { id: 'challenges', label: '5. Societal Challenges' },
                        { id: 'presence', label: '6. Online Presence' }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className="text-black font-extrabold text-[10px] uppercase tracking-widest px-4 py-2 hover:bg-black hover:text-amber-500 rounded transition-all duration-300"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* 3. MAIN CONTENT */}
            <main className="max-w-7xl mx-auto">
                <div id="resumes"> <ResumeSection /> </div>
                <div id="autobiography">
                    <AutobiographySection />
                    <AutobiographyPresentation />
                </div>
                <div id="innovation">
                    <InnovationVideo />
                    <InnovationPresentation />
                </div>
                <div id="culture">
                    <AfricanCultureVideo />
                    <AfricanCulturePresentation />
                </div>
                <div id="challenges">
                    <ModernChallengeVideo />
                    <PhotographicEssay />
                </div>
                <div id="presence">
                    <OnlinePresence />
                </div>
            </main>

            {/* FOOTER */}
            <footer className="py-20 border-t border-zinc-900 text-center opacity-30 text-[10px] uppercase tracking-[0.3em]">
                IGS Capstone Project • {new Date().getFullYear()} • Victor Mwendia Macharia
            </footer>
        </div>
    );
};

export default Portfolio;