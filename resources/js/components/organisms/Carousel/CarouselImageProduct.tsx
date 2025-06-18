import SkeletonCarouselImageProduct from '@/components/molecules/Skeleton/SkeletonCarouselImageProduct';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { motion } from 'framer-motion';

interface CarouselImageProductProps {
    isLoading?: boolean;
    orientation?: 'vertical' | 'horizontal';
}

const CarouselImageProduct: React.FC<CarouselImageProductProps> = ({ isLoading = false, orientation = 'vertical' }) => {
    return isLoading ? (
        <SkeletonCarouselImageProduct />
    ) : (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
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
        </motion.div>
    );
};

export default CarouselImageProduct;
