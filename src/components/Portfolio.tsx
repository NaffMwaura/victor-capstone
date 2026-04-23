import React, { useState, useEffect } from 'react';

// COMPONENTS IMPORTS (These will work in your local VS Code)
import ResumeSection from './ResumeSection';
import AutobiographySection from './AutobiographySection';
import AutobiographyPresentation from './AutobiographyPresentation';
import InnovationVideo from './InnovationVideo';
import InnovationPresentation from './InnovationPresentation';
import AfricanCultureVideo from './AfricanCultureVideo';
import AfricanCulturePresentation from './AfricanCulturePresentation';
import ModernChallengeVideo from './ModernChallengeVideo';
import PhotographicEssay from './PhotographicEssay';
import OnlinePresence from './OnlinePresence';

// ASSET IMPORT
import profileImg from '../assets/Fadhili.jpg';

/**
 * INTERNAL HOOK: useTypewriter
 * Included here to ensure the preview compiles without external file dependencies.
 */
const useTypewriter = (text: string, speed: number = 50): string => {
    const [displayedText, setDisplayedText] = useState<string>('');
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setDisplayedText(text.slice(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(timer);
        }, speed);
        return () => clearInterval(timer);
    }, [text, speed]);
    return displayedText;
};

const Portfolio: React.FC = () => {
    const nameAndReg = `Victor Mwendia Macharia (F061-01-1762/2022)`;
    const projectTitle = `IGS Capstone Project Portfolio`;
    const animatedTitle = useTypewriter(projectTitle, 80);

    /**
     * Mobile-friendly smooth scroll handler
     */
    const handleNavClick = (targetId: string) => {
        const el = document.getElementById(targetId);
        if (!el) return;

        const offset = 80; // Offset for sticky nav
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Visual feedback
        el.classList.add('highlight-pulse');
        setTimeout(() => el.classList.remove('highlight-pulse'), 1500);
    };

    return (
        <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden">
            
            {/* 1. HERO / HEADER SECTION */}
            <header className="border-b border-amber-900/20 relative overflow-hidden bg-zinc-950"> 
                {/* Responsive Glow Background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-amber-600/10 blur-[100px] -z-10 opacity-50"></div>

                <div className="pt-16 pb-12 sm:pt-24 sm:pb-20 text-center px-6 flex flex-col items-center">
                    
                    {/* ENLARGED ROUND IMAGE FRAME - RESPONSIVE SIZE */}
                    <div className="mb-8 sm:mb-12 relative group">
                        {/* Glow Layer */}
                        <div className="absolute -inset-2 bg-linear-to-tr from-amber-600 to-yellow-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                        
                        {/* Frame: 10rem (160px) on mobile, 18rem (288px) on desktop */}
                        <div className="relative w-44 h-44 sm:w-72 sm:h-72 rounded-full border-4 border-zinc-900 overflow-hidden shadow-2xl bg-zinc-800">
                            <img 
                                src={profileImg} 
                                alt="Victor Mwendia Macharia" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Victor+Mwendia&background=D4AF37&color=fff&size=512";
                                }}
                            />
                        </div>
                    </div>

                    {/* Identity Text - Responsive Scaling */}
                    <h1 className="text-xl sm:text-4xl font-black text-amber-500 tracking-tight uppercase px-2 leading-tight">
                        {nameAndReg}
                    </h1>
                    <p className="text-zinc-500 mt-3 text-xs sm:text-lg font-medium tracking-wide">
                        BSc. Nutrition and Dietetics, DeKUT
                    </p>
                    
                    {/* Animated Project Title Box */}
                    <div className="mt-8 inline-block px-4 sm:px-10 py-3 sm:py-4 border border-amber-600/20 bg-amber-600/5 rounded-lg backdrop-blur-md">
                        <h2 className="text-lg sm:text-3xl font-bold text-white min-h-[1.5em] tracking-tight">
                            {animatedTitle}
                            <span className="animate-pulse inline-block w-1 h-5 sm:h-8 ml-1 bg-amber-500 align-middle">|</span>
                        </h2>
                    </div>
                    
                    <p className="text-[10px] sm:text-sm text-zinc-400 max-w-2xl mx-auto mt-8 italic px-4 leading-relaxed opacity-80">
                        A comprehensive digital showcase fulfilling all requirements for the IGS Capstone. 
                        Merging nutritional expertise with technical proficiency.
                    </p>
                </div>
            </header>

            {/* 2. STICKY MOBILE-OPTIMIZED NAVIGATION */}
            <nav className="bg-amber-700/95 backdrop-blur-xl border-y border-black sticky top-0 z-50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"> 
                {/* Added visual "scroll hint" on the right for mobile users */}
                <div className="max-w-7xl mx-auto flex overflow-x-auto whitespace-nowrap scrollbar-hide py-3 px-4 gap-2 sm:justify-center items-center no-scrollbar">
                    {[
                        { id: 'resumes', label: '1. Resumes' },
                        { id: 'autobiography', label: '2. Personal Journey' },
                        { id: 'innovation', label: '3. Innovation' },
                        { id: 'culture', label: '4. African Culture' },
                        { id: 'challenges', label: '5. Challenges' },
                        { id: 'presence', label: '6. Online Presence' }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className="text-black font-black text-[9px] sm:text-[11px] uppercase tracking-tighter sm:tracking-widest px-4 py-2 hover:bg-black hover:text-amber-400 rounded-md transition-all duration-300 shrink-0 active:scale-95 shadow-sm"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* 3. MAIN CONTENT AREA */}
            <main className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-24 mb-32">
                <div id="resumes" className="pt-12"> <ResumeSection /> </div>
                
                <div id="autobiography" className="space-y-6">
                    <AutobiographySection />
                    <AutobiographyPresentation />
                </div>
                
                <div id="innovation" className="space-y-6 border-t border-zinc-900 pt-12">
                    <InnovationVideo />
                    <InnovationPresentation />
                </div>
                
                <div id="culture" className="space-y-6 border-t border-zinc-900 pt-12">
                    <AfricanCultureVideo />
                    <AfricanCulturePresentation />
                </div>
                
                <div id="challenges" className="space-y-6 border-t border-zinc-900 pt-12">
                    <ModernChallengeVideo />
                    <PhotographicEssay />
                </div>
                
                <div id="presence" className="border-t border-zinc-900 pt-12">
                    <OnlinePresence />
                </div>
            </main>

            {/* FOOTER */}
            <footer className="py-16 border-t border-zinc-900 text-center bg-zinc-950">
                <div className="opacity-40 text-[9px] sm:text-[11px] uppercase tracking-[0.3em] px-4">
                    <p>IGS Capstone Project • {new Date().getFullYear()}</p>
                    <p className="mt-2 text-amber-500 font-bold">Victor Mwendia Macharia</p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;