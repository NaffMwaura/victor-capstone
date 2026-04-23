import React from 'react';

// 1. IMPORT LOCAL IMAGE ASSETS 
// Note: Ensure these files exist in your src/assets folder. 
// If using the public folder, you can use strings like "/resumes/preview.jpg" instead.
import kiswahiliResume from '../assets/Victor_Fadhili_page-0001.jpg'; 
import englishResume from '../assets/Victor_Fadhili_page-0001.jpg';
import kikuyuResume from '../assets/Victor_Fadhili_page-0001.jpg';

interface ResumeItemProps {
    title: string;
    language: string;
    imageUrl: string; 
    downloadUrl: string; 
}

const ResumeItem: React.FC<ResumeItemProps> = ({ title, language, imageUrl, downloadUrl }) => (
    <div className="bg-zinc-900 p-6 rounded-xl shadow-xl border-t-4 border-amber-500/80 transition duration-500 hover:shadow-amber-400/20 transform hover:scale-[1.02]">
        <h3 className="text-xl font-bold mb-2 text-amber-400">{title}</h3>
        <p className="text-zinc-400 mb-4 text-sm">Required resume submitted in the {language} language.</p>
        
        {/* Document Preview Area with Image Framing Fix */}
        <div className="h-64 bg-black border border-zinc-800 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
            {imageUrl ? (
                <div className="max-w-[180px] h-full flex items-center justify-center py-2">
                    <img 
                        src={imageUrl} 
                        alt={`${title} Preview`} 
                        className="w-full h-full object-contain shadow-2xl" 
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = '<div class="text-zinc-700 text-[10px] text-center p-4">Preview Image Not Found<br/>(Check src/assets)</div>';
                        }}
                    />
                </div>
            ) : (
                 <p className="p-3 text-zinc-600 text-center text-xs">
                    Screenshot not loaded.
                </p>
            )}
        </div>
        
        <a 
            href={downloadUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 bg-amber-600 text-black font-bold py-2.5 rounded-md hover:bg-amber-500 transition shadow-lg text-sm"
        >
            <span className="uppercase tracking-tighter">View / Download Full PDF</span>
        </a>
    </div>
);

const ResumeSection: React.FC = () => {
    // Victor Mwendia Macharia's Google Drive Links
    const driveLink = "https://drive.google.com/file/d/1Txmql3r4Q2mXGy0DI_wBIpPeC-f7zkog/view?usp=sharing"; 
    const driveLink1 = "https://drive.google.com/file/d/1MtRQAiJGVyl_hjHPSAYeLs5PfQfG0OZm/view?usp=sharing"; 
    const driveLink2 = "https://drive.google.com/file/d/1td6hTnI0svdvFCHtgBRDtDq6oGBaYBXZ/view?usp=sharing"; 

    return (
        <section id="resumes" className="max-w-7xl mx-auto px-6 py-20 mb-10">
            <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-4">
                <span className="text-amber-500 bg-amber-500/10 px-3 py-1 rounded">1.</span> 
                Professional Identity & Resumes 
                <span className="text-sm font-normal text-zinc-500 ml-auto tracking-widest uppercase">(8 Marks)</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ResumeItem 
                    title="Resume in Kiswahili" 
                    language="Kiswahili" 
                    imageUrl={kiswahiliResume} 
                    downloadUrl={driveLink1} 
                />
                <ResumeItem 
                    title="Resume in English" 
                    language="English" 
                    imageUrl={englishResume} 
                    downloadUrl={driveLink} 
                />
                <ResumeItem 
                    title="Resume in Kikuyu" 
                    language="Indigenous (Kikuyu)" 
                    imageUrl={kikuyuResume} 
                    downloadUrl={driveLink2} 
                />
            </div>
        </section>
    );
};

export default ResumeSection;