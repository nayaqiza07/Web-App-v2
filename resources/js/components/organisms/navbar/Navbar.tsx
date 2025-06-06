import NavMenu from '@/components/atoms/NavMenu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Search } from 'lucide-react';
import { Button } from '../../ui/button';
import CartSheet from '../Cart/CartSheet';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();

    const navData = [
        { title: 'Home', linkTo: 'home' },
        { title: 'Products', linkTo: 'products' },
        { title: 'Services', linkTo: 'services' },
        { title: 'Blog', linkTo: 'blog' },
        { title: 'About Us', linkTo: 'about-us' },
        { title: 'Contact Us', linkTo: 'contact-us' },
    ];

    return (
        <nav className="bg-card sticky top-0 z-40 border-b">
            <div className="mx-auto flex h-16 max-w-5xl justify-between px-5 font-bold">
                <div className="flex items-center gap-2">
                    <NavbarMobile />
                    <Link href={route('home')}>Horestco</Link>
                </div>

                <div className="hidden items-center gap-3 lg:flex">
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
                    {/* <TryNav data={navData} /> */}
                </div>

                <div className="flex items-center gap-2">
                    <Search size={20} />
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
                                <Button effect="shine">Login</Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
