import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useProductStore } from '@/stores/useProductStore';
import { easeOut, motion } from 'framer-motion';
import { useState } from 'react';
import { ImageViewer } from '../Image/ImageViewer';

interface CarouselImageProductProps {
    orientation?: 'vertical' | 'horizontal';
}

const CarouselImageProduct: React.FC<CarouselImageProductProps> = ({ orientation = 'vertical' }) => {
    const { selectedProduct } = useProductStore();

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const allImages = selectedProduct?.thumbnail
        ? [{ id: 'thumbnail', path: selectedProduct?.thumbnail, alt: selectedProduct.name }, ...(selectedProduct?.product_images || [])]
        : selectedProduct?.product_images || [];

    return (
        <>
            {/* Carousel Image Start*/}
            <motion.figure
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
                    <CarouselContent className="-ml-5 lg:-ml-0 lg:h-[300px]">
                        {allImages.map((_image, index) => (
                            <CarouselItem key={_image.id} className="basis-1/3 lg:basis-[72px]">
                                <div className="p-1">
                                    <div className="size-[72px]">
                                        <div
                                            className={`flex h-full items-center justify-center overflow-hidden rounded-xl border ${currentImageIndex === index && 'ring-offset-background ring-2 ring-[#2563EB] ring-offset-2'}`}
                                        >
                                            <img
                                                src={`/storage/${_image.path}`}
                                                alt={_image.alt}
                                                loading="lazy"
                                                onClick={() => setCurrentImageIndex(index)}
                                                className="size-full cursor-pointer object-cover"
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
            </motion.figure>
            {/* Carousel Image End */}

            <motion.figure
                layout
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: easeOut }}
                className="order-first h-[416px] w-full items-center overflow-hidden rounded-2xl lg:order-last"
            >
                <ImageViewer currentImageIndex={currentImageIndex} allImages={allImages} />
            </motion.figure>
        </>
    );
};

export default CarouselImageProduct;
