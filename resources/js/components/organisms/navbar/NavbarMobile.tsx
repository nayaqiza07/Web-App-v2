import NavMenu from '@/components/atoms/NavMenu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useInitials } from '@/hooks/use-initials';
import { useNavMenu } from '@/hooks/use-nav-menu';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { PanelLeftDashedIcon } from 'lucide-react';

const NavbarMobile = () => {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();

    const navMenu = useNavMenu();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="lg:hidden">
                    <PanelLeftDashedIcon />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-card">
                <SheetHeader>
                    <SheetTitle>Horestco</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col gap-3 px-4">
                    {navMenu.map((menu, index) => (
                        <NavMenu
                            key={index}
                            title={menu.title}
                            linkTo={route(menu.linkTo)}
                            isMobile={true}
                            active={menu.isActive ?? route().current(menu.linkTo)}
                            className="text-muted-foreground"
                        />
                    ))}
                </nav>

                <SheetFooter>
                    {auth.user ? (
                        <Link href={route('dashboard')} className="flex items-center gap-2">
                            <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                {/* <AvatarImage src={auth.user.avatar} alt={auth.user.name} /> */}
                                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                    {getInitials(auth.user.name)}
                                </AvatarFallback>
                            </Avatar>
                            <span className="truncate font-medium">{auth.user.name}</span>
                        </Link>
                    ) : (
                        <div className="flex justify-between">
                            <Link href={route('login')}>
                                <Button>Log In</Button>
                            </Link>
                            <span>or</span>
                            <Link href={route('register')}>
                                <Button variant="outline">Sign Up</Button>
                            </Link>
                        </div>
                    )}
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default NavbarMobile;
