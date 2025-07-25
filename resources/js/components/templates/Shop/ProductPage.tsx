import { Paginate } from '@/components/atoms/Pagination/Paginate';
import ProductCard from '@/components/organisms/Card/ProductCard';
import FilterDrawer from '@/components/organisms/Drawer/FilterDrawer';
import HeroSection from '@/components/organisms/Section/HeroSection';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import { EachUtils } from '@/lib/EachUtils';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { useProductStore } from '@/stores/useProductStore';
import { ArmchairIcon } from 'lucide-react';

const ProductPage: React.FC = () => {
    const { products } = useProductStore();
    const { selectedCategory } = useCategoryStore();

    return (
        <>
            {/* Hero Section */}
            <HeroSection
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

            <FilterDrawer />
            {/* Hero Section */}

            <section className="flex gap-5">
                {/* Sidebar Product Start */}
                <Sidebar className="hidden h-[450px] w-[264px] md:flex" />
                {/* Sidebar Product End */}

                {/* Product List */}
                <div className="flex w-full flex-col justify-between gap-10">
                    <div className="grid flex-1 grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                        <EachUtils
                            emptyIcon={ArmchairIcon}
                            emptyIconSize={50}
                            emptyTitle="No Products Found"
                            emptyDesc="Your search did not match any Products"
                            className="col-span-full"
                            of={products.data}
                            render={(_product) => <ProductCard key={_product.id} data={_product} />}
                        />
                    </div>
                    {/* Product List */}

                    <Paginate data={products} />
                </div>
            </section>
        </>
    );
};

export default ProductPage;
