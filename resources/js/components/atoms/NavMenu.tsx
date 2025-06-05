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
                    effect="ringHover"
                    variant="ghost"
                    className={`${className} ${active ? 'ring-primary/90 bg-accent text-accent-foreground border ring-2 ring-offset-2' : ''} w-full`}
                >
                    {title}
                </Button>
            ) : (
                // <h5
                //     className={`${className} ${active ? 'border-muted-foreground border-b-2' : 'hover:border-muted-foreground border-b-2 border-transparent'} text-muted-foreground text-sm transition-colors duration-200`}
                // >
                //     {title}
                // </h5>
                <Button
                    size="sm"
                    effect="ringHover"
                    variant="ghost"
                    className={`${className} ${active ? 'ring-primary/90 bg-accent text-foreground border ring-2 ring-offset-2' : ''}`}
                >
                    {title}
                </Button>
            )}
        </Link>
    );
};

export default NavMenu;
