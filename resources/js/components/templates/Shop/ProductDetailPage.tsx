import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import { Breadcrumbs } from '@/components/breadcrumbs';
import ProductDetailContent from '@/components/molecules/TextContent/ProductDetailContent';
import CarouselImageProduct from '@/components/organisms/Carousel/CarouselImageProduct';
import CarouselProduct from '@/components/organisms/Carousel/CarouselProduct';
import TabsInformation from '@/components/organisms/Tab/TabsInformation';
import { useBreadcrumb } from '@/hooks/use-breadcrumbs';
import { useProductStore } from '@/stores/useProductStore';

const ProductDetailPage = () => {
    const breadcrumbs = useBreadcrumb();

    const { selectedProduct } = useProductStore();

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
                        delay={0.3}
                        duration={1}
                        variantName="scaleIn"
                        animate="visible"
                        className="order-first h-[416px] w-full items-center overflow-hidden rounded-2xl lg:order-last"
                    >
                        <img
                            src={selectedProduct?.thumbnail_url}
                            alt={selectedProduct?.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-200 hover:scale-125"
                        />
                    </AnimatedMotion>
                </div>

                {/* <div className="grid h-[416px] w-full grid-cols-[auto_4fr] gap-3">
                    <div className="w-[100px] space-y-3 overflow-hidden">
                        <div className="inset-ring-offset-background inset-ring-offset-2 h-1/4 w-full rounded-2xl border inset-ring-2 inset-ring-[#2563EB]"></div>
                        <div className="h-1/4 w-full rounded-2xl border"></div>
                        <div className="h-1/4 w-full rounded-2xl border"></div>
                        <div className="h-1/4 w-full rounded-2xl border"></div>
                    </div>

                    <div className="order-first w-full items-center overflow-hidden rounded-2xl border lg:order-last">
                        <img
                            src={selectedProduct?.thumbnail_url}
                            alt={selectedProduct?.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-200 hover:scale-125"
                        />
                    </div>
                </div> */}

                {/* Left Content */}
                <ProductDetailContent PRODUCT={selectedProduct!} />
            </section>

            {/* Information */}
            <TabsInformation PRODUCT={selectedProduct} />

            {/* Related Products */}
            <CarouselProduct headLineTitle="Related Products" totalItemShow="basis-1/2 md:basis-1/4 lg:basis-1/5" />
        </>
    );
};

export default ProductDetailPage;
