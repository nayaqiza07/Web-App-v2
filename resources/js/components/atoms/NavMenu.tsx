import { Link } from '@inertiajs/react';
import { Button } from '../ui/button';

interface NavbarProps {
    active?: boolean;
    title: string;
    linkTo: string;
    isMobile: boolean;
    className?: string;
}

const NavMenu = ({ active = false, title, linkTo, isMobile, className }: NavbarProps) => {
    return (
        <Link href={linkTo}>
            {isMobile ? (
                <Button
                    variant="ghost"
                    className={`${className} ${active ? 'bg-accent border' : 'hover:border'} w-full font-bold transition-colors duration-200`}
                >
                    {title}
                </Button>
            ) : (
                <h5
                    className={`${className} ${active ? 'border-foreground border-b-2' : 'hover:border-foreground border-b-2 border-transparent'} text-sm transition-colors duration-200`}
                >
                    {title}
                </h5>
            )}
        </Link>
    );
};

export default NavMenu;
