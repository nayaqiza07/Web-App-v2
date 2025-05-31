import { ALargeSmall, ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';
import { Button } from '../ui/button';

interface HeadLineProps {
    icon?: ReactNode;
    title?: string;
}

const HeadLine = ({ icon = <ALargeSmall size={20} />, title = 'Head Line' }: HeadLineProps) => {
    return (
        <div className="text-primary flex items-center justify-between border text-xs font-bold">
            <div className="flex items-center gap-4">
                {icon}
                <h3>{title}</h3>
            </div>
            <Button size="icon">
                <ArrowRight />
            </Button>
        </div>
    );
};

export default HeadLine;
