import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import { Breadcrumbs } from '@/components/breadcrumbs';
import ProductDetailContent from '@/components/molecules/TextContent/ProductDetailContent';
import CarouselImageProduct from '@/components/organisms/Carousel/CarouselImageProduct';
import CarouselProduct from '@/components/organisms/Carousel/CarouselProduct';
import TabsInformation from '@/components/organisms/Tab/TabsInformation';
import { useBreadcrumb } from '@/hooks/use-breadcrumbs';
import { useLoadingStore } from '@/stores/useLoadingStore';
import { useProductStore } from '@/stores/useProductStore';
import SkeletonDetailProductPage from '../SkeletonPage/SkeletonDetailProductPage';

const ProductDetailPage = () => {
    const breadcrumbs = useBreadcrumb();

    const { selectedProduct, error } = useProductStore();
    const { isLoading } = useLoadingStore();

    if (isLoading) {
        return <SkeletonDetailProductPage />;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    const isClient = typeof window !== 'undefined';
    const isLargeScreen = isClient && window.innerWidth >= 1024;

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />

            <section className="flex flex-col gap-6 md:flex-row">
                {/* Right Content */}
                <div className="flex h-[416px] w-full flex-col gap-3 lg:flex-row">
                    <CarouselImageProduct orientation={isLargeScreen ? 'vertical' : 'horizontal'} />

                    <AnimatedMotion
                        as="div"
                        delay={0 / 3}
                        duration={1}
                        variantName="scaleIn"
                        animate="visible"
                        className="order-first h-[416px] w-full items-center overflow-hidden rounded-2xl lg:order-last"
                    >
                        <img
                            src={selectedProduct?.thumbnail}
                            alt={selectedProduct?.name}
                            // loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-200 hover:scale-125"
                        />
                    </AnimatedMotion>
                </div>

                {/* Left Content */}
                <ProductDetailContent PRODUCT={selectedProduct} />
            </section>

            {/* Information */}
            <TabsInformation PRODUCT={selectedProduct} />

            {/* Related Products */}
            <CarouselProduct headLineTitle="Related Products" totalItemShow="basis-1/2 md:basis-1/4 lg:basis-1/5" />
        </>
    );
};

export default ProductDetailPage;
