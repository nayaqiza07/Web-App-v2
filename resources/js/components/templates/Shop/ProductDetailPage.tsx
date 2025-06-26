import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import SkeletonImageDetailProduct from '@/components/atoms/Skeleton/SkeletonImageDetailProduct';
import { Breadcrumbs } from '@/components/breadcrumbs';
import ProductDetailContent from '@/components/molecules/TextContent/ProductDetailContent';
import CarouselImageProduct from '@/components/organisms/Carousel/CarouselImageProduct';
import CarouselProduct from '@/components/organisms/Carousel/CarouselProduct';
import TabsInformation from '@/components/organisms/Tab/TabsInformation';
import { useBreadcrumb } from '@/hooks/use-breadcrumbs';
import { Product } from '@/types';
import { useEffect, useState } from 'react';

interface ProductDetailPageProps {
    PRODUCTS: Product;
    PRODUCT: Product;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ PRODUCTS, PRODUCT }) => {
    const breadcrumbs = useBreadcrumb();

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

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
                        <AnimatedMotion
                            as="div"
                            delay={0 / 3}
                            duration={1}
                            variantName="scaleIn"
                            animate="visible"
                            className="order-first h-[416px] w-full items-center overflow-hidden rounded-2xl lg:order-last"
                        >
                            <img
                                src={PRODUCT.thumbnail}
                                // src={`/images/image-18.jpg`}
                                alt={`Foto Produk ${`2`}`}
                                // loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-200 hover:scale-125"
                            />
                        </AnimatedMotion>
                    )}
                </div>

                {/* Left Content */}
                <ProductDetailContent isLoading={isLoading} PRODUCT={PRODUCT} />
            </section>

            {/* Information */}
            <TabsInformation isLoading={isLoading} PRODUCT={PRODUCT} />

            {/* Related Products */}
            <CarouselProduct
                isLoading={isLoading}
                PRODUCTS={PRODUCTS}
                headLineTitle="Related Products"
                totalItemShow="basis-1/2 md:basis-1/4 lg:basis-1/5"
            />
        </>
    );
};

export default ProductDetailPage;
