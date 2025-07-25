import CallToAction from '@/components/molecules/CTA/CallToAction';
import Activity from '@/components/organisms/Activity/Activity';
import CarouselProduct from '@/components/organisms/Carousel/CarouselProduct';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const Homepage = () => {
    return (
        <>
            {/* Hero Section */}
            <HeroSection srcImage="/images/image-18.jpg" altImage="Image Slider" className="gap-10">
                <h1 className="text-2xl font-bold md:text-4xl">New Styles Are Here</h1>
                <p className="text-xs md:text-base">Discover The Lasts Premium FurnitureFeatured In Our Collection</p>
                <Link href={route('products.index')}>
                    <Button variant="secondary" className="rounded-full text-xs font-bold">
                        Go Shopping
                    </Button>
                </Link>
            </HeroSection>

            {/* 2 */}
            <CarouselProduct headLineTitle="What's New" isAutoPlay totalItemShow="basis-1/2 md:basis-1/4 lg:basis-1/5" />

            {/* 3 */}
            <CarouselProduct headLineTitle="Categories" isFor="category" isAutoPlay totalItemShow="md:basis-1/2" />

            {/* 4 */}
            <CallToAction />

            {/* 5 */}
            <Activity
                text="Horestco Crafting premium hotel, outdoor & restaurant furniture. Explore our quality solutions and elevate your space today."
                btnLink={route('about-us')}
                srcImage="/images/image-14.jpg"
                altImage="Image 14"
            />

            <Activity
                text="Feel free to contact us or even better visit us"
                btnLink={route('contact-us.indexOnContactUs')}
                orderImage="md:order-first"
                srcImage="/images/image-14.jpg"
                altImage="Image 14"
            />

            {/* 6 */}
            <CarouselProduct headLineTitle="Recent Blogs" isFor="blog" isAutoPlay totalItemShow="md:basis-1/4 lg:basis-1/5" />
        </>
    );
};

export default Homepage;
