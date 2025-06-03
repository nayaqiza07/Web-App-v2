import HeadLine from '@/components/molecules/HeadLine';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
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

const CarouselProduct = ({ headLineTitle = 'Title', isFor = 'product', isAutoPlay, totalItemShow = '' }: CarouselProductProps) => {
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
        <main>
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                plugins={isAutoPlay ? [Autoplay({ delay: 3000 })] : []}
                setApi={setApi}
                className="flex flex-col gap-6"
            >
                <HeadLine
                    icon={<CircleAlert size={20} />}
                    title={headLineTitle}
                    button={
                        <div>
                            <Button
                                size="icon"
                                variant="outline"
                                onClick={() => api?.scrollTo(current - 1)}
                                className="border-border rounded-r-none border"
                            >
                                <ArrowLeft />
                            </Button>
                            <Button
                                size="icon"
                                variant="outline"
                                onClick={() => api?.scrollTo(current + 1)}
                                className="border-border rounded-l-none border"
                            >
                                <ArrowRight />
                            </Button>
                        </div>
                    }
                />

                <CarouselContent>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index + 1} className={`${totalItemShow}`}>
                            {isFor === 'product' && <ProductCard />}

                            {isFor === 'category' && <CategoryCard srcImage="/images/image-9.jpg" altImage="Foto Produk ${`9`}" title="Stool" />}

                            {isFor === 'blog' && <BlogCard />}
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </main>
    );
};

export default CarouselProduct;
