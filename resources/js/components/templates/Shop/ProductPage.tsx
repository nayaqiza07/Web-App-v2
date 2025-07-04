import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import ProductCard from '@/components/organisms/Card/ProductCard';
import FilterDrawer from '@/components/organisms/Drawer/FilterDrawer';
import HeroSection from '@/components/organisms/Section/HeroSection';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import SkeletonProductCard from '@/components/organisms/Skeleton/SkeletonProductCard';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { useProductStore } from '@/stores/useProductStore';
import { ArmchairIcon } from 'lucide-react';

const ProductPage: React.FC = () => {
    const { products, isLoading, error } = useProductStore();
    const { selectedCategory } = useCategoryStore();

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                isLoading={isLoading}
                variant="withBreadcrumb"
                color="bg-[#98C8D5]"
                srcImage={
                    selectedCategory
                        ? selectedCategory.thumbnail
                        : 'https://images.unsplash.com/photo-1613906800797-d5d4fb2f7bbb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                altImage="Image Slider"
            >
                <h1 className="text-4xl font-bold">{!selectedCategory ? 'Shop' : selectedCategory.name}</h1>
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
                    {isLoading ? (
                        Array.from({ length: 12 }).map((_, index) => <SkeletonProductCard key={index} />)
                    ) : products.length > 0 ? (
                        products.map((data) => <ProductCard key={data.id} data={data} />)
                    ) : (
                        <EmptyState
                            icon={<ArmchairIcon size={50} />}
                            title="No Products Found"
                            desc="Your search did not match any Products"
                            btnText="Go to Products"
                            btnLink={route('products.index')}
                            className="col-span-full"
                        />
                    )}
                </div>
                {/* Product List */}
            </section>
        </>
    );
};

export default ProductPage;
