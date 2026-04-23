// src/components/PhotographicEssay.tsx

import React from 'react';
import PortfolioItemCard from './PortfolioItemCard'; 
import { FaCameraRetro } from 'react-icons/fa';

const PhotographicEssay: React.FC = () => {
    const description = 
        "A photographic essay comprising 10-20 high-quality images focusing on a critical issue or aspect within the African community. Each photo is accompanied by a concise, explanatory caption, providing visual context to a societal challenge.";

    // Placeholder content for the gallery structure
    const PreviewComponent = (
        <div className="p-4 overflow-y-scroll h-full text-left">
            <h4 className="text-xl font-bold text-amber-400 mb-4 flex items-center">
                <FaCameraRetro className="mr-2" /> Visual Narrative Showcase (10-20 Photos)
            </h4>
            <div className="grid grid-cols-2 gap-4">
                {/* Mock Photo 1 */}
                <div className="p-3 bg-brown-900 rounded-lg border border-amber-400/30">
                    <div className="h-32 bg-gray-700 flex items-center justify-center mb-2">
                        <span className="text-gray-500">Image Placeholder 1</span>
                    </div>
                    <p className="text-xs text-amber-300">Caption: Illustrating the challenge of [Topic].</p>
                </div>
                {/* Mock Photo 2 */}
                <div className="p-3 bg-brown-900 rounded-lg border border-amber-400/30">
                    <div className="h-32 bg-gray-700 flex items-center justify-center mb-2">
                        <span className="text-gray-500">Image Placeholder 2</span>
                    </div>
                    <p className="text-xs text-amber-300">Caption: Data collection on the ground in [Location].</p>
                </div>
                {/* ... Add more photo placeholders as needed to fill the space ... */}
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">Scroll to view the complete photo essay.</p>
        </div>
    );

    return (
        <section id="photo-essay" className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="section-title">
                <span className="text-amber-400">9.</span> Photographic Essay <span className="text-amber-400">(10 Marks)</span>
            </h2>
            
            <PortfolioItemCard
                title="Visual Essay on [Your Chosen Community Issue]"
                description={description}
                marks={10}
                documentUrl="https://drive.google.com/link-to-full-photo-album" 
                downloadUrl="https://drive.google.com/link-to-photo-essay-zip" 
                preview={PreviewComponent}
            />
        </section>
    );
};

export default PhotographicEssay;