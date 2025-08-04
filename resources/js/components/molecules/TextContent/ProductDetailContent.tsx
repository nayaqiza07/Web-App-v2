import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCartActions } from '@/hooks/useCartActions';
import { priceFormat } from '@/lib/utils';
import { useQuantityButtonStore } from '@/stores/useQuantityButtonStore';
import { ProductData } from '@/types';
import { Link } from '@inertiajs/react';
import { easeOut, motion } from 'framer-motion';
import { BanknoteIcon, CircleCheckIcon, Minus, Plus, ShieldHalfIcon, ShoppingBagIcon, TicketPercentIcon } from 'lucide-react';
import React from 'react';

interface ProductDetailContentProps {
    PRODUCT: ProductData;
}

const warranty = [
    {
        icon: CircleCheckIcon,
        text: 'In-Stock and Ready to Ship',
    },
    {
        icon: BanknoteIcon,
        text: 'No Hassle Refunds',
    },
    {
        icon: ShieldHalfIcon,
        text: '30 Day Satisfaction Guarantee',
    },
];

const ProductDetailContent: React.FC<ProductDetailContentProps> = ({ PRODUCT }) => {
    const { quantity, setQuantity } = useQuantityButtonStore();

    const { handleAddToCart } = useCartActions();

    const handleChangeQty = (type: 'dec' | 'inc') => {
        const newQty = type === 'dec' ? Math.max(quantity - 1, 1) : quantity + 1;
        setQuantity(newQty);
    };

    return (
        <motion.article
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: easeOut }}
            className="flex w-full flex-col justify-between gap-3 md:gap-0 lg:w-2/3"
        >
            {(PRODUCT?.discount_percentage || PRODUCT?.is_new) && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1, ease: easeOut }}
                    className="flex items-center gap-2"
                >
                    {PRODUCT?.discount_percentage && <Badge variant="destructive">{PRODUCT?.discount_percentage}% Off</Badge>}
                    {PRODUCT?.is_new && <Badge variant="blue">NEW</Badge>}
                </motion.div>
            )}
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: easeOut }}
                className="text-2xl font-semibold"
            >
                {PRODUCT?.name}
            </motion.h1>
            <p className="flex items-center gap-4 text-2xl font-bold">
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1, ease: easeOut }}>
                    <span
                        className={`${PRODUCT?.discount_percentage && 'border-destructive/10 bg-destructive/10 text-destructive dark:bg-destructive rounded-md border px-2 py-0.5 dark:text-white'} flex items-center gap-2`}
                    >
                        {PRODUCT?.discount_percentage && <TicketPercentIcon />} {priceFormat(PRODUCT?.price)}
                    </span>
                </motion.span>

                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: easeOut }}
                    className="text-muted-foreground text-xs line-through"
                >
                    {PRODUCT && PRODUCT.old_price > 0 && priceFormat(PRODUCT.old_price)}
                </motion.span>
            </p>

            <div className="flex flex-col gap-6 text-xs font-bold">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1, ease: easeOut }}
                    className="text-muted-foreground"
                >
                    <span>SKU:</span> <span className="text-foreground">{PRODUCT?.sku}</span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1, ease: easeOut }}
                    className="text-muted-foreground"
                >
                    <span className="mr-1">Category:</span>
                    {PRODUCT?.category.slug && (
                        <Link href={route('products.showByCategory', { slug: PRODUCT?.category.slug })}>
                            <Badge variant="blueTransparent" className="font-bold">
                                {PRODUCT?.category.name}
                            </Badge>
                        </Link>
                    )}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1, ease: easeOut }}
                    className="flex flex-col gap-2"
                >
                    <div className="flex items-center justify-between">
                        <div className="border-border flex w-fit overflow-hidden rounded-md border">
                            <Button
                                variant="secondary"
                                size="icon"
                                onClick={() => handleChangeQty('dec')}
                                disabled={quantity <= 1}
                                className="size-8 rounded-none border-none"
                            >
                                <Minus />
                            </Button>
                            <Input className="bg-input size-8 rounded-none p-1 text-center shadow-none" value={quantity} readOnly />
                            <Button
                                variant="secondary"
                                size="icon"
                                onClick={() => handleChangeQty('inc')}
                                className="size-8 rounded-none border-none"
                            >
                                <Plus />
                            </Button>
                        </div>

                        <p className="text-muted-foreground">
                            Sub Total: <span className="text-foreground">{priceFormat(PRODUCT?.price * quantity)}</span>
                        </p>
                    </div>
                    <p className="text-muted-foreground">
                        Only <span className="text-foreground">{PRODUCT?.stock}</span> left in stock!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 1, ease: easeOut }}
                    className="text-muted-foreground flex flex-col gap-1"
                >
                    {warranty.map((data, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span>{<data.icon size={16} />}</span>
                            <span>{data.text}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1, ease: easeOut }} className="w-full">
                <Button
                    type="button"
                    effect="gooeyLeft"
                    gooeyColor="default"
                    onClick={(e) => handleAddToCart(e, PRODUCT, quantity)}
                    className="w-full"
                >
                    <ShoppingBagIcon /> Add to Cart
                </Button>
            </motion.div>
        </motion.article>
    );
};

export default ProductDetailContent;
