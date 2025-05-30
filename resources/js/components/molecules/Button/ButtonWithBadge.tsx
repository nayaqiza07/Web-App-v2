import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ButtonWithBadgeProps {
    title: string;
    badgeNumber: number;
}

const ButtonWithBadge = ({ title = 'Title', badgeNumber = 0 }: ButtonWithBadgeProps) => {
    return (
        <Button variant="ghost" className="hover:bg-accent hover:border-border flex justify-between border border-transparent p-2 text-xs font-bold">
            <span>{title}</span>
            <Badge variant="outline" className="bg-card border">
                {badgeNumber}
            </Badge>
        </Button>
    );
};

export default ButtonWithBadge;
