import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ButtonWithBadgeProps {
    title: string;
    badgeNumber: number;
}

const ButtonWithBadge = ({ title = 'Title', badgeNumber = 0 }: ButtonWithBadgeProps) => {
    return (
        <Button variant="ghost" className="hover:bg-accent flex justify-between p-2 text-sm font-bold hover:border">
            <span>{title}</span>
            <Badge variant="outline" className="bg-card border">
                {badgeNumber}
            </Badge>
        </Button>
    );
};

export default ButtonWithBadge;
