import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

interface CategoryCardProps {
    srcImage: string;
    altImage: string;
    title: string;
    isCarousel?: boolean;
    linkTo: string;
}

const CategoryCard = ({ srcImage, altImage, title, isCarousel, linkTo = route('#') }: CategoryCardProps) => {
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
                <h2 className="text-card text-xl text-white">{title}</h2>
                <Link href={linkTo}>
                    <Button className="bg-primary/60 hover:bg-primary/80">Shop Now</Button>
                </Link>
            </div>
        </AnimatedMotion>
    );
};

export default CategoryCard;
