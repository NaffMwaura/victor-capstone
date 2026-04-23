// src/components/AutobiographySection.tsx

import React from 'react';
import PortfolioItemCard from './PortfolioItemCard'; 

const AutobiographySection: React.FC = () => {
    const description = 
        "A detailed, 20-30 page essay tracing my background, academic growth within the BBIT program, and future career aspirations. This document forms the foundation for my self-reflection and professional trajectory.";

    const PreviewComponent = (
        // Placeholder for a Google Docs or PDF iframe embed
        <iframe 
            src="https://docs.google.com/document/d/1UQQWU8LwBQju_a2be1lKzG1aEtTRiGgV/edit" 
            className="w-full h-full border-0"
            title="Autobiography Essay Preview"
        >
            <p className="p-4">Essay preview requires an iframe/embed.</p>
        </iframe>
    );

    return (
        <section id="autobiography" className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="section-title">
                <span className="text-amber-400">2.</span> Autobiographical Essay <span className="text-amber-400">(20 Marks)</span>
            </h2>
          
            
            <PortfolioItemCard
                title="Personal and Academic Journey Essay"
                description={description}
                marks={20}
                documentUrl="https://docs.google.com/document/d/1UQQWU8LwBQju_a2be1lKzG1aEtTRiGgV/edit" // Mock URL
                downloadUrl="https://drive.google.com/drive/folders/1c8jvQ19YKG2LjWQYk2C9_I5sYnNO-igP?dmr=1&ec=wgc-drive-hero-goto" // Mock URL
                preview={PreviewComponent}
            />
        </section>
    );
};

export default AutobiographySection;