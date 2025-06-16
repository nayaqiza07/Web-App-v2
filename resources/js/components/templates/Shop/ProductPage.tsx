import ProductCard from '@/components/organisms/Card/ProductCard';
import FilterDrawer from '@/components/organisms/Drawer/FilterDrawer';
import HeroSection from '@/components/organisms/Section/HeroSection';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import { motion } from 'framer-motion';

const ProductPage = () => {
    return (
        <>
            {/* Hero Section */}
            <HeroSection variant="withBreadcrumb" color="bg-[#98C8D5]" srcImage="/images/image-1.jpg" altImage="Image Slider">
                <h1 className="text-4xl font-bold">Shop</h1>
            </HeroSection>
            {/* <SkeletonHeroSection variant="withBreadcrumb" /> */}
            <FilterDrawer />
            {/* Hero Section */}

            <div className="flex gap-5">
                {/* Sidebar Product Start */}
                <Sidebar className="hidden h-[450px] w-[264px] md:flex" />
                {/* Sidebar Product End */}

                {/* Product List */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    // className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4"
                    className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
                >
                    {Array.from({ length: 20 }).map((_, index) => (
                        <ProductCard key={index} />
                    ))}
                </motion.div>
                {/* Product List */}
            </div>
        </>
    );
};

export default ProductPage;
