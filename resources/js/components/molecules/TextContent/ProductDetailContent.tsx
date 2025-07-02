import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { priceFormat } from '@/lib/utils';
import { Product } from '@/types';
import { BanknoteIcon, CircleCheckIcon, PlusCircleIcon, ShieldHalfIcon } from 'lucide-react';
import React from 'react';
import QuantityButton from '../Button/QuantityButton';
import SkeletonDetailProduct from '../Skeleton/SkeletonDetailProduct';

interface ProductDetailContentProps {
    isLoading?: boolean;
    PRODUCT: Product | null;
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
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log({
            product_id: PRODUCT?.id,
            name: PRODUCT?.name,
            price: PRODUCT?.price,
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
            className="flex w-full flex-col justify-between gap-6 lg:w-2/3"
        >
            <AnimatedMotion as="h1" delay={0.3} duration={1} variantName="fadeIn" animate="visible" className="text-2xl font-semibold">
                {PRODUCT?.name}
            </AnimatedMotion>
            <p className="flex items-center gap-4 text-2xl font-bold">
                <AnimatedMotion as="span" delay={0.4} duration={1} variantName="fadeIn" animate="visible">
                    {priceFormat(PRODUCT?.price)}
                </AnimatedMotion>
                <AnimatedMotion
                    as="span"
                    delay={0.6}
                    duration={1}
                    variantName="fadeIn"
                    animate="visible"
                    className="text-muted-foreground text-xs line-through"
                >
                    {priceFormat(PRODUCT?.price)}
                </AnimatedMotion>
            </p>

            <div className="flex flex-col gap-6 text-xs font-bold">
                <AnimatedMotion as="p" delay={0.7} duration={1} variantName="fadeIn" animate="visible" className="text-muted-foreground">
                    SKU: <span className="text-foreground">LSOFA578493</span>
                </AnimatedMotion>

                <AnimatedMotion as="p" delay={0.8} duration={1} variantName="fadeIn" animate="visible" className="text-muted-foreground">
                    Category:
                    <Badge variant={'outline'} className="font-bold">
                        {PRODUCT?.category}
                    </Badge>
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
                <Button effect="expandIcon" icon={PlusCircleIcon} iconPlacement="right" onClick={handleAddToCart} className="w-full">
                    Add to Cart
                </Button>
            </AnimatedMotion>
        </AnimatedMotion>
    );
};

export default ProductDetailContent;
