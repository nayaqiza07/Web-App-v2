import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { priceFormat } from '@/lib/utils';
import { PlusCircleIcon } from 'lucide-react';
import React from 'react';
import QuantityButton from '../Button/QuantityButton';
import SkeletonDetailProduct from '../Skeleton/SkeletonDetailProduct';

interface ProductDetailContentProps {
    isLoading?: boolean;
}

const ProductDetailContent: React.FC<ProductDetailContentProps> = ({ isLoading }) => {
    const fromPrice = 1000000;
    const toPrice = 1000000;
    return isLoading ? (
        <SkeletonDetailProduct />
    ) : (
        <AnimatedMotion as="div" delay={0.3} duration={1} variantName="slideLeft" className="flex w-full flex-col justify-between gap-6 lg:w-2/3">
            <AnimatedMotion as="h1" delay={0.3} duration={1} variantName="fadeIn" className="text-2xl font-semibold">
                <h1>Blue Leather Sofa</h1>
            </AnimatedMotion>
            <p className="flex items-center gap-4 text-2xl font-bold">
                <AnimatedMotion as="span" delay={0.4} duration={1} variantName="fadeIn">
                    {priceFormat(toPrice)}
                </AnimatedMotion>
                <AnimatedMotion as="span" delay={0.6} duration={1} variantName="fadeIn" className="text-muted-foreground text-xs line-through">
                    {priceFormat(fromPrice)}
                </AnimatedMotion>
            </p>

            <div className="flex flex-col gap-6 text-xs font-bold">
                <AnimatedMotion as="p" delay={0.7} duration={1} variantName="fadeIn" className="text-muted-foreground">
                    SKU: <span className="text-foreground">LSOFA578493</span>
                </AnimatedMotion>

                <AnimatedMotion as="p" delay={0.8} duration={1} variantName="fadeIn" className="text-muted-foreground">
                    Category:
                    <Badge variant={'outline'} className="font-bold">
                        Category
                    </Badge>
                </AnimatedMotion>

                <AnimatedMotion as="div" delay={0.9} duration={1} variantName="fadeIn" className="flex items-center justify-between">
                    <QuantityButton />
                    <p className="text-muted-foreground">
                        Sub Total: <span className="text-foreground">{priceFormat(toPrice)}</span>
                    </p>
                </AnimatedMotion>

                <AnimatedMotion as="p" delay={1} duration={1} variantName="fadeIn" className="text-muted-foreground">
                    A well-deserved nap in the daytime and nice relaxing with family and friends in the evening. Sofa is designed for maximum comfort
                    with high back and neck support. Embracing, inviting and generous.
                </AnimatedMotion>
            </div>

            <AnimatedMotion as="p" delay={1.1} duration={1} variantName="fadeIn" className="w-full">
                <Button effect="expandIcon" icon={PlusCircleIcon} iconPlacement="right" className="w-full">
                    Add to Cart
                </Button>
            </AnimatedMotion>
        </AnimatedMotion>
    );
};

export default ProductDetailContent;
