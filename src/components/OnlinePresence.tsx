// src/components/OnlinePresence.tsx

import React from 'react';
import { FaLinkedin, FaGithub, FaBlogger, FaYoutube, FaLink } from 'react-icons/fa';

interface Platform {
    name: string;
    url: string;
    icon: React.ReactNode;
    description: string;
}



const platforms: Platform[] = [
    { name: "LinkedIn Profile", url: "https://www.linkedin.com/in/naff-mwaura-2bb415257/", icon: <FaLinkedin className="text-4xl text-blue-400" />, description: "Professional networking and career history." },
    { name: "GitHub Repository", url: "https://github.com/NaffMwaura/", icon: <FaGithub className="text-4xl text-gray-400" />, description: "Source code, projects, and version control activities." },
    { name: "Facebook", url: "https://www.facebook.com/naftali.mwaura.352343/", icon: <FaBlogger className="text-4xl text-orange-400" />, description: "Sharing insights on BBIT, data analysis, or IT concepts." },
    { name: "Vlog / YouTube Channel", url: "https://www.youtube.com/@Naf_Zoe", icon: <FaYoutube className="text-4xl text-red-500" />, description: "Video content related to technology tutorials or project demos." },
    { name: "Personal Tech Portfolio", url: "https://naffzoe-portfolio.netlify.app/", icon: <FaLink className="text-4xl text-green-400" />, description: "A separate portfolio showcasing smaller coding projects." },
];

const OnlinePresence: React.FC = () => {
    return (
        <section id="presence" className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="section-title">
                <span className="text-amber-400">10.</span> Professional Online Presence <span className="text-amber-400">(5 Marks)</span>
            </h2>
            
            <div className="bg-brown-800 p-8 rounded-xl shadow-2xl border-t-8 border-yellow-400/80">
                <p className="text-amber-200 mb-6 italic border-l-4 border-yellow-400 p-3">
                    Evidence of FIVE professionally relevant online platforms that demonstrate continuous engagement and expertise in the field of Business Information Technology (BBIT).
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {platforms.map((platform) => (
                        <a 
                            key={platform.name}
                            href={platform.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-4 bg-brown-900 rounded-lg border border-amber-400/50 hover:bg-black transition duration-300 text-center flex flex-col items-center shadow-md transform hover:scale-[1.05]"
                        >
                            <div className="mb-2">{platform.icon}</div>
                            <h4 className="font-semibold text-yellow-400 text-sm">{platform.name}</h4>
                            <p className="text-xs text-amber-300 mt-1">{platform.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OnlinePresence;