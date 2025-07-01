import NavMenu from '@/components/atoms/NavMenu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { useNavMenu } from '@/hooks/use-nav-menu';
import { cn } from '@/lib/utils';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import CartSheet from '../Cart/CartSheet';
import SearchCommand from '../Command/SearchCommand';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();

    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10); // bisa disesuaikan
    };

    const navMenu = useNavMenu();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                `transation-all sticky top-0 z-40 border-b duration-300`,
                'backdrop-blur-xl',
                isScrolled ? 'bg-card/70 shadow-md' : 'bg-card/100',
            )}
        >
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 font-bold">
                <div className="flex items-center gap-2">
                    <NavbarMobile />
                    <Link href={route('home')}>Horestco</Link>

                    <div className="ml-5 hidden items-center gap-1 lg:flex">
                        {navMenu.map((menu, index) => (
                            <NavMenu
                                key={index}
                                title={menu.title}
                                linkTo={route(menu.linkTo)}
                                isMobile={false}
                                active={menu.isActive ?? route().current(menu.linkTo)}
                                className="text-muted-foreground"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <SearchCommand />
                    <CartSheet />

                    <div className="hidden md:block">
                        {auth.user ? (
                            <Link href={route('dashboard')}>
                                <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    {/* <AvatarImage src={auth.user.avatar} alt={auth.user.name} /> */}
                                    <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                        {getInitials(auth.user.name)}
                                    </AvatarFallback>
                                </Avatar>
                            </Link>
                        ) : (
                            <Link href={route('login')}>
                                <Button effect="shine" size="sm">
                                    Log In
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
