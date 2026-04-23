// src/components/ModernChallengeVideo.tsx

import React from 'react';
import PortfolioItemCard from './PortfolioItemCard'; 

const ModernChallengeVideo: React.FC = () => {
    const description = 
        "A 20-minute video identifying a significant modern societal challenge (e.g., sustainability, digital divide, economic inequality) and proposing a detailed, scalable solution, often leveraging information technology or data systems.";

    const PreviewComponent = (
        // Placeholder for a YouTube or Vimeo embed
        <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/mock-challenge-id" 
            title="Modern Challenge Video Preview" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="border-0"
        ></iframe>
    );

    return (
        <section id="challenges" className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="section-title">
                <span className="text-amber-400">8.</span> Modern Challenge Video <span className="text-amber-400">(10 Marks)</span>
            </h2>
            
            <PortfolioItemCard
                title="Societal Solution: [Your Challenge Topic] and Tech Proposal"
                description={description}
                marks={10}
                documentUrl="https://youtube.com/link-to-challenge-video" 
                downloadUrl="https://drive.google.com/link-to-video-download" 
                preview={PreviewComponent}
            />
        </section>
    );
};

export default ModernChallengeVideo;