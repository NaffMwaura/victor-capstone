// src/components/PortfolioItemCard.tsx

import React from 'react';
import { FaFilePdf, FaCloudDownloadAlt, FaGoogleDrive } from 'react-icons/fa'; // Using react-icons for a professional touch

interface PortfolioItemProps {
    title: string;
    description: string;
    marks: number;
    documentUrl: string; // Link to the Google Drive document
    downloadUrl: string; // Direct download link
    preview: React.ReactNode; // Content to display in the preview box (e.g., an iframe or placeholder)
}

const PortfolioItemCard: React.FC<PortfolioItemProps> = ({
    title,
    description,
    marks,
    documentUrl,
    downloadUrl,
    preview,
}) => {
    return (
        <div className="bg-brown-800 p-8 rounded-xl shadow-2xl border-t-8 border-amber-500/80 transition duration-500 hover:shadow-yellow-400/20 mb-12">
            <div className="flex justify-between items-start mb-4 border-b border-amber-400/30 pb-3">
                <h3 className="text-2xl font-bold text-yellow-400">{title}</h3>
                <span className="text-lg font-extrabold bg-amber-500 text-black py-1 px-3 rounded-md shadow-md">
                    {marks} Marks
                </span>
            </div>

            {/* Description Box */}
            <div className="mb-6 p-4 border-l-4 border-yellow-400 bg-brown-900/50 text-amber-200 italic">
                <p>{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Document/Video Preview */}
                <div>
                    <h4 className="text-lg font-semibold text-amber-400 mb-2 flex items-center">
                        <FaFilePdf className="mr-2" /> Document Preview
                    </h4>
                    <div className="h-96 w-full bg-black border border-amber-400/50 flex items-center justify-center text-gray-500 rounded-lg overflow-hidden">
                        {preview}
                    </div>
                </div>

                {/* Actions and Links */}
                <div className="flex flex-col justify-end space-y-4">
                    <p className="text-sm text-amber-300">
                        Access the full-resolution file or presentation directly from Google Drive, or download a static copy.
                    </p>
                    
                    {/* View in Google Drive Button */}
                    <a 
                        href={documentUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 py-3 px-6 bg-amber-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition transform hover:scale-[1.01] shadow-lg"
                    >
                        <FaGoogleDrive className="text-xl" />
                        <span>View in Google Drive</span>
                    </a>

                    {/* Download Button */}
                    <a 
                        href={downloadUrl} 
                        download 
                        className="flex items-center justify-center space-x-2 py-3 px-6 border-2 border-amber-500 text-amber-400 font-bold rounded-lg hover:bg-brown-900 transition shadow-lg"
                    >
                        <FaCloudDownloadAlt className="text-xl" />
                        <span>Download Static Copy</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItemCard;