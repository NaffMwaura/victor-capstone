// src/components/AutobiographyPresentation.tsx

import React from 'react';
import PortfolioItemCard from './PortfolioItemCard'; 

const AutobiographyPresentation: React.FC = () => {
    const description = 
        "An 8-12 slide summary presentation (PowerPoint/Prezi) distilling the core themes, major academic achievements, and key personal growth milestones detailed in the autobiographical essay.";

    const PreviewComponent = (
        // Placeholder for a PowerPoint/Google Slides embed
        <iframe 
            src="https://docs.google.com/presentation/d/1WrTABuRUKpHK4X0gfwGG4YFJDQs9QTXd/edit?slide=id.p1#slide=id.p1" 
            className="w-full h-full border-0"
            title="Autobiography Presentation Preview"
        >
            <p className="p-4">Presentation preview requires an iframe/embed.</p>
        </iframe>
    );

    return (
        <section id="autobiography-presentation" className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="section-title">
                <span className="text-amber-400">3.</span> Autobiography Presentation <span className="text-amber-400">(7 Marks)</span>
            </h2>
            
            <PortfolioItemCard
                title="Academic and Personal Journey Summary"
                description={description}
                marks={7}
                documentUrl="https://docs.google.com/presentation/d/1WrTABuRUKpHK4X0gfwGG4YFJDQs9QTXd/edit?slide=id.p1#slide=id.p1" 
                downloadUrl="https://drive.google.com/drive/folders/1c8jvQ19YKG2LjWQYk2C9_I5sYnNO-igP?dmr=1&ec=wgc-drive-hero-goto" 
                preview={PreviewComponent}
            />
        </section>
    );
};

export default AutobiographyPresentation;