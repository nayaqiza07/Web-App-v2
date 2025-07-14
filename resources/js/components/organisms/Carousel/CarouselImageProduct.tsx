import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface CarouselImageProductProps {
    orientation?: 'vertical' | 'horizontal';
}

const CarouselImageProduct: React.FC<CarouselImageProductProps> = ({ orientation = 'vertical' }) => {
    return (
        <AnimatedMotion
            as="div"
            delay={0.3}
            duration={1}
            variantName="slideRight"
            animate="visible"
            className="order-last mx-auto flex w-[260px] items-center justify-center lg:order-first lg:w-fit"
        >
            <Carousel
                opts={{
                    align: 'center',
                    loop: true,
                }}
                orientation={orientation}
                className="w-full max-w-xs"
            >
                <CarouselContent className="-mt-1 lg:h-[300px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-1/3 lg:basis-[72px]">
                            <div className="p-1">
                                <div className="size-[72px]">
                                    <div className="flex h-full items-center justify-center rounded-xl border">
                                        <span className="text-2xl font-semibold">{index + 1}</span>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="bg-card" />
                <CarouselNext className="bg-card" />
            </Carousel>
        </AnimatedMotion>
    );
};

export default CarouselImageProduct;
