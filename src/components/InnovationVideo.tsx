// src/components/InnovationVideo.tsx

import React from 'react';
import PortfolioItemCard from './PortfolioItemCard'; 

const InnovationVideo: React.FC = () => {
    const description = 
        "A 20-minute video detailing a technical innovation relevant to the BBIT field. It includes an explanation of the problem, the proposed solution, and a demonstration. Accompanied by multilingual abstracts (Kiswahili, English, and one African language).";

    // Custom SVG Play Icon for a professional UI without external libraries
const videoUrl = "https://drive.google.com/file/d/1wfzCMcIAVGqs1iqQM85aVVthraEC0NujM4Ow0eAbLDU/view?usp=sharing";

    const PreviewComponent = (
        <a 
            href={videoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center h-full w-full bg-slate-800 rounded-lg border border-slate-700 group hover:border-amber-400 transition-colors duration-300 min-h-50 cursor-pointer"
        >
            
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-16 h-16 text-amber-400 mb-3 group-hover:scale-110 transition-transform duration-300"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>
            <span className="text-slate-400 font-medium tracking-wide">Watch Video Presentation</span>
            <span className="text-slate-500 text-sm mt-1 group-hover:text-amber-200">Opens in Google Drive</span>
        </a>
    );

    return (
        <section id="innovation" className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="section-title">
                <span className="text-amber-400">4.</span> Innovation/Invention Video <span className="text-amber-400">(10 Marks)</span>
            </h2>
            
            <PortfolioItemCard
                title="Technical Innovation: Agroscan AI - A Digital Agronomist for Tea Farming"
                description={description}
                marks={10}
                // Updated to standard Drive viewer links
                documentUrl="https://drive.google.com/file/d/1wfzCMcIAVGqs1iqQM85aVVthraEC0NujM4Ow0eAbLDU/view?usp=sharing" 
                downloadUrl="https://drive.google.com/file/d/151F_PCX--Re5uOq5BW4GFlXYPPjnRkWD/view?usp=drive_link" 
                preview={PreviewComponent}
            />
        </section>
    );
};

export default InnovationVideo;