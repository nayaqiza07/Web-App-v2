import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Search } from 'lucide-react';
import NavMenu from '../../atoms/NavMenu';
import { Button } from '../../ui/button';
import CartSheet from '../Cart/CartSheet';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();

    const navData = [
        { title: 'Home', linkTo: 'home' },
        { title: 'Shop', linkTo: 'shop' },
        { title: 'Services', linkTo: 'services' },
        { title: 'Blog', linkTo: 'blog' },
        { title: 'About Us', linkTo: 'about-us' },
        { title: 'Contact Us', linkTo: 'contact-us' },
    ];

    return (
        <nav className="bg-card sticky top-0 z-10 border-b">
            <div className="mx-auto flex max-w-5xl justify-between p-5 font-bold">
                <div className="flex items-center gap-2">
                    <NavbarMobile />
                    <Link href={route('home')}>Horestco</Link>
                </div>

                <div className="hidden items-center gap-5 text-2xl md:flex">
                    {navData.map((data, index) => (
                        <NavMenu
                            key={index}
                            title={data.title}
                            linkTo={route(data.linkTo)}
                            isMobile={false}
                            active={Boolean(data.linkTo && route().current(data.linkTo))}
                        />
                    ))}
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
                                <Button>Login</Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
