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
                </div>

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
