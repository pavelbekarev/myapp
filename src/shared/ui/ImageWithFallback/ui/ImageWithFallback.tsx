import { useState } from "react";

export function ImageWithFallback({ src, fallbackSrc, alt, className }: {src: string; fallbackSrc: string; alt: string;
     className?: string[];
}) {
    const [currentSrc, setCurrentSrc] = useState<string>(src);
    const handleError = () => {
        if (currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc)
        } else {
            setCurrentSrc("")
        }
    }

    return (
        <img 
            src={src} 
            alt={alt} 
            className={className ? className.join(" ") : ''} 
            onError={handleError} 
            loading="lazy"
        />
    )
}
