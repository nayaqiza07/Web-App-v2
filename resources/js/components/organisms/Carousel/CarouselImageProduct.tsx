import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface CarouselImageProductProps {
    orientation?: 'vertical' | 'horizontal';
}
const CarouselImageProduct = ({ orientation = 'vertical' }: CarouselImageProductProps) => {
    return (
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
    );
};

export default CarouselImageProduct;
