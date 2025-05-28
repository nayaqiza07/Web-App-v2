import { Link } from '@inertiajs/react';
import { ALargeSmall, ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';
import { Button } from '../ui/button';

interface HeadLineProps {
    icon?: ReactNode;
    title?: string;
    linkTo: string;
}

const HeadLine = ({ icon = <ALargeSmall size={20} />, title = 'Head Line', linkTo }: HeadLineProps) => {
    return (
        <div className="text-primary flex items-center justify-between text-sm font-bold">
            <div className="flex items-center gap-4">
                {icon}
                <h3>{title}</h3>
            </div>
            <Link href={linkTo}>
                <Button size="icon">
                    <ArrowRight />
                </Button>
            </Link>
        </div>
    );
};

export default HeadLine;
