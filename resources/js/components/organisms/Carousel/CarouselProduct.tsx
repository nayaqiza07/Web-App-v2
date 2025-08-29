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
    isFor?: 'category' | 'product' | 'blog';
    totalItemShow: string;
    isAutoPlay?: boolean;
}

const CarouselProduct: React.FC<CarouselProductProps> = ({ headLineTitle = 'Title', isFor = 'product', isAutoPlay, totalItemShow = '' }) => {
    const RELATED_PRODUCTS = useProductStore((state) => state.relatedProducts);
    const CATEGORIES = useCategoryStore((state) => state.categories);
    const BLOGS = useBlogStore((state) => state.blogs);

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

                {isFor === 'product' && (
                    <CarouselContent>
                        {RELATED_PRODUCTS.length > 0 &&
                            RELATED_PRODUCTS.map((data, index) => (
                                <CarouselItem key={index} className={`${totalItemShow} py-1`}>
                                    <ProductCard data={data} isCarousel />
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                )}

                {isFor === 'category' && (
                    <CarouselContent>
                        {CATEGORIES.length > 0 &&
                            CATEGORIES.map((category, index) => (
                                <CarouselItem key={index} className={`${totalItemShow} py-1`}>
                                    <CategoryCard
                                        srcImage={category.thumbnail}
                                        linkTo={route('products.showByCategory', { slug: category.slug })}
                                        altImage="Foto Produk ${`9`}"
                                        title={category.name}
                                        isCarousel
                                    />
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                )}

                {isFor === 'blog' && (
                    <CarouselContent>
                        {BLOGS.data.length > 0 &&
                            BLOGS.data.map((blog, index) => (
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
