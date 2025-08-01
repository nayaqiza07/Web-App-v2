import { ProductImage } from '@/types';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

interface ImageViewerProps {
    currentImageIndex: number;
    allImages:
        | {
              id: string | number;
              path: string;
              alt: string;
          }[]
        | ProductImage[];
}

export const ImageViewer = ({ allImages, currentImageIndex }: ImageViewerProps) => {
    const [open, setOpen] = useState(false);

    const slideImages = allImages.map((_image) => ({
        src: `/storage/${_image.path}`,
    }));

    return (
        <>
            <img
                src={
                    allImages[currentImageIndex]?.path.startsWith('/storage')
                        ? allImages[currentImageIndex]?.path
                        : `/storage/${allImages[currentImageIndex]?.path}`
                }
                alt={allImages[currentImageIndex]?.alt}
                loading="lazy"
                onClick={() => setOpen(true)}
                className="h-full w-full cursor-pointer object-cover hover:bg-black/10"
            />

            <Lightbox plugins={[Zoom]} open={open} close={() => setOpen(false)} slides={slideImages} index={currentImageIndex} />
        </>
    );
};
