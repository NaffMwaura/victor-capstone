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

/**
 * Portfolio.tsx
 * The main wrapper component for the IGS Capstone Project.
 * Integrates all 10 requirements into a single scrollable view.
 */
const Portfolio: React.FC = () => {
    
    // Identity Details Updated for Victor Mwendia Macharia
    const nameAndReg = `Victor Mwendia Macharia (F061-01-1762/2022)`;
    const projectTitle = `IGS Capstone Project Portfolio`;
    const animatedTitle = useTypewriter(projectTitle, 80);

    // Profile Image Placeholder - Replace with your actual image path in src/assets
    const profileImageUrl = "../assets/Fadhili.jpg";

    /**
     * Smooth scrolls to the target section with a slight delay for better UX feel.
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
                {/* Subtle Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-amber-600/5 blur-[120px] -z-10"></div>

                <div className="pt-24 pb-16 bg-transparent text-center px-4 flex flex-col items-center">
                    
                    {/* ROUND IMAGE FRAME */}
                    <div className="mb-8 relative group">
                        {/* Decorative Outer Ring */}
                        <div className="absolute -inset-1 bg-gradient-to-tr from-amber-600 to-yellow-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        
                        {/* Main Image Container */}
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-zinc-900 overflow-hidden shadow-2xl">
                            <img 
                                src={profileImageUrl} 
                                alt="Victor Mwendia Macharia" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Victor+Mwendia&background=D4AF37&color=fff&size=256";
                                }}
                            />
                        </div>
                    </div>

                    <h1 className="text-2xl sm:text-4xl font-black text-amber-500 tracking-tighter uppercase">
                        {nameAndReg}
                    </h1>
                    <p className="text-zinc-500 mt-2 text-sm sm:text-lg max-w-xl">
                        Bachelor of Science in Nutrition and Dietetics, DeKUT
                    </p>
                    
                    <div className="mt-8 inline-block px-6 py-2 border border-amber-600/20 bg-amber-600/5 rounded backdrop-blur-sm">
                        <h2 className="text-xl sm:text-3xl font-bold text-white min-h-[40px]">
                            {animatedTitle}
                            <span className="animate-pulse inline-block w-1 h-6 sm:h-8 ml-1 bg-amber-500">|</span>
                        </h2>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto mt-8 italic px-6">
                        A comprehensive digital showcase fulfilling all requirements for the IGS Capstone, 
                        demonstrating a fusion of Nutritional Science and Modern Technology.
                    </p>
                </div>
            </header>

            {/* 2. STICKY NAVIGATION */}
            <nav className="bg-amber-700/90 backdrop-blur-md border-t border-b border-black sticky top-0 z-50"> 
                <div className="max-w-7xl mx-auto flex overflow-x-auto whitespace-nowrap justify-start md:justify-center p-3 gap-2 no-scrollbar">
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
                            className="text-black font-bold text-[10px] uppercase tracking-widest px-4 py-2 hover:bg-black hover:text-amber-500 rounded transition-all duration-300"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* 3. MAIN CONTENT */}
            <main className="max-w-7xl mx-auto">
                <div id="resumes"> <ResumeSection /> </div>
                <div id="autobiography" className="space-y-4">
                    <AutobiographySection />
                    <AutobiographyPresentation />
                </div>
                <div id="innovation" className="space-y-4">
                    <InnovationVideo />
                    <InnovationPresentation />
                </div>
                <div id="culture" className="space-y-4">
                    <AfricanCultureVideo />
                    <AfricanCulturePresentation />
                </div>
                <div id="challenges" className="space-y-4">
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