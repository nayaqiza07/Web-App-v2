import ProductCard from '@/components/organisms/Card/ProductCard';
import FilterDrawer from '@/components/organisms/Drawer/FilterDrawer';
import HeroSection from '@/components/organisms/Section/HeroSection';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import { useProductStore } from '@/stores/useProductStore';
import { Link } from '@inertiajs/react';

const ProductPage: React.FC = () => {
    const PRODUCTS = useProductStore((state) => state.products);
    const isLoading = useProductStore((state) => state.isLoading);
    const error = useProductStore((state) => state.error);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

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
                    {PRODUCTS.length > 0 &&
                        PRODUCTS.map((data) => (
                            <Link href={route('products.show', { slug: data.slug })} key={data.id}>
                                <ProductCard isLoading={isLoading} data={data} />
                            </Link>
                        ))}
                </div>
                {/* Product List */}
            </section>
        </>
    );
};

export default ProductPage;
