import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUp, Facebook, Globe, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-[#E6E6E6]">
            <div className="mx-auto flex max-w-5xl flex-col gap-5 px-5 py-10 text-xs font-bold text-[#666666] md:gap-10">
                <div className="flex items-center justify-between lg:hidden">
                    <h1 className="text-base font-bold text-[#333333]">Horestco</h1>
                    <Button variant="outline" size="icon" className="rounded-full">
                        <ArrowUp />
                    </Button>
                </div>

                <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                    <h1 className="hidden text-base font-bold text-[#333333] lg:block">Horestco</h1>
                    <div className="flex justify-between gap-3">
                        <div className="flex flex-col gap-3">
                            <p>Gift Card</p>
                            <p>Gift Card</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p>Gift Card</p>
                            <p>Gift Card</p>
                        </div>
                    </div>

                    <div className="flex justify-between gap-3">
                        <div className="flex flex-col gap-3">
                            <p>Services</p>
                            <p>Blog</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p>About Us</p>
                            <p>Contact Us</p>
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

                    <Button variant="outline" size="icon" className="hidden rounded-full lg:flex">
                        <ArrowUp />
                    </Button>
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
