import { ArrowRight, ArrowUp, Facebook, Globe, Instagram } from 'lucide-react';
import { Button } from '../ui/button';

const Footer = () => {
    return (
        <div className="mx-auto max-w-5xl p-5 text-xs font-bold text-[#666666] md:p-10">
            <div className="flex flex-col items-start gap-5 md:flex-row md:justify-between">
                <div className="flex items-center justify-between">
                    <h1 className="text-base font-bold text-[#333333]">Horestco</h1>
                    <Button variant="outline" size="icon" className="rounded-full lg:hidden">
                        <ArrowUp />
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-10 md:flex">
                    <div className="flex flex-col gap-3">
                        <h5>Gift Cards</h5>
                        <h5>Find A Store</h5>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h5>Gift Cards</h5>
                        <h5>Find A Store</h5>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-10 md:flex">
                    <div className="flex flex-col gap-3">
                        <h5>Services</h5>
                        <h5>Blog</h5>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h5>About Us</h5>
                        <h5>Contact Us</h5>
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

                <div className="hidden lg:block">
                    <Button variant="outline" size="icon" className="rounded-full">
                        <ArrowUp />
                    </Button>
                </div>
            </div>

            <div className="mt-5 flex flex-col gap-5 md:mt-16 md:flex-row md:items-center md:gap-16">
                <div className="flex items-center gap-3">
                    <Globe size={20} />
                    <h5>Indonesia</h5>
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                    <h5>Copyright © All Rights Reserved</h5>
                    <h5>Terms & Condition</h5>
                    <h5>Privacy Policy</h5>
                </div>

                <div className="flex items-center gap-24">
                    <h5>Email</h5>
                    <ArrowRight size={20} className="sm:hidden lg:block" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
