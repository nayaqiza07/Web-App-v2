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
                    effect="gooeyLeft"
                    gooeyColor="ghost"
                    className={`${className} ${active ? 'bg-accent text-accent-foreground before:animate-shine background-position_0s_ease relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-no-repeat' : ''} w-full`}
                >
                    {title}
                </Button>
            ) : (
                <Button
                    size="sm"
                    variant="ghost"
                    effect="gooeyLeft"
                    gooeyColor="ghost"
                    className={`${className} ${active ? 'text-accent-foreground bg-accent before:animate-shine background-position_0s_ease relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-no-repeat' : ''} text-xs`}
                >
                    {title}
                </Button>
            )}
        </Link>
    );
};

export default NavMenu;
