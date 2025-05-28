import ProductCard from '@/components/organisms/Card/ProductCard';
import FilterDrawer from '@/components/organisms/Drawer/FilterDrawer';
import HeroSection from '@/components/organisms/Section/HeroSection';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';

const ProductPage = () => {
    return (
        <main className="mx-auto flex max-w-5xl flex-col gap-6 p-5">
            {/* Hero Section */}
            <HeroSection variant="withBreadcrumb" color="bg-[#98C8D5]">
                <div className="flex h-full items-center justify-center">Shop</div>
            </HeroSection>
            <FilterDrawer />
            {/* Hero Section */}

            <div className="flex gap-6">
                {/* Sidebar Product Start */}
                <Sidebar className="hidden h-[450px] w-[264px] md:flex" />
                {/* Sidebar Product End */}

                {/* Product List */}
                <div className="flex w-full flex-col gap-4">
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
                {/* Product List */}
            </div>
        </main>
    );
};

export default ProductPage;
