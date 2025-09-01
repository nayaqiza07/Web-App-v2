import CallToAction from '@/components/molecules/CTA/CallToAction';
import Activity from '@/components/organisms/Activity/Activity';
import CarouselProduct from '@/components/organisms/Carousel/CarouselProduct';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

const Homepage = () => {
    return (
        <>
            {/* Hero Section */}
            <HeroSection srcImage="/images/image-18.jpg" altImage="Image Slider">
                <div className="w-3/4 space-y-5">
                    <h1 className="text-2xl font-bold md:text-4xl">
                        Premium Furniture <br /> for Every Home
                    </h1>
                    <p className="text-xs md:text-base">
                        Discover our carefully curated collection of high-quality furniture pieces designed to transform your living and working
                        spaces.
                    </p>
                    <Link href={route('products.index')} className={cn(buttonVariants({ variant: 'default' }), 'rounded-full text-xs font-bold')}>
                        Go Shopping
                    </Link>
                </div>
            </HeroSection>

            {/* 2 */}
            <CarouselProduct
                headLineTitle="Featured Products"
                isFor="featuredProducts"
                isAutoPlay
                totalItemShow="basis-1/2 md:basis-1/4 lg:basis-1/5"
            />

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
            <CarouselProduct headLineTitle="Recent Blogs" isFor="latestBlogs" isAutoPlay totalItemShow="md:basis-1/4 lg:basis-1/5" />
        </>
    );
};

export default Homepage;
