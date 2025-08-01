import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export const CarouselImage = () => {
    const isClient = typeof window !== 'undefined';
    const isLargeScreen = isClient && window.innerWidth >= 1024;

    return (
        <div className="grid h-[416px] w-full grid-cols-[auto_4fr] gap-3">
            <Carousel
                opts={{
                    align: 'center',
                }}
                orientation={isLargeScreen ? 'vertical' : 'horizontal'}
                className="w-[125px] max-w-xs overflow-hidden"
            >
                <CarouselContent className="-mt-1 h-full">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pt-0 md:basis-1/2">
                            <div className="p-1">
                                <div className="rounded-xl border">
                                    <div className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="order-first w-full items-center overflow-hidden rounded-2xl border lg:order-last"></div>
        </div>
    );
};
