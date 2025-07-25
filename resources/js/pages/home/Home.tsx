import Homepage from '@/components/templates/Home/Homepage';
import SkeletonHomepage from '@/components/templates/SkeletonPage/SkeletonHomepage';
import MainLayout from '@/layouts/app/MainLayout';
import { useBlogStore } from '@/stores/useBlogStore';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { useProductStore } from '@/stores/useProductStore';
import { BlogList, Category, ProductList } from '@/types';
import { Deferred, Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface HomeProps {
    PRODUCTS: ProductList;
    CATEGORIES: Category[];
    BLOGS: BlogList;
}

const Home: React.FC<HomeProps> = (props) => {
    const { PRODUCTS, CATEGORIES, BLOGS } = props;

    const { setProducts } = useProductStore();
    const { setCategories } = useCategoryStore();
    const { setBlogs } = useBlogStore();

    useEffect(() => {
        if (PRODUCTS) setProducts(PRODUCTS);
    }, [PRODUCTS, setProducts]);

    useEffect(() => {
        if (CATEGORIES) setCategories(CATEGORIES);
    }, [CATEGORIES, setCategories]);

    useEffect(() => {
        if (BLOGS) setBlogs(BLOGS);
    }, [BLOGS, setBlogs]);

    return (
        <>
            <Head title="Home" />
            <MainLayout>
                <Deferred data={['PRODUCTS', 'CATEGORIES', 'BLOGS']} fallback={<SkeletonHomepage />}>
                    <Homepage />
                </Deferred>
            </MainLayout>
        </>
    );
};

export default Home;
