import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Trash2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import QuantityButton from '../Button/QuantityButton';

const CartItem = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleToggle = () => {
        if (isMobile) {
            setIsActive((prev) => !prev);
        }
    };

    return (
        <div
            onMouseEnter={() => !isMobile && setIsActive(true)}
            onMouseLeave={() => !isMobile && setIsActive(false)}
            onClick={handleToggle}
            className="group relative flex overflow-hidden"
        >
            {/* Card Hapus */}
            <div className="bg-destructive border-border absolute inset-0 z-0 flex cursor-pointer items-center justify-end rounded-md border pr-4">
                <Trash2Icon size={20} className="text-destructive-foreground" />
            </div>

            {/* Card Utama */}
            <motion.div
                className="relative z-10 w-full cursor-pointer text-xs"
                initial={{ x: 0 }}
                animate={{ x: isActive ? -48 : 0 }}
                transition={{ type: 'tween', duration: 0.3 }}
            >
                <Card className="rounded-md p-0 shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between gap-5 px-3 py-2">
                        <div className="flex items-center gap-5">
                            <img
                                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                                alt="cart-image-product"
                                className="h-[44px] w-[60px] rounded"
                            />
                            <h2>Armchair</h2>
                        </div>
                        <div className="hidden items-center gap-5 md:flex">
                            <span>90</span>
                            <QuantityButton />
                            <span>90</span>
                        </div>
                    </CardHeader>

                    <Separator className="md:hidden" />

                    <CardFooter className="flex items-center justify-between px-3 py-2 md:hidden">
                        <span>90</span>
                        <QuantityButton />
                        <span>90</span>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
};

export default CartItem;
