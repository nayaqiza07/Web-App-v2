import { Breadcrumbs } from '@/components/breadcrumbs';
import CarouselImageProduct from '@/components/organisms/Carousel/CarouselImageProduct';
import CarouselProduct from '@/components/organisms/Carousel/CarouselProduct';
import TabsInformation from '@/components/organisms/Tab/TabsInformation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useBreadcrumb } from '@/hooks/use-breadcrumbs';
import { PlusCircle } from 'lucide-react';

const ProductDetailPage = () => {
    const breadcrumbs = useBreadcrumb();
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />

            <div className="flex flex-col gap-6 md:flex-row">
                {/* Right Content */}
                <div className="flex h-[416px] w-full flex-col gap-3 lg:flex-row">
                    <div className="order-last mx-auto flex w-[260px] items-center justify-center lg:order-first lg:w-fit">
                        <CarouselImageProduct orientation={window.innerWidth >= 1024 ? 'vertical' : 'horizontal'} />
                    </div>

                    <div className="order-first h-[416px] w-full items-center overflow-hidden rounded-2xl lg:order-last">
                        <img
                            src={`/images/image-18.jpg`}
                            alt={`Foto Produk ${`2`}`}
                            // loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-200 hover:scale-125"
                        />
                    </div>
                </div>

                {/* Left Content */}
                <div className="flex w-full flex-col gap-6 lg:w-2/3">
                    <h1 className="text-2xl font-semibold">Blue Leather Sofa</h1>
                    <p className="flex items-center gap-4 text-2xl font-bold">
                        <span>Rp. 1.000.000</span>
                        <span className="text-muted-foreground text-xs line-through">Rp.1.500.000</span>
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
                        <p className="text-muted-foreground">
                            A well-deserved nap in the daytime and nice relaxing with family and friends in the evening. Sofa is designed for maximum
                            comfort with high back and neck support. Embracing, inviting and generous.
                        </p>
                    </div>

                    <Button>
                        <PlusCircle />
                        Add to Cart
                    </Button>
                </div>
            </div>

            {/* Information */}
            <TabsInformation />

            {/* Related Products */}
            <CarouselProduct headLineTitle="Related Products" totalItemShow="basis-1/2 md:basis-1/4 lg:basis-1/5" />
        </>
    );
};

export default ProductDetailPage;
