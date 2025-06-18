import NavMenu from '@/components/atoms/NavMenu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
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
        setIsScrolled(window.scrollY > 5); // bisa disesuaikan
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.addEventListener('scroll', handleScroll);
    }, []);

    const navData = [
        { title: 'Home', linkTo: 'home' },
        { title: 'Products', linkTo: 'products' },
        { title: 'Services', linkTo: 'services' },
        { title: 'Blog', linkTo: 'blog' },
        { title: 'About Us', linkTo: 'about-us' },
        { title: 'Contact Us', linkTo: 'contact-us' },
    ];

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
                        {navData.map((data, index) => (
                            <NavMenu
                                key={index}
                                title={data.title}
                                linkTo={route(data.linkTo)}
                                isMobile={false}
                                active={Boolean(data.linkTo && route().current(data.linkTo))}
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
                                    <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
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
