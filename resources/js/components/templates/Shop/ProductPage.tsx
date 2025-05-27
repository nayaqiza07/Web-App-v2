import ProductCard from '@/components/organisms/Card/ProductCard';
import FilterDrawer from '@/components/organisms/Drawer/FilterDrawer';
import { Card } from '@/components/ui/card';

const ProductPage = () => {
    return (
        <main className="mx-auto flex max-w-5xl flex-col gap-6 border p-5">
            {/* Hero Section */}
            <div className="flex flex-col gap-6">
                <div className="border">Bradcrumbs</div>

                <div className="h-[92px] rounded-xl bg-[#9333EA] md:h-[120px] lg:h-[208px]">
                    <div className="h-full rounded-xl bg-black/30"></div>
                </div>

                <FilterDrawer />
            </div>
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
