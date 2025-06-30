import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { priceFormat } from '@/lib/utils';
import { Product } from '@/types';
import { PlusCircleIcon } from 'lucide-react';
import React from 'react';
import QuantityButton from '../Button/QuantityButton';
import SkeletonDetailProduct from '../Skeleton/SkeletonDetailProduct';

interface ProductDetailContentProps {
    isLoading?: boolean;
    PRODUCT: Product | null;
}

const ProductDetailContent: React.FC<ProductDetailContentProps> = ({ isLoading, PRODUCT }) => {
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

                <AnimatedMotion
                    as="div"
                    delay={0.9}
                    duration={1}
                    variantName="fadeIn"
                    animate="visible"
                    className="flex items-center justify-between"
                >
                    <QuantityButton />
                    <p className="text-muted-foreground">
                        Sub Total: <span className="text-foreground">{priceFormat(PRODUCT?.price)}</span>
                    </p>
                </AnimatedMotion>

                <AnimatedMotion as="p" delay={1} duration={1} variantName="fadeIn" animate="visible" className="text-muted-foreground">
                    {PRODUCT?.short_description}
                </AnimatedMotion>
            </div>

            <AnimatedMotion as="p" delay={1.1} duration={1} variantName="fadeIn" animate="visible" className="w-full">
                <Button effect="expandIcon" icon={PlusCircleIcon} iconPlacement="right" className="w-full">
                    Add to Cart
                </Button>
            </AnimatedMotion>
        </AnimatedMotion>
    );
};

export default ProductDetailContent;
