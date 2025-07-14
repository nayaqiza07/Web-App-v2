import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { priceFormat } from '@/lib/utils';
import { useCartStore } from '@/stores/useCartStore';
import { CartItem as Item } from '@/types';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, Trash2Icon } from 'lucide-react';
import React, { useState } from 'react';
import QuantityButton from '../Button/QuantityButton';

interface CartItemProps {
    data: Item;
    onDelete: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ data, onDelete }) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const { totalPricePerProduct } = useCartStore();

    const handleToggle = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 1, height: 'auto' }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0, marginBottom: -15 }}
            transition={{ duration: 0.5 }}
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
                className="relative z-10 h-fit w-full text-xs"
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
                                    <Link href={route('products.show', { slug: data.slug })}>
                                        <h2 className="underline-offset-2 hover:underline">{data.name}</h2>
                                    </Link>
                                    <Link href={route('products.showByCategory', { slug: data.category.slug })}>
                                        <p className="text-muted-foreground underline-offset-2 hover:underline">{data.category.name}</p>
                                    </Link>
                                    <p className="text-muted-foreground">{priceFormat(data.price)}</p>
                                </div>
                                <Button variant="ghost" size="icon" onClick={handleToggle} className="size-6">
                                    <ArrowLeftIcon className={`${isActive && 'rotate-180'} transition-all duration-200`} />
                                </Button>
                            </div>
                        </div>
                    </CardHeader>

                    <Separator />

                    <CardFooter className="flex items-center justify-between px-3 py-2">
                        <QuantityButton productId={data.id} />
                        <span>{priceFormat(totalPricePerProduct(data.id))}</span>
                    </CardFooter>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export default CartItem;
