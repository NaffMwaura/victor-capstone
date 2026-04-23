// src/components/AfricanCulturePresentation.tsx

import React from 'react';
import PortfolioItemCard from './PortfolioItemCard'; 

const AfricanCulturePresentation: React.FC = () => {
    const description = 
        "A detailed presentation summarizing the cultural research presented in the video. The presentation focuses explicitly on linking the cultural aspect to my specialization in Business Information Technology (BBIT) and its practical implications.";

    // Integrated Google Slides Embed
    const PreviewComponent = (
        <div className="w-full h-full min-h-75 overflow-hidden rounded-lg bg-slate-900 border border-slate-700 shadow-inner">
            <iframe 
                src="https://docs.google.com/presentation/d/1F2avgSUSkVy-T2rUn3feYl_g17EYJ38f/embed?start=false&loop=false&delayms=3000" 
                width="100%" 
                height="100%" 
                allowFullScreen={true} 
                title="African Culture Presentation Slides"
                className="border-0"
            ></iframe>
        </div>
    );

    return (
        <section id="culture-presentation" className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="section-title">
                <span className="text-amber-400">7.</span> African Culture Presentation <span className="text-amber-400">(10 Marks)</span>
            </h2>
            
            <PortfolioItemCard
                title="Cultural Relevance and Specialization Link"
                description={description}
                marks={10}
                // Clean Viewer link
                documentUrl="https://docs.google.com/presentation/d/1F2avgSUSkVy-T2rUn3feYl_g17EYJ38f/view" 
                // Direct Download link (converts to PPTX)
                downloadUrl="https://docs.google.com/presentation/d/1F2avgSUSkVy-T2rUn3feYl_g17EYJ38f/export/pptx" 
                preview={PreviewComponent}
            />
        </section>
    );
};

export default AfricanCulturePresentation;