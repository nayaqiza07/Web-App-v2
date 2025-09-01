import HeadLine from '@/components/molecules/HeadLine';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useBlogStore } from '@/stores/useBlogStore';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { useProductStore } from '@/stores/useProductStore';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight, CircleAlert } from 'lucide-react';
import { useEffect, useState } from 'react';
import BlogCard from '../Card/BlogCard';
import CategoryCard from '../Card/CategoryCard';
import ProductCard from '../Card/ProductCard';

interface CarouselProductProps {
    headLineTitle: string;
    isFor?: string;
    totalItemShow: string;
    isAutoPlay?: boolean;
}

const CarouselProduct: React.FC<CarouselProductProps> = ({ headLineTitle = 'Title', isFor = 'relatedProduct', isAutoPlay, totalItemShow = '' }) => {
    const { featuredProducts, relatedProducts } = useProductStore();
    const { categories } = useCategoryStore();
    const { latestBlogs } = useBlogStore();

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
                <HeadLine
                    icon={<CircleAlert size={20} />}
                    title={headLineTitle}
                    button={
                        <div>
                            <Button
                                size="icon"
                                variant="secondary"
                                onClick={() => api?.scrollTo(current - 1)}
                                className="border-border size-7 rounded-r-none border border-r-[0.75px]"
                            >
                                <ArrowLeft />
                            </Button>
                            <Button
                                size="icon"
                                variant="secondary"
                                onClick={() => api?.scrollTo(current + 1)}
                                className="border-border size-7 rounded-l-none border border-l-[0.75px]"
                            >
                                <ArrowRight />
                            </Button>
                        </div>
                    }
                />

                {isFor === 'featuredProducts' && (
                    <CarouselContent>
                        {featuredProducts.length > 0 &&
                            featuredProducts.map((data, index) => (
                                <CarouselItem key={index} className={`${totalItemShow} py-1`}>
                                    <ProductCard data={data} isCarousel />
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                )}

                {isFor === 'relatedProducts' && (
                    <CarouselContent>
                        {relatedProducts.length > 0 &&
                            relatedProducts.map((data, index) => (
                                <CarouselItem key={index} className={`${totalItemShow} py-1`}>
                                    <ProductCard data={data} isCarousel />
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                )}

                {isFor === 'category' && (
                    <CarouselContent>
                        {categories.length > 0 &&
                            categories.map((category, index) => (
                                <CarouselItem key={index} className={`${totalItemShow} py-1`}>
                                    <CategoryCard
                                        srcImage={category.thumbnail}
                                        linkTo={route('products.showByCategory', { slug: category.slug })}
                                        altImage={category.name}
                                        title={category.name}
                                        isCarousel
                                    />
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                )}

                {isFor === 'latestBlogs' && (
                    <CarouselContent>
                        {latestBlogs.length > 0 &&
                            latestBlogs.map((blog, index) => (
                                <CarouselItem key={index} className={`${totalItemShow} py-1`}>
                                    <BlogCard isCarousel data={blog} />
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                )}
            </Carousel>
        </section>
    );
};

export default CarouselProduct;
