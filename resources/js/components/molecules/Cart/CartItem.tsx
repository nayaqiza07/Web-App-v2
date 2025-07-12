import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { priceFormat } from '@/lib/utils';
import { motion } from 'framer-motion';
import { EllipsisVerticalIcon, Trash2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import QuantityButton from '../Button/QuantityButton';

interface CartItemProps {
    data: {
        id: number;
        thumbnail: string;
        name: string;
        price: number;
    };
    onDelete: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ data, onDelete }) => {
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
        <motion.div
            layout
            initial={{ opacity: 1, height: 'auto' }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0, marginBottom: -15 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => !isMobile && setIsActive(true)}
            onMouseLeave={() => !isMobile && setIsActive(false)}
            className="group relative flex overflow-hidden"
        >
            {/* Button Hapus */}
            <Button
                variant="destructive"
                effect="gooeyRight"
                gooeyColor="destructive"
                onClick={() => onDelete(data.id)}
                className="border-border absolute inset-0 z-0 flex h-full cursor-pointer items-center justify-end rounded-md border pr-4"
            >
                <Trash2Icon size={20} className="text-destructive-foreground" />
            </Button>

            {/* Card Utama */}
            <motion.div
                className="relative z-10 h-fit w-full cursor-pointer text-xs"
                initial={{ x: 0 }}
                animate={{ x: isActive ? -48 : 0 }}
                transition={{ type: 'tween', duration: 0.3 }}
            >
                <Card className="gap-0 rounded-md p-0 shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between gap-5 px-3 py-2">
                        <div className="flex w-full items-center gap-5">
                            <img src={data.thumbnail} alt="cart-image-product" className="h-[44px] w-[60px] rounded" />
                            <div className="flex w-full justify-between">
                                <div className="flex flex-col">
                                    <h2>{data.name}</h2>
                                    <p className="text-muted-foreground hidden md:flex">{priceFormat(data.price)}</p>
                                </div>
                                <Button variant="outline" size="icon" onClick={handleToggle} className="rounded-full md:hidden">
                                    <EllipsisVerticalIcon />
                                </Button>
                            </div>
                        </div>
                        <div className="hidden items-center gap-5 md:flex">
                            <QuantityButton />
                            <span>{priceFormat(data.price)}</span>
                        </div>
                    </CardHeader>

                    <Separator className="md:hidden" />

                    <CardFooter className="flex items-center justify-between px-3 py-2 md:hidden">
                        <span>{priceFormat(data.price)}</span>
                        <QuantityButton />
                        <span>{priceFormat(data.price)}</span>
                    </CardFooter>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export default CartItem;
