import { Button, ButtonProps } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    desc?: string;
    btnText?: string;
    btnLink?: string;
    btnProps?: ButtonProps;
    className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, desc, btnText, btnLink, btnProps, className = '' }) => {
    return (
        <div className={`${className} flex flex-1 flex-col items-center justify-center gap-4 px-4 py-10`}>
            {icon}
            <div className="flex flex-col items-center justify-center gap-1">
                <h3>{title}</h3>
                <p className="text-muted-foreground text-xs">{desc}</p>
            </div>
            {btnText && (
                <Link href={btnLink ?? '#'}>
                    <Button className="text-xs" size="sm" {...btnProps}>
                        {btnText}
                    </Button>
                </Link>
            )}
        </div>
    );
};

export default EmptyState;
