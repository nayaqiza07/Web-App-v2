import ProductCard from '@/components/organisms/Card/ProductCard';
import FilterDrawer from '@/components/organisms/Drawer/FilterDrawer';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { Card } from '@/components/ui/card';

const ProductPage = () => {
    return (
        <main className="mx-auto flex max-w-5xl flex-col gap-6 p-5">
            {/* Hero Section */}
            <HeroSection variant="withBreadcrumb">
                <div className="h-full rounded-xl bg-black/30"></div>
            </HeroSection>
            <FilterDrawer />
            {/* Hero Section */}

            <div className="flex gap-6">
                {/* Sidebar Product Start */}
                <Card className="hidden h-[500px] w-[264px] p-4 md:flex">
                    <div className="flex h-full w-full items-center justify-center">Sidebar</div>
                </Card>
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
