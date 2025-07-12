import { Paginate } from '@/components/atoms/Pagination/Paginate';
import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import ProductCard from '@/components/organisms/Card/ProductCard';
import FilterDrawer from '@/components/organisms/Drawer/FilterDrawer';
import HeroSection from '@/components/organisms/Section/HeroSection';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { useLoadingStore } from '@/stores/useLoadingStore';
import { useProductStore } from '@/stores/useProductStore';
import { usePage } from '@inertiajs/react';
import { ArmchairIcon } from 'lucide-react';
import SkeletonProductPage from '../SkeletonPage/SkeletonProductPage';

const ProductPage: React.FC = () => {
    const { products, error } = useProductStore();
    const { selectedCategory } = useCategoryStore();
    const { isLoading } = useLoadingStore();

    const { component } = usePage();

    const thisComponentName = 'shop/ProductList';

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if ((isLoading && component === thisComponentName) || !products || !products.data) {
        return <SkeletonProductPage />;
    }

    // console.log('ProductPage render:', component, isLoading);

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
            {/* <SkeletonHeroSection variant="withBreadcrumb" /> */}

            <FilterDrawer />
            {/* Hero Section */}

            <section className="flex gap-5">
                {/* Sidebar Product Start */}
                <Sidebar className="hidden h-[450px] w-[264px] md:flex" />
                {/* Sidebar Product End */}

                {/* Product List */}
                <div className="flex w-full flex-col justify-between gap-10">
                    <div className="grid flex-1 grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                        {products.data.length > 0 ? (
                            products.data.map((data) => <ProductCard key={data.id} data={data} />)
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

                    <Paginate data={products} />
                </div>
            </section>
        </>
    );
};

export default ProductPage;
