import { Button, ButtonProps } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

interface EmptyStateProps {
    icon?: React.ElementType;
    iconSize?: number;
    title: string;
    desc?: string;
    btnText?: string;
    btnLink?: string;
    btnProps?: ButtonProps;
    className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon: Icon, iconSize, title, desc, btnText, btnLink, btnProps, className = '' }) => {
    return (
        <div className={`${className} flex flex-1 flex-col items-center justify-center gap-4 px-4 py-10`}>
            {Icon && <Icon size={iconSize} />}
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
