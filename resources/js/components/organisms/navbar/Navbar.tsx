import NavMenu from '@/components/atoms/NavMenu';
import { Banner } from '@/components/molecules/Banner/Banner';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { useNavMenu } from '@/hooks/use-nav-menu';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Button } from '../../ui/button';
import CartSheet from '../Cart/CartSheet';
import SearchCommand from '../Command/SearchCommand';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();
    const navMenu = useNavMenu();

    return (
        <div className="sticky top-0 z-40">
            <Banner />

            <header className="transation-all bg-card border-b duration-300">
                <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 font-bold">
                    <nav className="flex items-center gap-2">
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
                                />
                            ))}
                        </div>
                    </nav>

                    <div className="flex items-center gap-4">
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
            </header>
        </div>
    );
};

export default Navbar;
