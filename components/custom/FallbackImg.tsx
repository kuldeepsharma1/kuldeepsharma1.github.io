import { cn } from '@/lib/utils';
import React from 'react';

interface FallbackImageProps {
    alt?: string;
    className?: string;
}

const FallbackImage: React.FC<FallbackImageProps> = ({ alt, className }) => {
    return (
        <div
            className={cn(
                'h-full w-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-800 flex justify-center items-center text-zinc-600 dark:text-zinc-300 text-[1.1rem] font-medium text-center overflow-hidden shadow-sm dark:shadow-[0_2px_4px_rgba(0,0,0,0.2)] p-4',
                className
            )}
        >
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-400 dark:text-zinc-400 opacity-70 mb-3 size-20 mx-auto"
                >
                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                    <path d="M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path d="M21 15l-5-5L5 21" />
                </svg>
                <span className=" leading-relaxed break-words ">
                    {alt ? `${alt} - Image Unavailable` : 'Image Unavailable'}
                </span>
            </div>
        </div>
    );
};

export default FallbackImage;