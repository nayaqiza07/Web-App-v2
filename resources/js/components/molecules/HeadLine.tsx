import { ALargeSmall, ArrowRight } from 'lucide-react';
import React, { ReactNode } from 'react';
import { Button } from '../ui/button';

interface HeadLineProps {
    icon?: ReactNode;
    title?: string;
    button?: ReactNode;
}

const HeadLine: React.FC<HeadLineProps> = ({ icon = <ALargeSmall size={20} />, title = 'Head Line', button }) => {
    return (
        <section className="flex items-center justify-between text-xs font-bold">
            <div className="flex items-center gap-4">
                {icon}
                <h3>{title}</h3>
            </div>
            {!button ? (
                <Button size="icon">
                    <ArrowRight />
                </Button>
            ) : (
                button
            )}
        </section>
    );
};

export default HeadLine;
