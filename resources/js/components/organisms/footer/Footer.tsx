import ScrollToTopButton from '@/components/atoms/Button/ScrollToTopButton';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ArrowRight, ArrowUp, Facebook, Globe, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="mx-auto flex max-w-5xl flex-col gap-5 p-5 text-xs font-bold md:gap-10 md:p-10">
                <div className="flex items-center justify-between lg:hidden">
                    <h1 className="text-base font-bold">Horestco</h1>
                    <Button variant="outline" size="icon" className="rounded-full">
                        <ArrowUp />
                    </Button>
                </div>

                <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                    <Link href={route('home')} className="hidden text-base font-bold lg:block">
                        Horestco
                    </Link>
                    <div className="flex justify-between gap-3">
                        <div className="flex flex-col gap-3">
                            <Link href={route('support.index')}>Support</Link>
                            <Link href="#">Catalog</Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Link href="#">Portfolio</Link>
                            <p>Gift Card</p>
                        </div>
                    </div>

                    <div className="flex justify-between gap-3">
                        <div className="flex flex-col gap-3 font-sans">
                            <Link href={route('services')}>Services</Link>
                            <Link href={route('blogs.index')}>Blog</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link href={route('about-us')}>About Us</Link>
                            <Link href={route('contact-us.indexOnContactUs')}>Contact Us</Link>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Facebook />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Instagram />
                        </Button>
                    </div>

                    <ScrollToTopButton />
                </div>

                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                    <div className="flex items-center gap-3">
                        <Globe size={20} />
                        <h5>Indonesia</h5>
                    </div>

                    <div className="flex flex-col gap-5 md:flex-row">
                        <h5>Copyright © All Rights Reserved</h5>
                        <h5>Terms & Condition</h5>
                        <h5>Privacy Policy</h5>
                    </div>

                    <div className="flex items-center justify-between lg:gap-24">
                        <h5>Email</h5>
                        <ArrowRight size={20} className="sm:hidden lg:block" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
