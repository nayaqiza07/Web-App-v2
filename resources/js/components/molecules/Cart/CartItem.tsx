import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCartActions } from '@/hooks/useCartActions';
import { priceFormat } from '@/lib/utils';
import { CartItem as Item } from '@/types';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, Trash2Icon } from 'lucide-react';
import React, { useMemo } from 'react';
import QuantityButton from '../Button/QuantityButton';

interface CartItemProps {
    data: Item;
    // onDelete: (id: number) => void;
    openItemId: number | null;
    setOpenItemId: (id: number | null) => void;
}

const CartItem: React.FC<CartItemProps> = ({ data, openItemId, setOpenItemId }) => {
    const { handleRemoveCartItem } = useCartActions();

    const isOpen = openItemId === data.id;

    const handleToggle = () => {
        setOpenItemId(isOpen ? null : data.id);
    };

    const totalPricePerProduct = useMemo(() => {
        return data.product.price * data.quantity;
    }, [data]);

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
                onClick={() => handleRemoveCartItem(data.id, data.product.name)}
                className="border-border absolute inset-0 z-0 flex h-full cursor-pointer items-center justify-end rounded-md border pr-4"
            >
                <Trash2Icon size={20} className="text-destructive-foreground" />
            </Button>

            {/* Card Utama */}
            <motion.div
                layout
                className="relative z-10 h-fit w-full text-xs"
                initial={{ x: 0 }}
                animate={{ x: !isOpen ? 0 : -48 }}
                transition={{ type: 'tween', duration: 0.3 }}
            >
                <Card className="gap-0 rounded-md p-0 shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between gap-5 px-3 py-2">
                        <div className="flex w-full items-center gap-5">
                            <img src={`/storage/${data.product.thumbnail}`} alt="cart-image-product" className="h-[44px] w-[60px] rounded" />
                            <div className="flex w-full justify-between">
                                <div className="flex flex-col">
                                    <Link
                                        href={route('products.show', { slug: data.product.slug })}
                                        className="w-fit underline-offset-2 hover:underline"
                                    >
                                        {data.product.name}
                                    </Link>
                                    <Link
                                        href={route('products.showByCategory', { slug: data.product.category.slug })}
                                        className="text-muted-foreground w-fit underline-offset-2 hover:underline"
                                    >
                                        {data.product.category.name}
                                    </Link>
                                    <p className="text-muted-foreground">{priceFormat(data.product.price)}</p>
                                </div>
                                <Button variant="ghost" size="icon" onClick={handleToggle} className="size-6">
                                    <ArrowLeftIcon className={`${isOpen && 'rotate-180'} transition-all duration-200`} />
                                </Button>
                            </div>
                        </div>
                    </CardHeader>

                    <Separator />

                    <CardFooter className="flex items-center justify-between px-3 py-2">
                        <QuantityButton cartId={data.id} quantity={data.quantity} />
                        <span>{priceFormat(totalPricePerProduct)}</span>
                    </CardFooter>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export default CartItem;
