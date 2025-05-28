import ButtonWithBadge from '@/components/molecules/Button/ButtonWithBadge';
import { Card } from '@/components/ui/card';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({ className = '' }: SidebarProps) => {
    return (
        <Card className={`${className} bg-background sticky top-25 gap-1 p-2`}>
            <ButtonWithBadge title="Category 1" badgeNumber={1} />
            <ButtonWithBadge title="Category 2" badgeNumber={2} />
            <ButtonWithBadge title="Category 3" badgeNumber={3} />
            <ButtonWithBadge title="Category 4" badgeNumber={4} />
            <ButtonWithBadge title="Category 5" badgeNumber={5} />
            <ButtonWithBadge title="Category 6" badgeNumber={6} />
        </Card>
    );
};

export default Sidebar;
