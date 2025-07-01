import HeadLine from '@/components/molecules/HeadLine';
import SkeletonHeadLine from '@/components/molecules/Skeleton/SkeletonHeadLine';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useProductStore } from '@/stores/useProductStore';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight, CircleAlert } from 'lucide-react';
import { useEffect, useState } from 'react';
import BlogCard from '../Card/BlogCard';
import CategoryCard from '../Card/CategoryCard';
import ProductCard from '../Card/ProductCard';
import SkeletonBlogCard from '../Skeleton/SkeletonBlogCard';
import SkeletonCategoryCard from '../Skeleton/SkeletonCategoryCard';
import SkeletonProductCard from '../Skeleton/SkeletonProductCard';

interface CarouselProductProps {
    isLoading?: boolean;
    headLineTitle: string;
    isFor?: 'category' | 'product' | 'blog';
    totalItemShow: string;
    isAutoPlay?: boolean;
}

const CarouselProduct: React.FC<CarouselProductProps> = ({
    isLoading = false,
    headLineTitle = 'Title',
    isFor = 'product',
    isAutoPlay,
    totalItemShow = '',
}) => {
    const PRODUCTS = useProductStore((state) => state.products);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section>
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                plugins={isAutoPlay ? [Autoplay({ delay: 3000 })] : []}
                setApi={setApi}
                className="flex flex-col gap-6 overflow-hidden"
            >
                {isLoading ? (
                    <SkeletonHeadLine />
                ) : (
                    <HeadLine
                        icon={<CircleAlert size={20} />}
                        title={headLineTitle}
                        button={
                            <div>
                                <Button
                                    size="icon"
                                    variant="secondary"
                                    onClick={() => api?.scrollTo(current - 1)}
                                    className="border-border size-7 rounded-r-none border"
                                >
                                    <ArrowLeft />
                                </Button>
                                <Button
                                    size="icon"
                                    variant="secondary"
                                    onClick={() => api?.scrollTo(current + 1)}
                                    className="border-border size-7 rounded-l-none border"
                                >
                                    <ArrowRight />
                                </Button>
                            </div>
                        }
                    />
                )}

                {isFor === 'product' &&
                    (isLoading ? (
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className={`${totalItemShow} py-1`}>
                                    <SkeletonProductCard />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    ) : (
                        <CarouselContent>
                            {PRODUCTS.length > 0 &&
                                PRODUCTS.map((data, index) => (
                                    <CarouselItem key={index} className={`${totalItemShow} py-1`}>
                                        <ProductCard data={data} isCarousel />
                                    </CarouselItem>
                                ))}
                        </CarouselContent>
                    ))}

                {isFor === 'category' && (
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className={`${totalItemShow} py-1`}>
                                {isLoading ? (
                                    <SkeletonCategoryCard />
                                ) : (
                                    <CategoryCard srcImage="/images/image-9.jpg" altImage="Foto Produk ${`9`}" title="Stool" isCarousel />
                                )}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                )}

                {isFor === 'blog' && (
                    <CarouselContent>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className={`${totalItemShow} py-1`}>
                                {isLoading ? <SkeletonBlogCard /> : <BlogCard isCarousel />}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                )}
            </Carousel>
        </section>
    );
};

export default CarouselProduct;
