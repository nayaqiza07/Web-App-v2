import Activity from '@/components/organisms/Activity/Activity';
import CarouselProduct from '@/components/organisms/Carousel/CarouselProduct';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const Homepage = () => {
    return (
        <>
            {/* Hero Section */}
            <HeroSection srcImage="/images/image-18.jpg" altImage="Image Slider">
                <h1 className="text-2xl font-bold md:text-4xl">New Styles Are Here</h1>
                <p className="text-xs md:text-base">Discover The Lasts Premium FurnitureFeatured In Our Collection</p>
                <Link href={route('products')}>
                    <Button variant="secondary" className="rounded-full text-xs font-bold">
                        Go Shopping
                    </Button>
                </Link>
            </HeroSection>

            {/* 2 */}
            <CarouselProduct headLineTitle="What's New" totalItemShow="basis-1/2 md:basis-1/3 lg:basis-1/4" />

            {/* 3 */}
            <CarouselProduct headLineTitle="Categories" isFor="category" isAutoPlay totalItemShow="md:basis-1/2" />

            {/* 4 */}
            <div className="flex h-[240px] w-full flex-col items-center justify-center gap-7 rounded-2xl border bg-[#2563eb] px-10">
                <h3 className="text-center text-2xl font-bold text-white">Designing and innovation for a safer life at home</h3>
                <Button className="bg-black/30 text-white hover:bg-black/50">Go Shopping</Button>
            </div>

            {/* 5 */}
            <Activity srcImage="/images/image-14.jpg" altImage="Image 14" />
            <Activity orderImage="md:order-first" srcImage="/images/image-14.jpg" altImage="Image 14" />

            {/* 6 */}
            <CarouselProduct headLineTitle="Recent Blogs" isFor="blog" isAutoPlay totalItemShow="basis-1/2 md:basis-1/3 lg:basis-1/4" />

            <div className="flex gap-5">
                <Button effect="gooeyRight">Gooey</Button>
                <Button effect="gooeyLeft">Gooey</Button>
            </div>
        </>
    );
};

export default Homepage;
