// src/hooks/useTypewriter.ts

import { useState, useEffect } from 'react';

const useTypewriter = (text: string, speed: number = 100) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        // Change the type from NodeJS.Timeout to number
        let timeout: number; 

        if (isTyping) {
            // Typing Logic
            if (displayedText.length < text.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(text.substring(0, displayedText.length + 1));
                }, speed);
            } else {
                // Done typing, wait before deleting
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 2000); 
            }
        } else {
            // Deleting Logic
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(text.substring(0, displayedText.length - 1));
                }, speed / 2); // Deleting faster
            } else {
                // Done deleting, wait before typing again
                timeout = setTimeout(() => {
                    setIsTyping(true);
                }, 1000); 
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isTyping, text, speed]);

    return displayedText;
};

export default useTypewriter;