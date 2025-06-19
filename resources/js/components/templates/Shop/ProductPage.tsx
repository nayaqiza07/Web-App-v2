import ProductCard from '@/components/organisms/Card/ProductCard';
import FilterDrawer from '@/components/organisms/Drawer/FilterDrawer';
import HeroSection from '@/components/organisms/Section/HeroSection';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import { useEffect, useState } from 'react';

const ProductPage = () => {
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
            <HeroSection isLoading={isLoading} variant="withBreadcrumb" color="bg-[#98C8D5]" srcImage="/images/image-1.jpg" altImage="Image Slider">
                <h1 className="text-4xl font-bold">Shop</h1>
            </HeroSection>
            {/* <SkeletonHeroSection variant="withBreadcrumb" /> */}

            <FilterDrawer isLoading={isLoading} />
            {/* Hero Section */}

            <section className="flex gap-5">
                {/* Sidebar Product Start */}
                <Sidebar isLoading={isLoading} className="hidden h-[450px] w-[264px] md:flex" />
                {/* Sidebar Product End */}

                {/* Product List */}
                <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 15 }).map((_, index) => (
                        <ProductCard isLoading={isLoading} key={index} />
                    ))}
                </div>
                {/* Product List */}
            </section>
        </>
    );
};

export default ProductPage;
