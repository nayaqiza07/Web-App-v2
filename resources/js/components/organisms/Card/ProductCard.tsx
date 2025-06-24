import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { priceFormat, truncateText } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import SkeletonProductCard from '../Skeleton/SkeletonProductCard';

interface ProductCardProps {
    isLoading?: boolean;
    isCarousel?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ isLoading = false, isCarousel }) => {
    return isLoading ? (
        <SkeletonProductCard />
    ) : (
        <AnimatedMotion as="div" duration={1} variantName="slideLeft" initial={!isCarousel ? 'hidden' : false}>
            <Card className="gap-0 overflow-hidden py-0">
                <CardContent className="group relative h-[150px] overflow-hidden p-0">
                    {/* image */}
                    <img
                        src={`/images/image-15.jpg`}
                        alt={`Foto Produk ${`1`}`}
                        // loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-200 hover:scale-125"
                    />

                    {/* overlay button */}
                    <Button
                        size="icon"
                        className="absolute right-3 bottom-3 rounded-full bg-black/60 text-xs font-bold opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-black/80"
                    >
                        <ShoppingCart color="white" />
                    </Button>
                </CardContent>

                <CardFooter className="flex flex-col items-start gap-3 border-t p-4 text-xs">
                    <AnimatedMotion as="h1" initial={!isCarousel ? 'hidden' : false} delay={0.3} duration={1} variantName="fadeIn">
                        <CardTitle className="text-card-foreground w-full">
                            {truncateText('Title title title title title title title title', 25)}
                        </CardTitle>
                    </AnimatedMotion>
                    <AnimatedMotion
                        as="div"
                        initial={!isCarousel ? 'hidden' : false}
                        delay={0.4}
                        duration={1}
                        variantName="fadeIn"
                        className="text-muted-foreground flex w-full items-center justify-between text-xs font-bold"
                    >
                        <span>Category</span>
                        <span>{priceFormat(1000000)}</span>
                    </AnimatedMotion>
                </CardFooter>
            </Card>
        </AnimatedMotion>
    );
};

export default ProductCard;
