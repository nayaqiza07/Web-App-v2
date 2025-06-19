import CallToAction from '@/components/molecules/CTA/CallToAction';
import Activity from '@/components/organisms/Activity/Activity';
import CarouselProduct from '@/components/organisms/Carousel/CarouselProduct';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const Homepage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Hero Section */}
            <HeroSection isLoading={isLoading} srcImage="/images/image-18.jpg" altImage="Image Slider">
                <h1 className="text-2xl font-bold md:text-4xl">New Styles Are Here</h1>
                <p className="text-xs md:text-base">Discover The Lasts Premium FurnitureFeatured In Our Collection</p>
                <Link href={route('products')}>
                    <Button variant="secondary" className="rounded-full text-xs font-bold">
                        Go Shopping
                    </Button>
                </Link>
            </HeroSection>

            {/* 2 */}
            <CarouselProduct isLoading={isLoading} headLineTitle="What's New" isAutoPlay totalItemShow="basis-1/2 md:basis-1/4 lg:basis-1/5" />

            {/* 3 */}
            <CarouselProduct isLoading={isLoading} headLineTitle="Categories" isFor="category" isAutoPlay totalItemShow="md:basis-1/2" />

            {/* 4 */}
            <CallToAction />

            {/* 5 */}
            <Activity isLoading={isLoading} srcImage="/images/image-14.jpg" altImage="Image 14" />
            <Activity isLoading={isLoading} orderImage="md:order-first" srcImage="/images/image-14.jpg" altImage="Image 14" />

            {/* 6 */}
            <CarouselProduct isLoading={isLoading} headLineTitle="Recent Blogs" isFor="blog" isAutoPlay totalItemShow="md:basis-1/4 lg:basis-1/5" />
        </>
    );
};

export default Homepage;
