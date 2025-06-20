import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import { Button } from '@/components/ui/button';

interface CategoryCardProps {
    srcImage: string;
    altImage: string;
    title: string;
    isCarousel?: boolean;
}

const CategoryCard = ({ srcImage, altImage, title, isCarousel }: CategoryCardProps) => {
    return (
        <AnimatedMotion
            as="div"
            duration={1}
            variantName="slideLeft"
            initial={!isCarousel ? 'hidden' : false}
            className="group relative h-[280px] w-full overflow-hidden rounded-2xl lg:h-[240px]"
        >
            <img
                src={srcImage}
                alt={altImage}
                // loading="lazy"
                className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 flex h-full w-full items-end justify-between bg-black/30 p-5 font-bold">
                <h2 className="text-card text-xl">{title}</h2>
                <Button className="bg-primary/60 hover:bg-primary/80">Shop Now</Button>
            </div>
        </AnimatedMotion>
    );
};

export default CategoryCard;
