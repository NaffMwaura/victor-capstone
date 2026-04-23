// src/components/AfricanCultureVideo.tsx

import React from 'react';
import PortfolioItemCard from './PortfolioItemCard';

const AfricanCultureVideo: React.FC = () => {
    const description =
        "A 20-minute visual essay on an aspect of African culture, with a deep analysis of its relationship to modern technology, data, or innovation—connecting culture to my BBIT specialization. Includes a multilingual abstract (English, Kiswahili, and an African language).";

    const PreviewComponent = (
        // Placeholder for a YouTube or Vimeo embed
        <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/mock-culture-id"
            title="African Culture Video Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="border-0"
        ></iframe>
    );

    return (
        <section id="culture" className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="section-title">
                <span className="text-amber-400">6.</span> African Culture Video <span className="text-amber-400">(10 Marks)</span>
            </h2>

            <PortfolioItemCard
                title="Cultural Study-Visual Essay: The Digital Oracle and its Digital Relevance"
                description={description}
                marks={10}
                documentUrl="https://youtube.com/link-to-culture-video"
                downloadUrl="https://drive.google.com/link-to-video-download"
                preview={PreviewComponent}
            />
        </section>
    );
};

export default AfricanCultureVideo;