import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useProductStore } from '@/stores/useProductStore';
import { easeOut, motion } from 'framer-motion';
import { useState } from 'react';

interface CarouselImageProductProps {
    orientation?: 'vertical' | 'horizontal';
}

const CarouselImageProduct: React.FC<CarouselImageProductProps> = ({ orientation = 'vertical' }) => {
    const { selectedProduct } = useProductStore();

    const [activeImage, setActiveImage] = useState(false);

    const selectedImage = activeImage && 'ring-2 ring-[#2563EB] ring-offset-2 ring-offset-background';

    return (
        <motion.div
            layout
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: easeOut }}
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
                {/* <CarouselContent className="-mt-1 lg:h-[300px]"> */}
                <CarouselContent className="-ml-5 lg:-ml-0 lg:h-[300px]">
                    <CarouselItem className="basis-1/3 lg:basis-[72px]">
                        <div className="p-1">
                            <div className="size-[72px]">
                                <div className={`flex h-full items-center justify-center overflow-hidden rounded-xl ${selectedImage}`}>
                                    <img
                                        src={selectedProduct?.thumbnail_url}
                                        alt={selectedProduct?.name}
                                        loading="lazy"
                                        className="size-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    {selectedProduct?.product_images.map((_image) => (
                        <CarouselItem key={_image.id} className="basis-1/3 lg:basis-[72px]">
                            <div className="p-1">
                                <div className="size-[72px]">
                                    <div className={`flex h-full items-center justify-center overflow-hidden rounded-xl border ${selectedImage}`}>
                                        <img
                                            src={`/storage/${_image.path}`}
                                            alt={_image.alt}
                                            loading="lazy"
                                            onClick={() => setActiveImage(!activeImage)}
                                            className="size-full object-cover"
                                        />
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
