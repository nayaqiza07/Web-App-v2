import SkeletonImageDetailProduct from '@/components/atoms/Skeleton/SkeletonImageDetailProduct';
import { Breadcrumbs } from '@/components/breadcrumbs';
import QuantityButton from '@/components/molecules/Button/QuantityButton';
import SkeletonDetailProduct from '@/components/molecules/Skeleton/SkeletonDetailProduct';
import CarouselImageProduct from '@/components/organisms/Carousel/CarouselImageProduct';
import CarouselProduct from '@/components/organisms/Carousel/CarouselProduct';
import TabsInformation from '@/components/organisms/Tab/TabsInformation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useBreadcrumb } from '@/hooks/use-breadcrumbs';
import { priceFormat } from '@/lib/utils';
import { motion } from 'framer-motion';
import { PlusCircleIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const ProductDetailPage = () => {
    const breadcrumbs = useBreadcrumb();

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const fromPrice = 1000000;
    const toPrice = 1000000;

    return (
        <>
            <Breadcrumbs isLoading={isLoading} breadcrumbs={breadcrumbs} />

            <section className="flex flex-col gap-6 md:flex-row">
                {/* Right Content */}
                <div className="flex h-[416px] w-full flex-col gap-3 lg:flex-row">
                    <CarouselImageProduct isLoading={isLoading} orientation={window.innerWidth >= 1024 ? 'vertical' : 'horizontal'} />

                    {isLoading ? (
                        <SkeletonImageDetailProduct />
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
                            className="order-first h-[416px] w-full items-center overflow-hidden rounded-2xl lg:order-last"
                        >
                            <img
                                src={`/images/image-18.jpg`}
                                alt={`Foto Produk ${`2`}`}
                                // loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-200 hover:scale-125"
                            />
                        </motion.div>
                    )}
                </div>

                {/* Left Content */}
                {isLoading ? (
                    <SkeletonDetailProduct />
                ) : (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
                        className="flex w-full flex-col justify-between gap-6 lg:w-2/3"
                    >
                        <h1 className="text-2xl font-semibold">Blue Leather Sofa</h1>
                        <p className="flex items-center gap-4 text-2xl font-bold">
                            <span>{priceFormat(toPrice)}</span>
                            <span className="text-muted-foreground text-xs line-through">{priceFormat(fromPrice)}</span>
                        </p>

                        <div className="flex flex-col gap-6 text-xs font-bold">
                            <p className="text-muted-foreground">
                                SKU: <span className="text-foreground">LSOFA578493</span>
                            </p>

                            <p className="text-muted-foreground">
                                Category:
                                <Badge variant={'outline'} className="font-bold">
                                    Category
                                </Badge>
                            </p>

                            <div className="flex items-center justify-between">
                                <QuantityButton />
                                <p className="text-muted-foreground">
                                    Sub Total: <span className="text-foreground">{priceFormat(toPrice)}</span>
                                </p>
                            </div>

                            <p className="text-muted-foreground">
                                A well-deserved nap in the daytime and nice relaxing with family and friends in the evening. Sofa is designed for
                                maximum comfort with high back and neck support. Embracing, inviting and generous.
                            </p>
                        </div>

                        <Button effect="expandIcon" icon={PlusCircleIcon} iconPlacement="right">
                            Add to Cart
                        </Button>
                    </motion.div>
                )}
            </section>

            {/* Information */}
            <TabsInformation isLoading={isLoading} />

            {/* Related Products */}
            <CarouselProduct isLoading={isLoading} headLineTitle="Related Products" totalItemShow="basis-1/2 md:basis-1/4 lg:basis-1/4" />
        </>
    );
};

export default ProductDetailPage;
