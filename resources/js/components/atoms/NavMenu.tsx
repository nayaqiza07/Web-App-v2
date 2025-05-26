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
                    className={`${className} ${active ? 'border border-[#e6e6e6] bg-[#ffffff] text-[#333333]' : 'text-[#666666] hover:border hover:border-[#e6e6e6] hover:bg-[#ffffff] hover:text-[#333333]'} w-full font-bold transition-colors duration-200`}
                >
                    {title}
                </Button>
            ) : (
                <h5
                    className={`${className} ${active ? 'border-b-2 border-[#333333] text-[#333333]' : 'border-b-2 border-transparent hover:border-[#333333] hover:text-[#333333]'} text-sm transition-colors duration-200`}
                >
                    {title}
                </h5>
            )}
        </Link>
    );
};

export default NavMenu;
