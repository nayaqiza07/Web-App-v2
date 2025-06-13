import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonWithBadgeProps {
    title: string;
    badgeNumber: number;
    className?: string;
}

const ButtonWithBadge = ({ title = 'Title', badgeNumber = 0, className = '' }: ButtonWithBadgeProps) => {
    return (
        <Button
            variant="ghost"
            className={cn('hover:bg-accent hover:border-border flex justify-between border border-transparent p-2 text-xs font-bold', className)}
        >
            <span>{title}</span>
            <Badge variant="outline" className="bg-card border">
                {badgeNumber}
            </Badge>
        </Button>
    );
};

export default ButtonWithBadge;
