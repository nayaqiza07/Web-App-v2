import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { priceFormat } from '@/lib/utils';
import { useCartStore } from '@/stores/useCartStore';
import { ProductData } from '@/types';
import { Link } from '@inertiajs/react';
import { BanknoteIcon, CircleCheckIcon, PlusCircleIcon, ShieldHalfIcon, TicketPercentIcon } from 'lucide-react';
import React from 'react';
import QuantityButton from '../Button/QuantityButton';
import SkeletonDetailProduct from '../Skeleton/SkeletonDetailProduct';

interface ProductDetailContentProps {
    isLoading?: boolean;
    PRODUCT: ProductData | null;
}

const shipping = [
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

const ProductDetailContent: React.FC<ProductDetailContentProps> = ({ isLoading, PRODUCT }) => {
    const { addItem } = useCartStore();

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addItem({
            id: PRODUCT?.id,
            thumbnail: PRODUCT?.thumbnail,
            name: PRODUCT?.name,
            price: PRODUCT?.price,
            quantity: 1,
        });
    };

    return isLoading ? (
        <SkeletonDetailProduct />
    ) : (
        <AnimatedMotion
            as="div"
            delay={0.3}
            duration={1}
            variantName="slideLeft"
            animate="visible"
            className="flex w-full flex-col justify-between gap-3 lg:w-2/3"
        >
            {(PRODUCT?.discount_percentage || PRODUCT?.is_new) && (
                <AnimatedMotion as="div" delay={0.2} duration={1} variantName="fadeIn" animate="visible" className="flex items-center gap-2">
                    {PRODUCT?.discount_percentage && <Badge variant="destructive">{PRODUCT?.discount_percentage}% Off</Badge>}
                    {PRODUCT?.is_new && <Badge variant="blue">NEW</Badge>}
                </AnimatedMotion>
            )}
            <AnimatedMotion as="h1" delay={0.3} duration={1} variantName="fadeIn" animate="visible" className="text-2xl font-semibold">
                {PRODUCT?.name}
            </AnimatedMotion>
            <p className="flex items-center gap-4 text-2xl font-bold">
                <AnimatedMotion as="span" delay={0.4} duration={1} variantName="fadeIn" animate="visible">
                    <span
                        className={`${PRODUCT?.discount_percentage && 'border-destructive/10 bg-destructive/10 text-destructive dark:bg-destructive rounded-md border px-2 py-0.5 dark:text-white'} flex items-center gap-2`}
                    >
                        {PRODUCT?.discount_percentage && <TicketPercentIcon />} {priceFormat(PRODUCT?.price)}
                    </span>
                </AnimatedMotion>

                <AnimatedMotion
                    as="span"
                    delay={0.6}
                    duration={1}
                    variantName="fadeIn"
                    animate="visible"
                    className="text-muted-foreground text-xs line-through"
                >
                    {PRODUCT && PRODUCT.old_price > 0 && priceFormat(PRODUCT.old_price)}
                </AnimatedMotion>
            </p>

            <div className="flex flex-col gap-6 text-xs font-bold">
                <AnimatedMotion as="p" delay={0.7} duration={1} variantName="fadeIn" animate="visible" className="text-muted-foreground">
                    <span>SKU:</span> <span className="text-foreground">{PRODUCT?.sku}</span>
                </AnimatedMotion>

                <AnimatedMotion as="p" delay={0.8} duration={1} variantName="fadeIn" animate="visible" className="text-muted-foreground">
                    <span className="mr-1">Category:</span>
                    {PRODUCT?.category.slug && (
                        <Link href={route('products.showByCategory', { slug: PRODUCT?.category.slug })}>
                            <Badge variant={'outline'} className="font-bold">
                                {PRODUCT?.category.name}
                            </Badge>
                        </Link>
                    )}
                </AnimatedMotion>

                <AnimatedMotion as="div" delay={0.9} duration={1} variantName="fadeIn" animate="visible" className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <QuantityButton />

                        <p className="text-muted-foreground">
                            Sub Total: <span className="text-foreground">{priceFormat(PRODUCT?.price)}</span>
                        </p>
                    </div>
                    <p className="text-muted-foreground">
                        Only <span className="text-foreground">{PRODUCT?.stock}</span> left in stock!
                    </p>
                </AnimatedMotion>

                <AnimatedMotion
                    as="div"
                    delay={1}
                    duration={1}
                    variantName="fadeIn"
                    animate="visible"
                    className="text-muted-foreground flex flex-col gap-1"
                >
                    {shipping.map((data, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span>{<data.icon size={16} />}</span>
                            <span>{data.text}</span>
                        </div>
                    ))}
                </AnimatedMotion>
            </div>

            <AnimatedMotion as="div" delay={1.1} duration={1} variantName="fadeIn" animate="visible" className="w-full">
                <Button effect="expandIcon" type="button" icon={PlusCircleIcon} iconPlacement="right" onClick={handleAddToCart} className="w-full">
                    Add to Cart
                </Button>
            </AnimatedMotion>
        </AnimatedMotion>
    );
};

export default ProductDetailContent;
