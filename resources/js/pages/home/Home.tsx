import Homepage from '@/components/templates/Home/Homepage';
import MainLayout from '@/layouts/app/MainLayout';
import { useBlogStore } from '@/stores/useBlogStore';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { useProductStore } from '@/stores/useProductStore';
import { BlogData, Category, ProductData } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface HomeProps {
    featuredProducts: ProductData[];
    categories: Category[];
    latestBlogs: BlogData[];
}

const Home: React.FC<HomeProps> = (props) => {
    const { featuredProducts, categories, latestBlogs } = props;

    const { setFeaturedProducts } = useProductStore();
    const { setCategories } = useCategoryStore();
    const { setLatestBlogs } = useBlogStore();

    useEffect(() => {
        if (featuredProducts) setFeaturedProducts(featuredProducts);
    }, [featuredProducts, setFeaturedProducts]);

    useEffect(() => {
        if (categories) setCategories(categories);
    }, [categories, setCategories]);

    useEffect(() => {
        if (latestBlogs) setLatestBlogs(latestBlogs);
    }, [latestBlogs, setLatestBlogs]);

    return (
        <>
            <Head title="Home" />
            <MainLayout>
                {/* <Deferred data={['PRODUCTS', 'CATEGORIES', 'BLOGS']} fallback={<SkeletonHomepage />}> */}
                <Homepage />
                {/* </Deferred> */}
            </MainLayout>
        </>
    );
};

export default Home;
