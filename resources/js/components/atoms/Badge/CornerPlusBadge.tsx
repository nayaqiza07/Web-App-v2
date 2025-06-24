import React, { ReactNode } from 'react';

interface CornerPlusBadge {
    children?: ReactNode;
}

const CornerPlusBadge: React.FC<CornerPlusBadge> = ({ children }) => {
    return (
        <span className="relative inline-flex h-fit w-fit items-center justify-center bg-[#2563EB]/10 px-1.5 text-[0.625rem]/[1.125rem] text-[#2563EB] uppercase [&_svg:not([class*='size-'])]:size-[5px]">
            <span className="pointer-events-none absolute inset-0 border border-dashed border-[#2563EB]/60 tracking-widest"></span>
            {children}
            <svg width="5" height="5" viewBox="0 0 5 5" className="absolute top-[-2px] left-[-2px] fill-[#2563EB]/50">
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
            </svg>
            <svg width="5" height="5" viewBox="0 0 5 5" className="absolute top-[-2px] right-[-2px] fill-[#2563EB]/50">
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
            </svg>
            <svg width="5" height="5" viewBox="0 0 5 5" className="absolute bottom-[-2px] left-[-2px] fill-[#2563EB]/50">
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
            </svg>
            <svg width="5" height="5" viewBox="0 0 5 5" className="absolute right-[-2px] bottom-[-2px] fill-[#2563EB]/50">
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
            </svg>
        </span>
    );
};

export default CornerPlusBadge;
