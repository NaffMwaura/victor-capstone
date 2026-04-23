// src/components/InnovationPresentation.tsx

import React from 'react';
import PortfolioItemCard from './PortfolioItemCard'; 

const InnovationPresentation: React.FC = () => {
    const description = 
        "A summary presentation synthesizing the key technical aspects of the innovation/invention, including architecture, key features, and implementation methodology (supporting the video content).";

    // Use the /embed endpoint for a live preview
    const PreviewComponent = (
        <div className="w-full h-full min-h-75 overflow-hidden rounded-lg bg-slate-900 border border-slate-700">
            <iframe 
                src="https://docs.google.com/presentation/d/13-BNaWpxGLOzNh25Um4LMcVSOj_AwG4a/embed?start=false&loop=false&delayms=3000" 
                width="100%" 
                height="100%" 
                allowFullScreen={true} 
                title="Innovation Presentation Slides"
                className="border-0"
            ></iframe>
        </div>
    );

    return (
        <section id="innovation-presentation" className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="section-title">
                <span className="text-amber-400">5.</span> Innovation Presentation <span className="text-amber-400">(10 Marks)</span>
            </h2>
            
            <PortfolioItemCard
                title="Innovation Summary and Technical Deep Dive"
                description={description}
                marks={10}
                // Viewer link
                documentUrl="https://docs.google.com/presentation/d/13-BNaWpxGLOzNh25Um4LMcVSOj_AwG4a/view" 
                // Direct Download link (PowerPoint format)
                downloadUrl="https://docs.google.com/presentation/d/13-BNaWpxGLOzNh25Um4LMcVSOj_AwG4a/export/pptx" 
                preview={PreviewComponent}
            />
        </section>
    );
};

export default InnovationPresentation;