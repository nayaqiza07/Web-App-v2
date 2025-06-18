import HeadLine from '@/components/molecules/HeadLine';
import SkeletonHeadLine from '@/components/molecules/Skeleton/SkeletonHeadLine';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
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

const CarouselProduct = ({ isLoading = false, headLineTitle = 'Title', isFor = 'product', isAutoPlay, totalItemShow = '' }: CarouselProductProps) => {
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

                <CarouselContent>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index + 1} className={`${totalItemShow} py-1`}>
                            {isFor === 'product' && (isLoading ? <SkeletonProductCard /> : <ProductCard />)}

                            {isFor === 'category' &&
                                (isLoading ? (
                                    <SkeletonCategoryCard />
                                ) : (
                                    <CategoryCard srcImage="/images/image-9.jpg" altImage="Foto Produk ${`9`}" title="Stool" />
                                ))}

                            {isFor === 'blog' && (isLoading ? <SkeletonBlogCard /> : <BlogCard />)}
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
};

export default CarouselProduct;
