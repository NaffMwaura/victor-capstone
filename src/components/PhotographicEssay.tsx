import React from 'react';
import { Camera, ExternalLink, Download } from 'lucide-react';

// 1. IMPORTING ALL ASSETS (Used to resolve the "not used" error)
import img1 from '../assets/essay1.jfif';
import img2 from '../assets/essay2.jfif';
import img3 from '../assets/essay3.jfif';
import img4 from '../assets/essay4.jpg';
import img5 from '../assets/essay5.jpg';
import img6 from '../assets/essay6.jpg';
import img7 from '../assets/essay7.jpeg';
import img8 from '../assets/essay8.png';
import img9 from '../assets/essay9.jpg';
import img10 from '../assets/essay10.jfif';
import img11 from '../assets/essay11.jpg';
import img12 from '../assets/essay12.jpg';

/**
 * PhotographicEssay.tsx
 * Requirement 9: Photographic Essay (10 Marks)
 * This version handles imports and usage directly.
 */
const PhotographicEssay: React.FC = () => {
    const description = 
        "A compelling visual narrative documenting the intersection of urban sprawl, market dynamics, and nutritional access in Kenya. This essay highlights the challenges faced by low-income households in securing nutrient-dense food.";

    // 2. DATA ARRAY USING THE IMPORTED VARIABLES
    const photoEssayData = [
        { id: 1, src: img1, caption: "Traditional greens (Managu) being sorted in a local Nyeri market for distribution." },
        { id: 2, src: img2, caption: "Contrast between low-nutrient processed food stalls and fresh produce availability." },
        { id: 3, src: img3, caption: "Urban farming initiatives: Kales and spinach growing in recycled container gardens." },
        { id: 4, src: img4, caption: "Water access challenges affecting hygiene and safety in informal food preparation." },
        { id: 5, src: img5, caption: "The logistics of nutrition: Transporting produce from rural farms to urban centers." },
        { id: 6, src: img6, caption: "Documenting market waste management and its direct impact on food safety." },
        { id: 7, src: img7, caption: "Traditional sun-drying methods used for local grain and legume preservation." },
        { id: 8, src: img8, caption: "A local community health center nutritional screening queue during a wellness drive." },
        { id: 9, src: img9, caption: "Street food vendors: Analyzing the primary source of nutrition for the urban workforce." },
        { id: 10, src: img10, caption: "School feeding programs: Observing the front line against childhood malnutrition." },
        { id: 11, src: img11, caption: "Indigenous seeds: The importance of preserving biodiversity for future food security." },
        { id: 12, src: img12, caption: "Inflation and Protein: Documenting the rising cost of eggs in community kiosks." },
    ];

    return (
        <section id="challenges" className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900">
            {/* SECTION HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                <div className="border-l-4 border-amber-600 pl-6">
                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
                        <Camera className="text-amber-500" size={32} /> 
                        9. Photographic Essay
                    </h2>
                    <p className="text-zinc-500 mt-2 text-sm tracking-widest uppercase font-bold text-left">
                        Nutrition & Community Health Narrative
                    </p>
                </div>
                <div className="flex gap-3">
                    <a 
                        href="https://drive.google.com/link-to-full-photo-album" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-5 py-2 bg-zinc-900 border border-zinc-800 hover:border-amber-500 text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 rounded"
                    >
                        <ExternalLink size={14} /> Full Album
                    </a>
                    <a 
                        href="https://drive.google.com/link-to-photo-essay-zip" 
                        className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-black text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 rounded shadow-lg shadow-amber-600/10"
                    >
                        <Download size={14} /> Download Zip
                    </a>
                </div>
            </div>

            {/* MAIN ESSAY GRID */}
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
                <div className="max-w-3xl mb-12 text-left">
                    <h3 className="text-2xl font-bold text-amber-500 mb-4 uppercase tracking-tight">The Nutrition Landscape</h3>
                    <p className="text-zinc-400 leading-relaxed italic text-sm border-l border-zinc-800 pl-4">
                        "{description}"
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {photoEssayData.map((item) => (
                        <div key={item.id} className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 transition-all hover:border-amber-600/50 hover:shadow-xl">
                            
                            {/* IMAGE DISPLAY */}
                            <div className="aspect-4/5] bg-zinc-800 flex items-center justify-center relative overflow-hidden">
                                <img 
                                    src={item.src} 
                                    alt={`Visual Narrative ${item.id}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        // Simple fallback if individual asset is missing locally
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        if (target.parentElement) {
                                            target.parentElement.innerHTML = `
                                                <div class="flex flex-col items-center justify-center p-6 text-center h-full bg-zinc-900">
                                                    <div class="text-zinc-700 font-mono text-[10px] mb-2 uppercase">Img_${item.id}_Missing</div>
                                                    <div class="text-zinc-800 text-[8px]">CHECK: src/assets/essay${item.id}.jpg</div>
                                                </div>
                                            `;
                                        }
                                    }}
                                />
                                
                                <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-amber-500 border border-amber-500/20">
                                    REF_{item.id.toString().padStart(3, '0')}
                                </span>
                            </div>

                            {/* CAPTION SECTION */}
                            <div className="p-5 bg-zinc-900/95 border-t border-zinc-800 group-hover:bg-zinc-800 transition-colors h-28 flex flex-col justify-center text-left">
                                <p className="text-xs text-zinc-300 leading-relaxed">
                                    <span className="text-amber-500 font-black mr-2">#{item.id}</span>
                                    {item.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* STATUS BAR */}
                <div className="mt-12 pt-8 border-t border-zinc-900 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-black">
                    <div className="flex items-center gap-4">
                        <span>Gallery Status: Active</span>
                        <span className="text-amber-900">|</span>
                        <span>Quantity: 12 Narrative Frames</span>
                    </div>
                    <span className="text-amber-600 bg-amber-600/5 px-2 py-1 rounded">Victor Mwendia Macharia</span>
                </div>
            </div>
        </section>
    );
};

export default PhotographicEssay;